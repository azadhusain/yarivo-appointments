"""Business management and public booking endpoints."""
import logging
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
    AppointmentRead,
    PublicAppointmentCreate,
    Slot,
)
from app.schemas.business import BusinessRead, BusinessUpdate, SlugAvailability
from app.schemas.staff_service_customer import ServiceRead, StaffRead

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/business", tags=["business"])


@router.get("/me", response_model=BusinessRead)
async def get_my_business(
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> Business:
    business = await db.scalar(select(Business).where(Business.id == business_id))
    if not business:
        raise HTTPException(status_code=404, detail="Business not found")
    return business


@router.patch("/me", response_model=BusinessRead)
async def update_my_business(
    payload: BusinessUpdate,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> Business:
    business = await db.scalar(select(Business).where(Business.id == business_id))
    if not business:
        raise HTTPException(status_code=404, detail="Business not found")
    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(business, field, value)
    await db.commit()
    await db.refresh(business)
    return business


@router.get("/slug/{slug}", response_model=SlugAvailability)
async def check_slug(slug: str, db: AsyncSession = Depends(get_db)) -> SlugAvailability:
    business = await db.scalar(select(Business).where(Business.slug == slug))
    return SlugAvailability(available=business is None, slug=slug)


@router.get("/public", response_model=list[BusinessRead])
async def list_public_businesses(db: AsyncSession = Depends(get_db)) -> list[Business]:
    logger.info("Listing all public businesses")
    result = await db.scalars(select(Business).order_by(Business.name))
    businesses = list(result)
    logger.info("Found %d businesses", len(businesses))
    return businesses


@router.get("/public/{slug}", response_model=BusinessRead)
async def get_public_business(slug: str, db: AsyncSession = Depends(get_db)) -> Business:
    logger.info("Fetching public business with slug: %s", slug)
    business = await db.scalar(select(Business).where(Business.slug == slug))
    if not business:
        logger.warning("Business not found for slug: %s", slug)
        raise HTTPException(status_code=404, detail="Business not found")
    logger.info("Found business: %s (id=%s)", business.name, business.id)
    return business


@router.get("/public/{slug}/services", response_model=list[ServiceRead])
async def get_public_services(slug: str, db: AsyncSession = Depends(get_db)) -> list[Service]:
    logger.info("Fetching public services for slug: %s", slug)
    business = await db.scalar(select(Business).where(Business.slug == slug))
    if not business:
        logger.warning("Business not found for slug: %s", slug)
        raise HTTPException(status_code=404, detail="Business not found")
    result = await db.scalars(
        select(Service).where(Service.business_id == business.id, Service.active.is_(True))
    )
    services = list(result)
    logger.info("Found %d services for slug: %s", len(services), slug)
    return services


@router.get("/public/{slug}/staff", response_model=list[StaffRead])
async def get_public_staff(slug: str, db: AsyncSession = Depends(get_db)) -> list[Staff]:
    logger.info("Fetching public staff for slug: %s", slug)
    business = await db.scalar(select(Business).where(Business.slug == slug))
    if not business:
        raise HTTPException(status_code=404, detail="Business not found")
    result = await db.scalars(
        select(Staff).where(Staff.business_id == business.id, Staff.active.is_(True))
    )
    return list(result)


@router.get("/public/{slug}/slots", response_model=list[Slot])
async def get_public_slots(
    slug: str,
    service_id: uuid.UUID,
    date: str,
    staff_id: uuid.UUID | None = None,
    db: AsyncSession = Depends(get_db),
) -> list[Slot]:
    logger.info("Fetching slots for slug=%s service_id=%s date=%s", slug, service_id, date)
    business = await db.scalar(select(Business).where(Business.slug == slug))
    if not business:
        raise HTTPException(status_code=404, detail="Business not found")

    service = await db.scalar(
        select(Service).where(Service.id == service_id, Service.business_id == business.id)
    )
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")

    try:
        target_date = datetime.strptime(date, "%Y-%m-%d").date()
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid date format, use YYYY-MM-DD")

    return await compute_available_slots(
        db=db,
        business=business,
        service=service,
        target_date=target_date,
        staff_id_filter=staff_id,
    )


@router.post(
    "/public/{slug}/book",
    response_model=AppointmentRead,
    status_code=status.HTTP_201_CREATED,
)
async def public_book_appointment(
    slug: str,
    payload: PublicAppointmentCreate,
    db: AsyncSession = Depends(get_db),
) -> Appointment:
    """Allow customers to book appointments online for free with no login required."""
    business = await db.scalar(select(Business).where(Business.slug == slug))
    if not business:
        raise HTTPException(status_code=404, detail="Business not found")

    # Check appointment limit based on current plan (free=15, starter=50, pro=unlimited)
    from app.routers.billing import get_plan_limit
    sub = await db.scalar(
        select(Subscription).where(Subscription.business_id == business.id)
    )
    plan = sub.plan if sub else "free"
    plan_limit = get_plan_limit(plan)
    if plan_limit is not None:
        appt_count = await db.scalar(
            select(func.count(Appointment.id)).where(
                Appointment.business_id == business.id,
                Appointment.status != "CANCELLED",
            )
        )
        if appt_count and appt_count >= plan_limit:
            raise HTTPException(
                status_code=status.HTTP_402_PAYMENT_REQUIRED,
                detail=f"This business has reached its {plan.title()} plan capacity of {plan_limit} appointments. The business owner must upgrade to accept further bookings.",
            )

    service = await db.scalar(
        select(Service).where(
            Service.id == payload.service_id,
            Service.business_id == business.id,
            Service.active.is_(True),
        )
    )
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")

    staff_id = payload.staff_id
    if staff_id:
        staff = await db.scalar(
            select(Staff).where(
                Staff.id == staff_id,
                Staff.business_id == business.id,
                Staff.active.is_(True),
            )
        )
        if not staff:
            raise HTTPException(status_code=404, detail="Staff not found")

    # Upsert customer under this business
    customer = await db.scalar(
        select(Customer).where(
            Customer.business_id == business.id,
            Customer.email == payload.customer_email,
        )
    )
    if customer:
        customer.name = payload.customer_name
        if payload.customer_phone is not None:
            customer.phone = payload.customer_phone
        customer.deleted_at = None
    else:
        customer = Customer(
            business_id=business.id,
            name=payload.customer_name,
            email=str(payload.customer_email),
            phone=payload.customer_phone,
        )
        db.add(customer)
        await db.flush()

    start = payload.start_time
    if start.tzinfo is None:
        start = start.replace(tzinfo=timezone.utc)
    end = start + timedelta(minutes=service.duration_minutes)

    has_conflict = await check_appointment_conflict(
        db=db,
        business_id=business.id,
        service=service,
        start_time=start,
        end_time=end,
        staff_id=staff_id,
    )
    if has_conflict:
        raise HTTPException(status_code=409, detail="Time slot already booked")

    appointment = Appointment(
        business_id=business.id,
        customer_id=customer.id,
        staff_id=staff_id,
        service_id=service.id,
        start_time=start,
        end_time=end,
        customer_notes=payload.customer_notes,
    )
    db.add(appointment)
    await db.commit()
    await db.refresh(appointment)
    return appointment
