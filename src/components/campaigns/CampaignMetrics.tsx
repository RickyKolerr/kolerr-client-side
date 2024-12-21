import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, ThumbsUp, Share2 } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: any;
}

const MetricCard = ({ title, value, change, icon: Icon }: MetricCardProps) => (
  <div className="p-4 bg-card rounded-lg space-y-2 hover:shadow-lg transition-all duration-300">
    <div className="flex items-center justify-between">
      <div className="w-10 h-10 rounded-full bg-kolerr-purple/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-kolerr-purple" />
      </div>
      <span className="text-sm text-green-500">{change}</span>
    </div>
    <div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
  </div>
);

export function CampaignMetrics() {
  const metrics = [
    {
      title: "Total Reach",
      value: "125.8K",
      change: "+14.2%",
      icon: Users,
    },
    {
      title: "Engagement Rate",
      value: "4.3%",
      change: "+2.1%",
      icon: ThumbsUp,
    },
    {
      title: "Shares",
      value: "1,234",
      change: "+27.3%",
      icon: Share2,
    },
    {
      title: "Conversion Rate",
      value: "2.8%",
      change: "+1.2%",
      icon: TrendingUp,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          Campaign Analytics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}