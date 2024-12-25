import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CurrentCampaigns } from "./CurrentCampaigns";
import { SlotManagement } from "./SlotManagement";
import { KOLSelection } from "./KOLSelection";
import { CampaignAnalytics } from "./CampaignAnalytics";
import { BrandProfile } from "./BrandProfile";
import { Card } from "@/components/ui/card";

export function BrandDashboard() {
  const [activeTab, setActiveTab] = useState("campaigns");

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold gradient-text">Brand Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your campaigns, slots, and KOL partnerships
        </p>
      </div>

      <Card className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="slots">Slots</TabsTrigger>
            <TabsTrigger value="kols">KOLs</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns" className="mt-6">
            <CurrentCampaigns />
          </TabsContent>

          <TabsContent value="slots" className="mt-6">
            <SlotManagement />
          </TabsContent>

          <TabsContent value="kols" className="mt-6">
            <KOLSelection />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <CampaignAnalytics />
          </TabsContent>

          <TabsContent value="profile" className="mt-6">
            <BrandProfile />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}