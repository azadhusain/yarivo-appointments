# ARCHITECTURE — Appointment Booking SaaS

**Stage:** STAGE 1 — Technical Architecture
**Status:** Draft for review
**Version:** 1.0.0

This document defines the overall system architecture, component boundaries, tenant isolation strategy, authentication/authorization, security, email/payment abstractions, and deployment strategy. It is the blueprint that STAGE 2+ will implement.

---

## 1. Architectural Principles

1. **Multi-tenant isolation is #1** — A user must never access another business's data. Isolation is enforced at the database, service, and API layers.
2. **Separate responsibilities** — Frontend, backend, database, and background jobs are deployed independently.
3. **Timezone correctness** — All appointments are stored in UTC; display is always in the business's timezone. The server timezone is never assumed.
4. **Never trust the frontend** — All authorization and business rules are enforced server-side.
5. **Payment code is isolated** — Stripe is behind an abstraction so another provider can be added later.
6. **Email delivery is abstracted** — Business logic depends on an interface, not a specific provider.
7. **Pricing is configurable** — Subscription plans live in configuration, not hard-coded logic.
8. **MVP-focused** — Future features (SMS, WhatsApp, deposits, analytics, multi-location) are designed for extensibility but not built now.

---

## 2. High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client                               │
│  Public Booking Page (no auth)     Business Dashboard (auth)│
│  Next.js / React / TS / Tailwind   Same Next.js app         │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS / REST
┌──────────────────────────▼──────────────────────────────────┐
│                     Backend (FastAPI)                        │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────────────┐ │
│  │ Auth         │ │ Tenant Guard │ │ Business domain      │ │
│  │ (JWT/cookie) │ │ (middleware) │ │ services/authz       │ │
│  └──────────────┘ └──────────────┘ └──────────────────────┘ │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Appointment Engine (availability, conflict-free)    │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌─────────────┐ ┌──────────────┐ ┌─────────────────────┐ │
│  │ Email iface │ │ Payment iface│ │ Background jobs     │ │
│  └──────┬──────┘ └──────┬───────┘ └─────────┬───────────┘ │
└─────────┼───────────────┼───────────────────┼─────────────┘
          │               │                   │
