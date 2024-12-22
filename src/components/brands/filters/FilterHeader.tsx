import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterHeaderProps {
  activeFiltersCount: number;
}

export function FilterHeader({ activeFiltersCount }: FilterHeaderProps) {
  return (
    <Button variant="outline" className="gap-2">
      <Filter className="h-4 w-4" />
      Filters ({activeFiltersCount})
    </Button>
  );
}