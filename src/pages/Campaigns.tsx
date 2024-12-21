import Navbar from "@/components/Navbar";

const Campaigns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-4">Campaigns</h1>
        <p className="text-gray-400">Discover and manage your brand campaigns.</p>
      </div>
    </div>
  );
};

export default Campaigns;