┌─────────▼──────┐ ┌──────▼───────┐  ┌────────▼──────────┐
│ Email Provider │ │ Stripe       │  │ Background Worker │
│ (Resend/SES/..)│ │ (webhooks)   │  │ (Celery/worker)   │
└────────────────┘ └──────────────┘  └───────────────────┘
┌─────────────────────────────────────────────────────────┐
│                    PostgreSQL                            │
│   Multi-tenant tables with business_id isolation        │
└─────────────────────────────────────────────────────────┘
```

---

## 3. Components

### 3.1 Frontend (Next.js)
- **Next.js 14+ (App Router) + React + TypeScript + Tailwind CSS.**
- Two surfaces in one app:
  - **Public booking pages** (`/book/[slug]`) — no authentication, mobile-first.
  - **Business dashboard** (`/dashboard/...`) — authenticated, protected routes.
- Strict TypeScript (Rule 6).
- Client components for interactivity; server components where possible.
- API calls via a typed API client. No business logic in the frontend.

### 3.2 Backend (FastAPI)
- **Python 3.12 + FastAPI + Pydantic v2 + SQLAlchemy 2.0 (async).**
- REST API with typed request/response models.
- Layered structure:
  - `routers/` — HTTP endpoints (thin).
  - `services/` — business logic (availability engine, auth, bookings).
  - `repositories/` / data access — SQLAlchemy queries.
  - `models/` — SQLAlchemy ORM models.
  - `schemas/` — Pydantic schemas.
  - `core/` — config, security, tenant guard, exceptions.
  - `integrations/` — email + payment abstraction implementations.
- **Appointment Engine** is a dedicated service module with thorough tests (STAGE 6).

### 3.3 Database (PostgreSQL)
- Single PostgreSQL database with tenant isolation via `business_id` on all tenant-owned tables.
- Row-level security (RLS) as defense-in-depth plus application-level scoping.
- All timestamps stored in UTC (`timestamptz`).
- See `DATABASE.md` for the full model.

### 3.4 Background Jobs
- A worker process (Celery) for async tasks: sending emails, reminders, and webhook processing.
- Decoupled so it can be deployed independently.

---

## 4. Multi-Tenancy & Tenant Isolation

**Strategy: Shared schema, isolated rows + RLS.**

- Every tenant-scoped table has a `business_id` column indexed and part of every query.
- All routes that touch tenant data derive `business_id` from the authenticated user (never from the client).
- **Row-Level Security (RLS)** is enabled on tenant tables as defense-in-depth: even if a query omits the filter or a bug slips in, RLS rejects cross-tenant access.
- Public booking endpoints scope strictly by the public `slug` (looked up server-side) and never expose another business's data.
- **Rule:** Never trust IDs from the frontend. Always resolve the owning `business_id` server-side and verify it matches the authenticated user.

---

## 5. Authentication & Authorization

### 5.1 Authentication (business users)
- **JWT access token + refresh token** stored in secure, `httpOnly`, `SameSite` cookies (CSRF-safe) for the dashboard.
- Passwords hashed with **bcrypt/argon2**.
- Public booking endpoints require **no** authentication.

### 5.2 Authorization (roles)
Roles: `OWNER`, `ADMIN`, `STAFF`.

| Action | OWNER | ADMIN | STAFF |
|--------|:-----:|:-----:|:-----:|
| Manage subscription, billing, delete business | ✅ | ❌ | ❌ |
| Manage settings, hours, users | ✅ | ✅ | ❌ |
| Manage services, staff | ✅ | ✅ | ❌ |
| View/create/cancel appts | ✅ | ✅ | ✅ |
| Manage customers | ✅ | ✅ | ✅ |

- A dependency/guard maps each endpoint to allowed roles.
- Tenant guard ensures the authenticated user's `business_id` matches the resource's `business_id`.

---

## 6. Security Strategy

- **Auth:** JWT in `httpOnly` + `SameSite` cookies; `Secure` flag in production.
- **Password hashing:** bcrypt/argon2.
- **Authorization:** server-side checks on every request; tenant guard + role guard.
- **Tenant isolation:** RLS + application-level scoping.
- **Input validation:** Pydantic on all endpoints; strict types.
- **SQL injection:** SQLAlchemy parameterized queries only.
- **XSS:** React escapes by default; Tailwind/Next sanitization; CSP headers.
- **CSRF:** `SameSite` cookies + CSRF token for state-changing requests.
- **Rate limiting:** public booking endpoints (e.g., slowapi) to prevent spam/abuse.
- **Secure headers:** CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy.
- **IDOR prevention:** verify ownership on every request; never expose cross-tenant IDs.
- **Appointment spam protection:** rate limiting + optional email verification of customer.
- **Audit logging:** log important actions (create/cancel/reschedule, plan changes, delete).
- **Secrets:** all via environment variables; never committed to Git.

---

## 7. Email Abstraction

Business logic depends on an interface, not a provider.

```python
# interface (integrations/email/base.py)
class EmailProvider(Protocol):
    async def send(self, message: EmailMessage) -> None: ...
```

- Concrete providers: one for the MVP transactional provider (Resend / Postmark / SES / SendGrid).
- Template rendering is separate from transport.
- Called by background jobs / services for: booking confirmation, cancellation, rescheduling, reminders.

---

## 8. Payment Abstraction

Payment code is isolated behind an interface so Stripe can be swapped later.

```python
# interface (integrations/payment/base.py)
class PaymentProvider(Protocol):
    async def create_checkout(self, business, plan) -> CheckoutSession: ...
    async def handle_webhook(self, raw_body, signature) -> WebhookEvent: ...
    async def get_subscription_status(self, business) -> SubscriptionStatus: ...
