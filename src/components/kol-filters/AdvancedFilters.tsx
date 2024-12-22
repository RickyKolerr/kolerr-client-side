import { FilterSection } from "./FilterSection";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AdvancedFiltersProps {
  handleFilterChange: (filter: string) => void;
}

export const AdvancedFilters = ({ handleFilterChange }: AdvancedFiltersProps) => {
  const platforms = [
    "Instagram",
    "TikTok",
    "YouTube",
    "Twitter",
    "LinkedIn",
    "Twitch",
    "Facebook",
    "Zalo"
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

  return (
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
            <SelectItem value="vi">Vietnamese</SelectItem>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="zh">Chinese</SelectItem>
            <SelectItem value="ko">Korean</SelectItem>
            <SelectItem value="ja">Japanese</SelectItem>
          </SelectContent>
        </Select>
      </FilterSection>
    </div>
  );
};