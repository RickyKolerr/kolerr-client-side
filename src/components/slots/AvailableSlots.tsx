import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { SlotRecommendation } from "./SlotRecommendation";
import { BadgeProgress } from "./BadgeProgress";
import { Badge } from "@/types/slot";

const AvailableSlots = () => {
  const { toast } = useToast();

  const mockBadges: Badge[] = [
    {
      type: "trending",
      name: "Trending Fashion KOL",
      description: "You're among the top performers in Fashion category",
      progress: 85,
    },
    {
      type: "topInviter",
      name: "Top Inviter",
      description: "Keep inviting peers to unlock this badge",
      progress: 60,
    },
  ];

  const mockSlots = [
    {
      id: 1,
      title: "Fashion Spring Collection",
      brand: "StyleHub",
      status: "Open" as const, // Explicitly type as "Open"
      deadline: "2024-04-01",
      requirements: "2 Instagram posts, 1 Story",
      budget: "$1,500",
      category: "Fashion",
      platform: "Instagram",
      isFeatured: true,
      collaborators: 1,
      maxCollaborators: 3,
    },
    {
      id: 2,
      title: "Tech Review Series",
      brand: "TechGiant",
      deadline: "2024-04-15",
      status: "Open" as const, // Explicitly type as "Open"
      requirements: "Tech niche focus",
      budget: "$2,000",
      category: "Technology",
      platform: "YouTube",
      collaborators: 0,
      maxCollaborators: 2,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input placeholder="Search slots..." className="pl-10" />
        </div>
        <Button 
          variant="outline"
          onClick={() => {
            toast({
              title: "AI Recommendations",
              description: "Updating recommendations based on your profile...",
            });
          }}
        >
          Get AI Recommendations
        </Button>
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
            {mockSlots.map((slot) => (
              <SlotRecommendation key={slot.id} slot={slot} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableSlots;