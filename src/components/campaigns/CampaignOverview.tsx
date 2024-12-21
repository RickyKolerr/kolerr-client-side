import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CampaignOverview() {
  const campaign = {
    name: "Summer Fashion Collection",
    status: "Active",
    progress: 75,
    startDate: "2024-03-01",
    endDate: "2024-04-15",
    description:
      "Promote our latest summer fashion collection across social media platforms to increase brand awareness and drive sales.",
    kols: [
      {
        id: 1,
        name: "Sarah Johnson",
        avatar: "/placeholder.svg",
        role: "Content Creator",
        status: "In Progress",
      },
      {
        id: 2,
        name: "Mike Chen",
        avatar: "/placeholder.svg",
        role: "Reviewer",
        status: "Completed",
      },
    ],
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-2xl font-bold">{campaign.name}</CardTitle>
          <div className="flex items-center gap-2">
            <Badge
              variant="default"
              className="bg-green-500 hover:bg-green-600"
            >
              {campaign.status}
            </Badge>
            <span className="text-sm text-gray-500">
              {campaign.startDate} - {campaign.endDate}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-500">{campaign.description}</p>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Campaign Progress</span>
            <span>{campaign.progress}%</span>
          </div>
          <Progress value={campaign.progress} />
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold">Assigned KOLs</h3>
          <div className="space-y-4">
            {campaign.kols.map((kol) => (
              <div
                key={kol.id}
                className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={kol.avatar} alt={kol.name} />
                    <AvatarFallback>
                      {kol.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{kol.name}</p>
                    <p className="text-sm text-gray-500">{kol.role}</p>
                  </div>
                </div>
                <Badge
                  variant={kol.status === "Completed" ? "default" : "secondary"}
                >
                  {kol.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}