import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Button } from "./ui/button";

const SearchBar = () => {
  const [followerRange, setFollowerRange] = useState([0, 1000000]);
  const [engagementRange, setEngagementRange] = useState([0, 100]);

  const categories = [
    "All Categories",
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
    <div className="space-y-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            type="text"
            placeholder="Search KOLs..."
            className="pl-10 bg-white/10 text-white border-gray-700"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Select>
            <SelectTrigger className="bg-white/10 text-white border-gray-700 w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Sort by Popularity</SelectItem>
              <SelectItem value="followers">Sort by Followers</SelectItem>
              <SelectItem value="engagement">Sort by Engagement</SelectItem>
              <SelectItem value="relevance">Sort by Relevance</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="bg-white/10 text-white border-gray-700">
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select>
          <SelectTrigger className="bg-white/10 text-white border-gray-700">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category.toLowerCase()}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Follower Range</label>
          <Slider
            defaultValue={[0, 1000000]}
            max={1000000}
            step={1000}
            onValueChange={setFollowerRange}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>{followerRange[0].toLocaleString()}K</span>
            <span>{followerRange[1].toLocaleString()}M</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Engagement Rate</label>
          <Slider
            defaultValue={[0, 100]}
            max={100}
            step={0.1}
            onValueChange={setEngagementRange}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>{engagementRange[0]}%</span>
            <span>{engagementRange[1]}%</span>
          </div>
        </div>

        <Select>
          <SelectTrigger className="bg-white/10 text-white border-gray-700">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="hanoi">Hanoi</SelectItem>
            <SelectItem value="hcmc">Ho Chi Minh City</SelectItem>
            <SelectItem value="danang">Da Nang</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchBar;