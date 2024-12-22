import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const categories = [
  "Fashion", "Beauty", "Tech", "Food & Beverage", "Fitness & Wellness"
];

const campaignTypes = [
  "Long-term Partnership", "One-time Project", "Product Gifting", "Affiliate Program"
];

const contentPlatforms = [
  "Instagram", "TikTok", "YouTube", "Twitter", "Facebook"
];

const brandTiers = [
  "Premium", "Standard", "Emerging"
];

export const CampaignFilters = () => {
  const [activeFilters, setActiveFilters] = React.useState<string[]>([]);
  const [budgetRange, setBudgetRange] = React.useState([0, 10000]);
  
  const handleFilterChange = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-wrap items-center gap-2">
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
              {/* Primary Filters */}
              <div className="space-y-4">
                <h3 className="font-semibold">Primary Filters</h3>
                
                {/* Categories */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Categories</label>
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
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <div className="flex gap-2">
                    <Input placeholder="Enter location" className="flex-1" />
                    <Input type="number" placeholder="Radius (km)" className="w-24" />
                  </div>
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Budget Range</label>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 10000]}
                      max={10000}
                      step={100}
                      onValueChange={setBudgetRange}
                    />
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                      <span>${budgetRange[0]}</span>
                      <span>${budgetRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Campaign Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Campaign Type</label>
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
                </div>
              </div>

              <Separator />

              {/* Advanced Filters */}
              <div className="space-y-4">
                <h3 className="font-semibold">Advanced Filters</h3>
                
                {/* Content Requirements */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Content Platforms</label>
                  <div className="grid grid-cols-2 gap-2">
                    {contentPlatforms.map((platform) => (
                      <div key={platform} className="flex items-center space-x-2">
                        <Checkbox 
                          id={platform}
                          onCheckedChange={() => handleFilterChange(platform)}
                        />
                        <label htmlFor={platform} className="text-sm">{platform}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brand Tier */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Brand Tier</label>
                  <div className="grid grid-cols-2 gap-2">
                    {brandTiers.map((tier) => (
                      <div key={tier} className="flex items-center space-x-2">
                        <Checkbox 
                          id={tier}
                          onCheckedChange={() => handleFilterChange(tier)}
                        />
                        <label htmlFor={tier} className="text-sm">{tier}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Campaign Duration */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Campaign Duration</label>
                  <div className="flex gap-2">
                    <Input type="date" className="flex-1" placeholder="Start Date" />
                    <Input type="date" className="flex-1" placeholder="End Date" />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Sorting */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Sort By</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sort order" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="budget-high">Budget (High to Low)</SelectItem>
                    <SelectItem value="budget-low">Budget (Low to High)</SelectItem>
                    <SelectItem value="deadline">Deadline</SelectItem>
                    <SelectItem value="popularity">Popularity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Active Filters Display */}
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
    </div>
  );
};