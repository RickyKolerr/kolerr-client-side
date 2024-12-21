import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const KOLShowcase = () => {
  const kols = [
    {
      name: "Alex Johnson",
      image: "https://i.pravatar.cc/150?img=1",
      followers: "1.2M",
      engagement: "8.5%",
    },
    {
      name: "Sarah Lee",
      image: "https://i.pravatar.cc/150?img=5",
      followers: "980K",
      engagement: "7.2%",
    },
    {
      name: "Michael Brown",
      image: "https://i.pravatar.cc/150?img=8",
      followers: "1.5M",
      engagement: "9.1%",
    },
  ];

  return (
    <section className="py-16 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
            Key Opinion Leaders
          </h2>
          <div className="flex w-full md:w-auto gap-4">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <Input
                type="text"
                placeholder="Search KOLs..."
                className="pl-10 bg-white/10 text-white border-gray-700"
              />
            </div>
            <select className="bg-white/10 text-white border-gray-700 rounded-md px-4 py-2">
              <option value="popularity">Sort by Popularity</option>
              <option value="followers">Sort by Followers</option>
              <option value="engagement">Sort by Engagement</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kols.map((kol) => (
            <Card key={kol.name} className="bg-white p-6">
              <div className="text-center">
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <img
                    src={kol.image}
                    alt={kol.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {kol.name}
                </h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>Followers: {kol.followers}</p>
                  <p>Engagement: {kol.engagement}</p>
                </div>
                <Button className="w-full bg-kolerr-yellow hover:bg-kolerr-yellow/90 text-gray-900">
                  Partnership Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KOLShowcase;