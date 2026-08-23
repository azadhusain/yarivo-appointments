"""Tests for authentication endpoints (registration, login, refresh, me, timezone validation)."""
import pytest
from httpx import AsyncClient


@pytest.mark.asyncio
async def test_register_success(client: AsyncClient):
    response = await client.post(
        "/api/v1/auth/register",
        json={
            "name": "Luxury Salon & Spa",
            "description": "High end hair and nails",
            "timezone": "America/New_York",
            "currency": "USD",
            "owner_name": "Alice Smith",
            "owner_email": "alice@luxurysalon.com",
            "password": "Password123!",
        },
    )
    assert response.status_code == 201
    data = response.json()
    assert "access_token" in data
    assert "refresh_token" in data

    # Verify public listing has slug properly sanitized
    pub_res = await client.get("/api/v1/business/public")
    assert pub_res.status_code == 200
    businesses = pub_res.json()
    assert len(businesses) == 1
    assert businesses[0]["slug"] == "luxury-salon-spa"


@pytest.mark.asyncio
async def test_register_duplicate_email(client: AsyncClient):
    payload = {
        "name": "Barber One",
        "timezone": "UTC",
        "currency": "EUR",
        "owner_name": "Bob",
        "owner_email": "bob@barber.com",
        "password": "Password123!",
    }
    res1 = await client.post("/api/v1/auth/register", json=payload)
    assert res1.status_code == 201

    res2 = await client.post("/api/v1/auth/register", json=payload)
    assert res2.status_code == 409
    assert "Email already registered" in res2.json()["detail"]


@pytest.mark.asyncio
async def test_register_invalid_timezone(client: AsyncClient):
    response = await client.post(
        "/api/v1/auth/register",
        json={
            "name": "Test Salon",
            "timezone": "Mars/Olympus_Mons",
            "currency": "USD",
            "owner_name": "Charlie",
            "owner_email": "charlie@test.com",
            "password": "Password123!",
        },
    )
    assert response.status_code == 422


@pytest.mark.asyncio
async def test_login_and_me(client: AsyncClient):
    # Register
    await client.post(
        "/api/v1/auth/register",
        json={
            "name": "Downtown Nails",
            "timezone": "Europe/London",
            "currency": "GBP",
            "owner_name": "Diana",
            "owner_email": "diana@nails.com",
            "password": "SecretPassword123!",
        },
    )

    # Login
    login_res = await client.post(
        "/api/v1/auth/login",
        data={"username": "diana@nails.com", "password": "SecretPassword123!"},
    )
    assert login_res.status_code == 200
    token_data = login_res.json()
    access_token = token_data["access_token"]
    refresh_token = token_data["refresh_token"]

    # Access protected /me
    me_res = await client.get(
        "/api/v1/auth/me",
        headers={"Authorization": f"Bearer {access_token}"},
    )
    assert me_res.status_code == 200
    user_info = me_res.json()
    assert user_info["email"] == "diana@nails.com"
    assert user_info["role"] == "OWNER"

    # Refresh token
    refresh_res = await client.post(
        "/api/v1/auth/refresh",
        json={"refresh_token": refresh_token},
    )
    assert refresh_res.status_code == 200
    assert "access_token" in refresh_res.json()
