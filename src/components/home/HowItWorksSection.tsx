import { Search, Brain, Timer } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      title: t("howItWorks.search.title"),
      description: t("howItWorks.search.desc"),
      icon: Search
    },
    {
      title: t("howItWorks.ai.title"),
      description: t("howItWorks.ai.desc"),
      icon: Brain
    },
    {
      title: t("howItWorks.collab.title"),
      description: t("howItWorks.collab.desc"),
      icon: Timer
    }
  ];

  return (
    <section className="bg-black/50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          {t("howItWorks.title")}
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