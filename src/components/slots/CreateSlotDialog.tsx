import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface CreateSlotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  campaignId: number;
}

export function CreateSlotDialog({ open, onOpenChange, campaignId }: CreateSlotDialogProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    requirements: "",
    budget: "",
    maxKols: 1,
    deadline: ""
  });

  const handleSubmit = () => {
    if (!formData.title || !formData.requirements || !formData.budget || !formData.deadline) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically make an API call to create the slot
    toast({
      title: "Slot Created",
      description: "Your slot has been created successfully",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Slot</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Slot Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter a descriptive title"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="requirements">Requirements</Label>
            <Textarea
              id="requirements"
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              placeholder="Enter requirements for KOLs"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget">Budget per KOL</Label>
            <Input
              id="budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              placeholder="Enter budget amount"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="maxKols">Maximum KOLs</Label>
            <Input
              id="maxKols"
              type="number"
              min="1"
              value={formData.maxKols}
              onChange={(e) => setFormData({ ...formData, maxKols: parseInt(e.target.value) })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="deadline">Deadline</Label>
            <Input
              id="deadline"
              type="date"
              value={formData.deadline}
              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button onClick={handleSubmit}>Create Slot</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}