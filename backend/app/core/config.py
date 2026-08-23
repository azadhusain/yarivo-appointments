"""Application configuration via Pydantic Settings.

All secrets and configuration come from environment variables (see .env.example).
Never hard-code secrets or per-environment values in code.
"""
from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Typed application settings loaded from environment / .env file."""

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
        extra="ignore",
    )

    # --- App ---
    ENVIRONMENT: str = "development"
    APP_NAME: str = "Yarivo Appointments API"
    APP_VERSION: str = "0.1.0"
    DEBUG: bool = True

    # --- Security ---
    JWT_SECRET: str = "change-me"
    JWT_REFRESH_SECRET: str = "change-me"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 30

    # --- Database ---
    DATABASE_URL: str = (
        "postgresql+asyncpg://app:app_password@localhost:5432/appointment_saas"
    )

    # --- Redis ---
    REDIS_URL: str = "redis://localhost:6379/0"

    # --- CORS ---
    CORS_ORIGINS: str = "http://localhost:3000"

    # --- Public booking ---
    PUBLIC_BASE_URL: str = "http://localhost:3000"

    # --- Email ---
    EMAIL_PROVIDER: str = "resend"
    RESEND_API_KEY: str = ""
    EMAIL_FROM: str = "Appointment Booking <no-reply@example.com>"

    # --- Stripe ---
    STRIPE_SECRET_KEY: str = ""
    STRIPE_WEBHOOK_SECRET: str = ""
    STRIPE_PRICE_FREE: str = ""
    STRIPE_PRICE_BASIC: str = ""
    STRIPE_PRICE_PRO: str = ""

    @property
    def cors_origins_list(self) -> list[str]:
        """Parse comma-separated CORS_ORIGINS into a list."""
        return [o.strip() for o in self.CORS_ORIGINS.split(",") if o.strip()]

    @property
    def is_production(self) -> bool:
        return self.ENVIRONMENT.lower() == "production"


@lru_cache
def get_settings() -> Settings:
    """Return a cached Settings instance."""
    return Settings()


settings = get_settings()
