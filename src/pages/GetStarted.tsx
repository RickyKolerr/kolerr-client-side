import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const GetStarted = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Getting Started with Kolerr
          </h1>
          
          <div className="space-y-6 text-lg text-foreground/80">
            <p>
              Welcome to Kolerr! Follow these simple steps to begin your journey:
            </p>
            
            <div className="grid gap-6">
              <div className="p-6 rounded-lg bg-card hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(156,39,176,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">1. Create Your Account</h3>
                <p>Sign up and complete your profile with relevant information about your brand or influence.</p>
              </div>
              
              <div className="p-6 rounded-lg bg-card hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(156,39,176,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">2. Browse KOLs</h3>
                <p>Explore our diverse network of Key Opinion Leaders across various industries and platforms.</p>
              </div>
              
              <div className="p-6 rounded-lg bg-card hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(156,39,176,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">3. Start Collaborating</h3>
                <p>Connect with KOLs, discuss campaign details, and launch your first collaboration.</p>
              </div>
            </div>
            
            <div className="text-center pt-8">
              <Link to="/auth/register">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white 
                           hover:opacity-90 hover:scale-105 transition-all duration-300 
                           hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] dark:hover:shadow-[0_0_20px_rgba(156,39,176,0.5)]"
                >
                  Create Account Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;