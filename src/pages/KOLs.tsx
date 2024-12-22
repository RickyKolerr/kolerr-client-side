import Navbar from "@/components/Navbar";
import { KOLFilters } from "@/components/kol-filters/KOLFilters";
import KOLCard from "@/components/KOLCard";

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

          <KOLFilters />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kols.map((kol) => (
              <KOLCard
                key={kol.name}
                name={kol.name}
                image={kol.image}
                followers={kol.followers}
                engagement={kol.engagement}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KOLs;
