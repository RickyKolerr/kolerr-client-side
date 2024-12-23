import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";
import { Campaign } from "@/types/campaign";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ManageSlotForm } from "./slots/ManageSlotForm";

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const totalSlots = campaign.slots?.length || 0;
  const filledSlots = campaign.slots?.filter(slot => slot.status === "Filled").length || 0;

  const campaignBackgrounds = {
    "Fashion": "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    "Tech": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    "Beauty": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    "default": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  };

  const backgroundImage = campaignBackgrounds[campaign.category as keyof typeof campaignBackgrounds] || campaignBackgrounds.default;

  return (
    <Card className="hover:shadow-lg transition-shadow overflow-hidden">
      <div 
        className="h-32 w-full bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage})` 
        }}
      >
        <CardHeader className="flex flex-col h-full">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle className="text-lg font-semibold line-clamp-2 text-white">
                {campaign.name}
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                  {campaign.category}
                </Badge>
                <Badge
                  variant={campaign.status === "Active" ? "default" : "secondary"}
                  className={campaign.status === "Active" ? "bg-green-500" : ""}
                >
                  {campaign.status}
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </div>
      <CardContent className="space-y-4 pt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Deadline: {campaign.deadline}</span>
        </div>
        
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Campaign Progress</span>
            <span>{campaign.progress}%</span>
          </div>
          <Progress value={campaign.progress} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="text-center p-2 bg-background rounded-lg">
            <p className="text-xs text-muted-foreground">Slots</p>
            <p className="font-semibold">{`${filledSlots}/${totalSlots}`}</p>
          </div>
          <div className="text-center p-2 bg-background rounded-lg">
            <p className="text-xs text-muted-foreground">Budget</p>
            <p className="font-semibold">{campaign.budget}</p>
          </div>
        </div>

        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => setIsFormOpen(true)}
        >
          <Users className="h-4 w-4 mr-2" />
          Manage Slots
        </Button>
      </CardContent>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-3xl">
          <ManageSlotForm 
            campaignId={campaign.id}
            onClose={() => setIsFormOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </Card>
  );
};