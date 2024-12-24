import { ScrollArea } from "@/components/ui/scroll-area";
import { Slot } from "@/types/campaign";
import { SlotCard } from "./SlotCard";

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
  return (
    <ScrollArea className="h-[600px] pr-4">
      <div className="space-y-4">
        {slots.map((slot) => (
          <SlotCard
            key={slot.id}
            slot={slot}
            onEdit={onEdit}
            onDelete={onDelete}
            onViewApplicants={onViewApplicants}
          />
        ))}
      </div>
    </ScrollArea>
  );
};