import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState, useTransition } from "react";
import { PrimaryFilters } from "./PrimaryFilters";
import { AdvancedFilters } from "./AdvancedFilters";

interface KOLFiltersProps {
  onFilterChange: (filters: string[]) => void;
}

export const KOLFilters = ({ onFilterChange }: KOLFiltersProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [followerRange, setFollowerRange] = useState([0, 1000000]);
  const [engagementRange, setEngagementRange] = useState([0, 100]);
  const [isPending, startTransition] = useTransition();
  
  const handleFilterChange = (filter: string) => {
    startTransition(() => {
      const newFilters = activeFilters.includes(filter)
        ? activeFilters.filter(f => f !== filter)
        : [...activeFilters, filter];
      
      setActiveFilters(newFilters);
      onFilterChange(newFilters);
    });
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