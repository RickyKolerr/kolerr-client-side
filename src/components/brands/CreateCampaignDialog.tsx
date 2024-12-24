import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function CreateCampaignDialog() {
  return (
    <Button 
      className="h-9 px-3 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90 transition-opacity"
      size="sm"
    >
      <Plus className="h-4 w-4" />
      <span className="hidden sm:inline ml-2">Create Campaign</span>
    </Button>
  );
}