import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Enterprise Solutions</h1>
            <div className="space-y-6">
              <div className="space-y-4">
                {[
                  "Custom API integration",
                  "Dedicated account manager",
                  "Advanced analytics",
                  "Priority support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full">Contact Sales</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Enterprise;