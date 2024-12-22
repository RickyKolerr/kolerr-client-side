import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTransition, startTransition } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onSort: (value: string) => void;
  sortBy: string;
}

const SearchBar = ({ onSearch, onSort, sortBy }: SearchBarProps) => {
  const [isPending, startSearchTransition] = useTransition();

  const handleSearch = (value: string) => {
    startSearchTransition(() => {
      onSearch(value);
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Input
          type="text"
          placeholder="Search KOLs..."
          className="pl-10 bg-white/10 text-white border-gray-700"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <Select value={sortBy} onValueChange={onSort}>
        <SelectTrigger className="w-[200px] bg-white/10 text-white border-gray-700">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="popularity">Sort by Popularity</SelectItem>
          <SelectItem value="followers">Sort by Followers</SelectItem>
          <SelectItem value="engagement">Sort by Engagement</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchBar;