import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Careers at Kolerr</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">
            Join our team and help shape the future of influencer marketing. 
            We're always looking for talented individuals who share our vision.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;