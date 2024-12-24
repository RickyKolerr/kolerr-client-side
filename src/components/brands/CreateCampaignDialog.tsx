import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function CreateCampaignDialog() {
  return (
    <Button 
      className="w-full sm:w-auto bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90 transition-opacity"
      size="default"
    >
      <Plus className="h-4 w-4 mr-2" />
      Create Campaign
    </Button>
  );
}