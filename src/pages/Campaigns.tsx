import { BrandDashboard } from "@/components/brands/BrandDashboard";
import Navbar from "@/components/Navbar";
import { CampaignOverview } from "@/components/campaigns/CampaignOverview";
import { CampaignHeader } from "@/components/campaigns/CampaignHeader";
import { CampaignAnalytics } from "@/components/campaigns/CampaignAnalytics";
import { KOLManagement } from "@/components/campaigns/KOLManagement";

const Campaigns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <CampaignHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CampaignOverview />
            <CampaignAnalytics />
          </div>
          <div className="space-y-8">
            <KOLManagement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;