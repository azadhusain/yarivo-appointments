"""Availability engine for calculating bookable slots and validating appointment conflicts."""
import uuid
import zoneinfo
from datetime import date, datetime, time, timedelta, timezone

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.availability_appointment import Appointment, BusinessHours, StaffAvailability
from app.models.business import Business
from app.models.staff_service_customer import Service, Staff
from app.schemas.availability_appointment import Slot


def get_business_tz(timezone_str: str | None) -> zoneinfo.ZoneInfo:
    if not timezone_str:
        return zoneinfo.ZoneInfo("UTC")
    try:
        return zoneinfo.ZoneInfo(timezone_str)
    except Exception:
        return zoneinfo.ZoneInfo("UTC")


async def compute_available_slots(
    db: AsyncSession,
    business: Business,
    service: Service,
    target_date: date,
    staff_id_filter: uuid.UUID | None = None,
) -> list[Slot]:
    """Compute all valid bookable slots for a service on target_date in business timezone."""
    tz = get_business_tz(business.timezone)
    weekday = target_date.weekday()

    # 1. Check Business Operating Hours for this day of week
    biz_hours = await db.scalar(
        select(BusinessHours).where(
            BusinessHours.business_id == business.id,
            BusinessHours.day_of_week == weekday,
        )
    )
    # If business hours exist and is_open is False, business is closed
    if biz_hours is not None and not biz_hours.is_open:
        return []

    biz_open: time | None = (
        biz_hours.opening_time if biz_hours and biz_hours.is_open else None
    )
    biz_close: time | None = (
        biz_hours.closing_time if biz_hours and biz_hours.is_open else None
    )

    # 2. Query Active Staff
    staff_query = select(Staff).where(
        Staff.business_id == business.id,
        Staff.active.is_(True),
    )
    if staff_id_filter:
        staff_query = staff_query.where(Staff.id == staff_id_filter)

    staff_list = list(await db.scalars(staff_query))
    if not staff_list:
        return []

    slots: list[Slot] = []

    for staff in staff_list:
        avail = await db.scalar(
            select(StaffAvailability).where(
                StaffAvailability.staff_id == staff.id,
                StaffAvailability.day_of_week == weekday,
                StaffAvailability.is_available.is_(True),
            )
        )
        if not avail or not avail.start_time or not avail.end_time:
            continue

        start_t = avail.start_time
        end_t = avail.end_time
        if biz_open and biz_open > start_t:
            start_t = biz_open
        if biz_close and biz_close < end_t:
            end_t = biz_close

        if start_t >= end_t:
            continue

        # Local start and end times in business timezone
        local_start_dt = datetime.combine(target_date, start_t, tzinfo=tz)
        local_end_dt = datetime.combine(target_date, end_t, tzinfo=tz)

        # Convert to UTC
        utc_window_start = local_start_dt.astimezone(timezone.utc)
        utc_window_end = local_end_dt.astimezone(timezone.utc)

        duration = timedelta(minutes=service.duration_minutes)
        buffer_before = timedelta(minutes=service.buffer_minutes_before)
        buffer_after = timedelta(minutes=service.buffer_minutes_after)

        curr_utc = utc_window_start
        step = timedelta(minutes=15)

        while curr_utc + duration <= utc_window_end:
            slot_start = curr_utc
            slot_end = curr_utc + duration

            blocked_start = slot_start - buffer_before
            blocked_end = slot_end + buffer_after

            conflict = await db.scalar(
                select(Appointment).where(
                    Appointment.staff_id == staff.id,
                    Appointment.status != "CANCELLED",
                    Appointment.start_time < blocked_end,
                    Appointment.end_time > blocked_start,
                )
            )

            if not conflict:
                slots.append(
                    Slot(
                        start_time=slot_start,
                        end_time=slot_end,
                        staff_id=staff.id,
                    )
                )

            curr_utc += step

    slots.sort(key=lambda s: (s.start_time, str(s.staff_id)))
    return slots


async def check_appointment_conflict(
    db: AsyncSession,
    business_id: uuid.UUID,
    service: Service,
    start_time: datetime,
    end_time: datetime,
    staff_id: uuid.UUID | None,
) -> bool:
    """Returns True if there is a conflict with existing appointments, False otherwise."""
    buffer_before = timedelta(minutes=service.buffer_minutes_before)
    buffer_after = timedelta(minutes=service.buffer_minutes_after)

    blocked_start = start_time - buffer_before
    blocked_end = end_time + buffer_after

    query = select(Appointment).where(
        Appointment.business_id == business_id,
        Appointment.status != "CANCELLED",
        Appointment.start_time < blocked_end,
        Appointment.end_time > blocked_start,
    )
    if staff_id:
        query = query.where(Appointment.staff_id == staff_id)

    conflict = await db.scalar(query)
    return conflict is not None
