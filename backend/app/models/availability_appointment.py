"""BusinessHours, StaffAvailability, Appointment ORM models."""
import uuid
from datetime import datetime, time

from sqlalchemy import (
    Boolean,
    CheckConstraint,
    DateTime,
    ForeignKey,
    SmallInteger,
    String,
    Text,
    Time,
    UniqueConstraint,
    Uuid,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin, UUIDMixin


class BusinessHours(UUIDMixin, Base):
    """Weekly opening hours for a business (local wall-clock times)."""

    __tablename__ = "business_hours"

    business_id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        ForeignKey("business.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    day_of_week: Mapped[int] = mapped_column(SmallInteger, nullable=False)  # 0=Mon..6=Sun
    is_open: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)
    opening_time: Mapped[time | None] = mapped_column(Time(timezone=False))
    closing_time: Mapped[time | None] = mapped_column(Time(timezone=False))

    business = relationship("Business", back_populates="business_hours")

    __table_args__ = (
        UniqueConstraint(
            "business_id",
            "day_of_week",
            name="uq_business_hours_business_day",
        ),
    )


class StaffAvailability(UUIDMixin, Base):
    """Weekly availability for a staff member (local wall-clock times)."""

    __tablename__ = "staff_availability"

    staff_id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        ForeignKey("staff.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    day_of_week: Mapped[int] = mapped_column(SmallInteger, nullable=False)  # 0=Mon..6=Sun
    is_available: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)
    start_time: Mapped[time | None] = mapped_column(Time(timezone=False))
    end_time: Mapped[time | None] = mapped_column(Time(timezone=False))

    staff = relationship("Staff", back_populates="availability")

    __table_args__ = (
        UniqueConstraint(
            "staff_id",
            "day_of_week",
            name="uq_staff_availability_staff_day",
        ),
    )


class Appointment(UUIDMixin, TimestampMixin, Base):
    """A booked appointment. Times stored in UTC (timestamptz)."""

    __tablename__ = "appointments"

    business_id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        ForeignKey("business.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    customer_id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        ForeignKey("customers.id", ondelete="RESTRICT"),
        nullable=False,
        index=True,
    )
    staff_id: Mapped[uuid.UUID | None] = mapped_column(
        Uuid,
        ForeignKey("staff.id", ondelete="RESTRICT"),
        nullable=True,
    )
    service_id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        ForeignKey("services.id", ondelete="RESTRICT"),
        nullable=False,
    )
    start_time: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    end_time: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    status: Mapped[str] = mapped_column(String(20), nullable=False, default="CONFIRMED")
    customer_notes: Mapped[str | None] = mapped_column(Text)

    business = relationship("Business", back_populates="appointments")
    customer = relationship("Customer", lazy="selectin")
    staff = relationship("Staff", lazy="selectin")
    service = relationship("Service", lazy="selectin")

    __table_args__ = (
        # end must be after start
        CheckConstraint("end_time > start_time", name="ck_appointment_end_after_start"),
    )
