import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const Culture = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Our Culture</h1>
            <div className="space-y-6">
              <p className="text-lg">
                At Kolerr, we foster a culture of innovation, collaboration, and continuous learning.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                  <p>We encourage creative thinking and new ideas from everyone.</p>
                </Card>
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Team Spirit</h3>
                  <p>We work together, celebrate together, and grow together.</p>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Culture;