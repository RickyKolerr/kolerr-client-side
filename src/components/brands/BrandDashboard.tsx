import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Users, Star, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CreateCampaignDialog } from "./CreateCampaignDialog";
import { MetricsCard } from "./MetricsCard";
import { CampaignCard } from "./CampaignCard";
import { CampaignFilters } from "./CampaignFilters";
import { useState } from "react";

export function BrandDashboard() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("all");
  
  const activeCampaigns = [
    {
      id: 1,
      name: "Summer Fashion Collection",
      status: "Active",
      progress: 75,
      kols: 5,
      deadline: "2024-04-15",
      budget: "$15,000",
      engagement: "12.5K",
      roi: "+15.2%",
      category: "Fashion"
    },
    {
      id: 2,
      name: "Tech Product Launch",
      status: "Pending",
      progress: 30,
      kols: 3,
      deadline: "2024-04-20",
      budget: "$8,000",
      engagement: "5.2K",
      roi: "+8.7%",
      category: "Technology"
    },
    {
      id: 3,
      name: "Beauty Influencer Series",
      status: "Active",
      progress: 60,
      kols: 8,
      deadline: "2024-05-01",
      budget: "$20,000",
      engagement: "18.3K",
      roi: "+20.5%",
      category: "Beauty"
    },
    {
      id: 4,
      name: "Food & Lifestyle Blog",
      status: "Active",
      progress: 45,
      kols: 4,
      deadline: "2024-04-25",
      budget: "$10,000",
      engagement: "8.7K",
      roi: "+12.3%",
      category: "Lifestyle"
    },
    {
      id: 5,
      name: "Gaming Stream Event",
      status: "Pending",
      progress: 15,
      kols: 6,
      deadline: "2024-05-10",
      budget: "$25,000",
      engagement: "22.1K",
      roi: "+18.9%",
      category: "Gaming"
    }
  ];

  const metrics = [
    {
      title: "Campaign Performance",
      value: "+24.5%",
      trend: "up" as const,
      icon: TrendingUp,
      description: "vs. last month",
      color: "green-500"
    },
    {
      title: "Average ROI",
      value: "182%",
      trend: "up" as const,
      icon: DollarSign,
      description: "across campaigns",
      color: "blue-500"
    },
    {
      title: "KOL Retention",
      value: "92%",
      trend: "down" as const,
      icon: Users,
      description: "-3% this month",
      color: "yellow-500"
    },
    {
      title: "Brand Rating",
      value: "4.8",
      trend: "up" as const,
      icon: Star,
      description: "from KOLs",
      color: "purple-500"
    }
  ];

  // Filter and sort campaigns
  const filteredCampaigns = activeCampaigns
    .filter(campaign => {
      const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          campaign.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "all" ? true : campaign.status.toLowerCase() === statusFilter.toLowerCase();
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "progress":
          return b.progress - a.progress;
        case "budget":
          return parseInt(b.budget.replace(/\D/g, '')) - parseInt(a.budget.replace(/\D/g, ''));
        case "roi":
          return parseFloat(b.roi) - parseFloat(a.roi);
        default:
          return 0;
      }
    });

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Brand Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your campaigns and track performance metrics
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              placeholder="Search campaigns..."
              className="pl-10 w-full sm:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <CreateCampaignDialog />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricsCard key={index} {...metric} />
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-semibold">Active Campaigns</h2>
          <CampaignFilters
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
      <style>
        {`
          .gradient-border {
            position: relative;
            border: none;
          }
          .gradient-border::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 0.75rem;
            padding: 1px;
            background: linear-gradient(to right, #00F5FF, #9C27B0, #FF5722);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }
        `}
      </style>
    </div>
  );
}
