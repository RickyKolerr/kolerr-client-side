import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function CreateCampaignDialog() {
  return (
    <Button 
      className="h-9 px-3 sm:px-4 w-full sm:w-auto bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90 transition-opacity"
      size="sm"
    >
      <Plus className="h-4 w-4 sm:mr-2" />
      <span className="hidden sm:inline">Create Campaign</span>
      <span className="sm:inline sm:hidden">Create</span>
    </Button>
  );
}