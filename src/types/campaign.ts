export type CampaignStatus = "Active" | "Pending" | "Completed";
export type SlotStatus = "Open" | "Filled" | "Closed";

export interface Slot {
  id: number;
  campaignId: number;
  title: string;
  requirements: string;
  deadline: string;
  budget: string;
  applicants: number;
  status: SlotStatus;
  maxKols?: number;
  currentKols?: number;
}

export interface Campaign {
  id: number;
  name: string;
  status: CampaignStatus;
  progress: number;
  kols: number;
  deadline: string;
  budget: string;
  engagement: string;
  roi: string;
  category: string;
  slots: Slot[];
}