"""Basic smoke tests for the application factory and health endpoint."""
from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_endpoint() -> None:
    """The /health endpoint should return ok."""
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_app_title_from_config() -> None:
    """App title should be configurable."""
    assert app.title  # non-empty
