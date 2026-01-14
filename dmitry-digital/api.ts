import { ProjectItem } from './types';

// Базовый URL вашего API
const BASE_URL = 'http://127.0.0.1:8000/dmitriy-digital/client';

export interface ApplicationData {
  name: string;
  phone: string;
  email: string;
  // Эти поля используются только для валидации на клиенте
  policyPrivacy?: boolean;
  policyData?: boolean;
}

export const api = {
  // Получить список проектов
  getProjects: async (): Promise<ProjectItem[]> => {
    try {
      const response = await fetch(`${BASE_URL}/all/project`);
      if (!response.ok) throw new Error('Failed to fetch projects');
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      // Если API недоступен, возвращаем пустой массив. 
      // Компонент Projects.tsx сам подставит статические данные как запасной вариант.
      return []; 
    }
  },

  // Отправить заявку
  sendApplication: async (data: ApplicationData): Promise<void> => {
    // Бэкенд ждет модель Application(name, phone, email).
    // Формируем payload, исключая галочки согласий (они проверяются на клиенте).
    const payload = {
        name: data.name,
        phone: data.phone,
        email: data.email
    };

    const response = await fetch(`${BASE_URL}/create/application`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to send application');
    }
  }
};