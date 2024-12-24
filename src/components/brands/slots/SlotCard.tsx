import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Users } from "lucide-react";
import { Slot } from "@/types/campaign";

interface SlotCardProps {
  slot: Slot;
  onEdit: (slot: Slot) => void;
  onDelete: (slotId: number) => void;
  onViewApplicants: (slotId: number) => void;
}

export const SlotCard = ({ slot, onEdit, onDelete, onViewApplicants }: SlotCardProps) => {
  return (
    <Card className="bg-[#1A1A1A] border-gray-800 p-6 space-y-4 hover:bg-[#242424] transition-all">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-white">{slot.title}</h3>
          <p className="text-gray-400 text-sm">{slot.requirements}</p>
        </div>
        <Badge 
          variant={slot.status === "Open" ? "default" : "secondary"}
          className={`${
            slot.status === "Open" 
              ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" 
              : "bg-gray-500/10 text-gray-400"
          }`}
        >
          {slot.status}
        </Badge>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-black/30 rounded-lg p-3 text-center">
          <p className="text-gray-400 text-xs mb-1">Budget</p>
          <p className="text-white font-semibold">{slot.budget}</p>
        </div>
        <div className="bg-black/30 rounded-lg p-3 text-center">
          <p className="text-gray-400 text-xs mb-1">KOLs</p>
          <p className="text-white font-semibold">{slot.currentKols}/{slot.maxKols}</p>
        </div>
        <div className="bg-black/30 rounded-lg p-3 text-center">
          <p className="text-gray-400 text-xs mb-1">Applicants</p>
          <p className="text-white font-semibold">{slot.applicants}</p>
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onEdit(slot)}
          className="bg-transparent border-gray-700 hover:bg-gray-800 text-gray-300"
        >
          <Pencil className="h-4 w-4 mr-2" />
          Edit
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onDelete(slot.id)}
          className="bg-transparent border-gray-700 hover:bg-gray-800 text-gray-300"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onViewApplicants(slot.id)}
          className="bg-transparent border-gray-700 hover:bg-gray-800 text-gray-300"
        >
          <Users className="h-4 w-4 mr-2" />
          Applicants
        </Button>
      </div>
    </Card>
  );
};