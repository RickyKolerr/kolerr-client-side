import { Brain, Timer, Calendar, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const features = [
    { icon: Brain, text: "AI-Powered Matchmaking" },
    { icon: Timer, text: "Real-Time Campaign Management" },
    { icon: Calendar, text: "Instant Slot Booking" },
    { icon: Database, text: "Real-Time Data" }
  ];

  return (
    <section className="relative container mx-auto px-4 py-20 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-kolerr-cyan/20 via-kolerr-purple/20 to-kolerr-orange/20 pointer-events-none" />
      <div className="relative z-10">
        <h1 className="mb-6 text-4xl md:text-6xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent animate-fade-in">
          Unlock Your Brand's Potential with Kolerr – The Smart AI-Powered Platform for KOLs & Brands
        </h1>
        <p className="mb-8 text-xl text-gray-400 max-w-3xl mx-auto">
          Effortlessly connect, collaborate, and scale your campaigns with Vietnam's leading influencer marketing platform.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link to="/auth/register">
            <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white px-8 py-6 text-lg h-auto hover:opacity-90 hover:scale-105 transition-all">
              Get Started
            </Button>
          </Link>
          <Link to="/learn-more">
            <Button variant="outline" className="px-8 py-6 text-lg h-auto hover:bg-white/5">
              Learn More
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <feature.icon className="w-8 h-8 text-kolerr-cyan" />
              <span className="text-sm font-medium text-gray-300">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;