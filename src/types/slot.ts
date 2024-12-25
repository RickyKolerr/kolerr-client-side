export type KOLCategory = 
  | "Fashion"
  | "Tech"
  | "Beauty"
  | "Lifestyle"
  | "Food"
  | "Travel"
  | "Gaming"
  | "Sports"
  | "Entertainment";

export interface Slot {
  id: number;
  brandId: number;
  title: string;
  brand: string;
  status: "Open" | "Filled" | "Active" | "Completed";
  deadline: string;
  requirements: string;
  budget: string;
  category: KOLCategory;
  platform?: string;
  isFeatured?: boolean;
  collaborators: number;
  maxCollaborators: number;
  progress: number;
  isRecommended?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Badge {
  type: string;
  name: string;
  description: string;
  progress: number;
}