import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, PieChart, Info } from "lucide-react";
import { DashboardHeader } from "../shared/DashboardHeader";
import { DashboardTabs, TabItem } from "../shared/DashboardTabs";

export function AgencyDashboard() {
  const tabs: TabItem[] = [
    {
      value: "campaigns",
      label: "Client Campaigns",
      icon: BarChart3,
      content: (
        <Card className="bg-card/50 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Client Campaign Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage your clients' campaigns and track their progress.</p>
          </CardContent>
        </Card>
      )
    },
    {
      value: "matching",
      label: "KOL Matching",
      icon: Users,
      content: (
        <Card className="bg-card/50 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              KOL Matching
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Match KOLs with client campaigns based on requirements.</p>
          </CardContent>
        </Card>
      )
    },
    {
      value: "reporting",
      label: "Campaign Reporting",
      icon: PieChart,
      content: (
        <Card className="bg-card/50 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Campaign Reporting & Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>View comprehensive reports and insights for all campaigns.</p>
          </CardContent>
        </Card>
      )
    },
    {
      value: "profile",
      label: "Agency Info",
      icon: Info,
      content: (
        <Card className="bg-card/50 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Agency Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Manage your agency profile, logo, and contact information.</p>
          </CardContent>
        </Card>
      )
    }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <DashboardHeader
        title="Agency Dashboard"
        subtitle="Manage client campaigns and KOL relationships"
      />

      <DashboardTabs 
        tabs={tabs}
        defaultTab="campaigns"
      />
    </div>
  );
}