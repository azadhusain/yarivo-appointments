"""Business hours and staff availability endpoints."""
import uuid

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.deps import get_current_business
from app.models.availability_appointment import BusinessHours, StaffAvailability
from app.models.staff_service_customer import Staff
from app.schemas.availability_appointment import (
    BusinessHoursCreate,
    BusinessHoursRead,
    StaffAvailabilityCreate,
    StaffAvailabilityRead,
)

router = APIRouter(tags=["availability"])


# --- Business Hours ---
@router.get("/business-hours", response_model=list[BusinessHoursRead])
async def list_business_hours(
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> list[BusinessHours]:
    result = await db.scalars(
        select(BusinessHours)
        .where(BusinessHours.business_id == business_id)
        .order_by(BusinessHours.day_of_week)
    )
    return list(result)


@router.put("/business-hours", response_model=list[BusinessHoursRead])
async def upsert_business_hours(
    payload: list[BusinessHoursCreate],
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> list[BusinessHours]:
    await db.execute(
        delete(BusinessHours).where(BusinessHours.business_id == business_id)
    )
    hours = [
        BusinessHours(business_id=business_id, **item.model_dump()) for item in payload
    ]
    db.add_all(hours)
    await db.commit()
    for h in hours:
        await db.refresh(h)
    return hours


# --- Staff Availability ---
@router.get("/staff/{staff_id}/availability", response_model=list[StaffAvailabilityRead])
async def list_staff_availability(
    staff_id: uuid.UUID,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> list[StaffAvailability]:
    staff = await db.scalar(
        select(Staff).where(Staff.id == staff_id, Staff.business_id == business_id)
    )
    if not staff:
        raise HTTPException(status_code=404, detail="Staff not found")
    result = await db.scalars(
        select(StaffAvailability)
        .where(StaffAvailability.staff_id == staff_id)
        .order_by(StaffAvailability.day_of_week)
    )
    return list(result)


@router.put("/staff/{staff_id}/availability", response_model=list[StaffAvailabilityRead])
async def upsert_staff_availability(
    staff_id: uuid.UUID,
    payload: list[StaffAvailabilityCreate],
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> list[StaffAvailability]:
    staff = await db.scalar(
        select(Staff).where(Staff.id == staff_id, Staff.business_id == business_id)
    )
    if not staff:
        raise HTTPException(status_code=404, detail="Staff not found")
    await db.execute(
        delete(StaffAvailability).where(StaffAvailability.staff_id == staff_id)
    )
    items = [
        StaffAvailability(staff_id=staff_id, **item.model_dump()) for item in payload
    ]
    db.add_all(items)
    await db.commit()
    for item in items:
        await db.refresh(item)
    return items