"""Service CRUD endpoints."""
import uuid

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.deps import get_current_business
from app.models.availability_appointment import Appointment
from app.models.staff_service_customer import Service
from app.schemas.staff_service_customer import ServiceCreate, ServiceRead, ServiceUpdate

router = APIRouter(prefix="/services", tags=["services"])


@router.get("", response_model=list[ServiceRead])
async def list_services(
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> list[Service]:
    result = await db.scalars(
        select(Service).where(Service.business_id == business_id).order_by(Service.name)
    )
    return list(result)


@router.post("", response_model=ServiceRead, status_code=status.HTTP_201_CREATED)
async def create_service(
    payload: ServiceCreate,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> Service:
    service = Service(business_id=business_id, **payload.model_dump())
    db.add(service)
    await db.commit()
    await db.refresh(service)
    return service


@router.get("/{service_id}", response_model=ServiceRead)
async def get_service(
    service_id: uuid.UUID,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> Service:
    service = await db.scalar(
        select(Service).where(Service.id == service_id, Service.business_id == business_id)
    )
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    return service


@router.patch("/{service_id}", response_model=ServiceRead)
async def update_service(
    service_id: uuid.UUID,
    payload: ServiceUpdate,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> Service:
    service = await db.scalar(
        select(Service).where(Service.id == service_id, Service.business_id == business_id)
    )
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(service, field, value)
    await db.commit()
    await db.refresh(service)
    return service


@router.delete("/{service_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_service(
    service_id: uuid.UUID,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> None:
    service = await db.scalar(
        select(Service).where(Service.id == service_id, Service.business_id == business_id)
    )
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")

    has_active_appointments = await db.scalar(
        select(Appointment).where(
            Appointment.service_id == service_id,
            Appointment.status == "CONFIRMED",
        )
    )
    if has_active_appointments:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot delete service with active confirmed appointments. Deactivate it instead.",
        )

    await db.delete(service)
    await db.commit()