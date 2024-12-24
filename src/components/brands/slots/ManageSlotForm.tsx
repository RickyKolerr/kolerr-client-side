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
    toast({
      title: editingSlot ? "Slot Updated" : "Slot Created",
      description: editingSlot 
        ? "The slot has been updated successfully" 
        : "A new slot has been created successfully",
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
      title: "Slot Deleted",
      description: "The slot has been deleted successfully",
    });
  };

  const handleViewApplicants = (slotId: number) => {
    toast({
      title: "Coming Soon",
      description: "The applicants view feature will be available soon",
    });
  };

  return (
    <Card className="w-full bg-[#121212] border-gray-800">
      <CardHeader className="border-b border-gray-800">
        <CardTitle className="text-2xl font-bold text-white">Manage Campaign Slots</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#1A1A1A] p-1 rounded-lg">
            <TabsTrigger 
              value="existing"
              className="data-[state=active]:bg-[#242424] data-[state=active]:text-white"
            >
              Existing Slots
            </TabsTrigger>
            <TabsTrigger 
              value="create"
              className="data-[state=active]:bg-[#242424] data-[state=active]:text-white"
            >
              {editingSlot ? "Edit Slot" : "Create Slot"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="existing" className="mt-6">
            <ExistingSlotsList
              slots={existingSlots}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onViewApplicants={handleViewApplicants}
            />
          </TabsContent>

          <TabsContent value="create" className="mt-6">
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