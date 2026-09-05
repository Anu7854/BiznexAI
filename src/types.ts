export type TransactionType = "income" | "expense";
export type Transaction = {
  id: string; type: TransactionType; category: string; amount: number; date: string; description: string;
};
export type BusinessProfile = {
  name: string; category: string; location: string; monthlyRevenue: number; monthlyExpenses: number;
  savings: number; debt: number; goal: string;
};
