import { KOLCategory } from "./slot";

export interface KOL {
  id: number;
  name: string;
  image: string;
  followers: number;
  engagement?: number;
  expertise: KOLCategory;
  rating?: number;
  successfulCampaigns?: number;
  averageRate: number;
}