import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";

export function TrackProgress() {
  const campaigns = [
    {
      id: 1,
      name: "Summer Collection Launch",
      progress: 75,
      engagement: "15.2K",
      reach: "150K",
      roi: "+12.5%"
    },
    {
      id: 2,
      name: "Tech Product Review",
      progress: 45,
      engagement: "8.7K",
      reach: "95K",
      roi: "+8.2%"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          Track Progress
        </h1>
        <p className="text-muted-foreground mt-2">
          Monitor your campaign performance and KOL engagement
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Total Reach",
            value: "245K",
            icon: Users,
            trend: "+15%",
          },
          {
            title: "Engagement Rate",
            value: "12.5%",
            icon: TrendingUp,
            trend: "+2.4%",
          },
          {
            title: "Active Campaigns",
            value: "8",
            icon: BarChart3,
            trend: "+1",
          },
          {
            title: "Average ROI",
            value: "185%",
            icon: DollarSign,
            trend: "+12%",
          }
        ].map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-green-500 mt-1">
                {metric.trend} vs last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-6">
        {campaigns.map((campaign) => (
          <Card key={campaign.id}>
            <CardHeader>
              <CardTitle>{campaign.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{campaign.progress}%</span>
                </div>
                <Progress value={campaign.progress} className="h-2" />
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center p-2 bg-background rounded-lg">
                    <p className="text-sm text-muted-foreground">Engagement</p>
                    <p className="font-semibold">{campaign.engagement}</p>
                  </div>
                  <div className="text-center p-2 bg-background rounded-lg">
                    <p className="text-sm text-muted-foreground">Reach</p>
                    <p className="font-semibold">{campaign.reach}</p>
                  </div>
                  <div className="text-center p-2 bg-background rounded-lg">
                    <p className="text-sm text-muted-foreground">ROI</p>
                    <p className="font-semibold text-green-500">{campaign.roi}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}