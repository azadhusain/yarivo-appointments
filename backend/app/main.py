"""Application factory and global setup."""
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import models so they register on Base.metadata (needed for Alembic).
from app import models  # noqa: F401
from app.core.config import settings
from app.core.database import engine, init_db
from app.routers import (
    appointments,
    auth,
    availability,
    billing,
    business,
    customers,
    health,
    services,
    staff,
)


@asynccontextmanager
async def lifespan(application: FastAPI):
    """Initialize database connection and tables on startup."""
    await init_db()
    yield
    await engine.dispose()


def create_app() -> FastAPI:
    """Create and configure the FastAPI application."""
    application = FastAPI(
        title=settings.APP_NAME,
        version=settings.APP_VERSION,
        debug=settings.DEBUG,
        docs_url="/docs" if not settings.is_production else None,
        redoc_url=None,
        lifespan=lifespan,
    )

    # CORS
    application.add_middleware(
        CORSMiddleware,
        allow_origins=list(
            set(
                settings.cors_origins_list
                + [
                    "http://localhost:3000",
                    "http://127.0.0.1:3000",
                    "http://localhost:3001",
                    "http://127.0.0.1:3001",
                    "http://localhost:8000",
                    "http://127.0.0.1:8000",
                ]
            )
        ),
        allow_origin_regex=r"^https?://(localhost|127\.0\.0\.1)(:\d+)?$",
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Routers
    application.include_router(health.router, prefix="/api/v1", tags=["health"])
    application.include_router(auth.router, prefix="/api/v1")
    application.include_router(business.router, prefix="/api/v1")
    application.include_router(staff.router, prefix="/api/v1")
    application.include_router(services.router, prefix="/api/v1")
    application.include_router(customers.router, prefix="/api/v1")
    application.include_router(availability.router, prefix="/api/v1")
    application.include_router(appointments.router, prefix="/api/v1")
    application.include_router(billing.router, prefix="/api/v1")

    return application


app = create_app()
