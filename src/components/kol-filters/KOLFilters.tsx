import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter, X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FilterSection } from "./FilterSection";
import { useState } from "react";

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

const platforms = [
  "Instagram",
  "TikTok",
  "YouTube",
  "Twitter",
  "LinkedIn",
  "Twitch"
];

const contentTypes = [
  "Video Reviews",
  "Live Streaming",
  "Photo Content",
  "Blog Posts",
  "Podcasts",
  "Tutorial Content"
];

const audienceTypes = [
  "Gen Z",
  "Millennials",
  "Professional",
  "Students",
  "Parents",
  "Tech Enthusiasts",
  "Luxury Consumers"
];

export const KOLFilters = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [followerRange, setFollowerRange] = useState([0, 1000000]);
  const [engagementRange, setEngagementRange] = useState([0, 100]);
  
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
              <SheetTitle>KOL Filters</SheetTitle>
            </SheetHeader>
            
            <div className="py-6 space-y-6">
              {/* Primary Filters */}
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

              <Separator />

              {/* Advanced Filters */}
              <div className="space-y-4">
                <h3 className="font-semibold">Advanced Filters</h3>
                
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

                <FilterSection title="Content Types">
                  <div className="grid grid-cols-2 gap-2">
                    {contentTypes.map((type) => (
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

                <FilterSection title="Target Audience">
                  <div className="grid grid-cols-2 gap-2">
                    {audienceTypes.map((audience) => (
                      <div key={audience} className="flex items-center space-x-2">
                        <Checkbox 
                          id={audience}
                          onCheckedChange={() => handleFilterChange(audience)}
                        />
                        <label htmlFor={audience} className="text-sm">{audience}</label>
                      </div>
                    ))}
                  </div>
                </FilterSection>

                <FilterSection title="Language">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select languages" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                    </SelectContent>
                  </Select>
                </FilterSection>
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
                    <SelectItem value="followers-high">Followers (High to Low)</SelectItem>
                    <SelectItem value="followers-low">Followers (Low to High)</SelectItem>
                    <SelectItem value="engagement-high">Engagement (High to Low)</SelectItem>
                    <SelectItem value="engagement-low">Engagement (Low to High)</SelectItem>
                    <SelectItem value="relevance">Relevance</SelectItem>
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