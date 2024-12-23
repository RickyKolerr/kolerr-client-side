import { Slot, KOLCategory } from "@/types/slot";

export interface MatchScore {
  score: number;
  reasons: string[];
}

export const calculateMatchScore = (
  slot: Slot,
  kolProfile: {
    categories: KOLCategory[];
    followers: number;
    engagement: number;
    previousCampaigns?: number;
  }
): MatchScore => {
  let score = 0;
  const reasons: string[] = [];

  // Category match
  if (kolProfile.categories.includes(slot.category)) {
    score += 40;
    reasons.push("Category match");
  }

  // Engagement rate scoring
  const engagementRate = kolProfile.engagement;
  if (engagementRate > 8) {
    score += 30;
    reasons.push("High engagement rate");
  } else if (engagementRate > 5) {
    score += 20;
    reasons.push("Good engagement rate");
  }

  // Experience scoring
  if (kolProfile.previousCampaigns && kolProfile.previousCampaigns > 5) {
    score += 20;
    reasons.push("Experienced creator");
  }

  // Follower count relevance
  const followerCount = kolProfile.followers;
  if (followerCount > 100000) {
    score += 10;
    reasons.push("Large audience reach");
  }

  return {
    score: Math.min(100, score), // Cap at 100
    reasons
  };
};