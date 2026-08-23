"""Pydantic schemas for Staff, Service, Customer."""
import uuid
from datetime import datetime
from decimal import Decimal

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class StaffBase(BaseModel):
    name: str = Field(min_length=1, max_length=255)
    email: EmailStr | None = None
    phone: str | None = Field(default=None, max_length=50)
    color: str | None = Field(default=None, max_length=7)


class StaffCreate(StaffBase):
    pass


class StaffUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1, max_length=255)
    email: EmailStr | None = None
    phone: str | None = Field(default=None, max_length=50)
    active: bool | None = None
    color: str | None = Field(default=None, max_length=7)


class StaffRead(StaffBase):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    business_id: uuid.UUID
    active: bool
    created_at: datetime
    updated_at: datetime


class ServiceBase(BaseModel):
    name: str = Field(min_length=1, max_length=255)
    description: str | None = None
    duration_minutes: int = Field(gt=0)
    price: Decimal = Field(default=0, ge=0)
    currency: str = Field(default="EUR", min_length=3, max_length=3)
    buffer_minutes_before: int = Field(default=0, ge=0)
    buffer_minutes_after: int = Field(default=0, ge=0)


class ServiceCreate(ServiceBase):
    pass


class ServiceUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1, max_length=255)
    description: str | None = None
    duration_minutes: int | None = Field(default=None, gt=0)
    price: Decimal | None = Field(default=None, ge=0)
    currency: str | None = Field(default=None, min_length=3, max_length=3)
    buffer_minutes_before: int | None = Field(default=None, ge=0)
    buffer_minutes_after: int | None = Field(default=None, ge=0)
    active: bool | None = None


class ServiceRead(ServiceBase):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    business_id: uuid.UUID
    active: bool
    created_at: datetime
    updated_at: datetime


class CustomerBase(BaseModel):
    name: str = Field(min_length=1, max_length=255)
    email: EmailStr
    phone: str | None = Field(default=None, max_length=50)
    notes: str | None = None


class CustomerCreate(CustomerBase):
    pass


class CustomerUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1, max_length=255)
    email: EmailStr | None = None
    phone: str | None = Field(default=None, max_length=50)
    notes: str | None = None


class CustomerRead(CustomerBase):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    business_id: uuid.UUID
    created_at: datetime
    updated_at: datetime