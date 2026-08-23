# DATABASE — Appointment Booking SaaS

**Stage:** STAGE 1 — Technical Architecture
**Status:** Draft for review
**Version:** 1.0.0

This document defines the database schema: entities, relationships, constraints, indexes, timezone handling, and tenant isolation. It refines the initial model from the master prompt with attention to data integrity, indexes, and concurrency.

---

## 1. Conventions

- **Database:** PostgreSQL 15+.
- **Timestamps:** All stored as `TIMESTAMPTZ` (UTC). Never store local time. Convert to the business timezone for display.
- **Money:** Stored as `NUMERIC(10,2)` (or integer cents) with a `currency` column. Avoid floating point.
- **Primary keys:** `BIGSERIAL` / `UUID`. We use `UUID` PKs for tenant-scoped tables to avoid enumeration and IDOR leakage.
- **Tenant isolation:** Every tenant-scoped table has `business_id` with a composite index. RLS is enabled.
- **Enums:** Use PostgreSQL `ENUM` types or `VARCHAR` with CHECK constraints. We use **CHECK constraints** for flexibility and easier migrations.
- **Soft delete vs hard delete:** Use `active`/`is_active` boolean flags for business-owned entities (services, staff) to preserve referential integrity. Customers/appointments use hard delete only after GDPR-safe flows.

---

## 2. Entity Relationship Overview

```
Business
├── users                 (OWNER/ADMIN/STAFF)
├── staff
│   └── staff_availability
├── services
├── customers
├── business_hours
├── appointments
│   ├── belongs_to customer
│   ├── belongs_to staff
│   └── belongs_to service
├── audit_logs
└── subscription
```

---

## 3. Entities

### 3.1 `business`
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| name | VARCHAR(255) NOT NULL | |
| slug | VARCHAR(100) NOT NULL UNIQUE | Used in public URL `/book/{slug}`; unique global |
| description | TEXT | |
| email | VARCHAR(255) | public contact |
| phone | VARCHAR(50) | |
| address | TEXT | |
| timezone | VARCHAR(100) NOT NULL | IANA name (e.g., `Europe/Berlin`) |
| currency | CHAR(3) NOT NULL DEFAULT 'EUR' | ISO 4217 |
| created_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |
| updated_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |

**Indexes:** unique on `slug`.

### 3.2 `users`
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| business_id | UUID FK NOT NULL | tenant |
| name | VARCHAR(255) NOT NULL | |
| email | VARCHAR(255) NOT NULL | unique per business |
| password_hash | VARCHAR(255) | for OWNER/ADMIN; STAFF may be null |
| role | VARCHAR(20) NOT NULL | CHECK in ('OWNER','ADMIN','STAFF') |
| created_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |
| updated_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |

**Indexes:** `(email)` unique across the platform (login), `(business_id)`.

### 3.3 `staff`
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| business_id | UUID FK NOT NULL | tenant |
| name | VARCHAR(255) NOT NULL | |
| email | VARCHAR(255) | optional |
| phone | VARCHAR(50) | |
| active | BOOLEAN NOT NULL DEFAULT true | soft-delete / deactivate |
| color | VARCHAR(7) | UI calendar color, optional |
| created_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |
| updated_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |

**Indexes:** `(business_id)`.

### 3.4 `services`
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| business_id | UUID FK NOT NULL | tenant |
| name | VARCHAR(255) NOT NULL | |
| description | TEXT | |
| duration_minutes | INT NOT NULL CHECK (>0) | |
| price | NUMERIC(10,2) NOT NULL DEFAULT 0 | |
| currency | CHAR(3) NOT NULL | |
| buffer_minutes_before | INT NOT NULL DEFAULT 0 | reserved for later |
| buffer_minutes_after | INT NOT NULL DEFAULT 0 | reserved for later |
| active | BOOLEAN NOT NULL DEFAULT true | |
| created_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |
| updated_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |

**Indexes:** `(business_id)`.

### 3.5 `customers`
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| business_id | UUID FK NOT NULL | tenant |
| name | VARCHAR(255) NOT NULL | |
| email | VARCHAR(255) NOT NULL | |
| phone | VARCHAR(50) | |
| notes | TEXT | |
| created_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |
| updated_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |
| deleted_at | TIMESTAMPTZ | for GDPR deletion |

**Indexes:** `(business_id, email)`, `(business_id)`.

### 3.6 `business_hours`
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| business_id | UUID FK NOT NULL | tenant |
| day_of_week | SMALLINT NOT NULL | 0=Monday … 6=Sunday (ISO) |
| is_open | BOOLEAN NOT NULL DEFAULT false | |
| opening_time | TIME WITHOUT TIME ZONE | local business time |
| closing_time | TIME WITHOUT TIME ZONE | local business time |

**Indexes:** `(business_id, day_of_week)`.
**Constraint:** one row per `(business_id, day_of_week)` UNIQUE.

### 3.7 `staff_availability`
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| staff_id | UUID FK NOT NULL | |
| day_of_week | SMALLINT NOT NULL | 0=Monday … 6=Sunday |
| is_available | BOOLEAN NOT NULL DEFAULT false | |
| start_time | TIME WITHOUT TIME ZONE | local business time |
| end_time | TIME WITHOUT TIME ZONE | local business time |

**Indexes:** `(staff_id, day_of_week)`.
**Constraint:** one row per `(staff_id, day_of_week)` UNIQUE.

