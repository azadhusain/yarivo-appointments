"""Billing and Subscription endpoints."""
import uuid
from datetime import datetime, timedelta, timezone

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.deps import get_current_business
from app.models.availability_appointment import Appointment
from app.models.business import Business, Subscription
from app.schemas.subscription import SubscriptionRead, UpgradeSubscriptionRequest

router = APIRouter(prefix="/billing", tags=["billing"])

FREE_APPOINTMENT_LIMIT = 15
STARTER_APPOINTMENT_LIMIT = 50

PLAN_CONFIG: dict[str, dict] = {
    "free": {"limit": FREE_APPOINTMENT_LIMIT, "price": 0},
    "starter": {"limit": STARTER_APPOINTMENT_LIMIT, "price": 9},
    "pro": {"limit": None, "price": 29},
}


def get_plan_limit(plan: str) -> int | None:
    """Return the appointment limit for a given plan, or None for unlimited."""
    return PLAN_CONFIG.get(plan, PLAN_CONFIG["free"])["limit"]


def get_plan_price(plan: str) -> int:
    """Return the monthly price in dollars for a given plan."""
    return PLAN_CONFIG.get(plan, PLAN_CONFIG["free"])["price"]


async def get_business_appointment_count(db: AsyncSession, business_id: uuid.UUID) -> int:
    """Return total confirmed/completed active appointments for a business."""
    count = await db.scalar(
        select(func.count(Appointment.id)).where(
            Appointment.business_id == business_id,
            Appointment.status != "CANCELLED",
        )
    )
    return count or 0


def can_book_appointment(plan: str, used_count: int) -> bool:
    """Check if a business can book more appointments on their current plan."""
    limit = get_plan_limit(plan)
    if limit is None:
        return True
    return used_count < limit


@router.get("/subscription", response_model=SubscriptionRead)
async def get_subscription(
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> SubscriptionRead:
    sub = await db.scalar(
        select(Subscription).where(Subscription.business_id == business_id)
    )
    used_count = await get_business_appointment_count(db, business_id)

    plan = sub.plan if sub else "free"
    sub_status = sub.status if sub else "active"
    limit = get_plan_limit(plan)

    return SubscriptionRead(
        id=sub.id if sub else None,
        business_id=business_id,
        plan=plan,
        status=sub_status,
        current_period_start=sub.current_period_start if sub else None,
        current_period_end=sub.current_period_end if sub else None,
        appointments_used=used_count,
        appointments_limit=limit,
        can_book=can_book_appointment(plan, used_count),
        price=get_plan_price(plan),
    )


@router.post("/upgrade", response_model=SubscriptionRead)
async def upgrade_subscription(
    payload: UpgradeSubscriptionRequest,
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> SubscriptionRead:
    target_plan = payload.plan
    if target_plan not in ("starter", "pro"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid plan. Choose 'starter' or 'pro'.",
        )

    sub = await db.scalar(
        select(Subscription).where(Subscription.business_id == business_id)
    )
    now = datetime.now(timezone.utc)
    period_end = now + timedelta(days=30)

    if not sub:
        sub = Subscription(
            business_id=business_id,
            provider="stripe",
            plan=target_plan,
            status="active",
            current_period_start=now,
            current_period_end=period_end,
        )
        db.add(sub)
    else:
        sub.plan = target_plan
        sub.status = "active"
        sub.current_period_start = now
        sub.current_period_end = period_end

    await db.commit()
    await db.refresh(sub)

    used_count = await get_business_appointment_count(db, business_id)
    limit = get_plan_limit(target_plan)

    return SubscriptionRead(
        id=sub.id,
        business_id=business_id,
        plan=sub.plan,
        status=sub.status,
        current_period_start=sub.current_period_start,
        current_period_end=sub.current_period_end,
        appointments_used=used_count,
        appointments_limit=limit,
        can_book=can_book_appointment(target_plan, used_count),
        price=get_plan_price(target_plan),
    )


@router.post("/cancel", response_model=SubscriptionRead)
async def cancel_subscription(
    business_id: uuid.UUID = Depends(get_current_business),
    db: AsyncSession = Depends(get_db),
) -> SubscriptionRead:
    sub = await db.scalar(
        select(Subscription).where(Subscription.business_id == business_id)
    )
    if sub:
        sub.plan = "free"
        sub.status = "canceled"
        await db.commit()
        await db.refresh(sub)

    used_count = await get_business_appointment_count(db, business_id)

    return SubscriptionRead(
        id=sub.id if sub else None,
        business_id=business_id,
        plan="free",
        status="canceled" if sub else "active",
        current_period_start=sub.current_period_start if sub else None,
        current_period_end=sub.current_period_end if sub else None,
        appointments_used=used_count,
        appointments_limit=FREE_APPOINTMENT_LIMIT,
        can_book=can_book_appointment("free", used_count),
        price=0,
    )
