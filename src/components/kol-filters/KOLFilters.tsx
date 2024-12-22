import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { PrimaryFilters } from "./PrimaryFilters";
import { AdvancedFilters } from "./AdvancedFilters";

export const KOLFilters = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [followerRange, setFollowerRange] = useState([0, 1000000]);
  const [engagementRange, setEngagementRange] = useState([0, 100]);
  
  const handleFilterChange = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters ({activeFilters.length})
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[540px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>KOL Filters</SheetTitle>
            </SheetHeader>
            
            <div className="py-6 space-y-6">
              <PrimaryFilters 
                handleFilterChange={handleFilterChange}
                setFollowerRange={setFollowerRange}
                setEngagementRange={setEngagementRange}
                followerRange={followerRange}
                engagementRange={engagementRange}
              />

              <Separator />

              <AdvancedFilters handleFilterChange={handleFilterChange} />

              <Separator />

              <div className="space-y-2">
                <label className="text-sm font-medium">Sort By</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sort order" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="followers-high">Followers (High to Low)</SelectItem>
                    <SelectItem value="followers-low">Followers (Low to High)</SelectItem>
                    <SelectItem value="engagement-high">Engagement (High to Low)</SelectItem>
                    <SelectItem value="engagement-low">Engagement (Low to High)</SelectItem>
                    <SelectItem value="relevance">Relevance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {activeFilters.map((filter) => (
          <Badge 
            key={filter}
            variant="secondary"
            className="flex items-center gap-1"
          >
            {filter}
            <X 
              className="h-3 w-3 cursor-pointer" 
              onClick={() => handleFilterChange(filter)}
            />
          </Badge>
        ))}
      </div>
    </div>
  );
};