import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface CampaignCardProps {
  name: string;
  status: "active" | "completed" | "paused";
  kolCount: number;
  progress: number;
  deadline: string;
}

export function CampaignCard({ name, status, kolCount, progress, deadline }: CampaignCardProps) {
  const statusColors = {
    active: "bg-green-500",
    completed: "bg-blue-500",
    paused: "bg-yellow-500",
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <Badge className={cn(statusColors[status], "text-white")}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>{kolCount} KOLs</span>
            <span>Deadline: {deadline}</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="text-right text-sm text-gray-500">{progress}% Complete</div>
        </div>
      </CardContent>
    </Card>
  );
}