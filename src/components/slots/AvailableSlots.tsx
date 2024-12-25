import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { SlotRecommendation } from "./SlotRecommendation";
import { BadgeProgress } from "./BadgeProgress";
import { CreateSlotDialog } from "./CreateSlotDialog";
import { Badge, Slot } from "@/types/slot";
import { useState } from "react";

const AvailableSlots = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateSlotOpen, setIsCreateSlotOpen] = useState(false);

  const mockBadges: Badge[] = [
    {
      type: "topKol",
      name: "Top KOL",
      description: "You're among the top performers",
      progress: 85,
    },
    {
      type: "highlyRatedBrand",
      name: "Highly Rated Brand",
      description: "Maintain high ratings to keep this badge",
      progress: 90,
    },
  ];

  const mockSlots: Slot[] = [
    {
      id: 1,
      brandId: 1,
      title: "Fashion Spring Collection",
      brand: "StyleHub",
      status: "Open",
      deadline: "2024-04-01",
      requirements: "2 Instagram posts, 1 Story",
      budget: "$1,500",
      category: "Fashion",
      platform: "Instagram",
      isFeatured: true,
      collaborators: 1,
      maxCollaborators: 3,
      progress: 33,
      isRecommended: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 2,
      brandId: 2,
      title: "Tech Review Series",
      brand: "TechGiant",
      deadline: "2024-04-15",
      status: "Open",
      requirements: "Tech niche focus",
      budget: "$2,000",
      category: "Tech",
      platform: "YouTube",
      collaborators: 0,
      maxCollaborators: 2,
      progress: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
  ];

  const filteredSlots = mockSlots.filter(slot =>
    slot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    slot.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    slot.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input 
            placeholder="Search slots..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <CreateSlotDialog 
          open={isCreateSlotOpen}
          onOpenChange={setIsCreateSlotOpen}
          campaignId={1} // Default campaign ID, you might want to pass this as a prop
        />
      </div>

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          <div className="bg-card rounded-lg p-4 space-y-4">
            <h3 className="font-semibold">Your Achievements</h3>
            {mockBadges.map((badge) => (
              <BadgeProgress key={badge.type} badge={badge} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-semibold">Recommended Slots</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredSlots.map((slot) => (
              <SlotRecommendation key={slot.id} slot={slot} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableSlots;
