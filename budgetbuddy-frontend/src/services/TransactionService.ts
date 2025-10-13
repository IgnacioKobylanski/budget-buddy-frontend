import api from './api';
import type { Transaction } from '../types/Transaction';
import type { TransactionRequestDTO } from '../types/TransactionRequestDTO';

export const TransactionService = {
  getAll: async (): Promise<Transaction[]> => {
    const response = await api.get<Transaction[]>('/transactions');
    return response.data;
  },

  getById: async (id: number): Promise<Transaction> => {
    const response = await api.get<Transaction>(`/transactions/${id}`);
    return response.data;
  },

  create: async (transaction: TransactionRequestDTO): Promise<Transaction> => {
    const response = await api.post<Transaction>('/transactions', transaction);
    return response.data;
  },

  update: async (id: number, transaction: TransactionRequestDTO): Promise<Transaction> => {
    const response = await api.put<Transaction>(`/transactions/${id}`, transaction);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/transactions/${id}`);
  },
};
