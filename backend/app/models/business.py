"""Business and Subscription ORM models."""
import uuid
from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, String, Text, Uuid
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin, UUIDMixin


class Business(UUIDMixin, TimestampMixin, Base):
    """A tenant. All other business data is scoped by business_id."""

    __tablename__ = "business"

    name: Mapped[str] = mapped_column(String(255), nullable=False)
    slug: Mapped[str] = mapped_column(String(100), nullable=False, unique=True, index=True)
    description: Mapped[str | None] = mapped_column(Text)
    email: Mapped[str | None] = mapped_column(String(255))
    phone: Mapped[str | None] = mapped_column(String(50))
    address: Mapped[str | None] = mapped_column(Text)
    timezone: Mapped[str] = mapped_column(String(100), nullable=False)
    currency: Mapped[str] = mapped_column(String(3), nullable=False, default="EUR")

    users = relationship(
        "User", back_populates="business", cascade="all, delete-orphan"
    )
    staff = relationship(
        "Staff", back_populates="business", cascade="all, delete-orphan"
    )
    services = relationship(
        "Service", back_populates="business", cascade="all, delete-orphan"
    )
    customers = relationship(
        "Customer", back_populates="business", cascade="all, delete-orphan"
    )
    business_hours = relationship(
        "BusinessHours", back_populates="business", cascade="all, delete-orphan"
    )
    appointments = relationship(
        "Appointment", back_populates="business", cascade="all, delete-orphan"
    )
    subscription = relationship(
        "Subscription",
        back_populates="business",
        uselist=False,
        cascade="all, delete-orphan",
    )


class Subscription(UUIDMixin, TimestampMixin, Base):
    """Stripe-backed subscription for a business (one per business)."""

    __tablename__ = "subscription"

    business_id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        ForeignKey("business.id", ondelete="CASCADE"),
        nullable=False,
        unique=True,
    )
    provider: Mapped[str] = mapped_column(String(50), nullable=False, default="stripe")
    provider_customer_id: Mapped[str | None] = mapped_column(String(255))
    provider_subscription_id: Mapped[str | None] = mapped_column(String(255), index=True)
    plan: Mapped[str] = mapped_column(String(50), nullable=False, default="free")
    status: Mapped[str] = mapped_column(String(30), nullable=False, default="active")
    current_period_start: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))
    current_period_end: Mapped[datetime | None] = mapped_column(DateTime(timezone=True))

    business = relationship("Business", back_populates="subscription")
