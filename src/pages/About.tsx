import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">
            Kolerr is a leading platform connecting brands with Key Opinion Leaders (KOLs) 
            to create impactful marketing campaigns. Our mission is to revolutionize 
            the way brands and influencers collaborate, making it more efficient, 
            transparent, and successful for all parties involved.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;