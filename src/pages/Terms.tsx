import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">
            Welcome to Kolerr. By accessing or using our platform, you agree to comply 
            with and be bound by these Terms of Service.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;