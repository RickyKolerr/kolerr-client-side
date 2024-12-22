import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, TrendingUp, Users, Star, DollarSign, TrendingDown, BarChart3, Calendar, Filter, SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CreateCampaignDialog } from "./CreateCampaignDialog";
import { CampaignFilters } from "./CampaignFilters";

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
      roi: "+15.2%",
      category: "Fashion"
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
      roi: "+8.7%",
      category: "Technology"
    },
    {
      id: 3,
      name: "Beauty Influencer Series",
      status: "Active",
      progress: 60,
      kols: 8,
      deadline: "2024-05-01",
      budget: "$20,000",
      engagement: "18.3K",
      roi: "+20.5%",
      category: "Beauty"
    },
    {
      id: 4,
      name: "Food & Lifestyle Blog",
      status: "Active",
      progress: 45,
      kols: 4,
      deadline: "2024-04-25",
      budget: "$10,000",
      engagement: "8.7K",
      roi: "+12.3%",
      category: "Lifestyle"
    },
    {
      id: 5,
      name: "Gaming Stream Event",
      status: "Pending",
      progress: 15,
      kols: 6,
      deadline: "2024-05-10",
      budget: "$25,000",
      engagement: "22.1K",
      roi: "+18.9%",
      category: "Gaming"
    }
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
            <CreateCampaignDialog />
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-semibold">Active Campaigns</h2>
          <div className="flex flex-wrap gap-3 w-full sm:w-auto">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Campaigns</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Default</SelectItem>
                <SelectItem value="progress">Progress</SelectItem>
                <SelectItem value="budget">Budget</SelectItem>
                <SelectItem value="roi">ROI</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {activeCampaigns.map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl font-semibold">
                      {campaign.name}
                    </CardTitle>
                    <Badge variant="outline">{campaign.category}</Badge>
                  </div>
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
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                    <div className="text-center p-3 bg-background rounded-lg hover:bg-accent transition-colors">
                      <p className="text-sm text-muted-foreground">KOLs</p>
                      <p className="font-semibold">{campaign.kols}</p>
                    </div>
                    <div className="text-center p-3 bg-background rounded-lg hover:bg-accent transition-colors">
                      <p className="text-sm text-muted-foreground">Budget</p>
                      <p className="font-semibold">{campaign.budget}</p>
                    </div>
                    <div className="text-center p-3 bg-background rounded-lg hover:bg-accent transition-colors">
                      <p className="text-sm text-muted-foreground">Engagement</p>
                      <p className="font-semibold">{campaign.engagement}</p>
                    </div>
                    <div className="text-center p-3 bg-background rounded-lg hover:bg-accent transition-colors">
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