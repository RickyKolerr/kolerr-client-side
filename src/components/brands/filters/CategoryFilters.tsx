import { FilterSection } from "@/components/kol-filters/FilterSection";
import { Checkbox } from "@/components/ui/checkbox";

interface CategoryFiltersProps {
  handleFilterChange: (filter: string) => void;
}

export function CategoryFilters({ handleFilterChange }: CategoryFiltersProps) {
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

  return (
    <FilterSection title="Categories">
      <div className="grid grid-cols-2 gap-2">
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox 
              id={category}
              onCheckedChange={() => handleFilterChange(category)}
            />
            <label htmlFor={category} className="text-sm">{category}</label>
          </div>
        ))}
      </div>
    </FilterSection>
  );
}