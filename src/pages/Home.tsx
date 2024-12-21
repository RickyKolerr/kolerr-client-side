import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import KOLCard from "@/components/KOLCard";

const kols = [
  {
    name: "John Doe",
    image: "/placeholder.svg",
    followers: "100K",
    engagement: "5.2%"
  },
  {
    name: "Jane Smith",
    image: "/placeholder.svg",
    followers: "250K",
    engagement: "4.8%"
  },
  {
    name: "Mike Johnson",
    image: "/placeholder.svg",
    followers: "500K",
    engagement: "6.1%"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Key Opinion Leaders</h1>
          <p className="text-gray-400">Connect with top influencers for your brand campaigns</p>
        </div>
        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kols.map((kol) => (
            <KOLCard key={kol.name} {...kol} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;