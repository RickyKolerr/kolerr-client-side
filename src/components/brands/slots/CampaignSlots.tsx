import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users, Target, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CreateSlotDialog } from "@/components/slots/CreateSlotDialog";
import { Campaign, Slot } from "@/types/campaign";

export const CampaignSlots = () => {
  const { campaignId } = useParams();
  const [isCreateSlotOpen, setIsCreateSlotOpen] = useState(false);
  
  // This would typically come from your data fetching logic
  const campaign: Campaign = {
    id: 1,
    name: "Summer Fashion Collection",
    status: "Active",
    progress: 75,
    kols: 5,
    deadline: "2024-04-15",
    budget: "$15,000",
    engagement: "12.5K",
    roi: "+15.2%",
    category: "Fashion",
    slots: [
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
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            Campaign Slots: {campaign.name}
          </h1>
          <p className="text-muted-foreground">
            Manage and create slots for this campaign
          </p>
        </div>
        <Button onClick={() => setIsCreateSlotOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Slot
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {campaign.slots.map((slot) => (
          <Card key={slot.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{slot.title}</CardTitle>
                <Badge variant={slot.status === "Open" ? "default" : "secondary"}>
                  {slot.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span>{slot.requirements}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Due: {slot.deadline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {slot.currentKols}/{slot.maxKols} KOLs ({slot.applicants} applicants)
                  </span>
                </div>
                <Button variant="outline" className="w-full">
                  Manage Slot
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <CreateSlotDialog 
        open={isCreateSlotOpen} 
        onOpenChange={setIsCreateSlotOpen}
        campaignId={Number(campaignId)}
      />
    </div>
  );
};