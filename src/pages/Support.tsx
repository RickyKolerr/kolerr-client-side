import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Support Center</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">
            Need help? Our support team is here to assist you with any questions 
            or issues you may have.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;