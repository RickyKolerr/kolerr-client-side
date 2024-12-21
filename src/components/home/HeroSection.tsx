import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent animate-fade-in">
          Unlock Your Brand's Potential with Kolerr
        </h1>
        <p className="text-xl text-foreground/80 max-w-2xl animate-fade-in delay-100">
          Effortlessly connect, collaborate, and scale your campaigns with Vietnam's leading AI-powered influencer marketing platform
        </p>
        <div className="flex gap-4 animate-fade-in delay-200">
          <Link to="/get-started">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white 
                       hover:opacity-90 hover:scale-105 transition-all duration-300 
                       hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] dark:hover:shadow-[0_0_20px_rgba(156,39,176,0.5)]"
            >
              {t('hero.getStarted')} <ArrowRight className="ml-2" />
            </Button>
          </Link>
          <Link to="/learn-more">
            <Button 
              size="lg" 
              variant="outline"
              className="hover:scale-105 transition-all duration-300
                       hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] dark:hover:shadow-[0_0_20px_rgba(156,39,176,0.3)]"
            >
              {t('hero.learnMore')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;