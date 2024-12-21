import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Sales</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">
            Connect with our sales team to learn how Kolerr can help grow your 
            business through influencer marketing.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sales;