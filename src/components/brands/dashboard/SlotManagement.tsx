import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Target } from "lucide-react";
import { useState } from "react";
import { ManageSlotForm } from "../slots/ManageSlotForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const SlotManagement = () => {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const slots = [
    {
      id: 1,
      title: "Fashion Influencer",
      requirements: "Min 50k followers, Fashion/Lifestyle niche",
      deadline: "2024-04-15",
      applicants: 12,
      status: "Open" as const,
      maxKols: 3,
      currentKols: 1,
      budget: "$3,000",
      campaignId: 1
    },
    {
      id: 2,
      title: "Tech Reviewer",
      requirements: "Tech expertise, Min 20k subscribers",
      deadline: "2024-04-20",
      applicants: 8,
      status: "Open" as const,
      maxKols: 2,
      currentKols: 0,
      budget: "$2,500",
      campaignId: 1
    }
  ];

  const handleManageSlot = (slotId: number) => {
    setSelectedSlot(slotId);
    setIsFormOpen(true);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Campaign Slots</h2>
          <p className="text-muted-foreground">Manage your campaign slots and requirements</p>
        </div>
        <Button onClick={() => setIsFormOpen(true)}>
          Create New Slot
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {slots.map((slot) => (
          <Card key={slot.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{slot.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span>{slot.requirements}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Due: {slot.deadline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{slot.applicants} Applicants</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleManageSlot(slot.id)}
                >
                  Manage Slot
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-3xl">
          <ManageSlotForm 
            slot={selectedSlot ? slots.find(s => s.id === selectedSlot) : undefined}
            onClose={() => {
              setIsFormOpen(false);
              setSelectedSlot(null);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};