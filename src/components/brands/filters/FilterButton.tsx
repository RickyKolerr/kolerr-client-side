import React from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { forwardRef } from "react";

interface FilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activeFiltersCount: number;
}

export const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ activeFiltersCount, className, ...props }, ref) => {
    return (
      <Button 
        variant="outline" 
        ref={ref}
        {...props}
        className="w-full sm:w-auto bg-background/50 backdrop-blur-sm hover:bg-background/70 text-white border-gray-700 gap-2 transition-all duration-300"
      >
        <Filter className="h-4 w-4" />
        {activeFiltersCount > 0 ? `Filters (${activeFiltersCount})` : 'Filters'}
      </Button>
    );
  }
);

FilterButton.displayName = "FilterButton";