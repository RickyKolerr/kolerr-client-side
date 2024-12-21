import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import KeyFeaturesSection from "@/components/home/KeyFeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import KOLShowcase from "@/components/home/KOLShowcase";
import ContactSection from "@/components/home/ContactSection";
import FooterSection from "@/components/home/FooterSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <KeyFeaturesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <KOLShowcase />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Home;