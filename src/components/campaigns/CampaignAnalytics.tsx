import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, ThumbsUp, Share2 } from "lucide-react";

export function CampaignAnalytics() {
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
        <CardTitle>Campaign Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="p-4 bg-gray-100 rounded-lg space-y-2"
            >
              <div className="flex items-center justify-between">
                <metric.icon className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-green-500">{metric.change}</span>
              </div>
              <div>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-sm text-gray-500">{metric.title}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}