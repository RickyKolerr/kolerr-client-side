import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Press = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Press Room</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">
            Find the latest news, press releases, and media resources about Kolerr 
            and our impact on the influencer marketing industry.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Press;