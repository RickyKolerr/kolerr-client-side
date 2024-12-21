import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

export function BrandDashboard() {
  const activeCampaigns = [
    {
      id: 1,
      name: "Summer Fashion Collection",
      status: "Active",
      progress: 75,
      kols: 5,
      deadline: "2024-04-15",
    },
    {
      id: 2,
      name: "Tech Product Launch",
      status: "Pending",
      progress: 30,
      kols: 3,
      deadline: "2024-04-20",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">Brand Dashboard</h1>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              placeholder="Search campaigns..."
              className="pl-10 w-[300px]"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange">
            Create Campaign
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total KOLs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">48</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pending Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">7</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">92%</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Active Campaigns</h2>
        <div className="grid gap-6">
          {activeCampaigns.map((campaign) => (
            <Card key={campaign.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold">
                  {campaign.name}
                </CardTitle>
                <Badge
                  variant={campaign.status === "Active" ? "default" : "secondary"}
                >
                  {campaign.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{campaign.progress}%</span>
                  </div>
                  <Progress value={campaign.progress} />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{campaign.kols} KOLs</span>
                    <span>Deadline: {campaign.deadline}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}