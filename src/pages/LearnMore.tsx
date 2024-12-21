import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const LearnMore = () => {
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
            About Kolerr Platform
          </h1>
          
          <div className="space-y-6 text-lg">
            <p className="text-foreground/90 text-xl">
              Discover how Kolerr is revolutionizing brand-KOL collaborations in Vietnam
            </p>
            
            <div className="grid gap-6">
              <div className="p-6 rounded-lg bg-card/90 dark:bg-card/10 border border-border hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(156,39,176,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-foreground">AI-Powered Matching</h3>
                <p className="text-foreground/80 dark:text-foreground/70">Our advanced algorithms ensure perfect matches between brands and KOLs based on audience demographics, engagement rates, and campaign objectives.</p>
              </div>
              
              <div className="p-6 rounded-lg bg-card/90 dark:bg-card/10 border border-border hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(156,39,176,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Real-Time Analytics</h3>
                <p className="text-foreground/80 dark:text-foreground/70">Track campaign performance with comprehensive analytics and insights, helping you optimize your marketing strategy.</p>
              </div>
              
              <div className="p-6 rounded-lg bg-card/90 dark:bg-card/10 border border-border hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(156,39,176,0.3)] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Secure Collaboration</h3>
                <p className="text-foreground/80 dark:text-foreground/70">Our platform provides a secure environment for communication, contract management, and payment processing.</p>
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
                  Join Kolerr Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;