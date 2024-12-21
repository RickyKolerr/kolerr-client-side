import { Brain, ChartBar, Calendar, Database } from "lucide-react";

const KeyFeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matchmaking",
      description: "Connect with the perfect KOL or brand based on real-time data and AI-powered algorithms."
    },
    {
      icon: ChartBar,
      title: "Campaign Management",
      description: "Track and manage your campaigns in real-time with easy-to-use tools and insights."
    },
    {
      icon: Calendar,
      title: "Slot Feature",
      description: "Discover available brand campaigns and book a slot instantly with the best-fit opportunities."
    },
    {
      icon: Database,
      title: "Real-Time Data",
      description: "Get actionable insights and make informed decisions to boost your campaigns."
    }
  ];

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-white/5 border border-gray-800 hover:border-kolerr-cyan transition-all hover:scale-105"
            >
              <feature.icon className="w-12 h-12 mb-4 text-kolerr-cyan" />
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;