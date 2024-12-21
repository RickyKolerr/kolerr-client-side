import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import KOLShowcase from "@/components/home/KOLShowcase";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent animate-fade-in">
            {t('hero.title') || 'Connect with Top KOLs'}
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl animate-fade-in delay-100">
            {t('hero.subtitle') || 'Find and collaborate with the most influential Key Opinion Leaders for your brand campaigns'}
          </p>
          <div className="flex gap-4 animate-fade-in delay-200">
            <Link to="/get-started">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white 
                         hover:opacity-90 hover:scale-105 transition-all duration-300 
                         hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] dark:hover:shadow-[0_0_20px_rgba(156,39,176,0.5)]"
              >
                {t('hero.getStarted') || 'Get Started'} <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/learn-more">
              <Button 
                size="lg" 
                variant="outline"
                className="hover:scale-105 transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] dark:hover:shadow-[0_0_20px_rgba(156,39,176,0.3)]"
              >
                {t('hero.learnMore') || 'Learn More'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-4xl font-bold text-kolerr-cyan mb-2">10K+</h3>
              <p className="text-foreground/80">{t('stats.kols') || 'Active KOLs'}</p>
            </div>
            <div className="p-6 rounded-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-4xl font-bold text-kolerr-purple mb-2">5M+</h3>
              <p className="text-foreground/80">{t('stats.reach') || 'Total Reach'}</p>
            </div>
            <div className="p-6 rounded-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-4xl font-bold text-kolerr-orange mb-2">1K+</h3>
              <p className="text-foreground/80">{t('stats.brands') || 'Partner Brands'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* KOL Showcase Section */}
      <KOLShowcase />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            {t('cta.title') || 'Ready to Grow Your Brand?'}
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {t('cta.subtitle') || 'Join thousands of successful brands leveraging the power of KOL marketing'}
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white 
                     hover:opacity-90 transition-all duration-300 hover:scale-105"
          >
            {t('cta.button') || 'Start Now'} <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
