import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";
import { Campaign } from "@/types/campaign";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const navigate = useNavigate();
  const totalSlots = campaign.slots?.length || 0;
  const filledSlots = campaign.slots?.filter(slot => slot.status === "Filled").length || 0;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold line-clamp-2">
              {campaign.name}
            </CardTitle>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{campaign.category}</Badge>
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
      <CardContent className="space-y-4">
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
          onClick={() => navigate(`/brands/campaigns/${campaign.id}/slots`)}
        >
          <Users className="h-4 w-4 mr-2" />
          Manage Slots
        </Button>
      </CardContent>
    </Card>
  );
};