### 3.8 `appointments`
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| business_id | UUID FK NOT NULL | tenant |
| customer_id | UUID FK NOT NULL | |
| staff_id | UUID FK | nullable (any-staff booking) |
| service_id | UUID FK NOT NULL | |
| start_time | TIMESTAMPTZ NOT NULL | UTC |
| end_time | TIMESTAMPTZ NOT NULL | UTC |
| status | VARCHAR(20) NOT NULL | CHECK in ('PENDING','CONFIRMED','CANCELLED','COMPLETED','NO_SHOW') |
| customer_notes | TEXT | |
| created_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |
| updated_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |

**Indexes:**
- `(business_id, start_time)` — calendar/list queries.
- `(staff_id, start_time, end_time)` — availability conflict checks.
- `(customer_id)`.

**Constraints:**
- `CHECK (end_time > start_time)`.
- **Double-booking prevention:** a partial **Exclusion Constraint** (via `btree_gist`) on `(staff_id, tstzrange(start_time, end_time))` with `&&` operator, `WHERE status <> 'CANCELLED'`, to prevent overlapping appointments for the same staff at the database level. This is the authoritative guard against double booking.

### 3.9 `subscription`
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| business_id | UUID FK NOT NULL UNIQUE | one active subscription per business |
| provider | VARCHAR(50) NOT NULL | 'stripe' |
| provider_customer_id | VARCHAR(255) | |
| provider_subscription_id | VARCHAR(255) | |
| plan | VARCHAR(50) NOT NULL | 'free','basic','pro' |
| status | VARCHAR(30) NOT NULL | 'active','trialing','past_due','canceled','unpaid' |
| current_period_start | TIMESTAMPTZ | |
| current_period_end | TIMESTAMPTZ | |
| created_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |
| updated_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |

**Indexes:** `(business_id)` unique, `(provider_subscription_id)`.

### 3.10 `audit_logs`
| Column | Type | Notes |
|--------|------|-------|
| id | UUID PK | |
| business_id | UUID FK | nullable for platform-wide |
| user_id | UUID FK | actor |
| action | VARCHAR(100) NOT NULL | e.g., 'appointment.create' |
| entity_type | VARCHAR(50) | |
| entity_id | UUID | |
| metadata | JSONB | |
| created_at | TIMESTAMPTZ NOT NULL DEFAULT now() | |

**Indexes:** `(business_id, created_at)`.

---

## 4. Relationships Summary

- `users.business_id → business.id`
- `staff.business_id → business.id`
- `services.business_id → business.id`
- `customers.business_id → business.id`
- `business_hours.business_id → business.id`
- `staff_availability.staff_id → staff.id`
- `appointments.business_id → business.id`
- `appointments.customer_id → customers.id`
- `appointments.staff_id → staff.id`
- `appointments.service_id → services.id`
- `subscription.business_id → business.id`
- `audit_logs.business_id → business.id`

All tenant-scoped FKs cascade on business deletion (or are restricted and require explicit cleanup). For GDPR, customer rows support soft-delete via `deleted_at`.

---

## 5. Timezone Handling

- All `start_time`/`end_time`/`created_at`/`updated_at` are `TIMESTAMPTZ` stored in UTC.
- Business/opening hours are stored as **local wall-clock times** (`TIME WITHOUT TIME ZONE`) because they are repeating weekly schedules tied to the business's timezone.
- To compute concrete UTC datetimes for a given local date:
  1. Resolve the business IANA timezone (`business.timezone`).
  2. Combine the local date with opening `TIME` → local `datetime`.
  3. Use `zoneinfo` to convert local → UTC (this correctly handles DST).
- **DST handling:** Since we convert local wall-clock → UTC using the business IANA tz, DST transitions are handled correctly. Ambiguous/non-existent times (spring-forward) are resolved by Python's zoneinfo with a documented policy (e.g., choose the earlier offset or skip).
- Display: convert UTC → business tz for the dashboard; public booking page shows times in the business's timezone (optionally with a customer tz selector later).

---

## 6. Data Integrity & Concurrency

1. **Double-booking prevention (database level):**
   - PostgreSQL **Exclusion Constraint** on `staff_id` with `tstzrange(start_time, end_time)` and `&&` (overlaps), excluding cancelled appointments.
   - This is the authoritative safeguard; application logic also checks, but the DB constraint is the final gate.
2. **Business hours / staff availability** are enforced at the application level (availability engine) since they are configurable policies, not hard constraints.
3. **Transactions:** Booking creation runs in a transaction; the availability check + insert happen atomically. On unique/exclusion violation, return a 409 Conflict.
4. **Isolation:** Use `READ COMMITTED` (default); the exclusion constraint makes concurrent overlapping inserts fail safely.

---

## 7. Migration Strategy

- **Alembic** for schema migrations.
- Migrations are applied automatically on deployment (STAGE 12).
- RLS policies are created in migrations (enable RLS + tenant policies on tenant tables).

---

## 8. Backup & Retention

- Managed PostgreSQL daily backups (STAGE 12).
- GDPR: customer data deletion via `deleted_at`; full export/erase capability to be implemented (flagged for legal review).

---

## 9. Open Questions & Defaults

- **PK type:** UUID chosen; confirm no preference for bigint.
- **Buffer time:** Columns reserved (`buffer_minutes_before/after`) but not used in MVP logic yet.
- **Staff required?** MVP allows booking with or without a specific staff member (any-staff). Confirm default: staff optional for booking.
- **Currency:** EUR default; single currency per business in MVP.

Next: `API.md` (full REST specification).
