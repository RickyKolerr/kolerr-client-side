import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { getUserType } from "@/utils/userTypeUtils";

interface KOLCardActionsProps {
  onViewProfile: () => void;
}

export const KOLCardActions = ({ onViewProfile }: KOLCardActionsProps) => {
  const userType = getUserType();

  return (
    <div className="flex gap-2">
      <Button 
        className="flex-1 gradient-bg text-white hover-scale"
        onClick={onViewProfile}
      >
        <Eye className="w-4 h-4 mr-2" />
        View Profile
      </Button>
      {userType === 'brand' && (
        <Button 
          variant="outline"
          className="flex-1 border-white/20 text-white hover:bg-white/10"
        >
          Invite to Slot
        </Button>
      )}
    </div>
  );
};