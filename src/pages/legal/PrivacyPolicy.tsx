import Navbar from "@/components/Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-gray-400 mt-4">
            At Kolerr, we take your privacy seriously. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;