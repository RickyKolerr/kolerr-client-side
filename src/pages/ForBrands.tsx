import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ForBrands = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">For Brands</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">
            Discover how Kolerr can help your brand reach new audiences through 
            authentic collaborations with influential KOLs. Our platform provides 
            advanced targeting, campaign management, and analytics tools to ensure 
            your marketing success.
          </p>
          <Link to="/auth/register">
            <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white">
              Start Your Campaign
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForBrands;