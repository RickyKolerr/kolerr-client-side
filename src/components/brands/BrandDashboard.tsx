import { Input } from "@/components/ui/input";
import { Search, Link2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CreateCampaignDialog } from "./CreateCampaignDialog";
import { MetricsOverview } from "./dashboard/MetricsOverview";
import { CampaignsList } from "./dashboard/CampaignsList";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function BrandDashboard() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSessions, setSelectedSessions] = useState<string[]>([]);
  
  const handleMergeSessions = () => {
    toast({
      title: "Sessions Combined",
      description: "Selected sessions have been merged successfully",
      duration: 3000,
    });
    setSelectedSessions([]);
  };

  const activeCampaigns = [
    {
      id: 1,
      name: "Summer Fashion Collection",
      status: "Active" as const,
      progress: 75,
      kols: 5,
      deadline: "2024-04-15",
      budget: "$15,000",
      engagement: "12.5K",
      roi: "+15.2%",
      category: "Fashion",
      slots: [
        {
          id: 1,
          campaignId: 1,
          title: "Fashion Influencer",
          requirements: "Min 50k followers, Fashion/Lifestyle niche",
          deadline: "2024-04-15",
          budget: "$3,000",
          applicants: 12,
          status: "Open" as const,
          maxKols: 3,
          currentKols: 1
        }
      ]
    },
    {
      id: 2,
      name: "Tech Product Launch",
      status: "Pending" as const,
      progress: 30,
      kols: 3,
      deadline: "2024-04-20",
      budget: "$8,000",
      engagement: "5.2K",
      roi: "+8.7%",
      category: "Technology",
      slots: []
    },
    {
      id: 3,
      name: "Beauty Influencer Series",
      status: "Active" as const,
      progress: 60,
      kols: 8,
      deadline: "2024-05-01",
      budget: "$20,000",
      engagement: "18.3K",
      roi: "+20.5%",
      category: "Beauty",
      slots: []
    },
    {
      id: 4,
      name: "Food & Lifestyle Blog",
      status: "Active" as const,
      progress: 45,
      kols: 4,
      deadline: "2024-04-25",
      budget: "$10,000",
      engagement: "8.7K",
      roi: "+12.3%",
      category: "Lifestyle",
      slots: []
    },
    {
      id: 5,
      name: "Gaming Stream Event",
      status: "Pending" as const,
      progress: 15,
      kols: 6,
      deadline: "2024-05-10",
      budget: "$25,000",
      engagement: "22.1K",
      roi: "+18.9%",
      category: "Gaming",
      slots: []
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-8 max-w-[1400px] mx-auto p-4 sm:p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
                Brand Dashboard
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-2">
                Manage your campaigns and track performance metrics
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  placeholder="Search campaigns..."
                  className="pl-10 w-full sm:w-[300px] bg-white/5 border-white/10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <CreateCampaignDialog />
            </div>
          </div>

          <div className="overflow-x-auto -mx-4 px-4">
            <div className="inline-flex min-w-full sm:min-w-0">
              <nav className="flex space-x-4 border-b border-gray-700 w-full overflow-x-auto pb-2 scrollbar-hide">
                <button className="text-sm font-medium text-white px-3 py-2 rounded-md bg-primary/10 whitespace-nowrap">
                  Current Campaigns
                </button>
                <button className="text-sm font-medium text-gray-400 hover:text-white px-3 py-2 rounded-md hover:bg-white/5 whitespace-nowrap">
                  KOL Selection
                </button>
                <button className="text-sm font-medium text-gray-400 hover:text-white px-3 py-2 rounded-md hover:bg-white/5 whitespace-nowrap">
                  Analytics
                </button>
                <button className="text-sm font-medium text-gray-400 hover:text-white px-3 py-2 rounded-md hover:bg-white/5 whitespace-nowrap">
                  Brand Info
                </button>
                <Button
                  onClick={handleMergeSessions}
                  variant="outline"
                  size="sm"
                  className="ml-auto flex items-center gap-2 text-primary hover:text-primary-foreground"
                >
                  <Link2 className="h-4 w-4" />
                  Combine Sessions
                </Button>
              </nav>
            </div>
          </div>

          <MetricsOverview />
          <CampaignsList campaigns={activeCampaigns} />
        </div>
      </div>
    </div>
  );
}