```

- Stripe is the MVP implementation.
- **Stripe webhooks are the source of truth** for subscription status — never trust the frontend.
- Subscription data is persisted in the `Subscription` model.

---

## 9. Background Jobs

- **Celery** worker + broker (Redis) for async duties.
- Primary MVP jobs:
  - Send booking confirmation email.
  - Send cancellation/rescheduling emails.
  - (Later) send reminders.
- Jobs are idempotent where possible to avoid duplicate emails.

---

## 10. Configuration & Environment

All secrets and configuration via environment variables, with a typed settings object (Pydantic Settings).

Key variables (never committed):
- `DATABASE_URL`, `REDIS_URL`
- `JWT_SECRET`, `JWT_REFRESH_SECRET`
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_*`
- `EMAIL_PROVIDER`, `EMAIL_*` (API key, from address)
- `APP_URL`, `PUBLIC_BASE_URL`
- `ENVIRONMENT` (development/production)

A `.env.example` is committed with placeholders; real `.env` is gitignored.

---

## 11. Deployment Strategy

Components deploy independently:
- **Frontend:** Next.js — Vercel or a Docker container behind a CDN.
- **Backend:** FastAPI — Docker container (e.g., Railway, Render, Fly.io, or a VPS).
- **Database:** PostgreSQL — managed (e.g., RDS, Railway, Render) with backups.
- **Background worker:** Celery container + Redis.
- **HTTPS:** terminated at the reverse proxy / platform.
- **Migrations:** Alembic applied on deploy.
- **Monitoring:** structured logging + error tracking (e.g., Sentry) + health endpoints.

---

## 12. Repository Structure (Target)

```
appointment-saas/
├── frontend/                 # Next.js app
│   ├── app/
│   │   ├── book/[slug]/      # public booking flow
│   │   └── dashboard/        # business dashboard (protected)
│   ├── components/
│   ├── lib/                  # API client, types
│   └── ...
├── backend/                  # FastAPI app
│   ├── app/
│   │   ├── main.py
│   │   ├── core/             # config, security, tenant guard
│   │   ├── models/           # SQLAlchemy models
│   │   ├── schemas/          # Pydantic schemas
│   │   ├── routers/          # REST endpoints
│   │   ├── services/         # appointment engine, auth, bookings
│   │   ├── repositories/     # data access
│   │   └── integrations/     # email, payment abstractions
│   ├── alembic/              # migrations
│   ├── tests/
│   └── ...
├── docs/                     # architecture documents
└── README.md
```

---

## 13. Key Architectural Decisions (ADRs)

| # | Decision | Rationale |
|---|----------|-----------|
| ADR-1 | Shared schema + RLS multi-tenancy | Simpler than schema-per-tenant at MVP scale, with strong isolation via RLS + app scoping |
| ADR-2 | Store timestamps in UTC (`timestamptz`) | Correct DST handling; convert to business tz for display |
| ADR-3 | Payment behind interface | Swap Stripe for another provider later without touching business logic |
| ADR-4 | Email behind interface | Swap provider; keep templates separate |
| ADR-5 | JWT in httpOnly cookies | Mitigates XSS token theft; CSRF handled via SameSite + tokens |
| ADR-6 | Celery for async jobs | Decouples email/reminder sending; independent deploy |
| ADR-7 | Config-driven subscription plans | Pricing changeable without code changes |
| ADR-8 | FastAPI + SQLAlchemy async | High-concurrency-safe booking writes; typed with Pydantic |

---

## 14. Open Questions & Defaults

- **Email provider:** Default to **Resend** (simple API) unless a preference exists; abstraction makes change trivial.
- **Deployment:** Default to **Docker Compose for local + a container platform (Railway/Render) for prod**; confirm at STAGE 2/12.
- **Background jobs:** Celery + Redis used from the start to keep email sending async and avoid blocking booking requests.
- **Currency:** Euro (€) default for MVP; single currency per business.

Next: `DATABASE.md` (ERD, constraints, indexes, timezone handling) and `API.md` (full REST spec).
