export type SlotStatus = "Open" | "Active" | "Completed" | "Filled" | "Closed";
export type KOLCategory = "Fashion" | "Tech" | "Beauty" | "Lifestyle" | "Gaming";

export interface SlotResponse {
  success: boolean;
  message?: string;
  data?: Slot;
}

export interface SlotListResponse {
  success: boolean;
  message?: string;
  data?: Slot[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export interface KOLRating {
  rating: number;
  comment?: string;
  date: string;
  brandId: string;
  brandName: string;
}

export interface Badge {
  type: "topKol" | "highlyRatedBrand" | "trending" | "topInviter" | "fiveStarKol" | "proCollaborator";
  name: string;
  description: string;
  progress: number;
}

export interface Slot {
  id: number;
  title: string;
  brand: string;
  brandId: string;
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
  matchScore?: number;
  matchReasons?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface SlotCreationData {
  title: string;
  budget: string;
  startDate: Date;
  endDate: Date;
  kolType: KOLCategory[];
  requirements: string;
  maxCollaborators: number;
  targetAudience?: {
    ageRange?: string;
    gender?: string;
    region?: string;
  };
}