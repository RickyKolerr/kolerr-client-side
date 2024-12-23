import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, Users, Star, Sparkles } from "lucide-react";
import { Slot } from "@/types/slot";
import { useToast } from "@/hooks/use-toast";
import { calculateMatchScore } from "@/utils/matchmaking";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface SlotRecommendationProps {
  slot: Slot;
}

export const SlotRecommendation = ({ slot }: SlotRecommendationProps) => {
  const { toast } = useToast();

  // Mock KOL profile - in real app, this would come from auth context
  const mockKolProfile = {
    categories: [slot.category],
    followers: 150000,
    engagement: 7.5,
    previousCampaigns: 8
  };

  const matchScore = calculateMatchScore(slot, mockKolProfile);

  const handleInvite = () => {
    toast({
      title: "Invitation Sent",
      description: "Your collaborator will be notified about this opportunity.",
    });
  };

  return (
    <Card className={`hover:shadow-lg transition-shadow ${slot.isFeatured ? 'border-kolerr-purple' : ''}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{slot.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{slot.brand}</p>
          </div>
          <div className="flex gap-2">
            {matchScore.score >= 80 && (
              <Tooltip>
                <TooltipTrigger>
                  <Badge className="bg-green-500">
                    <Sparkles className="h-4 w-4 mr-1" />
                    Perfect Match
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-2">
                    <p className="font-semibold">Why this matches you:</p>
                    <ul className="list-disc list-inside">
                      {matchScore.reasons.map((reason, index) => (
                        <li key={index} className="text-sm">{reason}</li>
                      ))}
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
            )}
            {slot.isFeatured && (
              <Badge className="bg-kolerr-purple">
                <Star className="h-4 w-4 mr-1" />
                Featured
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Due: {slot.deadline}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{slot.budget}</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Match Score</span>
            <span className="text-sm font-medium">{matchScore.score}%</span>
          </div>
          <Progress value={matchScore.score} className="h-2" />
        </div>

        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">
            {slot.collaborators || 0}/{slot.maxCollaborators || 3} Collaborators
          </span>
        </div>

        <div className="flex justify-between gap-2">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={handleInvite}
          >
            Invite Collaborator
          </Button>
          <Button 
            className={`flex-1 ${
              matchScore.score >= 80 
                ? 'bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange' 
                : ''
            }`}
          >
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};