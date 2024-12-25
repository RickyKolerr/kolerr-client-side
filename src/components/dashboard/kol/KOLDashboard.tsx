import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CurrentCampaigns } from "./CurrentCampaigns";
import { SlotAvailability } from "./SlotAvailability";
import { EarningsStatus } from "./EarningsStatus";
import { KOLProfile } from "./KOLProfile";
import { Card } from "@/components/ui/card";

export function KOLDashboard() {
  const [activeTab, setActiveTab] = useState("campaigns");

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold gradient-text">KOL Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your campaigns, availability, and earnings
        </p>
      </div>

      <Card className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns" className="mt-6">
            <CurrentCampaigns />
          </TabsContent>

          <TabsContent value="availability" className="mt-6">
            <SlotAvailability />
          </TabsContent>

          <TabsContent value="earnings" className="mt-6">
            <EarningsStatus />
          </TabsContent>

          <TabsContent value="profile" className="mt-6">
            <KOLProfile />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}