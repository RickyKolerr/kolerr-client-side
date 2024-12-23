import { KOLCategory } from "./slot";

export interface Campaign {
  id: number;
  name: string;
  status: 'Active' | 'Pending' | 'Completed';
  progress: number;
  kols: number;
  deadline: string;
  budget: string;
  engagement?: number;
  targetEngagement?: number;
  roi: string;
  category: string;
  categories: KOLCategory[];
  minFollowers: number;
  maxBudgetPerKOL: number;
  slots: Array<{
    id: number;
    budget?: string;
  }>;
}