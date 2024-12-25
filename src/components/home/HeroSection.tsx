import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const stats = [
    { number: "10K+", label: "landing.hero.stats.kols" },
    { number: "50M+", label: "landing.hero.stats.reach" },
    { number: "1000+", label: "landing.hero.stats.campaigns" },
    { number: "95%", label: "landing.hero.stats.success" }
  ] as const;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-background to-background/80 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-kolerr-purple/20 via-transparent to-kolerr-cyan/20 animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent animate-fade-in">
              {t("landing.hero.title")}
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto animate-fade-in delay-100">
              {t("landing.hero.subtitle")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-200">
            <Link to="/get-started">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white 
                         w-full sm:w-auto px-8 group
                         hover:opacity-90 hover:scale-105 transition-all duration-300 
                         hover:shadow-[0_0_20px_rgba(0,245,255,0.5)]"
              >
                {t("landing.hero.cta.start")} 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/learn-more">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto px-8 group
                         hover:scale-105 transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(156,39,176,0.3)]"
              >
                <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                {t("landing.hero.cta.demo")}
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 animate-fade-in delay-300">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="space-y-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-kolerr-cyan to-kolerr-purple bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground/70">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;