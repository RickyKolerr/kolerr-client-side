import { FilterSection } from "@/components/kol-filters/FilterSection";
import { Slider } from "@/components/ui/slider";

interface BudgetFilterProps {
  budgetRange: number[];
  setBudgetRange: (value: number[]) => void;
}

export function BudgetFilter({ budgetRange, setBudgetRange }: BudgetFilterProps) {
  return (
    <FilterSection title="Budget Range">
      <div className="px-2">
        <Slider
          defaultValue={[0, 100000]}
          max={100000}
          step={1000}
          onValueChange={setBudgetRange}
        />
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>${budgetRange[0].toLocaleString()}</span>
          <span>${budgetRange[1].toLocaleString()}</span>
        </div>
      </div>
    </FilterSection>
  );
}