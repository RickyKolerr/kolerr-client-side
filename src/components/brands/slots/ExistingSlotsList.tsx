import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Pencil, Trash2, UserPlus } from "lucide-react";
import { Slot } from "@/types/campaign";
import { useToast } from "@/hooks/use-toast";

interface ExistingSlotsListProps {
  slots: Slot[];
  onEdit: (slot: Slot) => void;
  onDelete: (slotId: number) => void;
  onViewApplicants: (slotId: number) => void;
}

export const ExistingSlotsList = ({
  slots,
  onEdit,
  onDelete,
  onViewApplicants,
}: ExistingSlotsListProps) => {
  const { toast } = useToast();

  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-4">
        {slots.map((slot) => (
          <Card key={slot.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold">{slot.title}</h3>
                  <p className="text-sm text-muted-foreground">{slot.requirements}</p>
                </div>
                <Badge variant={slot.status === "Open" ? "default" : "secondary"}>
                  {slot.status}
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-2 bg-background rounded-lg">
                  <p className="text-xs text-muted-foreground">Budget</p>
                  <p className="font-semibold">{slot.budget}</p>
                </div>
                <div className="text-center p-2 bg-background rounded-lg">
                  <p className="text-xs text-muted-foreground">KOLs</p>
                  <p className="font-semibold">{slot.currentKols}/{slot.maxKols}</p>
                </div>
                <div className="text-center p-2 bg-background rounded-lg">
                  <p className="text-xs text-muted-foreground">Applicants</p>
                  <p className="font-semibold">{slot.applicants}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => onEdit(slot)}>
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" onClick={() => onDelete(slot.id)}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
                <Button variant="outline" size="sm" onClick={() => onViewApplicants(slot.id)}>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Applicants
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};