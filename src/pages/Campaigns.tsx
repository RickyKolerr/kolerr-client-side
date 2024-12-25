import Navbar from "@/components/Navbar";
import { CampaignMetrics } from "@/components/campaigns/CampaignMetrics";
import { CampaignDetails } from "@/components/campaigns/CampaignDetails";
import { CreateCampaignDialog } from "@/components/brands/CreateCampaignDialog";
import { getUserType, canCreateCampaign, canViewCampaignAnalytics, canApplyToCampaign } from "@/utils/userTypeUtils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Search, Filter, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const Campaigns = () => {
  const userType = getUserType();
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleApplyToCampaign = () => {
    toast({
      title: "Application Submitted",
      description: "Your application has been submitted successfully!",
      duration: 3000,
    });
  };

  const renderRoleSpecificActions = () => {
    switch (userType) {
      case 'brand':
        return (
          <div className="flex items-center gap-4">
            <CreateCampaignDialog />
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        );
      case 'agency':
        return (
          <div className="flex items-center gap-4">
            <Button variant="default" className="gap-2">
              <Plus className="h-4 w-4" />
              Create Client Campaign
            </Button>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        );
      case 'kol':
        return (
          <div className="flex items-center gap-4">
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter Opportunities
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  const getRoleSpecificTitle = () => {
    switch (userType) {
      case 'brand':
        return 'Brand Campaigns';
      case 'agency':
        return 'Client Campaigns';
      case 'kol':
        return 'Available Campaigns';
      default:
        return 'Campaigns';
    }
  };

  const getRoleSpecificSubtitle = () => {
    switch (userType) {
      case 'brand':
        return 'Manage and track your campaign performance';
      case 'agency':
        return 'Oversee and optimize client campaign strategies';
      case 'kol':
        return 'Discover and apply to relevant campaign opportunities';
      default:
        return 'Browse available campaigns';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
              {getRoleSpecificTitle()}
            </h1>
            <p className="text-muted-foreground">
              {getRoleSpecificSubtitle()}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {renderRoleSpecificActions()}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search campaigns..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-kolerr-purple"
              />
            </div>
          </div>
        </div>
        
        {canViewCampaignAnalytics(userType) && <CampaignMetrics />}
        
        <div className="grid grid-cols-1 gap-8">
          <CampaignDetails />
          {canApplyToCampaign(userType) && (
            <div className="flex justify-end mt-4">
              <Button 
                onClick={handleApplyToCampaign}
                className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange"
              >
                Apply to Campaign
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;