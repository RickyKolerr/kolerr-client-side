import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/translations";

const HeroSection = () => {
  const { t } = useLanguage();

  const stats: Array<{
    number: string;
    label: TranslationKey;
  }> = [
    { number: "10K+", label: "landing.hero.stats.kols" },
    { number: "50M+", label: "landing.hero.stats.reach" },
    { number: "1000+", label: "landing.hero.stats.campaigns" },
    { number: "95%", label: "landing.hero.stats.success" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent animate-fade-in max-w-4xl">
            {t("landing.hero.title")}
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl animate-fade-in delay-100">
            {t("landing.hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-200">
            <Link to="/get-started">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white 
                         w-full sm:w-auto px-8
                         hover:opacity-90 hover:scale-105 transition-all duration-300 
                         hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] dark:hover:shadow-[0_0_20px_rgba(156,39,176,0.5)]"
              >
                {t("landing.hero.cta.start")} <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/learn-more">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto px-8
                         hover:scale-105 transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] dark:hover:shadow-[0_0_20px_rgba(156,39,176,0.3)]"
              >
                {t("landing.hero.cta.demo")}
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-kolerr-cyan to-kolerr-purple bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground/70">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid-white/10 bg-[size:30px_30px] [mask-image:radial-gradient(white,transparent_70%)]" />
    </section>
  );
};

export default HeroSection;