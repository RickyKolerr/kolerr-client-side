import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Employee Benefits</h1>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-4">
                <h3 className="text-xl font-semibold mb-2">Health & Wellness</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comprehensive health insurance</li>
                  <li>Mental health support</li>
                  <li>Gym membership</li>
                </ul>
              </Card>
              <Card className="p-4">
                <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Flexible working hours</li>
                  <li>Remote work options</li>
                  <li>Unlimited PTO</li>
                </ul>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Benefits;