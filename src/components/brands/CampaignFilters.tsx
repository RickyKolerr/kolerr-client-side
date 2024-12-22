import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";

interface CampaignFiltersProps {
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
}

export function CampaignFilters({ statusFilter, setStatusFilter, sortBy, setSortBy }: CampaignFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 w-full sm:w-auto">
      <Select 
        defaultValue={statusFilter} 
        onValueChange={setStatusFilter}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Campaigns</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
        </SelectContent>
      </Select>
      <Select 
        defaultValue={sortBy}
        onValueChange={setSortBy}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Default</SelectItem>
          <SelectItem value="progress">Progress</SelectItem>
          <SelectItem value="budget">Budget</SelectItem>
          <SelectItem value="roi">ROI</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" size="icon">
        <List className="h-4 w-4" />
      </Button>
    </div>
  );
}