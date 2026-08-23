"""Customer CRUD endpoints."""
import uuid
from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.deps import get_current_business
from app.models.availability_appointment import Appointment
from app.models.staff_service_customer import Customer
from app.schemas.staff_service_customer import CustomerCreate, CustomerRead, CustomerUpdate

router = APIRouter(prefix="/customers", tags=["customers"])


@router.get("", response_model=list[CustomerRead])
async def list_customers(
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> list[Customer]:
    result = await db.scalars(
        select(Customer)
        .where(Customer.business_id == business_id, Customer.deleted_at.is_(None))
        .order_by(Customer.name)
    )
    return list(result)


@router.post("", response_model=CustomerRead, status_code=status.HTTP_201_CREATED)
async def create_customer(
    payload: CustomerCreate,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> Customer:
    existing = await db.scalar(
        select(Customer).where(
            Customer.business_id == business_id,
            Customer.email == payload.email,
        )
    )
    if existing:
        existing.name = payload.name
        if payload.phone is not None:
            existing.phone = payload.phone
        if payload.notes is not None:
            existing.notes = payload.notes
        existing.deleted_at = None
        await db.commit()
        await db.refresh(existing)
        return existing

    customer = Customer(business_id=business_id, **payload.model_dump())
    db.add(customer)
    await db.commit()
    await db.refresh(customer)
    return customer


@router.get("/{customer_id}", response_model=CustomerRead)
async def get_customer(
    customer_id: uuid.UUID,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> Customer:
    customer = await db.scalar(
        select(Customer).where(
            Customer.id == customer_id,
            Customer.business_id == business_id,
            Customer.deleted_at.is_(None),
        )
    )
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    return customer


@router.patch("/{customer_id}", response_model=CustomerRead)
async def update_customer(
    customer_id: uuid.UUID,
    payload: CustomerUpdate,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> Customer:
    customer = await db.scalar(
        select(Customer).where(
            Customer.id == customer_id,
            Customer.business_id == business_id,
            Customer.deleted_at.is_(None),
        )
    )
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(customer, field, value)
    await db.commit()
    await db.refresh(customer)
    return customer


@router.delete("/{customer_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_customer(
    customer_id: uuid.UUID,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> None:
    customer = await db.scalar(
        select(Customer).where(
            Customer.id == customer_id,
            Customer.business_id == business_id,
            Customer.deleted_at.is_(None),
        )
    )
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")

    has_active_appointments = await db.scalar(
        select(Appointment).where(
            Appointment.customer_id == customer_id,
            Appointment.status == "CONFIRMED",
        )
    )
    if has_active_appointments:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot delete customer with active confirmed appointments",
        )

    customer.deleted_at = datetime.now(timezone.utc)
    await db.commit()