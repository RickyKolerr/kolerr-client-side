import { Campaign } from "@/types/campaign";
import { KOL } from "@/types/kol";

export interface CampaignInsight {
  type: 'budget' | 'performance' | 'kol';
  message: string;
  severity: 'info' | 'warning' | 'success';
  recommendation?: string;
}

export const analyzeCampaignPerformance = (campaign: Campaign): CampaignInsight[] => {
  const insights: CampaignInsight[] = [];
  
  // Budget utilization analysis
  const budgetUtilization = calculateBudgetUtilization(campaign);
  if (budgetUtilization < 0.5) {
    insights.push({
      type: 'budget',
      message: 'Budget utilization is below 50%',
      severity: 'warning',
      recommendation: 'Consider reallocating budget to better performing slots or increasing KOL outreach'
    });
  }

  // Performance metrics analysis
  if (campaign.engagement && campaign.engagement < campaign.targetEngagement) {
    insights.push({
      type: 'performance',
      message: 'Engagement rate is below target',
      severity: 'warning',
      recommendation: 'Consider adjusting content strategy or increasing posting frequency'
    });
  }

  return insights;
};

export const recommendKOLsForCampaign = (campaign: Campaign, availableKOLs: KOL[]): KOL[] => {
  return availableKOLs
    .filter(kol => {
      // Basic filtering
      const meetsFollowerRequirement = kol.followers >= campaign.minFollowers;
      const matchesCategory = campaign.categories.includes(kol.expertise);
      const withinBudget = kol.averageRate <= campaign.maxBudgetPerKOL;
      
      return meetsFollowerRequirement && matchesCategory && withinBudget;
    })
    .sort((a, b) => {
      // Score based on multiple factors
      const getKOLScore = (kol: KOL) => {
        let score = 0;
        
        // Engagement rate weight
        score += (kol.engagement || 0) * 0.4;
        
        // Rating weight
        score += (kol.rating || 0) * 0.3;
        
        // Previous campaign success weight
        score += (kol.successfulCampaigns || 0) * 0.3;
        
        return score;
      };
      
      return getKOLScore(b) - getKOLScore(a);
    })
    .slice(0, 10); // Return top 10 matches
};

const calculateBudgetUtilization = (campaign: Campaign): number => {
  const totalBudget = parseFloat(campaign.budget.replace(/[^0-9.]/g, ''));
  const usedBudget = campaign.slots.reduce((acc, slot) => {
    return acc + (slot.budget ? parseFloat(slot.budget.replace(/[^0-9.]/g, '')) : 0);
  }, 0);
  
  return usedBudget / totalBudget;
};