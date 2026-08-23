"""Billing, 15-appointment limit, and forgot-password tests."""
import pytest
from httpx import AsyncClient


@pytest.mark.asyncio
async def test_forgot_and_reset_password_with_history_and_expiry(client: AsyncClient):
    # 1. Register a business with strong password #1
    reg_resp = await client.post(
        "/api/v1/auth/register",
        json={
            "name": "Reset Test Salon",
            "timezone": "UTC",
            "currency": "USD",
            "owner_name": "Reset Owner",
            "owner_email": "reset_owner@example.com",
            "password": "Password1!Old",
        },
    )
    assert reg_resp.status_code == 201

    # 2. Try resetting to the SAME password #1 (should be blocked by history)
    same_resp = await client.post(
        "/api/v1/auth/reset-password",
        json={
            "email": "reset_owner@example.com",
            "new_password": "Password1!Old",
        },
    )
    assert same_resp.status_code == 400
    assert "cannot reuse any of your last 3 passwords" in same_resp.json()["detail"].lower()

    # 3. Reset to password #2
    reset2 = await client.post(
        "/api/v1/auth/reset-password",
        json={
            "email": "reset_owner@example.com",
            "new_password": "Password2!New",
        },
    )
    assert reset2.status_code == 200

    # 4. Try resetting to password #1 again (still in last 3 -> should be blocked)
    reset_again_1 = await client.post(
        "/api/v1/auth/reset-password",
        json={
            "email": "reset_owner@example.com",
            "new_password": "Password1!Old",
        },
    )
    assert reset_again_1.status_code == 400

    # 5. Reset to password #3
    reset3 = await client.post(
        "/api/v1/auth/reset-password",
        json={
            "email": "reset_owner@example.com",
            "new_password": "Password3!New",
        },
    )
    assert reset3.status_code == 200

    # 6. Reset to password #4
    reset4 = await client.post(
        "/api/v1/auth/reset-password",
        json={
            "email": "reset_owner@example.com",
            "new_password": "Password4!New",
        },
    )
    assert reset4.status_code == 200

    # 7. Now password #1 is no longer in the last 3 history -> should now be allowed!
    reset_old_again = await client.post(
        "/api/v1/auth/reset-password",
        json={
            "email": "reset_owner@example.com",
            "new_password": "Password1!Old",
        },
    )
    assert reset_old_again.status_code == 200

    # 8. Login with new password
    login_resp = await client.post(
        "/api/v1/auth/login",
        data={"username": "reset_owner@example.com", "password": "Password1!Old"},
    )
    assert login_resp.status_code == 200
    assert "access_token" in login_resp.json()


@pytest.mark.asyncio
async def test_billing_subscription_and_upgrade(client: AsyncClient):
    # 1. Register business
    reg_resp = await client.post(
        "/api/v1/auth/register",
        json={
            "name": "Billing Test Spa",
            "timezone": "UTC",
            "currency": "USD",
            "owner_name": "Billing Owner",
            "owner_email": "billing_owner@example.com",
            "password": "Password12345!",
        },
    )
    token = reg_resp.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # 2. Get initial subscription status (Free, limit 15)
    sub_resp = await client.get("/api/v1/billing/subscription", headers=headers)
    assert sub_resp.status_code == 200
    sub_data = sub_resp.json()
    assert sub_data["plan"] == "free"
    assert sub_data["appointments_limit"] == 15
    assert sub_data["can_book"] is True
    assert sub_data["price"] == 0

    # 3. Upgrade to Pro
    upgrade_resp = await client.post(
        "/api/v1/billing/upgrade",
        headers=headers,
        json={"plan": "pro", "cardholder_name": "Billing Owner"},
    )
    assert upgrade_resp.status_code == 200
    up_data = upgrade_resp.json()
    assert up_data["plan"] == "pro"
    assert up_data["status"] == "active"
    assert up_data["appointments_limit"] is None
    assert up_data["price"] == 29


@pytest.mark.asyncio
async def test_billing_upgrade_to_starter(client: AsyncClient):
    """Test upgrading from Free to Starter plan ($9/mo, 50 appointments)."""
    # 1. Register business
    reg_resp = await client.post(
        "/api/v1/auth/register",
        json={
            "name": "Starter Test Shop",
            "timezone": "UTC",
            "currency": "USD",
            "owner_name": "Starter Owner",
            "owner_email": "starter_owner@example.com",
            "password": "Password12345!",
        },
    )
    token = reg_resp.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # 2. Verify starts on free plan
    sub_resp = await client.get("/api/v1/billing/subscription", headers=headers)
    assert sub_resp.status_code == 200
    assert sub_resp.json()["plan"] == "free"
    assert sub_resp.json()["appointments_limit"] == 15
    assert sub_resp.json()["price"] == 0

    # 3. Upgrade to Starter
    upgrade_resp = await client.post(
        "/api/v1/billing/upgrade",
        headers=headers,
        json={"plan": "starter", "cardholder_name": "Starter Owner"},
    )
    assert upgrade_resp.status_code == 200
    up_data = upgrade_resp.json()
    assert up_data["plan"] == "starter"
    assert up_data["status"] == "active"
    assert up_data["appointments_limit"] == 50
    assert up_data["price"] == 9

    # 4. Verify subscription reflects starter plan
    sub_resp2 = await client.get("/api/v1/billing/subscription", headers=headers)
    assert sub_resp2.status_code == 200
    assert sub_resp2.json()["plan"] == "starter"
    assert sub_resp2.json()["appointments_limit"] == 50

    # 5. Upgrade from Starter to Pro
    upgrade_pro = await client.post(
        "/api/v1/billing/upgrade",
        headers=headers,
        json={"plan": "pro", "cardholder_name": "Starter Owner"},
    )
    assert upgrade_pro.status_code == 200
    assert upgrade_pro.json()["plan"] == "pro"
    assert upgrade_pro.json()["appointments_limit"] is None
    assert upgrade_pro.json()["price"] == 29

    # 6. Cancel/downgrade back to free
    cancel_resp = await client.post(
        "/api/v1/billing/cancel",
        headers=headers,
    )
    assert cancel_resp.status_code == 200
    assert cancel_resp.json()["plan"] == "free"
    assert cancel_resp.json()["appointments_limit"] == 15
    assert cancel_resp.json()["price"] == 0


@pytest.mark.asyncio
async def test_billing_invalid_plan_rejected(client: AsyncClient):
    """Test that upgrading to an invalid plan is rejected."""
    reg_resp = await client.post(
        "/api/v1/auth/register",
        json={
            "name": "Invalid Plan Shop",
            "timezone": "UTC",
            "currency": "USD",
            "owner_name": "Invalid Owner",
            "owner_email": "invalid_plan@example.com",
            "password": "Password12345!",
        },
    )
    token = reg_resp.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Try upgrading to a non-existent plan
    invalid_resp = await client.post(
        "/api/v1/billing/upgrade",
        headers=headers,
        json={"plan": "enterprise", "cardholder_name": "Invalid Owner"},
    )
    assert invalid_resp.status_code == 400
    assert "Invalid plan" in invalid_resp.json()["detail"]
