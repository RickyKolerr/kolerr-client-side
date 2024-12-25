import { MetricsOverview } from "@/components/brands/dashboard/MetricsOverview";
import { CampaignsList } from "@/components/brands/dashboard/CampaignsList";
import { useLanguage } from "@/contexts/LanguageContext";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function AgencyDashboard() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto p-4 sm:p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
              Agency Dashboard
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mt-2">
              Manage client campaigns and KOL partnerships
            </p>
          </div>
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              placeholder="Search campaigns..."
              className="pl-10 w-full sm:w-[300px] bg-white/5 border-white/10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <MetricsOverview />
        <CampaignsList campaigns={[]} />
      </div>
    </div>
  );
}