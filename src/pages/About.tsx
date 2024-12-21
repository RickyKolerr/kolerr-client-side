import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300">
            Kolerr is a leading platform connecting Key Opinion Leaders (KOLs) with brands 
            in Vietnam and across the globe. Our mission is to revolutionize the way 
            influencer marketing works by providing transparent, efficient, and effective 
            collaboration tools.
          </p>
          <p className="text-gray-300 mt-4">
            Founded with the vision of making influencer marketing accessible and 
            measurable, we've grown to become a trusted partner for both brands seeking 
            authentic voices and KOLs looking to monetize their influence.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;