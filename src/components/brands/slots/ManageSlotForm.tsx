import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExistingSlotsList } from "./ExistingSlotsList";
import { SlotForm } from "./SlotForm";
import { Slot } from "@/types/campaign";

interface ManageSlotFormProps {
  campaignId: number;
  onClose?: () => void;
}

export const ManageSlotForm = ({ campaignId, onClose }: ManageSlotFormProps) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("existing");
  const [editingSlot, setEditingSlot] = useState<Slot | null>(null);

  // Mock data - replace with actual data fetching
  const existingSlots: Slot[] = [
    {
      id: 1,
      campaignId: 1,
      title: "Fashion Influencer",
      requirements: "Min 50k followers, Fashion/Lifestyle niche",
      deadline: "2024-04-15",
      budget: "$3,000",
      applicants: 12,
      status: "Open",
      maxKols: 3,
      currentKols: 1
    },
    {
      id: 2,
      campaignId: 1,
      title: "Beauty Blogger",
      requirements: "Min 30k followers, Beauty niche",
      deadline: "2024-04-10",
      budget: "$2,500",
      applicants: 8,
      status: "Filled",
      maxKols: 2,
      currentKols: 2
    }
  ];

  const handleSubmit = (formData: any) => {
    console.log("Submitting slot data:", { ...formData, campaignId });
    
    toast({
      title: "Success",
      description: editingSlot ? "Slot updated successfully" : "Slot created successfully",
    });

    setEditingSlot(null);
    setActiveTab("existing");
  };

  const handleEdit = (slot: Slot) => {
    setEditingSlot(slot);
    setActiveTab("create");
  };

  const handleDelete = (slotId: number) => {
    toast({
      title: "Success",
      description: "Slot deleted successfully",
    });
  };

  const handleViewApplicants = (slotId: number) => {
    toast({
      title: "Info",
      description: "Viewing applicants feature coming soon",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Manage Campaign Slots</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="existing">Existing Slots</TabsTrigger>
            <TabsTrigger value="create">{editingSlot ? "Edit Slot" : "Create Slot"}</TabsTrigger>
          </TabsList>

          <TabsContent value="existing">
            <ExistingSlotsList
              slots={existingSlots}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onViewApplicants={handleViewApplicants}
            />
          </TabsContent>

          <TabsContent value="create">
            <SlotForm
              initialData={editingSlot || undefined}
              onSubmit={handleSubmit}
              onCancel={onClose}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};