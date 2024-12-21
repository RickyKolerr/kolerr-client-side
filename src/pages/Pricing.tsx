import Navbar from "@/components/Navbar";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-4">Pricing</h1>
        <p className="text-gray-400">Choose the perfect plan for your needs.</p>
      </div>
    </div>
  );
};

export default Pricing;