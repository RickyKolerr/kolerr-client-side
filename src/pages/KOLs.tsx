import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import KOLCard from "@/components/KOLCard";

const KOLs = () => {
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-4">Key Opinion Leaders</h1>
        <p className="text-gray-400 mb-8">Connect with top influencers for your brand campaigns.</p>
        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kols.map((kol) => (
            <KOLCard key={kol.name} {...kol} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KOLs;