import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const History = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Our History</h1>
            <div className="space-y-6">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold">2024</h3>
                  <p className="mt-2">Launch of Kolerr platform in Vietnam</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">2023</h3>
                  <p className="mt-2">Development of AI-powered matching algorithm</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">2022</h3>
                  <p className="mt-2">Initial concept and market research</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default History;