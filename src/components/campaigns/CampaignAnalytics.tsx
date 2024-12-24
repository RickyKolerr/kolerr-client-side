import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, ThumbsUp, Share2 } from "lucide-react";

export function CampaignAnalytics() {
  const metrics = [
    {
      title: "Total Reach",
      value: "125.8K",
      change: "+14.2%",
      icon: Users,
      color: "cyan"
    },
    {
      title: "Engagement Rate",
      value: "4.3%",
      change: "+2.1%",
      icon: ThumbsUp,
      color: "purple"
    },
    {
      title: "Shares",
      value: "1,234",
      change: "+27.3%",
      icon: Share2,
      color: "orange"
    },
    {
      title: "Conversion Rate",
      value: "2.8%",
      change: "+1.2%",
      icon: TrendingUp,
      color: "yellow"
    },
  ];

  return (
    <Card className="bg-black/40 border-white/10">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl gradient-text">Campaign Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-full bg-kolerr-${metric.color}/20 flex items-center justify-center`}>
                  <metric.icon className={`h-5 w-5 text-kolerr-${metric.color}`} />
                </div>
                <span className="text-sm text-green-500">{metric.change}</span>
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">{metric.value}</p>
                <p className="text-sm text-gray-400">{metric.title}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}