"""Staff, Service, Customer ORM models."""
import uuid
from datetime import datetime
from decimal import Decimal

from sqlalchemy import (
    Boolean,
    DateTime,
    ForeignKey,
    Numeric,
    String,
    Text,
    UniqueConstraint,
    Uuid,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin, UUIDMixin


class Staff(UUIDMixin, TimestampMixin, Base):
    """A staff member who can deliver services."""

    __tablename__ = "staff"

    business_id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        ForeignKey("business.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    email: Mapped[str | None] = mapped_column(String(255))
    phone: Mapped[str | None] = mapped_column(String(50))
    active: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)
    color: Mapped[str | None] = mapped_column(String(7))

    business = relationship("Business", back_populates="staff")
    availability = relationship(
        "StaffAvailability",
        back_populates="staff",
        cascade="all, delete-orphan",
    )


class Service(UUIDMixin, TimestampMixin, Base):
    """A bookable service with price and duration."""

    __tablename__ = "services"

    business_id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        ForeignKey("business.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    description: Mapped[str | None] = mapped_column(Text)
    duration_minutes: Mapped[int] = mapped_column(nullable=False)
    price: Mapped[Decimal] = mapped_column(Numeric(10, 2), nullable=False, default=0)
    currency: Mapped[str] = mapped_column(String(3), nullable=False, default="EUR")
    buffer_minutes_before: Mapped[int] = mapped_column(nullable=False, default=0)
    buffer_minutes_after: Mapped[int] = mapped_column(nullable=False, default=0)
    active: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True)

    business = relationship("Business", back_populates="services")


class Customer(UUIDMixin, TimestampMixin, Base):
    """A customer who books appointments (no account required)."""

    __tablename__ = "customers"

    business_id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        ForeignKey("business.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    email: Mapped[str] = mapped_column(String(255), nullable=False)
    phone: Mapped[str | None] = mapped_column(String(50))
    notes: Mapped[str | None] = mapped_column(Text)
    deleted_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))

    business = relationship("Business", back_populates="customers")

    __table_args__ = (
        # One customer per (business, email)
        UniqueConstraint("business_id", "email", name="uq_customer_business_email"),
    )
