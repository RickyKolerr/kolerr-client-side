import { Brain, BarChart3, Calendar, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

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
  ] as const;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          {t("landing.features.title")}
        </h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                         hover:border-kolerr-cyan transition-all duration-300 
                         hover:shadow-lg hover:shadow-kolerr-cyan/20
                         group"
            >
              <feature.icon className="w-12 h-12 mb-4 text-kolerr-cyan 
                                     group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-kolerr-cyan transition-colors">
                {t(feature.title)}
              </h3>
              <p className="text-foreground/80">{t(feature.description)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;