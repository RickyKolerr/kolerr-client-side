export interface KOLRating {
  rating: number;
  comment?: string;
  date: string;
}

export interface Badge {
  type: "trending" | "topInviter" | "fiveStarKol" | "proCollaborator";
  name: string;
  description: string;
  progress: number;
}

export interface Slot {
  id: number;
  title: string;
  brand: string;
  status: "Open" | "Active" | "Completed";
  deadline: string;
  requirements: string;
  budget: string;
  category: string;
  platform: string;
  rating?: number;
  isFeatured?: boolean;
  collaborators?: number;
  maxCollaborators?: number;
}