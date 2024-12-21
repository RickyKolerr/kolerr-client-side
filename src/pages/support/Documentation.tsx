import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Documentation</h1>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
                  <p>Learn the basics of using the Kolerr platform.</p>
                </Card>
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Campaign Guide</h3>
                  <p>Detailed guide on creating and managing campaigns.</p>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Documentation;