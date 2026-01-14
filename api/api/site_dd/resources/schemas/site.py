from pydantic import BaseModel, Field
from typing import Optional, Any, List


class Project(BaseModel):
    id: Optional[int] = None
    title: str
    description: str
    tags: List[str]
    image: str # Ссылка на картинку
    link: Optional[str] = None

class SuccessResponse(BaseModel):
    status: int = 200
    message: str

class Application(BaseModel):
    name: str
    phone: str
    email: str