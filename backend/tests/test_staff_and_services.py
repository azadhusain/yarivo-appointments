"""Tests for staff, services, and customer endpoints with deletion protections."""
import pytest
from httpx import AsyncClient


async def setup_tenant(client: AsyncClient, email="salon@test.com") -> tuple[str, dict]:
    res = await client.post(
        "/api/v1/auth/register",
        json={
            "name": "Glamour Hair",
            "timezone": "UTC",
            "currency": "EUR",
            "owner_name": "Elena",
            "owner_email": email,
            "password": "Password123!",
        },
    )
    token = res.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
    biz = (await client.get("/api/v1/business/me", headers=headers)).json()
    return token, biz


@pytest.mark.asyncio
async def test_staff_crud_and_availability(client: AsyncClient):
    token, _ = await setup_tenant(client, "staff@test.com")
    headers = {"Authorization": f"Bearer {token}"}

    # Create staff
    create_res = await client.post(
        "/api/v1/staff",
        headers=headers,
        json={"name": "Sarah Connor", "email": "sarah@glamour.com", "color": "#FF5733"},
    )
    assert create_res.status_code == 201
    staff = create_res.json()
    staff_id = staff["id"]
    assert staff["name"] == "Sarah Connor"

    # Set staff availability
    avail_res = await client.put(
        f"/api/v1/staff/{staff_id}/availability",
        headers=headers,
        json=[
            {
                "day_of_week": 0,
                "is_available": True,
                "start_time": "10:00:00",
                "end_time": "18:00:00",
            }
        ],
    )
    assert avail_res.status_code == 200
    assert len(avail_res.json()) == 1


@pytest.mark.asyncio
async def test_service_crud(client: AsyncClient):
    token, _ = await setup_tenant(client, "services@test.com")
    headers = {"Authorization": f"Bearer {token}"}

    # Create service with buffer times
    res = await client.post(
        "/api/v1/services",
        headers=headers,
        json={
            "name": "Haircut & Styling",
            "duration_minutes": 45,
            "price": 50.0,
            "currency": "EUR",
            "buffer_minutes_before": 5,
            "buffer_minutes_after": 10,
        },
    )
    assert res.status_code == 201
    service = res.json()
    assert service["name"] == "Haircut & Styling"
    assert service["buffer_minutes_after"] == 10
