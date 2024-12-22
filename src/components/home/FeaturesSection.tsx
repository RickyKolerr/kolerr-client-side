import { Brain, BarChart3, Calendar, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: "landing.features.ai.title",
      description: "landing.features.ai.desc"
    },
    {
      icon: BarChart3,
      title: "landing.features.campaign.title",
      description: "landing.features.campaign.desc"
    },
    {
      icon: Calendar,
      title: "landing.features.booking.title",
      description: "landing.features.booking.desc"
    },
    {
      icon: Zap,
      title: "landing.features.analytics.title",
      description: "landing.features.analytics.desc"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          {t("landing.features.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg bg-background border border-border hover:border-kolerr-cyan transition-all duration-300 hover:scale-105"
            >
              <feature.icon className="w-12 h-12 mb-4 text-kolerr-cyan" />
              <h3 className="text-xl font-bold mb-2">{t(feature.title)}</h3>
              <p className="text-foreground/80">{t(feature.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;