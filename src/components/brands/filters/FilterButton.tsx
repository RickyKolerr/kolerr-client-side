import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterButtonProps {
  activeFiltersCount: number;
  onClick?: () => void;
}

export function FilterButton({ activeFiltersCount, onClick }: FilterButtonProps) {
  return (
    <Button 
      variant="outline" 
      onClick={onClick}
      className="w-full sm:w-auto bg-background/50 backdrop-blur-sm hover:bg-background/70 text-white border-gray-700 gap-2 transition-all duration-300"
    >
      <Filter className="h-4 w-4" />
      {activeFiltersCount > 0 ? `Filters (${activeFiltersCount})` : 'Filters'}
    </Button>
  );
}