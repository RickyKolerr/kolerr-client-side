import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-4xl md:text-6xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          Connect with Top Influencers for Your Brand Campaigns
        </h1>
        <p className="mb-8 text-xl text-gray-400">
          Find, Match, and Collaborate with the Best KOLs in Vietnam
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for KOLs by Name, Industry, or Platform"
              className="pl-10 py-6 text-lg bg-white/10 border-gray-700"
            />
          </div>
        </div>
        
        <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white px-8 py-6 text-lg h-auto">
          Start Your Campaign Today
        </Button>
      </section>

      {/* How It Works Section */}
      <section className="bg-black/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            How Kolerr Empowers Brands & Influencers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Search for KOLs",
                description: "Easily search and discover KOLs based on platform, industry, and audience.",
                icon: "🔍"
              },
              {
                title: "AI Matching",
                description: "Let our AI recommend the best matches for your campaign, tailored to your needs.",
                icon: "🤖"
              },
              {
                title: "Real-Time Collaboration",
                description: "Manage campaigns in real-time and track KOL performance for better results.",
                icon: "⚡"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;