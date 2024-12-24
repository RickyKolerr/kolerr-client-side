import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function CreateCampaignDialog() {
  return (
    <Button 
      className="h-9 w-9 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90 transition-opacity rounded-r-none flex items-center justify-center p-0"
      size="sm"
    >
      <Plus className="h-4 w-4" />
    </Button>
  );
}