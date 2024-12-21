import { useState } from "react";
import Navbar from "@/components/Navbar";
import { BrandSidebar } from "@/components/brands/BrandSidebar";
import { CampaignCard } from "@/components/brands/CampaignCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Filter } from "lucide-react";

const Brands = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const campaigns = [
    {
      name: "Summer Fashion Collection",
      status: "active" as const,
      kolCount: 5,
      progress: 75,
      deadline: "2024-04-15",
    },
    {
      name: "Tech Product Launch",
      status: "paused" as const,
      kolCount: 3,
      progress: 30,
      deadline: "2024-05-01",
    },
    {
      name: "Holiday Special",
      status: "completed" as const,
      kolCount: 8,
      progress: 100,
      deadline: "2024-03-20",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <BrandSidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-white">Brand Dashboard</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="h-8 w-8 rounded-full bg-kolerr-purple" />
            </div>
          </div>

          <div className="mb-8">
            <div className="flex gap-4 mb-4">
              <Input
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                  <SelectItem value="progress">Progress</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {campaigns.map((campaign) => (
                <CampaignCard key={campaign.name} {...campaign} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Brands;