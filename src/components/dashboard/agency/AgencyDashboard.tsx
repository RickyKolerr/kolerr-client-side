import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClientCampaigns } from "./ClientCampaigns";
import { KOLMatching } from "./KOLMatching";
import { CampaignReporting } from "./CampaignReporting";
import { AgencyProfile } from "./AgencyProfile";
import { Card } from "@/components/ui/card";

export function AgencyDashboard() {
  const [activeTab, setActiveTab] = useState("campaigns");

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold gradient-text">Agency Dashboard</h1>
        <p className="text-muted-foreground">
          Manage client campaigns and KOL partnerships
        </p>
      </div>

      <Card className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="campaigns">Client Campaigns</TabsTrigger>
            <TabsTrigger value="matching">KOL Matching</TabsTrigger>
            <TabsTrigger value="reporting">Reporting</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="campaigns" className="mt-6">
            <ClientCampaigns />
          </TabsContent>

          <TabsContent value="matching" className="mt-6">
            <KOLMatching />
          </TabsContent>

          <TabsContent value="reporting" className="mt-6">
            <CampaignReporting />
          </TabsContent>

          <TabsContent value="profile" className="mt-6">
            <AgencyProfile />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}