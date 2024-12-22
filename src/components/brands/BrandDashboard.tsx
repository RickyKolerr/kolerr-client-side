import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, TrendingUp, Users, Clock, Target, BarChart3, Calendar, Star, DollarSign, TrendingDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function BrandDashboard() {
  const { t } = useLanguage();
  
  const activeCampaigns = [
    {
      id: 1,
      name: "Summer Fashion Collection",
      status: "Active",
      progress: 75,
      kols: 5,
      deadline: "2024-04-15",
      budget: "$15,000",
      engagement: "12.5K",
      roi: "+15.2%"
    },
    {
      id: 2,
      name: "Tech Product Launch",
      status: "Pending",
      progress: 30,
      kols: 3,
      deadline: "2024-04-20",
      budget: "$8,000",
      engagement: "5.2K",
      roi: "+8.7%"
    },
  ];

  const metrics = [
    {
      title: "Campaign Performance",
      value: "+24.5%",
      trend: "up",
      icon: TrendingUp,
      description: "vs. last month",
      color: "green-500"
    },
    {
      title: "Average ROI",
      value: "182%",
      trend: "up",
      icon: DollarSign,
      description: "across campaigns",
      color: "blue-500"
    },
    {
      title: "KOL Retention",
      value: "92%",
      trend: "down",
      icon: Users,
      description: "-3% this month",
      color: "yellow-500"
    },
    {
      title: "Brand Rating",
      value: "4.8",
      trend: "up",
      icon: Star,
      description: "from KOLs",
      color: "purple-500"
    }
  ];

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Brand Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your campaigns and track performance metrics
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              placeholder="Search campaigns..."
              className="pl-10 w-full sm:w-[300px]"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1 sm:flex-none">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange flex-1 sm:flex-none">
              Create Campaign
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle className="text-sm text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">{metric.value}</span>
                  {metric.trend === "up" ? (
                    <TrendingUp className={`h-4 w-4 text-green-500`} />
                  ) : (
                    <TrendingDown className={`h-4 w-4 text-red-500`} />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </div>
              <div className={`w-12 h-12 rounded-full bg-${metric.color}/10 flex items-center justify-center`}>
                <metric.icon className={`h-6 w-6 text-${metric.color}`} />
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Active Campaigns</h2>
          <Button variant="outline" size="sm">
            <BarChart3 className="h-4 w-4 mr-2" />
            View All
          </Button>
        </div>
        <div className="grid gap-6">
          {activeCampaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-semibold">
                    {campaign.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Deadline: {campaign.deadline}</span>
                  </div>
                </div>
                <Badge
                  variant={campaign.status === "Active" ? "default" : "secondary"}
                  className={campaign.status === "Active" ? "bg-green-500" : ""}
                >
                  {campaign.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{campaign.progress}%</span>
                  </div>
                  <Progress value={campaign.progress} className="h-2" />
                  <div className="grid grid-cols-4 gap-4 pt-4">
                    <div className="text-center p-2 bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground">KOLs</p>
                      <p className="font-semibold">{campaign.kols}</p>
                    </div>
                    <div className="text-center p-2 bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground">Budget</p>
                      <p className="font-semibold">{campaign.budget}</p>
                    </div>
                    <div className="text-center p-2 bg-background rounded-lg">
                      <p className="text-sm text-muted-foreground">Engagement</p>
                      <p className="font-semibold">{campaign.engagement}</p>
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
    </div>
  );
}