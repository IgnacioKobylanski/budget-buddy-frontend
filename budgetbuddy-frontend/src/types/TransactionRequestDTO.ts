export interface TransactionRequestDTO {
  amount: number;
  type: 'INCOME' | 'EXPENSE';
  description?: string;
  date: string;
  categoryId: number;
  userId: number;
}