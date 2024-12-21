import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CustomSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Custom Solutions</h1>
            <div className="space-y-6">
              <p className="text-lg">
                Need a tailored solution? We can customize our platform to meet your specific requirements.
              </p>
              <div className="space-y-4">
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
                  <p className="mb-4">Get custom features built specifically for your needs.</p>
                  <Button>Request Consultation</Button>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomSolutions;