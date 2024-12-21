import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const Mission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
            <div className="space-y-6">
              <p className="text-lg">
                At Kolerr, our mission is to revolutionize influencer marketing in Vietnam by creating meaningful connections between brands and KOLs through innovative technology and data-driven solutions.
              </p>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">What Drives Us</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Empowering creators to reach their full potential</li>
                  <li>Helping brands find their authentic voice through influencer partnerships</li>
                  <li>Building trust and transparency in influencer marketing</li>
                  <li>Driving measurable results through data-driven decisions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Mission;