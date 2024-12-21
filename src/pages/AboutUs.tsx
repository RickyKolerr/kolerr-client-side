import Navbar from "@/components/Navbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">
            Kolerr is a pioneering platform connecting Key Opinion Leaders (KOLs) with brands 
            to create meaningful partnerships and impactful campaigns. Our mission is to 
            revolutionize the influencer marketing landscape in Vietnam and beyond.
          </p>
          <p className="text-gray-400 mt-4">
            Founded with the vision of making influencer marketing more accessible and 
            efficient, we leverage cutting-edge technology to match brands with the perfect 
            KOLs for their campaigns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;