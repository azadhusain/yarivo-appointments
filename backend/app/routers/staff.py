"""Staff CRUD endpoints."""
import uuid

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.deps import get_current_business
from app.models.availability_appointment import Appointment
from app.models.staff_service_customer import Staff
from app.schemas.staff_service_customer import StaffCreate, StaffRead, StaffUpdate

router = APIRouter(prefix="/staff", tags=["staff"])


@router.get("", response_model=list[StaffRead])
async def list_staff(
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> list[Staff]:
    result = await db.scalars(
        select(Staff).where(Staff.business_id == business_id).order_by(Staff.name)
    )
    return list(result)


@router.post("", response_model=StaffRead, status_code=status.HTTP_201_CREATED)
async def create_staff(
    payload: StaffCreate,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> Staff:
    staff = Staff(business_id=business_id, **payload.model_dump())
    db.add(staff)
    await db.commit()
    await db.refresh(staff)
    return staff


@router.get("/{staff_id}", response_model=StaffRead)
async def get_staff(
    staff_id: uuid.UUID,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> Staff:
    staff = await db.scalar(
        select(Staff).where(Staff.id == staff_id, Staff.business_id == business_id)
    )
    if not staff:
        raise HTTPException(status_code=404, detail="Staff not found")
    return staff


@router.patch("/{staff_id}", response_model=StaffRead)
async def update_staff(
    staff_id: uuid.UUID,
    payload: StaffUpdate,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> Staff:
    staff = await db.scalar(
        select(Staff).where(Staff.id == staff_id, Staff.business_id == business_id)
    )
    if not staff:
        raise HTTPException(status_code=404, detail="Staff not found")
    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(staff, field, value)
    await db.commit()
    await db.refresh(staff)
    return staff


@router.delete("/{staff_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_staff(
    staff_id: uuid.UUID,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> None:
    staff = await db.scalar(
        select(Staff).where(Staff.id == staff_id, Staff.business_id == business_id)
    )
    if not staff:
        raise HTTPException(status_code=404, detail="Staff not found")

    has_active_appointments = await db.scalar(
        select(Appointment).where(
            Appointment.staff_id == staff_id,
            Appointment.status == "CONFIRMED",
        )
    )
    if has_active_appointments:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot delete staff member with active confirmed appointments. Deactivate them instead.",
        )

    await db.delete(staff)
    await db.commit()