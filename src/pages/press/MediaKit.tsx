import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const MediaKit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Media Kit</h1>
            <div className="space-y-6">
              <p className="text-lg">
                Download our media kit for company information, logos, and brand guidelines.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Brand Assets</h3>
                  <p className="mb-4">Logos, colors, and typography guidelines.</p>
                  <Button className="w-full flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Assets
                  </Button>
                </Card>
                <Card className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Company Info</h3>
                  <p className="mb-4">Company background and fact sheet.</p>
                  <Button className="w-full flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Info
                  </Button>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MediaKit;