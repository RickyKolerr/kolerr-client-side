import { CampaignCard } from "../CampaignCard";
import { CampaignFilters } from "../CampaignFilters";
import { useState } from "react";
import { Campaign } from "@/types/campaign";

interface CampaignsListProps {
  campaigns: Campaign[];
}

export const CampaignsList = ({ campaigns }: CampaignsListProps) => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCampaigns = campaigns
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
  );
};