import { UserPlus, Handshake, ChartLine } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create an account and set up your profile."
    },
    {
      icon: Handshake,
      title: "Match & Select",
      description: "Use Kolerr's AI-powered system to find the perfect matches and select campaigns or influencers."
    },
    {
      icon: ChartLine,
      title: "Manage & Track",
      description: "Manage all your campaigns in one place, track performance, and achieve success."
    }
  ];

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-lg bg-white/5 border border-gray-800 hover:border-kolerr-cyan transition-all"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-kolerr-cyan to-kolerr-purple" />
              )}
              <step.icon className="w-12 h-12 mb-4 text-kolerr-cyan mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-white text-center">{step.title}</h3>
              <p className="text-gray-400 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;