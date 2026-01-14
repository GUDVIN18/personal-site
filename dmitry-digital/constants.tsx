import { TechItem, ServiceItem, ProjectItem } from './types';
import { 
  Bot, 
  BrainCircuit, 
  Globe
} from 'lucide-react';

export const TECH_STACK: TechItem[] = [
  {
    id: 'python',
    name: 'Python',
    description: 'Основной язык для ML, Data Science и сложных бэкенд-систем.',
    category: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    description: 'Платформа с открытым исходным кодом для машинного обучения от Google.',
    category: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
  },
  {
    id: 'pytorch',
    name: 'PyTorch',
    description: 'Фреймворк для глубокого обучения, предпочтительный для исследований и продакшена.',
    category: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    description: 'Современный, быстрый веб-фреймворк для создания API на Python.',
    category: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'
  },
  {
    id: 'django',
    name: 'Django',
    description: 'Высокоуровневый веб-фреймворк на Python для быстрой и безопасной разработки.',
    category: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
  },
  {
    id: 'docker',
    name: 'Docker',
    description: 'Контейнеризация приложений для обеспечения идентичности сред разработки и продакшена.',
    category: 'DevOps',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  },
  {
    id: 'kubernetes',
    name: 'K8s',
    description: 'Оркестрация контейнеров для автоматизации развертывания и масштабирования.',
    category: 'DevOps',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    description: 'Самая продвинутая реляционная база данных с открытым кодом.',
    category: 'Database',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    id: 'redis',
    name: 'Redis',
    description: 'Хранилище структур данных в памяти, используемое как БД, кэш и брокер сообщений.',
    category: 'Database',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
  },
  {
    id: 'pandas',
    name: 'Pandas',
    description: 'Библиотека для анализа и манипулирования данными высокого уровня.',
    category: 'Backend',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Искусственный Интеллект',
    description: 'Разработка нейронных сетей, автоматизация анализа данных и внедрение LLM-решений в ваш бизнес.',
    icon: BrainCircuit,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Веб-Сервисы',
    description: 'Комплексная разработка SaaS-платформ, корпоративных порталов и высоконагруженных API.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Умные Боты',
    description: 'Создание интеллектуальных диалоговых систем и торговых алгоритмов для мессенджеров и бирж.',
    icon: Bot,
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'БКС Инвестиции',
    description: 'ИИ по замене лиц (Faceswap) для интерактивных рекламных кампаний и персонализированного контента.',
    tags: ['ИИ', 'Faceswap', 'Fintech'],
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    title: 'ТНТ проект Жыызнь',
    description: 'Специальный проект для ТНТ с внедрением генеративных технологий и автоматизации медиа-контента.',
    tags: ['Медиа', 'MediaTech'],
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'
  },
  {
    title: 'image to 3D (ИИ)',
    description: 'Сервис на базе глубокого обучения для мгновенного преобразования 2D фотографий в детализированные 3D модели.',
    tags: ['3D AI', 'CV'],
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
  }
];