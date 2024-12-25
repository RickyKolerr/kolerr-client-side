import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { FilterButton } from "./filters/FilterButton";
import { FilterGroup } from "./filters/FilterGroup";
import { RangeFilter } from "./filters/RangeFilter";

interface CampaignFiltersProps {
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
}

export function CampaignFilters({ 
  statusFilter, 
  setStatusFilter, 
  sortBy, 
  setSortBy 
}: CampaignFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState([0, 100000]);

  const categories = [
    "Fashion & Beauty",
    "Tech & Gaming",
    "Food & Beverage",
    "Lifestyle",
    "Health & Fitness",
    "Entertainment",
    "Education",
    "Travel"
  ];

  const campaignTypes = [
    "Product Review",
    "Brand Ambassador",
    "Sponsored Content",
    "Event Coverage",
    "Social Media Takeover"
  ];

  const platforms = [
    "Instagram",
    "TikTok",
    "YouTube",
    "Facebook",
    "Twitter",
    "LinkedIn"
  ];

  const handleFilterChange = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const formatBudget = (value: number) => `$${value.toLocaleString()}`;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <FilterButton activeFiltersCount={activeFilters.length} />
      </SheetTrigger>
      
      <SheetContent className="w-[300px] sm:w-[540px] overflow-y-auto bg-gray-900 border-gray-800">
        <SheetHeader>
          <SheetTitle className="text-white">Filter Campaigns</SheetTitle>
        </SheetHeader>
        
        <div className="py-6 space-y-6">
          <div className="space-y-6">
            <FilterGroup
              title="Categories"
              items={categories}
              onFilterChange={handleFilterChange}
              selectedFilters={activeFilters}
            />

            <RangeFilter
              title="Budget Range"
              value={budgetRange}
              onChange={setBudgetRange}
              min={0}
              max={100000}
              step={1000}
              formatValue={formatBudget}
            />

            <FilterGroup
              title="Campaign Types"
              items={campaignTypes}
              onFilterChange={handleFilterChange}
              selectedFilters={activeFilters}
            />

            <FilterGroup
              title="Platforms"
              items={platforms}
              onFilterChange={handleFilterChange}
              selectedFilters={activeFilters}
            />

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Sort By</label>
              <Select defaultValue={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="budget">Budget</SelectItem>
                  <SelectItem value="deadline">Deadline</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {activeFilters.map((filter) => (
              <Badge 
                key={filter}
                variant="secondary"
                className="bg-gray-800 text-white hover:bg-gray-700 flex items-center gap-1"
              >
                {filter}
                <X 
                  className="h-3 w-3 cursor-pointer" 
                  onClick={() => handleFilterChange(filter)}
                />
              </Badge>
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}