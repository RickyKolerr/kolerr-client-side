import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CampaignHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="rounded-full"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-4xl font-bold text-white">Campaigns</h1>
      </div>
      <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange">
        <Plus className="h-4 w-4 mr-2" />
        Create Campaign
      </Button>
    </div>
  );
}