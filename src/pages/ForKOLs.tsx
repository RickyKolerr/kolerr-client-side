import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ForKOLs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">For KOLs</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">
            Join Kolerr as a Key Opinion Leader and unlock new opportunities to collaborate 
            with leading brands. Our platform provides you with the tools and resources 
            you need to grow your influence and monetize your audience effectively.
          </p>
          <Link to="/auth/register">
            <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white">
              Join as a KOL
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForKOLs;