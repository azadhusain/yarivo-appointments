0# API — Appointment Booking SaaS

**Stage:** STAGE 1 — Technical Architecture
**Status:** Draft for review
**Version:** 1.0.0

This document specifies the REST API: authentication, endpoints, request/response models, error handling, security, and the public booking flow. It implements the design principles (tenant isolation, validation, authorization, rate limiting).

---

## 1. Conventions

- **Base path:** `/api/v1`
- **Format:** JSON. Dates/times returned as ISO 8601 **UTC** with `Z` (e.g., `2025-06-01T09:00:00Z`). Local display handled by the client using `business.timezone`.
- **Auth:** Business dashboard endpoints use a JWT access token sent as a `httpOnly` cookie (`access_token`). Public booking endpoints need no auth.
- **Status codes:**
  - `200` OK · `201` Created · `204` No Content
  - `400` Bad Request (validation) · `401` Unauthorized · `403` Forbidden · `404` Not Found · `409` Conflict (e.g., double booking) · `429` Too Many Requests
- **Error envelope:**
  ```json
  { "error": { "code": "DOUBLE_BOOKING", "message": "Slot already taken", "fields": {} } }
  ```
- **Pagination:** list endpoints return `{ "items": [...], "total": n, "page": p, "page_size": s, "pages": m }`.
- **Rate limiting:** public booking endpoints limited (e.g., 30 req/min/IP); auth endpoints limited to prevent brute force.

---

## 2. Authentication

### POST `/api/v1/auth/register`
Register a business owner (creates Business + OWNER User + default empty hours).
**Body:**
```json
{
  "business_name": "ABC Beauty",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secret",
  "timezone": "Europe/Berlin",
  "currency": "EUR"
}
```
**201:** `{ "business": {...}, "user": {...} }` + sets cookie. Slug auto-generated from `business_name` (unique, sanitized).

### POST `/api/v1/auth/login`
**Body:** `{ "email": "...", "password": "..." }`
**200:** sets `access_token` cookie; returns `{ "user": {...} }`.

### POST `/api/v1/auth/logout`
**204:** clears cookie.

### GET `/api/v1/auth/me`
**200:** returns current authenticated user.

---

## 3. Business (authenticated)

### GET `/api/v1/business`
**200:** returns the authenticated user's business profile.

### PATCH `/api/v1/business`
Update name, description, email, phone, address, timezone, currency.
**200:** returns updated business.

### GET `/api/v1/business/slug` *(proposed)*
Check slug availability. `?slug=abc-beauty` → `200 { "available": true }`.

---

## 4. Business Hours (authenticated)

### GET `/api/v1/business/hours`
**200:** returns array of 7 entries (Mon–Sun) each `{ day_of_week, is_open, opening_time, closing_time }`.

### PUT `/api/v1/business/hours`
**Body:** array of up to 7 `BusinessHourInput`.
**200:** returns saved hours.

---

## 5. Services (authenticated)

### GET `/api/v1/services`
**200:** paginated list (optionally `?active=true`).

### POST `/api/v1/services`
**Body:** `{ "name", "description", "duration_minutes", "price", "active" }`
**201:** returns created service.

### PATCH `/api/v1/services/{id}`
Update fields. **200:** returns updated service.

### DELETE `/api/v1/services/{id}`
**204:** soft-delete (sets `active=false`).

---

## 6. Staff (authenticated)

### GET `/api/v1/staff`
**200:** paginated list.

### POST `/api/v1/staff`
**Body:** `{ "name", "email", "phone", }`
**201:** returns created staff.

### PATCH `/api/v1/staff/{id}`
**200:** returns updated staff.

### DELETE `/api/v1/staff/{id}`
**204:** soft-delete (`active=false`).

### GET `/api/v1/staff/{id}/availability`
**200:** returns 7-day availability array.

### PUT `/api/v1/staff/{id}/availability`
**Body:** array of up to 7 `StaffAvailabilityInput`.
**200:** returns saved availability.

---

## 7. Appointments (authenticated)

### GET `/api/v1/appointments`
Query params: `from`, `to`, `status`, `staff_id`, `page`, `page_size`.
**200:** paginated list.

### POST `/api/v1/appointments`
Create an appointment (e.g., manual walk-in or owner-created).
**Body:**
```json
{
  "customer_id": "uuid",
  "staff_id": "uuid",
  "service_id": "uuid",
  "start_time": "2025-06-01T09:00:00Z",
  "customer_notes": ""
}
```
`end_time` computed = `start_time + service.duration_minutes`. **Validation:** business hours, staff availability, conflict check. **201** on success; **409** if conflict.

### GET `/api/v1/appointments/{id}`
**200:** appointment detail (with customer, staff, service).

### PATCH `/api/v1/appointments/{id}`
Reschedule or update. Body: `{ "start_time", "status", "customer_notes" }`.
**200:** returns updated; **409** on conflict.

### POST `/api/v1/appointments/{id}/cancel`
**200:** sets status `CANCELLED`; triggers cancellation email.

### POST `/api/v1/appointments/{id}/confirm`
**200:** sets status `CONFIRMED`.

### POST `/api/v1/appointments/{id}/complete`
**200:** sets status `COMPLETED`.

### POST `/api/v1/appointments/{id}/no-show`
**200:** sets status `NO_SHOW`.

> All appointment endpoints verify `appointment.business_id == authenticated user's business_id`.

---

## 8. Customers (authenticated)

### GET `/api/v1/customers`
**200:** paginated list (search by name/email optional).

### GET `/api/v1/customers/{id}`
**200:** customer detail + appointment history.

### DELETE `/api/v1/customers/{id}` *(GDPR)*
**204:** marks deleted (anonymize/soft-delete per policy).

---

## 9. Public Booking (no auth) — source of truth for availability/creation

### GET `/api/v1/public/business/{slug}`
Returns public business info + active services + active staff + business hours + timezone.
**200:**
```json
{
  "business": { "name", "description", "phone", "address", "timezone", "currency", "slug" },
  "services": [ { "id", "name", "description", "duration_minutes", "price", "currency" } ],
  "staff": [ { "id", "name" } ]
}
```

### GET `/api/v1/public/business/{slug}/availability`
Returns available time slots for a service on a date.
**Query:** `?service_id=...&staff_id=...&date=2025-06-01`
**Behavior:**
- Resolve business timezone → local date → business hours.
- Filter staff availability (if staff selected; else union across active staff or any-staff).
- Block slots that overlap existing non-cancelled appointments.
- Respect service duration; ensure slot + duration fits within opening hours.
**200:**
```json
{
  "date": "2025-06-01",
  "timezone": "Europe/Berlin",
  "slots": [ "09:00", "09:30", "11:00" ]
}
```
> Times returned in **business local time** for clear display; conversion to/from UTC is done server-side.

### POST `/api/v1/public/business/{slug}/appointments`
Create a booking from the public flow (no auth). **Rate-limited.**
**Body:**
```json
{
  "service_id": "uuid",
  "staff_id": "uuid",
  "start_time": "2025-06-01T09:00:00Z",
  "customer": { "name": "...", "email": "...", "phone": "...", "notes": "" }
}
```
**Behavior:**
- Look up `business` by slug.
- Server-side validation: business open, staff available, no conflict, within future.
- Create/find `customer` by `(business_id, email)`.
- Create `appointment` (status `CONFIRMED` or `PENDING` per policy).
- Enqueue confirmation email (background job).
**201:**
```json
{
  "appointment": { "id", "start_time", "end_time", "status", "service": {...}, "staff": {...} },
  "message": "Booking confirmed"
}
```
**409:** `DOUBLE_BOOKING` if the slot is taken (DB exclusion/conflict).

---

## 10. Subscription & Payments (authenticated + webhooks)

### Plans (config-driven)
`GET /api/v1/plans`
**200:** returns configurable plans (free/basic/pro) with prices/limits — read from configuration, not hard-coded.

### POST `/api/v1/subscription/checkout`
Initiate Stripe checkout for a plan.
**Body:** `{ "plan": "basic" }`
**200:** `{ "checkout_url": "..." }`.

### GET `/api/v1/subscription`
**200:** returns current subscription status/plan.

### POST `/api/v1/subscription/cancel`
**200:** starts cancellation (Stripe handle).

### POST `/api/v1/webhooks/stripe`
Stripe webhook endpoint (raw body, signature-verified). Source of truth for subscription status.
**200:** `{ "received": true }`.

---

## 11. Authorization Matrix

Every authenticated endpoint runs through:
1. **Tenant guard** — resolve `business_id` from the user; scope all queries.
2. **Role guard** — per-role permissions (see ARCHITECTURE.md §5.2).

| Endpoint group | OWNER | ADMIN | STAFF |
|----------------|:-----:|:-----:|:-----:|
| Business, Hours, Subscription | ✅ | ✅ | ❌ |
| Services, Staff | ✅ | ✅ | ❌ |
| Appointments, Customers | ✅ | ✅ | ✅ |
| Webhooks (Stripe) | platform-verified, no user token | | |

---

## 12. Security Notes

- Never trust IDs from the client — always resolve ownership server-side.
- Public endpoints scoped strictly by `slug`, never return other tenants' data.
- Rate limiting on public booking + auth.
- All list queries paginated; deny large unconstrained fetches.
- Consistent error envelope; no stack traces leaked.
- Stripe webhook verifies signature; never trust frontend payment status.

---

## 13. Open Questions & Defaults

- **New booking status:** Default to `CONFIRMED` immediately on successful booking (simplest), with `PENDING` available later for manual-approval businesses. Confirm preference.
- **Slots interval:** Default slot step = 15 min (or derived from service duration). Confirm.
- **Future booking window:** Default allow booking up to ~60 days ahead; confirm.
- **Any-staff booking:** If no `staff_id` provided, availability = union across all active staff. Confirm allowed in MVP.

Next: **STAGE 2 — Project Setup** (Next.js + FastAPI + PostgreSQL scaffold).
