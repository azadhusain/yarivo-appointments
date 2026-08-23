"""Async SQLAlchemy engine, session factory, and Base.

All datetimes are stored as TIMESTAMPTZ (UTC) in PostgreSQL.
The engine is created once and reused; a session factory is used per-request.

If PostgreSQL is unreachable or authentication fails (e.g. local dev without Docker),
the app automatically falls back to a local SQLite database so the API remains
usable for development and testing.
"""
import logging
from collections.abc import AsyncGenerator

from sqlalchemy import text
from sqlalchemy.ext.asyncio import (
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)
from sqlalchemy.orm import DeclarativeBase

from app.core.config import settings

logger = logging.getLogger(__name__)


class Base(DeclarativeBase):
    """Declarative base for all ORM models."""


def _create_engine():
    """Create an async engine."""
    url = settings.DATABASE_URL
    return create_async_engine(
        url,
        echo=False,
        pool_pre_ping=True,
    )


engine = _create_engine()

async_session_factory = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False,
)


async def init_db():
    """Verify DB connection on startup, falling back to SQLite if PostgreSQL fails."""
    global engine, async_session_factory
    if engine.url.drivername.startswith("sqlite"):
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
        return

    try:
        async with engine.begin() as conn:
            await conn.execute(text("SELECT 1"))
    except Exception as e:
        logger.warning(
            "PostgreSQL connection failed (%s). Falling back to local SQLite database (app.db)",
            e,
        )
        await engine.dispose()
        engine = create_async_engine(
            "sqlite+aiosqlite:///./app.db",
            echo=False,
        )
        async_session_factory = async_sessionmaker(
            bind=engine,
            class_=AsyncSession,
            expire_on_commit=False,
            autoflush=False,
        )
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """FastAPI dependency that yields a database session per request."""
    async with async_session_factory() as session:
        yield session