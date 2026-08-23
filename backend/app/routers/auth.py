from datetime import datetime, time, timedelta, timezone
import re
import uuid

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.core.deps import get_current_user
from app.core.security import (
    create_access_token,
    create_refresh_token,
    decode_token,
    hash_password,
    verify_password,
)
from app.models.availability_appointment import BusinessHours, StaffAvailability
from app.models.business import Business
from app.models.staff_service_customer import Service, Staff
from app.models.user import PasswordHistory, User
from app.schemas.auth import (
    AuthUser,
    ForgotPasswordRequest,
    MessageResponse,
    RefreshRequest,
    ResetPasswordRequest,
    TokenPair,
)
from app.schemas.business import RegisterRequest

router = APIRouter(prefix="/auth", tags=["auth"])


def validate_password_strength(password: str) -> None:
    """Enforce strong password policy."""
    if len(password) < 8:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password must be at least 8 characters long",
        )
    if not re.search(r"[A-Z]", password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password must contain at least one uppercase letter (A-Z)",
        )
    if not re.search(r"[a-z]", password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password must contain at least one lowercase letter (a-z)",
        )
    if not re.search(r"\d", password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password must contain at least one number (0-9)",
        )
    if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password must contain at least one special character (!@#$%^&*...)",
        )


def _slugify(name: str) -> str:
    cleaned = re.sub(r"[^a-z0-9]+", "-", name.lower().strip()).strip("-")
    return (cleaned or "business")[:100]


@router.post("/register", response_model=TokenPair, status_code=status.HTTP_201_CREATED)
async def register(payload: RegisterRequest, db: AsyncSession = Depends(get_db)) -> TokenPair:
    validate_password_strength(payload.password)

    clean_email = str(payload.owner_email).strip().lower()
    existing = await db.scalar(select(User).where(func.lower(User.email) == clean_email))
    if existing:
        raise HTTPException(status_code=409, detail="Email already registered")

    slug = _slugify(payload.name)
    while await db.scalar(select(Business).where(Business.slug == slug)):
        slug = f"{slug}-{uuid.uuid4().hex[:6]}"

    biz_email = str(payload.email).strip().lower() if payload.email else clean_email

    business = Business(
        name=payload.name.strip(),
        slug=slug,
        description=payload.description.strip() if payload.description else None,
        email=biz_email,
        phone=payload.phone.strip() if payload.phone else None,
        address=payload.address.strip() if payload.address else None,
        timezone=payload.timezone.strip(),
        currency=payload.currency.strip().upper(),
    )
    db.add(business)
    await db.flush()

    user = User(
        business_id=business.id,
        name=payload.owner_name.strip(),
        email=clean_email,
        password_hash=hash_password(payload.password),
        password_changed_at=datetime.now(timezone.utc),
        role="OWNER",
    )
    db.add(user)
    await db.flush()

    # Record initial password in password history
    initial_history = PasswordHistory(
        user_id=user.id,
        password_hash=user.password_hash,
    )
    db.add(initial_history)

    # 1. Default Service
    service = Service(
        business_id=business.id,
        name="Standard Appointment",
        description="General consultation and service",
        duration_minutes=30,
        price=50.0,
        currency=business.currency,
        buffer_minutes_before=0,
        buffer_minutes_after=5,
        active=True,
    )
    db.add(service)

    # 2. Default Staff member (Owner)
    staff = Staff(
        business_id=business.id,
        name=payload.owner_name.strip(),
        email=clean_email,
        phone=payload.phone.strip() if payload.phone else None,
        active=True,
    )
    db.add(staff)
    await db.flush()

    # 3. Default Staff Availability (Mon-Fri 9am-5pm)
    for day in range(7):
        is_open = day < 5
        db.add(
            StaffAvailability(
                staff_id=staff.id,
                day_of_week=day,
                is_available=is_open,
                start_time=time(9, 0) if is_open else None,
                end_time=time(17, 0) if is_open else None,
            )
        )

    # 4. Default Business Hours (Mon-Fri 9am-5pm)
    for day in range(7):
        is_open = day < 5
        db.add(
            BusinessHours(
                business_id=business.id,
                day_of_week=day,
                is_open=is_open,
                opening_time=time(9, 0) if is_open else None,
                closing_time=time(17, 0) if is_open else None,
            )
        )

    await db.commit()

    return TokenPair(
        access_token=create_access_token(str(user.id)),
        refresh_token=create_refresh_token(str(user.id)),
    )


