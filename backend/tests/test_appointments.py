"""Comprehensive tests for appointment booking, multi-staff concurrency, availability, and lifecycle."""
import pytest
from httpx import AsyncClient


async def create_business_environment(client: AsyncClient):
    # Register business in America/New_York
    reg = await client.post(
        "/api/v1/auth/register",
        json={
            "name": "Brooklyn Barber",
            "timezone": "America/New_York",
            "currency": "USD",
            "owner_name": "Mike",
            "owner_email": "mike@brooklynbarber.com",
            "password": "Password123!",
        },
    )
    token = reg.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}
    biz = (await client.get("/api/v1/business/me", headers=headers)).json()
    slug = biz["slug"]

    # 1. Set Business Hours: Monday (0) open 09:00 - 17:00, Sunday (6) closed
    await client.put(
        "/api/v1/business-hours",
        headers=headers,
        json=[
            {
                "day_of_week": 0,
                "is_open": True,
                "opening_time": "09:00:00",
                "closing_time": "17:00:00",
            },
            {
                "day_of_week": 6,
                "is_open": False,
                "opening_time": None,
                "closing_time": None,
            },
        ],
    )

    # 2. Add two staff members: Alice and Bob
    res_alice = await client.post(
        "/api/v1/staff",
        headers=headers,
        json={"name": "Alice Stylist", "email": "alice@bb.com"},
    )
    alice_id = res_alice.json()["id"]

    res_bob = await client.post(
        "/api/v1/staff",
        headers=headers,
        json={"name": "Bob Barber", "email": "bob@bb.com"},
    )
    bob_id = res_bob.json()["id"]

    # 3. Set staff availability for Monday 09:00 - 17:00
    await client.put(
        f"/api/v1/staff/{alice_id}/availability",
        headers=headers,
        json=[
            {
                "day_of_week": 0,
                "is_available": True,
                "start_time": "09:00:00",
                "end_time": "17:00:00",
            }
        ],
    )
    await client.put(
        f"/api/v1/staff/{bob_id}/availability",
        headers=headers,
        json=[
            {
                "day_of_week": 0,
                "is_available": True,
                "start_time": "09:00:00",
                "end_time": "17:00:00",
            }
        ],
    )

    # 4. Add Service: Standard Cut (30 min, 0 buffer)
    res_srv = await client.post(
        "/api/v1/services",
        headers=headers,
        json={
            "name": "Standard Haircut",
            "duration_minutes": 30,
            "price": 35.0,
            "currency": "USD",
            "buffer_minutes_before": 0,
            "buffer_minutes_after": 0,
        },
    )
    service_id = res_srv.json()["id"]

    return {
        "token": token,
        "headers": headers,
        "slug": slug,
        "alice_id": alice_id,
        "bob_id": bob_id,
        "service_id": service_id,
    }


@pytest.mark.asyncio
async def test_public_customer_booking_no_auth(client: AsyncClient):
    env = await create_business_environment(client)

    # Public customer queries available slots for Monday (2026-06-01 is a Monday)
    slots_res = await client.get(
        f"/api/v1/business/public/{env['slug']}/slots?service_id={env['service_id']}&date=2026-06-01"
    )
    assert slots_res.status_code == 200
    slots = slots_res.json()
    assert len(slots) > 0
    first_slot = slots[0]

    # Public booking without any auth token
    book_res = await client.post(
        f"/api/v1/business/public/{env['slug']}/book",
        json={
            "customer_name": "Charlie Customer",
            "customer_email": "charlie@gmail.com",
            "customer_phone": "+1234567890",
            "service_id": env["service_id"],
            "staff_id": first_slot["staff_id"],
            "start_time": first_slot["start_time"],
            "customer_notes": "First haircut",
        },
    )
    assert book_res.status_code == 201
    appointment = book_res.json()
    assert appointment["status"] == "CONFIRMED"
    assert appointment["customer_notes"] == "First haircut"


