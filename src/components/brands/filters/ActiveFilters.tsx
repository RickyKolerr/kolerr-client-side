import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface ActiveFiltersProps {
  activeFilters: string[];
  handleFilterChange: (filter: string) => void;
}

export function ActiveFilters({ activeFilters, handleFilterChange }: ActiveFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
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
  );
}