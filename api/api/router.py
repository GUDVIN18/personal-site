from fastapi import APIRouter
from api.site_dd.routers import client_router

main_router = APIRouter()


main_router.include_router(client_router, tags=["Site Dmitriy Digital Logic"], prefix="/dmitriy-digital/client")