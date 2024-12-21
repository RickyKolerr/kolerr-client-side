import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import KOLShowcase from "@/components/home/KOLShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Key Opinion Leaders
          </h1>
          <p className="text-gray-400">
            Connect with top influencers for your brand campaigns
          </p>
        </div>
        <SearchBar />
        <KOLShowcase />
      </main>
    </div>
  );
};

export default Index;