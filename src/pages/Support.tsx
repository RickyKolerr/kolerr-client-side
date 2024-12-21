import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Mail, FileText } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Support</h1>
            
            <div className="space-y-8">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search help articles..."
                  className="w-full pl-4 pr-10 py-2"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <MessageCircle className="h-8 w-8 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Get instant help from our support team</p>
                  <Button className="w-full">Start Chat</Button>
                </Card>

                <Card className="p-6">
                  <Mail className="h-8 w-8 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
                  <Button className="w-full">Contact Support</Button>
                </Card>

                <Card className="p-6">
                  <FileText className="h-8 w-8 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Help Center</h3>
                  <p className="text-gray-600 mb-4">Browse through our documentation</p>
                  <Button className="w-full">View Guides</Button>
                </Card>
              </div>

              <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <Card className="p-4">
                    <h3 className="font-semibold">How do I create a campaign?</h3>
                    <p className="text-gray-600">Navigate to the Campaigns section and click on "Create New Campaign"...</p>
                  </Card>
                  <Card className="p-4">
                    <h3 className="font-semibold">How do I connect with KOLs?</h3>
                    <p className="text-gray-600">Browse our KOL directory and use our matching algorithm...</p>
                  </Card>
                  <Card className="p-4">
                    <h3 className="font-semibold">What are the payment terms?</h3>
                    <p className="text-gray-600">We offer flexible payment options including credit card and bank transfer...</p>
                  </Card>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Support;