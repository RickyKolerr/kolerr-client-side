import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, Calendar, Info, PieChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MetricsOverview } from "@/components/brands/dashboard/MetricsOverview";
import { CampaignsList } from "@/components/brands/dashboard/CampaignsList";
import { DashboardHeader } from "../shared/DashboardHeader";
import { DashboardTabs, TabItem } from "../shared/DashboardTabs";

export function BrandDashboard() {
  const navigate = useNavigate();

  const tabs: TabItem[] = [
    {
      value: "campaigns",
      label: "Current Campaigns",
      icon: BarChart3,
      content: <CampaignsList campaigns={[]} />
    },
    {
      value: "slots",
      label: "Slot Management",
      icon: Calendar,
      content: (
        <Card className="bg-card/50 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Slot Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage your campaign slots and KOL positions here.</p>
          </CardContent>
        </Card>
      )
    },
    {
      value: "kols",
      label: "KOL Selection",
      icon: Users,
      content: (
        <Card className="bg-card/50 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              KOL Selection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Browse and select KOLs for your campaigns.</p>
          </CardContent>
        </Card>
      )
    },
    {
      value: "analytics",
      label: "Analytics",
      icon: PieChart,
      content: (
        <Card className="bg-card/50 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Campaign Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>View detailed analytics and performance metrics for your campaigns.</p>
          </CardContent>
        </Card>
      )
    },
    {
      value: "profile",
      label: "Brand Info",
      icon: Info,
      content: (
        <Card className="bg-card/50 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Brand Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage your brand profile, logo, and social media links.</p>
          </CardContent>
        </Card>
      )
    }
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
      <DashboardHeader
        title="Brand Dashboard"
        subtitle="Manage your campaigns and track performance"
        actionButton={
          <Button 
            onClick={() => navigate("/brands/create")}
            className="flex-1 sm:flex-none bg-gradient-to-r from-kolerr-cyan to-kolerr-purple hover:opacity-90 h-10"
          >
            Create Campaign
          </Button>
        }
      />

      <MetricsOverview />
      
      <DashboardTabs 
        tabs={tabs}
        defaultTab="campaigns"
      />
    </div>
  );
}