import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, DollarSign, Users, Pencil, Trash2, UserPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slot } from "@/types/campaign";

interface ManageSlotFormProps {
  campaignId: number;
  onClose?: () => void;
}

export const ManageSlotForm = ({ campaignId, onClose }: ManageSlotFormProps) => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("existing");
  const [editingSlot, setEditingSlot] = useState<Slot | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    requirements: "",
    deadline: "",
    budget: "",
    maxKols: 1,
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting slot data:", { ...formData, campaignId });
    
    toast({
      title: "Success",
      description: editingSlot ? "Slot updated successfully" : "Slot created successfully",
    });

    setEditingSlot(null);
    setFormData({
      title: "",
      requirements: "",
      deadline: "",
      budget: "",
      maxKols: 1,
    });
    setActiveTab("existing");
  };

  const handleEdit = (slot: Slot) => {
    setFormData({
      title: slot.title,
      requirements: slot.requirements,
      deadline: slot.deadline,
      budget: slot.budget,
      maxKols: slot.maxKols || 1,
    });
    setEditingSlot(slot);
    setActiveTab("create");
  };

  const handleDelete = (slotId: number) => {
    // Here you would make an API call to delete the slot
    toast({
      title: "Success",
      description: "Slot deleted successfully",
    });
  };

  const handleViewApplicants = (slotId: number) => {
    // Here you would navigate to or open a dialog showing applicants
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
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4">
                {existingSlots.map((slot) => (
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
                        <Button variant="outline" size="sm" onClick={() => handleEdit(slot)}>
                          <Pencil className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleDelete(slot.id)}>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleViewApplicants(slot.id)}>
                          <UserPlus className="h-4 w-4 mr-2" />
                          Applicants
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="create">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Slot Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter slot title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements</Label>
                <Textarea
                  id="requirements"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Enter requirements for KOLs"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="deadline">Deadline</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input
                      id="deadline"
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                    <Input
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="Enter budget"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxKols">Maximum KOLs</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                  <Input
                    id="maxKols"
                    type="number"
                    min="1"
                    value={formData.maxKols}
                    onChange={(e) => setFormData({ ...formData, maxKols: parseInt(e.target.value) })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                {onClose && (
                  <Button type="button" variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                )}
                <Button type="submit">
                  {editingSlot ? "Update Slot" : "Create Slot"}
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};