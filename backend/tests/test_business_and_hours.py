"""Tests for business profile and operating hours."""
import pytest
from httpx import AsyncClient


async def register_business(client: AsyncClient, email="owner@biz.com") -> str:
    res = await client.post(
        "/api/v1/auth/register",
        json={
            "name": "Barber Studio",
            "timezone": "America/Chicago",
            "currency": "USD",
            "owner_name": "Sam",
            "owner_email": email,
            "password": "Password123!",
        },
    )
    return res.json()["access_token"]


@pytest.mark.asyncio
async def test_business_profile_and_update(client: AsyncClient):
    token = await register_business(client, "profile@test.com")
    headers = {"Authorization": f"Bearer {token}"}

    # Get my business
    me_res = await client.get("/api/v1/business/me", headers=headers)
    assert me_res.status_code == 200
    biz = me_res.json()
    assert biz["name"] == "Barber Studio"
    assert biz["timezone"] == "America/Chicago"

    # Update business
    update_res = await client.patch(
        "/api/v1/business/me",
        headers=headers,
        json={"name": "Barber Studio Pro", "address": "789 Main St"},
    )
    assert update_res.status_code == 200
    updated = update_res.json()
    assert updated["name"] == "Barber Studio Pro"
    assert updated["address"] == "789 Main St"


@pytest.mark.asyncio
async def test_business_hours_upsert(client: AsyncClient):
    token = await register_business(client, "hours@test.com")
    headers = {"Authorization": f"Bearer {token}"}

    # Set business hours for Monday (0) and Tuesday (1)
    payload = [
        {
            "day_of_week": 0,
            "is_open": True,
            "opening_time": "09:00:00",
            "closing_time": "17:00:00",
        },
        {
            "day_of_week": 1,
            "is_open": False,
            "opening_time": None,
            "closing_time": None,
        },
    ]
    put_res = await client.put(
        "/api/v1/business-hours", headers=headers, json=payload
    )
    assert put_res.status_code == 200
    hours = put_res.json()
    assert len(hours) == 2
    assert hours[0]["day_of_week"] == 0
    assert hours[0]["is_open"] is True
    assert hours[1]["day_of_week"] == 1
    assert hours[1]["is_open"] is False

    # Get business hours
    get_res = await client.get("/api/v1/business-hours", headers=headers)
    assert get_res.status_code == 200
    assert len(get_res.json()) == 2
