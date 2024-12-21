import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Users } from "lucide-react";

const KOLs = () => {
  const kols = [
    {
      name: "Alex Johnson",
      image: "https://i.pravatar.cc/150?img=1",
      followers: "1.2M",
      engagement: "8.5%",
      expertise: "Tech & Gaming",
    },
    {
      name: "Sarah Lee",
      image: "https://i.pravatar.cc/150?img=5",
      followers: "980K",
      engagement: "7.2%",
      expertise: "Lifestyle & Fashion",
    },
    {
      name: "Michael Brown",
      image: "https://i.pravatar.cc/150?img=8",
      followers: "1.5M",
      engagement: "9.1%",
      expertise: "Food & Travel",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Key Opinion Leaders
          </h1>
          <p className="text-muted-foreground">
            Connect with top influencers for your brand campaigns
          </p>

          <div className="flex items-center gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search KOLs..."
                className="pl-10 bg-background border-input"
              />
            </div>
            <select className="bg-background border border-input rounded-md px-4 py-2">
              <option value="">Filter by Category</option>
              <option value="tech">Tech & Gaming</option>
              <option value="lifestyle">Lifestyle & Fashion</option>
              <option value="food">Food & Travel</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kols.map((kol) => (
              <Card
                key={kol.name}
                className="overflow-hidden bg-card hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-kolerr-purple/30">
                      <img
                        src={kol.image}
                        alt={kol.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{kol.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {kol.expertise}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Followers</span>
                      <span className="font-medium">{kol.followers}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Engagement</span>
                      <span className="font-medium">{kol.engagement}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90">
                    <Users className="mr-2 h-4 w-4" />
                    View Profile
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KOLs;