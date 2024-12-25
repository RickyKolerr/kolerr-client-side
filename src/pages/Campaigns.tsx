import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateCampaignDialog } from "@/components/brands/CreateCampaignDialog";
import { CampaignMetrics } from "@/components/campaigns/CampaignMetrics";
import { CampaignDetails } from "@/components/campaigns/CampaignDetails";
import { getUserType } from "@/utils/userTypeUtils";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Search, Filter, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Campaigns = () => {
  const userType = getUserType();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("manage");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
              {t("campaigns.title")}
            </h1>
            <p className="text-muted-foreground">
              {t("campaigns.subtitle")}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder={t("campaigns.searchPlaceholder")}
                className="pl-10 pr-4 py-2 w-[300px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-kolerr-purple"
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue="manage" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 gap-4 bg-transparent h-auto p-0">
            <TabsTrigger
              value="create"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t("campaigns.tabs.create")}
            </TabsTrigger>
            <TabsTrigger
              value="manage"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t("campaigns.tabs.manage")}
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t("campaigns.tabs.analytics")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-6">
            <CreateCampaignDialog />
          </TabsContent>

          <TabsContent value="manage" className="space-y-6">
            <div className="flex justify-between items-center">
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                {t("campaigns.filter")}
              </Button>
              <Button 
                onClick={() => setActiveTab("create")}
                className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange"
              >
                <Plus className="h-4 w-4 mr-2" />
                {t("campaigns.createNew")}
              </Button>
            </div>
            <CampaignDetails />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <CampaignMetrics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Campaigns;