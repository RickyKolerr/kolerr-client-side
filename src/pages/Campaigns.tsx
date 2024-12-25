import Navbar from "@/components/Navbar";
import { CampaignMetrics } from "@/components/campaigns/CampaignMetrics";
import { CampaignDetails } from "@/components/campaigns/CampaignDetails";
import { CreateCampaignDialog } from "@/components/brands/CreateCampaignDialog";
import { getUserType, canCreateCampaign, canViewCampaignAnalytics, canApplyToCampaign } from "@/utils/userTypeUtils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Search } from "lucide-react";

const Campaigns = () => {
  const userType = getUserType();
  const { toast } = useToast();

  const handleApplyToCampaign = () => {
    toast({
      title: "Application Submitted",
      description: "Your application has been submitted successfully!",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex justify-between items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
              {userType === 'kol' ? 'Available Campaigns' : 'Campaign Dashboard'}
            </h1>
            <p className="text-muted-foreground">
              {userType === 'kol' 
                ? 'Discover and apply to campaigns that match your profile'
                : 'Monitor and manage your active campaigns'}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {canCreateCampaign(userType) && <CreateCampaignDialog />}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
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