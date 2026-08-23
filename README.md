# Appointment Booking SaaS Platform

A production-ready, multi-tenant appointment-booking SaaS platform for small appointment-based businesses (beauty salons, barbers, nail technicians, massage therapists, personal trainers, and similar).

Customers book appointments online for free using a public booking URL. Business owners pay a monthly subscription to manage their business, staff, services, availability, and appointments.

## Development Roadmap

| Stage | Focus | Output |
|-------|-------|--------|
| **STAGE 0** | Product Validation | `docs/PRODUCT_REQUIREMENTS.md` |
| STAGE 1 | Technical Architecture | `docs/ARCHITECTURE.md`, `docs/DATABASE.md`, `docs/API.md` |
| STAGE 2 | Project Setup | Next.js frontend + FastAPI backend + PostgreSQL |
| STAGE 3 | Authentication | Business registration, login, roles |
| STAGE 4 | Business Setup | Profile, slug, timezone, hours |
| STAGE 5 | Services & Staff | Services, staff, availability |
| STAGE 6 | Appointment Engine | Core availability algorithm + tests |
| STAGE 7 | Public Booking | `/book/{slug}` mobile-first flow |
| STAGE 8 | Appointment Mgmt | Calendar, confirm, cancel, reschedule |
| STAGE 9 | Notifications | Email confirmation/reminders |
| STAGE 10 | Payments | Stripe subscriptions |
| STAGE 11 | Testing | Comprehensive automated tests |
| STAGE 12 | Deployment | Production-ready deployment |

Each stage is completed incrementally and confirmed before moving to the next.

## Repository Layout

```
appointment-saas/
├── backend/          # FastAPI + SQLAlchemy + Pydantic (Python 3.12)
├── frontend/         # Next.js + React + TypeScript + Tailwind
├── docs/             # Architecture/requirements documents
├── docker-compose.yml # PostgreSQL + Redis for local dev
└── README.md
```

## Getting Started (STAGE 2)

### 1. Start infrastructure (PostgreSQL + Redis)

From the project root:

```bash
docker compose up -d
```

This starts PostgreSQL on `localhost:5432` and Redis on `localhost:6379`.

### 2. Backend (FastAPI)

```bash
cd backend
python -m venv .venv
# Windows:
.\.venv\Scripts\activate
# macOS/Linux:
# source .venv/bin/activate

pip install -r requirements.txt -r requirements-dev.txt
cp .env.example .env        # then edit .env with real values
python -m pytest            # run tests
uvicorn app.main:app --reload --port 8000
```

- API docs (Swagger): http://localhost:8000/docs
- Health check: http://localhost:8000/api/v1/health

### 3. Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

- App: http://localhost:3000

### 4. Linting & Formatting

```bash
# Backend (ruff + black via pyproject.toml)
cd backend
.\.venv\Scripts\ruff.exe check app tests
.\.venv\Scripts\black.exe --check app tests

# Frontend
cd frontend
npm run lint
```

## Technology Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Python, FastAPI, Pydantic, SQLAlchemy
- **Database:** PostgreSQL
- **Auth:** Secure business authentication (customers need no account)
- **Payments:** Stripe (isolated behind an abstraction)
- **Email:** Transactional email provider behind an abstraction
- **Deployment:** Independently deployable frontend, backend, database, background jobs
