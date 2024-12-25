import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, Calendar, Info } from "lucide-react";

export function BrandDashboard() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
        Brand Dashboard
      </h1>

      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList className="grid grid-cols-5 gap-4 bg-transparent h-auto p-0">
          <TabsTrigger
            value="campaigns"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Current Campaigns
          </TabsTrigger>
          <TabsTrigger
            value="slots"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Slot Management
          </TabsTrigger>
          <TabsTrigger
            value="kols"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            KOL Selection
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Analytics
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Brand Info
          </TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Current Campaigns
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your active and upcoming campaign details will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="slots">
          <Card>
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
        </TabsContent>

        <TabsContent value="kols">
          <Card>
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
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
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
        </TabsContent>

        <TabsContent value="profile">
          <Card>
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
        </TabsContent>
      </Tabs>
    </div>
  );
}