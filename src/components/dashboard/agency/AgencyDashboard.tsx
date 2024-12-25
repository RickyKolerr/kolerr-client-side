import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, PieChart, Info } from "lucide-react";

export function AgencyDashboard() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
        Agency Dashboard
      </h1>

      <Tabs defaultValue="clients" className="space-y-6">
        <TabsList className="grid grid-cols-4 gap-4 bg-transparent h-auto p-0">
          <TabsTrigger
            value="clients"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Client Campaigns
          </TabsTrigger>
          <TabsTrigger
            value="matching"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            KOL Matching
          </TabsTrigger>
          <TabsTrigger
            value="reporting"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Campaign Reporting
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Agency Info
          </TabsTrigger>
        </TabsList>

        <TabsContent value="clients">
          <Card>
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
        </TabsContent>

        <TabsContent value="matching">
          <Card>
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
        </TabsContent>

        <TabsContent value="reporting">
          <Card>
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
        </TabsContent>

        <TabsContent value="profile">
          <Card>
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
        </TabsContent>
      </Tabs>
    </div>
  );
}