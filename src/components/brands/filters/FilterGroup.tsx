import { Checkbox } from "@/components/ui/checkbox";

interface FilterGroupProps {
  title: string;
  items: string[];
  onFilterChange: (filter: string) => void;
  selectedFilters: string[];
}

export function FilterGroup({ title, items, onFilterChange, selectedFilters }: FilterGroupProps) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-gray-300">{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => (
          <div key={item} className="flex items-center space-x-2">
            <Checkbox 
              id={item}
              checked={selectedFilters.includes(item)}
              onCheckedChange={() => onFilterChange(item)}
              className="border-gray-600"
            />
            <label htmlFor={item} className="text-sm text-gray-300 cursor-pointer">
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}