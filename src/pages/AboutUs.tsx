import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">About Kolerr</h1>
            <div className="space-y-6 text-left">
              <p className="text-lg">
                Kolerr is a leading influencer marketing platform connecting brands with Key Opinion Leaders (KOLs) across Asia. Our mission is to revolutionize the way brands and influencers collaborate, creating authentic partnerships that resonate with audiences.
              </p>
              <h2 className="text-2xl font-semibold mt-8">Our Vision</h2>
              <p className="text-lg">
                We envision a world where brand-influencer collaborations are seamless, transparent, and mutually beneficial. Through innovative technology and data-driven insights, we're making this vision a reality.
              </p>
              <h2 className="text-2xl font-semibold mt-8">What Sets Us Apart</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>Advanced matching algorithms for perfect brand-KOL partnerships</li>
                <li>Comprehensive campaign management tools</li>
                <li>Real-time analytics and performance tracking</li>
                <li>Dedicated support team for both brands and KOLs</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;