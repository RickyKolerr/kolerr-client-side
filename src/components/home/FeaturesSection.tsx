import { Brain, BarChart3, Calendar, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matchmaking",
      description: "Connect with the perfect KOL or brand based on real-time data and AI-powered algorithms."
    },
    {
      icon: BarChart3,
      title: "Real-Time Campaign Management",
      description: "Track and optimize your campaigns with comprehensive analytics and performance insights."
    },
    {
      icon: Calendar,
      title: "Instant Slot Booking",
      description: "Book campaign slots instantly and manage your content calendar efficiently."
    },
    {
      icon: Zap,
      title: "Smart Analytics",
      description: "Make data-driven decisions with advanced analytics and performance tracking."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          Powerful Features for Growth
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-background border border-border hover:border-kolerr-cyan transition-all duration-300 hover:scale-105"
            >
              <feature.icon className="w-12 h-12 mb-4 text-kolerr-cyan" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;