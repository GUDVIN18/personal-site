import uvicorn
from asgi_correlation_id import CorrelationIdMiddleware
from loguru import logger as log

from fastapi import Depends, FastAPI
from fastapi.security import APIKeyHeader
from fastapi.exceptions import RequestValidationError
from starlette.middleware.base import BaseHTTPMiddleware
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware
from api.router import main_router


app = FastAPI(
    title="Microservice Dmitriy Digital data API methods",
    version="0.1.0",
    openapi_tags=[{"name": "Dmitriy Digital", "description": "INFO site"}],
)
# app.mount("/vpn/qrcodes", StaticFiles(directory="vpn/qrcodes"), name="qrcodes")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(
    CorrelationIdMiddleware,
    header_name="X-Request-ID",
)

app.include_router(main_router)


if __name__ == "__main__":
    log.info("Starting debug uvicorn")
    uvicorn.run(
        "main:app",
        host='0.0.0.0',
        port=9001,
        reload=True,
        workers=1,
        log_level='debug',
    )
    log.info("Uvicorn stopped")
