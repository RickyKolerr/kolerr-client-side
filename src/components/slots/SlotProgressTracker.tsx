import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, DollarSign } from "lucide-react";
import { Slot } from "@/types/slot";

interface SlotProgressTrackerProps {
  slot: Slot;
}

export function SlotProgressTracker({ slot }: SlotProgressTrackerProps) {
  const daysLeft = Math.ceil((new Date(slot.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{slot.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              {slot.collaborators}/{slot.maxCollaborators} KOLs
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{daysLeft} days left</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{slot.budget}</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>{slot.progress}%</span>
          </div>
          <Progress value={slot.progress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}