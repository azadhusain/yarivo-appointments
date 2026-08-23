"""Appointment booking and management endpoints."""
import uuid
from datetime import datetime, timedelta, timezone

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.availability_engine import check_appointment_conflict, compute_available_slots
from app.core.database import get_db
from app.core.deps import get_current_business
from app.models.availability_appointment import Appointment
from app.models.business import Business, Subscription
from app.models.staff_service_customer import Customer, Service, Staff
from app.schemas.availability_appointment import (
    AppointmentCreate,
    AppointmentRead,
    AppointmentStatusUpdate,
    Slot,
)

from sqlalchemy.orm import selectinload

router = APIRouter(prefix="/appointments", tags=["appointments"])


@router.get("", response_model=list[AppointmentRead])
async def list_appointments(
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> list[Appointment]:
    result = await db.scalars(
        select(Appointment)
        .options(
            selectinload(Appointment.customer),
            selectinload(Appointment.service),
            selectinload(Appointment.staff),
        )
        .where(Appointment.business_id == business_id)
        .order_by(Appointment.start_time.desc())
    )
    return list(result)


@router.post("", response_model=AppointmentRead, status_code=status.HTTP_201_CREATED)
async def create_appointment(
    payload: AppointmentCreate,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> Appointment:
    # Check appointment limit based on current plan (free=15, starter=50, pro=unlimited)
    from app.routers.billing import get_plan_limit, can_book_appointment
    sub = await db.scalar(
        select(Subscription).where(Subscription.business_id == business_id)
    )
    plan = sub.plan if sub else "free"
    plan_limit = get_plan_limit(plan)
    if plan_limit is not None:
        appt_count = await db.scalar(
            select(func.count(Appointment.id)).where(
                Appointment.business_id == business_id,
                Appointment.status != "CANCELLED",
            )
        )
        if appt_count and appt_count >= plan_limit:
            raise HTTPException(
                status_code=status.HTTP_402_PAYMENT_REQUIRED,
                detail=f"Your {plan.title()} plan limit of {plan_limit} appointments has been reached. Please upgrade your plan to accept more bookings.",
            )
    service = await db.scalar(
        select(Service).where(
            Service.id == payload.service_id, Service.business_id == business_id
        )
    )
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")

    customer = await db.scalar(
        select(Customer).where(
            Customer.id == payload.customer_id, Customer.business_id == business_id
        )
    )
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")

    if payload.staff_id:
        staff = await db.scalar(
            select(Staff).where(
                Staff.id == payload.staff_id, Staff.business_id == business_id
            )
        )
        if not staff:
            raise HTTPException(status_code=404, detail="Staff not found")

    start = payload.start_time
    if start.tzinfo is None:
        start = start.replace(tzinfo=timezone.utc)
    end = start + timedelta(minutes=service.duration_minutes)

    has_conflict = await check_appointment_conflict(
        db=db,
        business_id=business_id,
        service=service,
        start_time=start,
        end_time=end,
        staff_id=payload.staff_id,
    )
    if has_conflict:
        raise HTTPException(status_code=409, detail="Time slot already booked")

    appointment = Appointment(
        business_id=business_id,
        customer_id=payload.customer_id,
        staff_id=payload.staff_id,
        service_id=payload.service_id,
        start_time=start,
        end_time=end,
        customer_notes=payload.customer_notes,
    )
    db.add(appointment)
    await db.commit()
    await db.refresh(appointment)
    return appointment


@router.get("/{appointment_id}", response_model=AppointmentRead)
async def get_appointment(
    appointment_id: uuid.UUID,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> Appointment:
    appointment = await db.scalar(
        select(Appointment).where(
            Appointment.id == appointment_id,
            Appointment.business_id == business_id,
        )
    )
    if not appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")
    return appointment


@router.patch("/{appointment_id}/status", response_model=AppointmentRead)
async def update_appointment_status(
    appointment_id: uuid.UUID,
    payload: AppointmentStatusUpdate,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> Appointment:
    appointment = await db.scalar(
        select(Appointment).where(
            Appointment.id == appointment_id,
            Appointment.business_id == business_id,
        )
    )
    if not appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")
    appointment.status = payload.status
    await db.commit()
    await db.refresh(appointment)
    return appointment


@router.delete("/{appointment_id}", status_code=status.HTTP_204_NO_CONTENT)
async def cancel_appointment(
    appointment_id: uuid.UUID,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> None:
    appointment = await db.scalar(
        select(Appointment).where(
            Appointment.id == appointment_id,
            Appointment.business_id == business_id,
        )
    )
    if not appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")
    appointment.status = "CANCELLED"
    await db.commit()


@router.get("/slots/available", response_model=list[Slot])
async def get_available_slots(
    service_id: uuid.UUID,
    date: str,
    staff_id: uuid.UUID | None = None,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> list[Slot]:
    """Return available time slots for a service on a given date (YYYY-MM-DD)."""
    business = await db.scalar(select(Business).where(Business.id == business_id))
    if not business:
        raise HTTPException(status_code=404, detail="Business not found")

    service = await db.scalar(
        select(Service).where(
            Service.id == service_id, Service.business_id == business_id
        )
    )
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")

    try:
        target_date = datetime.strptime(date, "%Y-%m-%d").date()
    except ValueError:
        raise HTTPException(
            status_code=400, detail="Invalid date format, use YYYY-MM-DD"
        )

    return await compute_available_slots(
        db=db,
        business=business,
        service=service,
        target_date=target_date,
        staff_id_filter=staff_id,
    )