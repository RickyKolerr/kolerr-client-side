import { FilterSection } from "./FilterSection";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

interface PrimaryFiltersProps {
  handleFilterChange: (filter: string) => void;
  setFollowerRange: (value: number[]) => void;
  setEngagementRange: (value: number[]) => void;
  followerRange: number[];
  engagementRange: number[];
}

export const PrimaryFilters = ({
  handleFilterChange,
  setFollowerRange,
  setEngagementRange,
  followerRange,
  engagementRange
}: PrimaryFiltersProps) => {
  const categories = [
    "Tech & Gaming",
    "Lifestyle & Fashion",
    "Food & Travel",
    "Beauty & Cosmetics",
    "Health & Fitness",
    "Education & Career",
    "Entertainment",
    "Business & Finance"
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Primary Filters</h3>
      
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

      <FilterSection title="Location">
        <div className="flex gap-2">
          <Input placeholder="Enter location" className="flex-1" />
          <Input type="number" placeholder="Radius (km)" className="w-24" />
        </div>
      </FilterSection>

      <FilterSection title="Follower Range">
        <div className="px-2">
          <Slider
            defaultValue={[0, 1000000]}
            max={1000000}
            step={1000}
            onValueChange={setFollowerRange}
          />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>{followerRange[0].toLocaleString()}K</span>
            <span>{followerRange[1].toLocaleString()}M</span>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Engagement Rate">
        <div className="px-2">
          <Slider
            defaultValue={[0, 100]}
            max={100}
            step={0.1}
            onValueChange={setEngagementRange}
          />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>{engagementRange[0]}%</span>
            <span>{engagementRange[1]}%</span>
          </div>
        </div>
      </FilterSection>
    </div>
  );
};