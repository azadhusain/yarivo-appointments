"""Pydantic schemas for authentication."""
import uuid

from pydantic import BaseModel


class TokenPair(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"


class RefreshRequest(BaseModel):
    refresh_token: str


class AuthUser(BaseModel):
    id: uuid.UUID
    business_id: uuid.UUID
    name: str
    email: str
    role: str


class ForgotPasswordRequest(BaseModel):
    email: str


class ResetPasswordRequest(BaseModel):
    email: str
    new_password: str
    reset_token: str | None = None


class MessageResponse(BaseModel):
    message: str