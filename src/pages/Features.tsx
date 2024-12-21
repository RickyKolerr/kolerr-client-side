import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Platform Features</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">
            Discover the powerful features that make Kolerr the leading platform 
            for influencer marketing campaigns.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;