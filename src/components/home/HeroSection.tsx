import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useLanguage();

  const stats = [
    { number: "10K+", label: "landing.hero.stats.kols" },
    { number: "50M+", label: "landing.hero.stats.reach" },
    { number: "1000+", label: "landing.hero.stats.campaigns" },
    { number: "95%", label: "landing.hero.stats.success" }
  ] as const;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-background to-background/80 py-12 md:py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] md:bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_70%)]" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-r from-kolerr-purple/20 via-transparent to-kolerr-cyan/20 animate-pulse"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center space-y-6 md:space-y-8"
        >
          <motion.div 
            variants={item}
            className="space-y-4 max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
              {t("landing.hero.title")}
            </h1>
            
            <p className="text-base md:text-xl text-foreground/90 max-w-2xl mx-auto px-4">
              {t("landing.hero.subtitle")}
            </p>
          </motion.div>

          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
          >
            <Link to="/get-started" className="w-full sm:w-auto">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white 
                         w-full sm:w-auto px-6 md:px-8 py-6 text-base
                         hover:opacity-90 hover:scale-105 transition-all duration-300 
                         hover:shadow-[0_0_20px_rgba(0,245,255,0.5)]
                         group h-auto"
              >
                {t("landing.hero.cta.start")} 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/learn-more" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto px-6 md:px-8 py-6 text-base
                         hover:scale-105 transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(156,39,176,0.3)]
                         group h-auto"
              >
                <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                {t("landing.hero.cta.demo")}
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            variants={container}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 md:pt-12 w-full px-4"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="space-y-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-kolerr-cyan to-kolerr-purple bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-foreground/70">{t(stat.label)}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;