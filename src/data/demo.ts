import type { BusinessProfile, Transaction } from "../types";

export const demoBusiness: BusinessProfile = {
  name: "Maya Foods",
  category: "Food & Processing",
  location: "Malda, West Bengal",
  monthlyRevenue: 84000,
  monthlyExpenses: 53500,
  savings: 112000,
  debt: 38000,
  goal: "Increase revenue"
};

export const demoTransactions: Transaction[] = [
  {id:"1",type:"income",category:"Sales",amount:28000,date:"2026-08-05",description:"Weekly local sales"},
  {id:"2",type:"expense",category:"Raw materials",amount:14500,date:"2026-08-07",description:"Ingredients and packaging"},
  {id:"3",type:"income",category:"Sales",amount:31000,date:"2026-08-14",description:"Retail orders"},
  {id:"4",type:"expense",category:"Transport",amount:6200,date:"2026-08-16",description:"Delivery and market travel"},
  {id:"5",type:"income",category:"Sales",amount:25000,date:"2026-08-22",description:"Festival-season orders"},
  {id:"6",type:"expense",category:"Rent",amount:8500,date:"2026-08-24",description:"Workshop rent"},
  {id:"7",type:"expense",category:"Marketing",amount:4300,date:"2026-08-26",description:"Local promotion"}
];

export const monthly = [
  {month:"Apr", income:61000, expense:46000, profit:15000},
  {month:"May", income:69000, expense:48500, profit:20500},
  {month:"Jun", income:74000, expense:50200, profit:23800},
  {month:"Jul", income:79000, expense:52100, profit:26900},
  {month:"Aug", income:84000, expense:53500, profit:30500}
];
