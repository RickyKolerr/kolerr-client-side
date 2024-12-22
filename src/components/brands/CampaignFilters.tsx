import { FilterSection } from "@/components/kol-filters/FilterSection";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Filter, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface CampaignFiltersProps {
  statusFilter: string;
  setStatusFilter: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
}

export function CampaignFilters({ statusFilter, setStatusFilter, sortBy, setSortBy }: CampaignFiltersProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [budgetRange, setBudgetRange] = useState([0, 100000]);

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

  const campaignTypes = [
    "Product Review",
    "Brand Ambassador",
    "Sponsored Content",
    "Event Coverage",
    "Social Media Takeover"
  ];

  const platforms = [
    "Instagram",
    "TikTok",
    "YouTube",
    "Facebook",
    "Twitter",
    "LinkedIn"
  ];

  const objectives = [
    "Brand Awareness",
    "Lead Generation",
    "Sales Conversion",
    "Community Engagement",
    "Product Launch"
  ];

  const handleFilterChange = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters ({activeFilters.length})
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Campaign Filters</SheetTitle>
        </SheetHeader>
        
        <div className="py-6 space-y-6">
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
              <Input placeholder="Enter location" />
            </FilterSection>

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

            <FilterSection title="Campaign Type">
              <div className="grid grid-cols-2 gap-2">
                {campaignTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox 
                      id={type}
                      onCheckedChange={() => handleFilterChange(type)}
                    />
                    <label htmlFor={type} className="text-sm">{type}</label>
                  </div>
                ))}
              </div>
            </FilterSection>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Advanced Filters</h3>
            
            <FilterSection title="Campaign Objectives">
              <div className="grid grid-cols-2 gap-2">
                {objectives.map((objective) => (
                  <div key={objective} className="flex items-center space-x-2">
                    <Checkbox 
                      id={objective}
                      onCheckedChange={() => handleFilterChange(objective)}
                    />
                    <label htmlFor={objective} className="text-sm">{objective}</label>
                  </div>
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Platforms">
              <div className="grid grid-cols-2 gap-2">
                {platforms.map((platform) => (
                  <div key={platform} className="flex items-center space-x-2">
                    <Checkbox 
                      id={platform}
                      onCheckedChange={() => handleFilterChange(platform)}
                    />
                    <label htmlFor={platform} className="text-sm">{platform}</label>
                  </div>
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Brand Tier">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                </SelectContent>
              </Select>
            </FilterSection>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Sort By</label>
            <Select defaultValue={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="budget">Budget</SelectItem>
                <SelectItem value="deadline">Deadline</SelectItem>
                <SelectItem value="popularity">Popularity</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

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
      </SheetContent>
    </Sheet>
  );
}