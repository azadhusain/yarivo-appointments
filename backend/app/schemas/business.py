"""Pydantic schemas for Business and User entities."""
import uuid
import zoneinfo
from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr, Field, field_validator


class BusinessBase(BaseModel):
    name: str = Field(min_length=1, max_length=255)
    description: str | None = None
    email: EmailStr | None = None
    phone: str | None = Field(default=None, max_length=50)
    address: str | None = None
    timezone: str = Field(min_length=1, max_length=100)
    currency: str = Field(default="EUR", min_length=3, max_length=3)

    @field_validator("timezone")
    @classmethod
    def validate_timezone(cls, v: str) -> str:
        if v not in zoneinfo.available_timezones() and v != "UTC":
            raise ValueError(f"Invalid IANA timezone: '{v}'")
        return v


class BusinessCreate(BusinessBase):
    pass


class BusinessUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1, max_length=255)
    description: str | None = None
    email: EmailStr | None = None
    phone: str | None = Field(default=None, max_length=50)
    address: str | None = None
    timezone: str | None = Field(default=None, min_length=1, max_length=100)
    currency: str | None = Field(default=None, min_length=3, max_length=3)

    @field_validator("timezone")
    @classmethod
    def validate_timezone(cls, v: str | None) -> str | None:
        if v is not None and v not in zoneinfo.available_timezones() and v != "UTC":
            raise ValueError(f"Invalid IANA timezone: '{v}'")
        return v


class BusinessRead(BusinessBase):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    slug: str
    created_at: datetime
    updated_at: datetime


class UserCreate(BaseModel):
    name: str = Field(min_length=1, max_length=255)
    email: EmailStr
    password: str = Field(min_length=8, max_length=128)
    role: str = Field(default="OWNER", pattern="^(OWNER|ADMIN|STAFF)$")


class UserRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    business_id: uuid.UUID
    name: str
    email: EmailStr
    role: str


class RegisterRequest(BusinessCreate):
    """Combined business + owner registration."""

    owner_name: str = Field(min_length=1, max_length=255)
    owner_email: EmailStr
    password: str = Field(min_length=8, max_length=128)


class SlugAvailability(BaseModel):
    available: bool
    slug: str
