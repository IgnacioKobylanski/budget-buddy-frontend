import api from './api';
import type { BudgetUser } from '../types/User';

export const UserService = {
  getAll: async (): Promise<BudgetUser[]> => {
    const response = await api.get<BudgetUser[]>('/users');
    return response.data;
  },

  getById: async (id: number): Promise<BudgetUser> => {
    const response = await api.get<BudgetUser>(`/users/${id}`);
    return response.data;
  },

  create: async (user: Partial<BudgetUser>): Promise<BudgetUser> => {
    const response = await api.post<BudgetUser>('/users', user);
    return response.data;
  },

  update: async (id: number, user: Partial<BudgetUser>): Promise<BudgetUser> => {
    const response = await api.put<BudgetUser>(`/users/${id}`, user);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/users/${id}`);
  },
};
