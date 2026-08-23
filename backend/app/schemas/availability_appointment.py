"""Pydantic schemas for BusinessHours, StaffAvailability, Appointment."""
import uuid
from datetime import datetime, time
from decimal import Decimal

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class BusinessHoursBase(BaseModel):
    day_of_week: int = Field(ge=0, le=6)
    is_open: bool = False
    opening_time: time | None = None
    closing_time: time | None = None


class BusinessHoursCreate(BusinessHoursBase):
    pass


class BusinessHoursRead(BusinessHoursBase):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    business_id: uuid.UUID


class StaffAvailabilityBase(BaseModel):
    day_of_week: int = Field(ge=0, le=6)
    is_available: bool = False
    start_time: time | None = None
    end_time: time | None = None


class StaffAvailabilityCreate(StaffAvailabilityBase):
    pass


class StaffAvailabilityRead(StaffAvailabilityBase):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    staff_id: uuid.UUID


class AppointmentCreate(BaseModel):
    customer_id: uuid.UUID
    staff_id: uuid.UUID | None = None
    service_id: uuid.UUID
    start_time: datetime
    customer_notes: str | None = None


class PublicAppointmentCreate(BaseModel):
    customer_name: str = Field(min_length=1, max_length=255)
    customer_email: EmailStr
    customer_phone: str | None = Field(default=None, max_length=50)
    service_id: uuid.UUID
    staff_id: uuid.UUID | None = None
    start_time: datetime
    customer_notes: str | None = None


class CustomerBrief(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    name: str
    email: EmailStr
    phone: str | None = None


class ServiceBrief(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    name: str
    duration_minutes: int
    price: Decimal
    currency: str


class StaffBrief(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    name: str
    email: EmailStr | None = None
    phone: str | None = None


class AppointmentRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    business_id: uuid.UUID
    customer_id: uuid.UUID
    staff_id: uuid.UUID | None = None
    service_id: uuid.UUID
    start_time: datetime
    end_time: datetime
    status: str
    customer_notes: str | None = None
    created_at: datetime
    updated_at: datetime

    customer: CustomerBrief | None = None
    service: ServiceBrief | None = None
    staff: StaffBrief | None = None


class AppointmentStatusUpdate(BaseModel):
    status: str = Field(pattern="^(CONFIRMED|CANCELLED|COMPLETED|NO_SHOW)$")


class Slot(BaseModel):
    start_time: datetime
    end_time: datetime
    staff_id: uuid.UUID | None = None