@pytest.mark.asyncio
async def test_returning_customer_multi_booking_no_crash(client: AsyncClient):
    env = await create_business_environment(client)

    slots_res = await client.get(
        f"/api/v1/business/public/{env['slug']}/slots?service_id={env['service_id']}&date=2026-06-01"
    )
    slots = slots_res.json()
    slot1 = slots[0]
    slot2 = slots[1]

    # Book first appointment
    res1 = await client.post(
        f"/api/v1/business/public/{env['slug']}/book",
        json={
            "customer_name": "David",
            "customer_email": "david@example.com",
            "service_id": env["service_id"],
            "staff_id": slot1["staff_id"],
            "start_time": slot1["start_time"],
        },
    )
    assert res1.status_code == 201

    # Book second appointment with SAME email
    res2 = await client.post(
        f"/api/v1/business/public/{env['slug']}/book",
        json={
            "customer_name": "David",
            "customer_email": "david@example.com",
            "service_id": env["service_id"],
            "staff_id": slot2["staff_id"],
            "start_time": slot2["start_time"],
        },
    )
    assert res2.status_code == 201
    assert res2.json()["customer_id"] == res1.json()["customer_id"]


@pytest.mark.asyncio
async def test_multi_staff_simultaneous_booking(client: AsyncClient):
    env = await create_business_environment(client)

    # 09:00 AM EDT in UTC is 13:00:00Z on 2026-06-01
    target_start = "2026-06-01T13:00:00Z"

    # Book Alice at 13:00 UTC
    res_alice = await client.post(
        f"/api/v1/business/public/{env['slug']}/book",
        json={
            "customer_name": "Customer 1",
            "customer_email": "c1@test.com",
            "service_id": env["service_id"],
            "staff_id": env["alice_id"],
            "start_time": target_start,
        },
    )
    assert res_alice.status_code == 201

    # Book Bob at the EXACT SAME TIME (13:00 UTC) -> should succeed!
    res_bob = await client.post(
        f"/api/v1/business/public/{env['slug']}/book",
        json={
            "customer_name": "Customer 2",
            "customer_email": "c2@test.com",
            "service_id": env["service_id"],
            "staff_id": env["bob_id"],
            "start_time": target_start,
        },
    )
    assert res_bob.status_code == 201

    # Attempting to book Alice AGAIN at the same time -> should fail with 409 Conflict
    res_alice_dup = await client.post(
        f"/api/v1/business/public/{env['slug']}/book",
        json={
            "customer_name": "Customer 3",
            "customer_email": "c3@test.com",
            "service_id": env["service_id"],
            "staff_id": env["alice_id"],
            "start_time": target_start,
        },
    )
    assert res_alice_dup.status_code == 409
    assert "Time slot already booked" in res_alice_dup.json()["detail"]


@pytest.mark.asyncio
async def test_appointment_status_lifecycle_and_cancellation(client: AsyncClient):
    env = await create_business_environment(client)

    target_start = "2026-06-01T14:00:00Z"
    book_res = await client.post(
        f"/api/v1/business/public/{env['slug']}/book",
        json={
            "customer_name": "Lifecycle Customer",
            "customer_email": "lifecycle@test.com",
            "service_id": env["service_id"],
            "staff_id": env["alice_id"],
            "start_time": target_start,
        },
    )
    assert book_res.status_code == 201
    appt_id = book_res.json()["id"]

    # Owner views appointments list
    list_res = await client.get("/api/v1/appointments", headers=env["headers"])
    assert list_res.status_code == 200
    assert len(list_res.json()) >= 1

    # Update status to COMPLETED
    patch_res = await client.patch(
        f"/api/v1/appointments/{appt_id}/status",
        headers=env["headers"],
        json={"status": "COMPLETED"},
    )
    assert patch_res.status_code == 200
    assert patch_res.json()["status"] == "COMPLETED"

    # Cancel appointment
    del_res = await client.delete(
        f"/api/v1/appointments/{appt_id}",
        headers=env["headers"],
    )
    assert del_res.status_code == 204

    # Verify status is now CANCELLED
    get_res = await client.get(
        f"/api/v1/appointments/{appt_id}",
        headers=env["headers"],
    )
    assert get_res.json()["status"] == "CANCELLED"
