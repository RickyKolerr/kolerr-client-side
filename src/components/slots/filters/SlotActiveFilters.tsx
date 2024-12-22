import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface SlotActiveFiltersProps {
  activeFilters: string[];
  onRemoveFilter: (filter: string) => void;
}

export function SlotActiveFilters({ activeFilters, onRemoveFilter }: SlotActiveFiltersProps) {
  if (activeFilters.length === 0) return null;
  
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {activeFilters.map((filter) => (
        <Badge 
          key={filter}
          variant="secondary"
          className="flex items-center gap-1 px-3 py-1 bg-kolerr-purple/10 text-kolerr-purple"
        >
          {filter}
          <X 
            className="h-3 w-3 cursor-pointer hover:text-kolerr-purple/80" 
            onClick={() => onRemoveFilter(filter)}
          />
        </Badge>
      ))}
    </div>
  );
}