@router.post("/login", response_model=TokenPair)
async def login(
    form: OAuth2PasswordRequestForm = Depends(),
    db: AsyncSession = Depends(get_db),
) -> TokenPair:
    clean_username = form.username.strip().lower()

    # 1. Search directly by User email
    user = await db.scalar(select(User).where(func.lower(User.email) == clean_username))

    # 2. If not found by User email, check if username matches a Business email or slug
    if not user:
        biz = await db.scalar(
            select(Business).where(
                (func.lower(Business.email) == clean_username)
                | (func.lower(Business.slug) == clean_username)
            )
        )
        if biz:
            user = await db.scalar(
                select(User).where(User.business_id == biz.id, User.role == "OWNER")
            )

    if not user or not user.password_hash or not verify_password(form.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
        )

    # Check 90-day password expiration
    if user.password_changed_at:
        pw_age = datetime.now(timezone.utc) - (
            user.password_changed_at if user.password_changed_at.tzinfo else user.password_changed_at.replace(tzinfo=timezone.utc)
        )
        if pw_age.days >= 90:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="PASSWORD_EXPIRED: Your password has expired (older than 90 days). Please reset your password to log in.",
            )

    return TokenPair(
        access_token=create_access_token(str(user.id)),
        refresh_token=create_refresh_token(str(user.id)),
    )


@router.post("/refresh", response_model=TokenPair)
async def refresh(payload: RefreshRequest, db: AsyncSession = Depends(get_db)) -> TokenPair:
    subject = decode_token(payload.refresh_token, refresh=True)
    if not subject:
        raise HTTPException(status_code=401, detail="Invalid refresh token")
    user = await db.scalar(select(User).where(User.id == uuid.UUID(subject)))
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return TokenPair(
        access_token=create_access_token(str(user.id)),
        refresh_token=create_refresh_token(str(user.id)),
    )


@router.get("/me", response_model=AuthUser)
async def me(user: User = Depends(get_current_user)) -> AuthUser:
    return AuthUser(
        id=user.id,
        business_id=user.business_id,
        name=user.name,
        email=user.email,
        role=user.role,
    )


@router.post("/forgot-password", response_model=MessageResponse)
async def forgot_password(
    payload: ForgotPasswordRequest,
    db: AsyncSession = Depends(get_db),
) -> MessageResponse:
    clean_email = payload.email.strip().lower()
    user = await db.scalar(select(User).where(func.lower(User.email) == clean_email))
    # We return a success message regardless of existence for security
    if user:
        # In development, we return a clear confirmation
        return MessageResponse(
            message=f"A password reset link/instructions have been sent to {clean_email}."
        )
    return MessageResponse(
        message=f"If an account with {clean_email} exists, password reset instructions have been sent."
    )


@router.post("/reset-password", response_model=MessageResponse)
async def reset_password(
    payload: ResetPasswordRequest,
    db: AsyncSession = Depends(get_db),
) -> MessageResponse:
    clean_email = payload.email.strip().lower()
    user = await db.scalar(select(User).where(func.lower(User.email) == clean_email))
    if not user:
        raise HTTPException(status_code=404, detail="User account not found")

    validate_password_strength(payload.new_password)

    # Fetch last 3 password history records for this user
    history_entries = await db.scalars(
        select(PasswordHistory)
        .where(PasswordHistory.user_id == user.id)
        .order_by(PasswordHistory.created_at.desc())
        .limit(3)
    )
    last_3_hashes = [h.password_hash for h in history_entries]
    if user.password_hash and user.password_hash not in last_3_hashes:
        last_3_hashes.append(user.password_hash)

    # Check if the new password matches any of the last 3 passwords
    for old_hash in last_3_hashes[:3]:
        if verify_password(payload.new_password, old_hash):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="You cannot reuse any of your last 3 passwords. Please choose a new, different password.",
            )

    new_hash = hash_password(payload.new_password)
    user.password_hash = new_hash
    user.password_changed_at = datetime.now(timezone.utc)

    # Record in history
    new_history = PasswordHistory(
        user_id=user.id,
        password_hash=new_hash,
    )
    db.add(new_history)
    await db.commit()

    return MessageResponse(
        message="Your password has been successfully reset. You can now log in with your new password."
    )