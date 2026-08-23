"""ORM models package.

Importing all models here ensures they are registered on Base.metadata,
which Alembic autogenerate and table creation rely on.
"""
from app.core.database import Base
from app.models.availability_appointment import (
    Appointment,
    BusinessHours,
    StaffAvailability,
)
from app.models.business import Business, Subscription
from app.models.staff_service_customer import Customer, Service, Staff
from app.models.user import PasswordHistory, User

__all__ = [
    "Base",
    "Business",
    "Subscription",
    "User",
    "PasswordHistory",
    "Customer",
    "Service",
    "Staff",
    "Appointment",
    "BusinessHours",
    "StaffAvailability",
]
