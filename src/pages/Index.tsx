import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import SearchSection from "@/components/home/SearchSection";
import TrustedBy from "@/components/home/TrustedBy";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import KOLShowcase from "@/components/home/KOLShowcase";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SearchSection />
      <TrustedBy />
      <FeaturesSection />
      <HowItWorksSection />
      <KOLShowcase />
      <TestimonialsSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;