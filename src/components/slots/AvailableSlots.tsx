import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Target, Calendar, DollarSign, Users, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const AvailableSlots = () => {
  const { t } = useLanguage();
  const [budgetRange, setBudgetRange] = useState([0, 10000]);

  const primaryFilters = [
    { value: "category", label: "Category" },
    { value: "location", label: "Location" },
    { value: "campaign-type", label: "Campaign Type" },
    { value: "industry", label: "Industry" },
  ];

  const advancedFilters = [
    { value: "objectives", label: "Campaign Objectives" },
    { value: "platforms", label: "Content Platforms" },
    { value: "content-type", label: "Content Type" },
    { value: "brand-tier", label: "Brand Tier" },
    { value: "ai-recommended", label: "AI Recommended" },
  ];

  const sortOptions = [
    { value: "relevance", label: "Relevance" },
    { value: "budget-high", label: "Budget (High to Low)" },
    { value: "budget-low", label: "Budget (Low to High)" },
    { value: "deadline", label: "Deadline" },
    { value: "popularity", label: "Popularity" },
  ];

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

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input placeholder={t('slots.available.search')} className="pl-10" />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Search Filters</SheetTitle>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Primary Filters</h3>
                  {primaryFilters.map((filter) => (
                    <Select key={filter.value}>
                      <SelectTrigger>
                        <SelectValue placeholder={filter.label} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All {filter.label}s</SelectItem>
                      </SelectContent>
                    </Select>
                  ))}
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
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Advanced Filters</h3>
                  {advancedFilters.map((filter) => (
                    <Select key={filter.value}>
                      <SelectTrigger>
                        <SelectValue placeholder={filter.label} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All {filter.label}s</SelectItem>
                      </SelectContent>
                    </Select>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Sort By</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select sort order" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {slots.map((slot) => (
          <Card key={slot.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl mb-2">{slot.title}</CardTitle>
                  <Badge variant="secondary" className="mb-2">{slot.platform}</Badge>
                </div>
                <Badge variant="default" className="bg-green-500">
                  {slot.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t('slots.available.brand')}</p>
                    <p className="font-medium">{slot.brand}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t('slots.available.budget')}</p>
                    <p className="font-medium">{slot.budget}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t('slots.available.dates')}</p>
                    <p className="font-medium">{slot.dates}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">{t('slots.available.followers')}</p>
                    <p className="font-medium">{slot.followers}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm">{slot.requirements}</p>
              </div>
              <p className="text-sm text-muted-foreground">{slot.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange">
                {t('slots.available.applyNow')}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AvailableSlots;