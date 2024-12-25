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
import { CampaignFilters } from "@/components/brands/CampaignFilters";

const Campaigns = () => {
  const userType = getUserType();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("manage");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
              {t("campaigns.title")}
            </h1>
            <p className="text-muted-foreground">
              {t("campaigns.subtitle")}
            </p>
          </div>
          
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
            <div className="relative flex-1 sm:max-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder={t("campaigns.searchPlaceholder")}
                className="pl-10 pr-4 w-full bg-background/50 backdrop-blur-sm border-gray-700"
              />
            </div>
            <CampaignFilters
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
        </div>

        <Tabs defaultValue="manage" className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
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

            {activeTab === "manage" && (
              <Button 
                onClick={() => setActiveTab("create")}
                className="w-full sm:w-auto bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90 transition-opacity"
              >
                <Plus className="h-4 w-4 mr-2" />
                {t("campaigns.createNew")}
              </Button>
            )}
          </div>

          <TabsContent value="create" className="space-y-6">
            <CreateCampaignDialog />
          </TabsContent>

          <TabsContent value="manage" className="space-y-6">
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