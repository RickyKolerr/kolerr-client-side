import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">
            At Kolerr, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our platform.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;