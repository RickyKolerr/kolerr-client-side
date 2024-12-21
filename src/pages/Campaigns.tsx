import Navbar from "@/components/Navbar";
import { CampaignMetrics } from "@/components/campaigns/CampaignMetrics";
import { CampaignDetails } from "@/components/campaigns/CampaignDetails";

const Campaigns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Campaign Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor and manage your active campaigns
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          <CampaignMetrics />
          <CampaignDetails />
        </div>
      </div>
    </div>
  );
};

export default Campaigns;