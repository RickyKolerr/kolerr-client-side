import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Input
          type="text"
          placeholder="Search KOLs..."
          className="pl-10 bg-white/10 text-white border-gray-700"
        />
      </div>
      <select className="bg-white/10 text-white border-gray-700 rounded-md px-4 py-2">
        <option value="popularity">Sort by Popularity</option>
        <option value="followers">Sort by Followers</option>
        <option value="engagement">Sort by Engagement</option>
      </select>
    </div>
  );
};

export default SearchBar;