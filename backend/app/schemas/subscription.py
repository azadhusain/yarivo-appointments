"""Pydantic schemas for subscriptions and billing."""
import uuid
from datetime import datetime
from pydantic import BaseModel, ConfigDict


class SubscriptionRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID | None = None
    business_id: uuid.UUID
    plan: str = "free"
    status: str = "active"
    current_period_start: datetime | None = None
    current_period_end: datetime | None = None
    appointments_used: int = 0
    appointments_limit: int | None = 15
    can_book: bool = True
    price: int = 0


class UpgradeSubscriptionRequest(BaseModel):
    plan: str = "pro"
    card_number: str | None = None
    exp_month: str | None = None
    exp_year: str | None = None
    cvc: str | None = None
    cardholder_name: str | None = None
