from datetime import datetime
import uuid

from sqlalchemy import DateTime, ForeignKey, String, Uuid, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin, UUIDMixin


class User(UUIDMixin, TimestampMixin, Base):
    """An authenticated user belonging to a business.

    Roles: OWNER, ADMIN, STAFF.
    """

    __tablename__ = "users"

    business_id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        ForeignKey("business.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    email: Mapped[str] = mapped_column(String(255), nullable=False, unique=True, index=True)
    password_hash: Mapped[str | None] = mapped_column(String(255))
    password_changed_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        nullable=False,
    )
    role: Mapped[str] = mapped_column(String(20), nullable=False, default="OWNER")

    business = relationship("Business", back_populates="users")
    password_history = relationship(
        "PasswordHistory",
        back_populates="user",
        cascade="all, delete-orphan",
        order_by="desc(PasswordHistory.created_at)",
    )


class PasswordHistory(UUIDMixin, TimestampMixin, Base):
    """Historical password hashes for a user to prevent reuse."""

    __tablename__ = "password_history"

    user_id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )
    password_hash: Mapped[str] = mapped_column(String(255), nullable=False)

    user = relationship("User", back_populates="password_history")
