import type { Category } from "./Category";
import type { BudgetUser } from "./User";

export interface Transaction {
  id: number;
  amount: number;
  type: 'INCOME' | 'EXPENSE';
  description?: string;
  date: string;
  category: Category;
  user: BudgetUser;
  createdAt: string;
  updatedAt: string;
}