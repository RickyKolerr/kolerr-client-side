import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import StatsSection from "@/components/home/StatsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kolerr-cyan/20 via-kolerr-purple/20 to-kolerr-orange/20 pointer-events-none" />
        <div className="relative z-10">
          <h1 className="mb-6 text-4xl md:text-6xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent animate-fade-in">
            {t("hero.title")}
          </h1>
          <p className="mb-8 text-xl text-gray-400 max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder={t("hero.searchPlaceholder")}
                className="pl-10 py-6 text-lg bg-white/10 border-gray-700 hover:border-kolerr-cyan transition-colors"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/auth/register">
              <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white px-8 py-6 text-lg h-auto hover:opacity-90 hover:scale-105 transition-all">
                {t("hero.getStarted")}
              </Button>
            </Link>
            <Link to="/learn-more">
              <Button variant="outline" className="px-8 py-6 text-lg h-auto hover:bg-white/5">
                {t("hero.learnMore")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;