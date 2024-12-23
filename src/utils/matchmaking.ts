import { Slot, KOLCategory } from "@/types/slot";

export interface MatchScore {
  score: number;
  reasons: string[];
}

interface KOLProfile {
  categories: KOLCategory[];
  followers: number;
  engagement: number;
  previousCampaigns?: number;
  location?: string;
  languages?: string[];
  averageRating?: number;
  completedCampaigns?: number;
  specializations?: string[];
}

export const calculateMatchScore = (
  slot: Slot,
  kolProfile: KOLProfile
): MatchScore => {
  let score = 0;
  const reasons: string[] = [];

  // Category match (40 points max)
  if (kolProfile.categories.includes(slot.category)) {
    score += 40;
    reasons.push("Perfect category match");
  }

  // Engagement rate scoring (30 points max)
  const engagementRate = kolProfile.engagement;
  if (engagementRate > 8) {
    score += 30;
    reasons.push("Exceptional engagement rate");
  } else if (engagementRate > 5) {
    score += 20;
    reasons.push("Good engagement rate");
  } else if (engagementRate > 3) {
    score += 10;
    reasons.push("Average engagement rate");
  }

  // Experience scoring (20 points max)
  if (kolProfile.completedCampaigns && kolProfile.completedCampaigns > 10) {
    score += 20;
    reasons.push("Highly experienced creator");
  } else if (kolProfile.completedCampaigns && kolProfile.completedCampaigns > 5) {
    score += 15;
    reasons.push("Experienced creator");
  }

  // Rating bonus (10 points max)
  if (kolProfile.averageRating && kolProfile.averageRating >= 4.5) {
    score += 10;
    reasons.push("Top-rated creator");
  } else if (kolProfile.averageRating && kolProfile.averageRating >= 4.0) {
    score += 5;
    reasons.push("Well-rated creator");
  }

  // Specialization bonus (10 points max)
  if (kolProfile.specializations?.some(spec => 
    slot.requirements.toLowerCase().includes(spec.toLowerCase())
  )) {
    score += 10;
    reasons.push("Specialized in campaign requirements");
  }

  return {
    score: Math.min(100, score),
    reasons
  };
};

export const getMatchLevel = (score: number): string => {
  if (score >= 90) return "Perfect Match";
  if (score >= 80) return "Excellent Match";
  if (score >= 70) return "Good Match";
  if (score >= 60) return "Fair Match";
  return "Basic Match";
};

export const getMatchColor = (score: number): string => {
  if (score >= 90) return "bg-green-500";
  if (score >= 80) return "bg-emerald-500";
  if (score >= 70) return "bg-blue-500";
  if (score >= 60) return "bg-yellow-500";
  return "bg-gray-500";
};