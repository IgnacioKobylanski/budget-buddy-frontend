import api from './api';
import type { Category } from '../types/Category';


export const CategoryService = {
  getAll: async (): Promise<Category[]> => {
    const response = await api.get<Category[]>('/categories');
    return response.data;
  },

  getById: async (id: number): Promise<Category> => {
    const response = await api.get<Category>(`/categories/${id}`);
    return response.data;
  },

  create: async (category: Partial<Category>): Promise<Category> => {
    const response = await api.post<Category>('/categories', category);
    return response.data;
  },

  update: async (id: number, category: Partial<Category>): Promise<Category> => {
    const response = await api.put<Category>(`/categories/${id}`, category);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/categories/${id}`);
  },
};
