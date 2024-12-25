import { Search, Brain, Timer } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Search & Filter",
      description: "Find the perfect influencers using our advanced search filters",
      icon: Search
    },
    {
      title: "AI Matching",
      description: "Let our AI suggest the best matches for your brand",
      icon: Brain
    },
    {
      title: "Quick Collaboration",
      description: "Start collaborating with influencers in minutes",
      icon: Timer
    }
  ];

  return (
    <section className="bg-black/50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-lg text-center border border-gray-800 hover:border-kolerr-purple transition-colors">
              <div className="flex justify-center mb-4">
                <step.icon className="w-12 h-12 text-kolerr-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;