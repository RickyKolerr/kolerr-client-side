import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FilterHeader } from "./filters/FilterHeader";
import { CategoryFilters } from "./filters/CategoryFilters";
import { BudgetFilter } from "./filters/BudgetFilter";
import { ActiveFilters } from "./filters/ActiveFilters";
import { FilterSection } from "@/components/kol-filters/FilterSection";

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

  const handleFilterChange = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <FilterHeader activeFiltersCount={activeFilters.length} />
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Campaign Filters</SheetTitle>
        </SheetHeader>
        
        <div className="py-6 space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Primary Filters</h3>
            
            <CategoryFilters handleFilterChange={handleFilterChange} />

            <FilterSection title="Location">
              <Input placeholder="Enter location" />
            </FilterSection>

            <BudgetFilter 
              budgetRange={budgetRange}
              setBudgetRange={setBudgetRange}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Sort By</label>
            <Select defaultValue={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="budget">Budget</SelectItem>
                <SelectItem value="deadline">Deadline</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="reviews">Reviews</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <ActiveFilters 
          activeFilters={activeFilters}
          handleFilterChange={handleFilterChange}
        />
      </SheetContent>
    </Sheet>
  );
}