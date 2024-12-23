import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, Users, Star, Sparkles, Trophy, Award } from "lucide-react";
import { Slot } from "@/types/slot";
import { useToast } from "@/hooks/use-toast";
import { calculateMatchScore, getMatchLevel, getMatchColor } from "@/utils/matchmaking";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { SocialLinksBar } from "@/components/social/SocialLinksBar";

interface SlotRecommendationProps {
  slot: Slot;
}

export const SlotRecommendation = ({ slot }: SlotRecommendationProps) => {
  const { toast } = useToast();

  const slotBackgrounds = {
    "Fashion": "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    "Tech": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "Beauty": "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    "default": "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
  };

  const backgroundImage = slotBackgrounds[slot.category as keyof typeof slotBackgrounds] || slotBackgrounds.default;

  // Mock KOL profile - in real app, this would come from auth context
  const mockKolProfile = {
    categories: [slot.category],
    followers: 150000,
    engagement: 7.5,
    previousCampaigns: 8,
    completedCampaigns: 6,
    averageRating: 4.3,
    specializations: ["Instagram", "TikTok", "Fashion"],
    location: "New York",
    languages: ["English", "Spanish"]
  };

  const matchScore = calculateMatchScore(slot, mockKolProfile);
  const matchLevel = getMatchLevel(matchScore.score);
  const matchColor = getMatchColor(matchScore.score);

  const handleInvite = () => {
    toast({
      title: "Invitation Sent",
      description: "Your collaborator will be notified about this opportunity.",
    });
  };

  const handleApply = () => {
    toast({
      title: "Application Submitted",
      description: "Your application has been submitted successfully. We'll notify you of updates.",
    });
  };

  return (
    <Card className="hover:shadow-lg transition-shadow overflow-hidden">
      <div 
        className="h-32 w-full bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage})` 
        }}
      >
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl text-white">{slot.title}</CardTitle>
              <p className="text-sm text-white/80 mt-1">{slot.brand}</p>
            </div>
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger>
                  <Badge className={`${matchColor} bg-white/10`}>
                    {matchScore.score >= 80 ? (
                      <Sparkles className="h-4 w-4 mr-1" />
                    ) : matchScore.score >= 70 ? (
                      <Trophy className="h-4 w-4 mr-1" />
                    ) : (
                      <Award className="h-4 w-4 mr-1" />
                    )}
                    {matchLevel}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-2">
                    <p className="font-semibold">Match Analysis:</p>
                    <ul className="list-disc list-inside">
                      {matchScore.reasons.map((reason, index) => (
                        <li key={index} className="text-sm">{reason}</li>
                      ))}
                    </ul>
                  </div>
                </TooltipContent>
              </Tooltip>
              {slot.isFeatured && (
                <Badge className="bg-kolerr-purple">
                  <Star className="h-4 w-4 mr-1" />
                  Featured
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
      </div>
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

        <SocialLinksBar />

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
            onClick={handleApply}
          >
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
