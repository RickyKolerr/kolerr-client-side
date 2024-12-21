import Navbar from "@/components/Navbar";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-gray-400 mt-4">
            By accessing and using Kolerr's platform, you agree to be bound by these Terms of Service
            and all applicable laws and regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;