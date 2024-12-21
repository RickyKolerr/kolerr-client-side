import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TechnicalSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Technical Support</h1>
            <div className="space-y-6">
              <p className="text-lg">
                Need technical assistance? Our team is here to help you resolve any technical issues.
              </p>
              <Card className="p-4">
                <h3 className="text-xl font-semibold mb-2">Submit a Ticket</h3>
                <p className="mb-4">Create a support ticket for technical issues.</p>
                <Button>Create Ticket</Button>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TechnicalSupport;