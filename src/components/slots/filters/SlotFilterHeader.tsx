import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlotFilterHeaderProps {
  activeFiltersCount: number;
}

export function SlotFilterHeader({ activeFiltersCount }: SlotFilterHeaderProps) {
  return (
    <Button variant="outline" className="gap-2">
      <Filter className="h-4 w-4" />
      Active Filters ({activeFiltersCount})
    </Button>
  );
}