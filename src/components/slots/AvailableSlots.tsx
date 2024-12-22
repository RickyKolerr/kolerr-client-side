import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { SlotFilterHeader } from "./filters/SlotFilterHeader";
import { SlotActiveFilters } from "./filters/SlotActiveFilters";
import { SlotCard } from "./SlotCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AvailableSlots() {
  const { t } = useLanguage();
  const [budgetRange, setBudgetRange] = useState([0, 10000]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const slots = [
    {
      id: 1,
      title: "Beauty Campaign with XYZ Brand",
      brand: "XYZ Beauty",
      budget: "$1,000-$2,000",
      dates: "Mar 15 - Apr 15, 2024",
      followers: "10K+",
      description: "Looking for beauty influencers to promote our new skincare line",
      status: "Open",
      category: "Beauty",
      platform: "Instagram",
      requirements: "Min. 10K followers, Beauty niche"
    },
    {
      id: 2,
      title: "Tech Review Campaign",
      brand: "TechGear Pro",
      budget: "$2,000-$3,000",
      dates: "Mar 20 - Apr 20, 2024",
      followers: "50K+",
      description: "Seeking tech reviewers for our latest smartphone accessories",
      status: "Open",
      category: "Tech",
      platform: "YouTube",
      requirements: "Tech expertise, Video content"
    }
  ];

  const handleRemoveFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input 
            placeholder={t('slots.available.search')} 
            className="pl-10 border-kolerr-purple/20 focus:border-kolerr-purple" 
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Sheet>
            <SheetTrigger asChild>
              <SlotFilterHeader activeFiltersCount={activeFilters.length} />
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle className="text-xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
                  Search Filters
                </SheetTitle>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Primary Filters</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select campaign type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Campaign Types</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Advanced Filters</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select campaign objectives" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Objectives</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content platforms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Platforms</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Content Types</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Brand Tiers</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select AI recommended" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All AI Recommendations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Budget Range</label>
                  <Slider
                    value={budgetRange}
                    onValueChange={setBudgetRange}
                    max={10000}
                    step={100}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${budgetRange[0]}</span>
                    <span>${budgetRange[1]}</span>
                  </div>
                </div>

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
        </div>
      </div>

      <SlotActiveFilters 
        activeFilters={activeFilters} 
        onRemoveFilter={handleRemoveFilter} 
      />

      <div className="grid gap-6 md:grid-cols-2">
        {slots.map((slot) => (
          <SlotCard key={slot.id} slot={slot} />
        ))}
      </div>
    </div>
  );
}
