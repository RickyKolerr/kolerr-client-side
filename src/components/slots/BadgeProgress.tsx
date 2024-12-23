import { Badge as BadgeType } from "@/types/slot";
import { Progress } from "@/components/ui/progress";
import { Badge as UIBadge } from "@/components/ui/badge";
import { Trophy, Users, Star, Handshake } from "lucide-react";

interface BadgeProgressProps {
  badge: BadgeType;
}

const BadgeIcons: Record<string, React.ElementType> = {
  topKol: Trophy,
  trending: Trophy,
  topInviter: Users,
  fiveStarKol: Star,
  proCollaborator: Handshake,
  highlyRatedBrand: Star
};

export const BadgeProgress = ({ badge }: BadgeProgressProps) => {
  const Icon = BadgeIcons[badge.type] || Star; // Fallback to Star if icon not found

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-kolerr-purple" />
        <UIBadge variant="outline" className="bg-kolerr-purple/10">
          {badge.name}
        </UIBadge>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">{badge.description}</p>
        <Progress value={badge.progress} className="h-2" />
        <p className="text-xs text-right text-muted-foreground">
          {badge.progress}% Complete
        </p>
      </div>
    </div>
  );
};