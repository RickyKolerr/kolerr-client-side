import { Campaign } from "@/types/campaign";
import { KOL } from "@/types/kol";

export interface CampaignInsight {
  type: 'budget' | 'performance' | 'kol';
  message: string;
  severity: 'info' | 'warning' | 'success';
  recommendation?: string;
}

export interface PerformanceMetrics {
  engagement: number;
  reach: number;
  conversion: number;
  roi: number;
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

export const recommendKOLsForCampaign = (
  campaign: Campaign, 
  availableKOLs: KOL[], 
  performanceHistory: Map<string, PerformanceMetrics>
): KOL[] => {
  return availableKOLs
    .filter(kol => {
      const meetsFollowerRequirement = kol.followers >= campaign.minFollowers;
      const matchesCategory = campaign.categories.includes(kol.expertise);
      const withinBudget = kol.averageRate <= campaign.maxBudgetPerKOL;
      
      return meetsFollowerRequirement && matchesCategory && withinBudget;
    })
    .map(kol => {
      // Calculate KOL score based on performance history
      const performanceScore = calculatePerformanceScore(kol, performanceHistory);
      return { ...kol, score: performanceScore };
    })
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 10);
};

const calculateBudgetUtilization = (campaign: Campaign): number => {
  const totalBudget = parseFloat(campaign.budget.replace(/[^0-9.]/g, ''));
  const usedBudget = campaign.slots.reduce((acc, slot) => {
    return acc + (slot.budget ? parseFloat(slot.budget.replace(/[^0-9.]/g, '')) : 0);
  }, 0);
  
  return usedBudget / totalBudget;
};

const calculatePerformanceScore = (
  kol: KOL, 
  performanceHistory: Map<string, PerformanceMetrics>
): number => {
  const history = performanceHistory.get(kol.id.toString());
  if (!history) return 0;

  // Weight different metrics based on importance
  const weights = {
    engagement: 0.4,
    reach: 0.2,
    conversion: 0.3,
    roi: 0.1
  };

  return (
    history.engagement * weights.engagement +
    history.reach * weights.reach +
    history.conversion * weights.conversion +
    history.roi * weights.roi
  );
};