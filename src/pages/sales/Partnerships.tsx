import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Partnership Opportunities</h1>
            <div className="space-y-6">
              <p className="text-lg">
                Join our partner network and grow your business with Kolerr.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Agency Partners</h3>
                  <p className="mb-4">Partner with us to offer enhanced services to your clients.</p>
                  <Button>Learn More</Button>
                </Card>
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Technology Partners</h3>
                  <p className="mb-4">Integrate your solutions with our platform.</p>
                  <Button>Learn More</Button>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Partnerships;