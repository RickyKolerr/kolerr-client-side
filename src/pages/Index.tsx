import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import StatsSection from "@/components/home/StatsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import CTASection from "@/components/home/CTASection";
import KOLShowcase from "@/components/home/KOLShowcase";
import SearchSection from "@/components/home/SearchSection";
import Footer from "@/components/home/Footer";
import { GuidedTour } from "@/components/home/GuidedTour";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background"
      role="main"
      aria-label="Home page"
    >
      <Navbar />
      <GuidedTour />
      <div className="hero-section">
        <HeroSection />
      </div>
      <div className="search-section">
        <SearchSection />
      </div>
      <TrustedBy />
      <div className="features-section">
        <FeaturesSection />
      </div>
      <HowItWorksSection />
      <KOLShowcase />
      <TestimonialsSection />
      <BenefitsSection />
      <div className="cta-section">
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;