export type SlotStatus = "Open" | "Active" | "Completed";
export type KOLCategory = "Fashion" | "Tech" | "Beauty" | "Lifestyle" | "Gaming";

export interface KOLRating {
  rating: number;
  comment?: string;
  date: string;
}

export interface Badge {
  type: "topKol" | "highlyRatedBrand";
  name: string;
  description: string;
  progress: number;
}

export interface Slot {
  id: number;
  title: string;
  brand: string;
  status: SlotStatus;
  deadline: string;
  requirements: string;
  budget: string;
  category: KOLCategory;
  platform: string;
  rating?: number;
  isFeatured?: boolean;
  collaborators?: number;
  maxCollaborators?: number;
  progress: number;
  isRecommended?: boolean;
}

export interface SlotCreationData {
  title: string;
  budget: string;
  startDate: Date;
  endDate: Date;
  kolType: KOLCategory[];
  targetAudience?: {
    ageRange?: string;
    gender?: string;
    region?: string;
  };
}