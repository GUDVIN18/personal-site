from typing import List
from fastapi import APIRouter, Depends, Path, status, Body
from fastapi_restful.cbv import cbv
from loguru import logger as log
from api.site_dd.resources.crud.crud import SiteCrud
from api.site_dd.resources.exceptions import *
from api.site_dd.resources.schemas import SuccessResponse, Project, Application
from uuid import UUID

client_router = APIRouter()


@cbv(client_router)
class SiteRouter:
    @client_router.post(
        "/create/project",
        response_model=SuccessResponse,
        status_code=200,
        name="Создать Новый проект",
    )
    async def create(self, data: Project):
        return await SiteCrud.create(
            **data.model_dump()
        )
    
    @client_router.get(
        "/all/project",
        response_model=List[Project],
        status_code=200,
        name="Получить все проекты",
    )
    async def get_projects(self):
        return await SiteCrud.get_project_all()
    

    @client_router.get(
        "/all/application",
        response_model=List[Application],
        status_code=200,
        name="Получить все заявки",
    )
    async def get_applications(self):
        return await SiteCrud.get_application_all()

    @client_router.post(
        "/create/application",
        response_model=SuccessResponse,
        status_code=200,
        name="Создать заявку",
    )
    async def create_application(self, data: Application):
        return await SiteCrud.create_application(**data.model_dump())
    