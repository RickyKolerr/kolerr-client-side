import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface CampaignCardProps {
  campaign: {
    id: number;
    name: string;
    status: string;
    progress: number;
    kols: number;
    deadline: string;
    budget: string;
    engagement: string;
    roi: string;
    category: string;
  };
}

export const CampaignCard = ({ campaign }: CampaignCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow aspect-square">
      <CardHeader className="flex flex-col h-1/3">
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
      <CardContent className="h-2/3 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Deadline: {campaign.deadline}</span>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Progress</span>
              <span>{campaign.progress}%</span>
            </div>
            <Progress value={campaign.progress} className="h-2" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="text-center p-2 bg-background rounded-lg hover:bg-accent transition-colors">
            <p className="text-xs text-muted-foreground">KOLs</p>
            <p className="font-semibold">{campaign.kols}</p>
          </div>
          <div className="text-center p-2 bg-background rounded-lg hover:bg-accent transition-colors">
            <p className="text-xs text-muted-foreground">Budget</p>
            <p className="font-semibold">{campaign.budget}</p>
          </div>
          <div className="text-center p-2 bg-background rounded-lg hover:bg-accent transition-colors">
            <p className="text-xs text-muted-foreground">Engagement</p>
            <p className="font-semibold">{campaign.engagement}</p>
          </div>
          <div className="text-center p-2 bg-background rounded-lg hover:bg-accent transition-colors">
            <p className="text-xs text-muted-foreground">ROI</p>
            <p className="font-semibold text-green-500">{campaign.roi}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};