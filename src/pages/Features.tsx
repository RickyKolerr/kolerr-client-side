import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-6">Platform Features</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Matching</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Our advanced AI algorithms ensure perfect matches between brands and KOLs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Campaign Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Comprehensive tools for managing and tracking your campaigns.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Detailed insights and performance metrics for your campaigns.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Features;