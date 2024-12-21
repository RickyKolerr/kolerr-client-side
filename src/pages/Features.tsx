import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "AI-Powered Matching",
      description: "Our advanced AI algorithms ensure perfect matches between brands and KOLs."
    },
    {
      title: "Real-Time Analytics",
      description: "Track campaign performance and engagement metrics in real-time."
    },
    {
      title: "Secure Payments",
      description: "Multiple payment options with both local and global providers."
    },
    {
      title: "Campaign Management",
      description: "End-to-end campaign management tools for seamless collaboration."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-12">Features</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Check className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;