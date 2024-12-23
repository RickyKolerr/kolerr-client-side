import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, AlertTriangle, CheckCircle } from "lucide-react";
import { Campaign } from "@/types/campaign";
import { analyzeCampaignPerformance } from "@/utils/campaignIntelligence";

interface CampaignInsightsProps {
  campaign: Campaign;
}

export const CampaignInsights = ({ campaign }: CampaignInsightsProps) => {
  const insights = analyzeCampaignPerformance(campaign);

  const getInsightIcon = (severity: 'info' | 'warning' | 'success') => {
    switch (severity) {
      case 'info':
        return <Info className="h-4 w-4" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4" />;
      case 'success':
        return <CheckCircle className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">AI Insights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <Alert key={index} variant={insight.severity === 'warning' ? 'destructive' : 'default'}>
            <div className="flex items-center gap-2">
              {getInsightIcon(insight.severity)}
              <AlertTitle>{insight.message}</AlertTitle>
            </div>
            {insight.recommendation && (
              <AlertDescription className="mt-2">
                {insight.recommendation}
              </AlertDescription>
            )}
          </Alert>
        ))}
        {insights.length === 0 && (
          <p className="text-muted-foreground text-sm">
            No insights available at this time. Keep running your campaign to generate performance data.
          </p>
        )}
      </CardContent>
    </Card>
  );
};