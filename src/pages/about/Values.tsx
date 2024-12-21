import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const Values = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Our Values</h1>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p>Constantly pushing boundaries to create better solutions</p>
                </Card>
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                  <p>Building trust through open communication and honest practices</p>
                </Card>
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p>Striving for the highest quality in everything we do</p>
                </Card>
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p>Fostering meaningful connections and collaboration</p>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Values;