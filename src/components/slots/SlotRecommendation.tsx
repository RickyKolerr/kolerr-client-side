import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, Users } from "lucide-react";
import { Slot } from "@/types/slot";
import { useToast } from "@/hooks/use-toast";

interface SlotRecommendationProps {
  slot: Slot;
}

export const SlotRecommendation = ({ slot }: SlotRecommendationProps) => {
  const { toast } = useToast();

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
          {slot.isFeatured && (
            <Badge className="bg-kolerr-purple">Featured</Badge>
          )}
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
          <Button className="flex-1 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange">
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};