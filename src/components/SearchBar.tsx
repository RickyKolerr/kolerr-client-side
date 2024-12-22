import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const categories = [
  "Fashion",
  "Beauty",
  "Tech",
  "Food & Beverage",
  "Fitness & Wellness",
];

const campaignTypes = [
  "Long-term partnerships",
  "One-time projects",
  "Product gifting",
  "Affiliate programs",
];

const SearchBar = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState([50]);
  const [budgetRange, setBudgetRange] = useState([500]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [showOpenSlots, setShowOpenSlots] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    updateActiveFilters();
  };

  const handleTypeToggle = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
    updateActiveFilters();
  };

  const updateActiveFilters = () => {
    const filters = [];
    if (selectedCategories.length) filters.push("Categories");
    if (location) filters.push("Location");
    if (selectedTypes.length) filters.push("Campaign Types");
    if (showOpenSlots) filters.push("Open Slots");
    setActiveFilters(filters);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            type="text"
            placeholder="Search campaigns..."
            className="pl-10 bg-white/10 text-white border-gray-700"
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
              {activeFilters.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {activeFilters.length}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-[440px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filter Campaigns</SheetTitle>
              <SheetDescription>
                Refine your search with advanced filters
              </SheetDescription>
            </SheetHeader>

            <div className="mt-6 space-y-6">
              {/* Categories */}
              <div className="space-y-4">
                <h3 className="font-medium">Categories</h3>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <div
                      key={category}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryToggle(category)}
                      />
                      <label
                        htmlFor={category}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <h3 className="font-medium">Location</h3>
                <Input
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Radius</span>
                    <span className="text-sm">{radius}km</span>
                  </div>
                  <Slider
                    value={radius}
                    onValueChange={setRadius}
                    max={100}
                    step={1}
                  />
                </div>
              </div>

              {/* Budget Range */}
              <div className="space-y-4">
                <h3 className="font-medium">Budget Range</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Up to ${budgetRange}</span>
                  </div>
                  <Slider
                    value={budgetRange}
                    onValueChange={setBudgetRange}
                    max={10000}
                    step={100}
                  />
                </div>
              </div>

              {/* Campaign Type */}
              <div className="space-y-4">
                <h3 className="font-medium">Campaign Type</h3>
                <div className="grid grid-cols-1 gap-3">
                  {campaignTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={type}
                        checked={selectedTypes.includes(type)}
                        onCheckedChange={() => handleTypeToggle(type)}
                      />
                      <label
                        htmlFor={type}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slot Availability */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="openSlots"
                  checked={showOpenSlots}
                  onCheckedChange={(checked) => {
                    setShowOpenSlots(checked as boolean);
                    updateActiveFilters();
                  }}
                />
                <label
                  htmlFor="openSlots"
                  className="text-sm font-medium leading-none"
                >
                  Show only campaigns with open slots
                </label>
              </div>

              {/* Active Filters */}
              {activeFilters.length > 0 && (
                <div className="pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Active Filters</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedCategories([]);
                        setLocation("");
                        setRadius([50]);
                        setBudgetRange([500]);
                        setSelectedTypes([]);
                        setShowOpenSlots(false);
                        setActiveFilters([]);
                      }}
                      className="h-8 text-sm"
                    >
                      Clear all
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeFilters.map((filter) => (
                      <Badge
                        key={filter}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        {filter}
                        <X className="h-3 w-3 cursor-pointer" />
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default SearchBar;