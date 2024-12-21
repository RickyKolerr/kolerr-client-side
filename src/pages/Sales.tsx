import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

const Sales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Contact Sales</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Why Choose Kolerr?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold">AI-Powered Matchmaking</h3>
                      <p className="text-gray-600">Find the perfect KOLs for your brand using our advanced algorithms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold">Campaign Management</h3>
                      <p className="text-gray-600">Streamline your influencer campaigns with our comprehensive tools</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold">Real-Time Analytics</h3>
                      <p className="text-gray-600">Track campaign performance and ROI with detailed insights</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold mb-2">Trusted by Leading Brands</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4">
                      <p className="text-sm">"Kolerr has transformed our influencer marketing strategy."</p>
                      <p className="text-sm font-semibold mt-2">- Marketing Director, Brand A</p>
                    </Card>
                    <Card className="p-4">
                      <p className="text-sm">"The ROI we've seen through Kolerr is exceptional."</p>
                      <p className="text-sm font-semibold mt-2">- CEO, Brand B</p>
                    </Card>
                  </div>
                </div>
              </div>

              <div>
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Contact Our Sales Team</h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Company</label>
                      <Input placeholder="Company name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <Textarea placeholder="Tell us about your needs..." />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </form>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sales;