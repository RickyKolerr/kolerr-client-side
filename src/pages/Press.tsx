import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const Press = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Press Room</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
                <div className="space-y-4">
                  <Card className="p-6">
                    <p className="text-sm text-gray-600">March 15, 2024</p>
                    <h3 className="text-xl font-semibold my-2">Kolerr Launches Revolutionary AI-Powered KOL Matching Platform</h3>
                    <p className="text-gray-600 mb-4">Kolerr introduces groundbreaking technology to transform influencer marketing in Vietnam...</p>
                    <Button variant="outline">Read More</Button>
                  </Card>
                  <Card className="p-6">
                    <p className="text-sm text-gray-600">March 1, 2024</p>
                    <h3 className="text-xl font-semibold my-2">Kolerr Secures Series A Funding</h3>
                    <p className="text-gray-600 mb-4">Leading venture capital firms back Kolerr's vision for the future of influencer marketing...</p>
                    <Button variant="outline">Read More</Button>
                  </Card>
                </div>
              </section>

              <section className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Media Kit</h2>
                  <p className="text-gray-600 mb-4">Download our media kit for company information, logos, and brand guidelines.</p>
                  <Button className="w-full flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Media Kit
                  </Button>
                </Card>

                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Press Contact</h2>
                  <p className="text-gray-600 mb-4">For media inquiries, please contact our press team.</p>
                  <Button className="w-full flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Contact Press Team
                  </Button>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Featured Coverage</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <img src="/placeholder.svg" alt="Tech News Logo" className="h-12 mb-4" />
                    <p className="text-sm">"Kolerr is revolutionizing the influencer marketing landscape"</p>
                    <p className="text-sm font-semibold mt-2">- Tech News Daily</p>
                  </Card>
                  <Card className="p-4">
                    <img src="/placeholder.svg" alt="Marketing Weekly Logo" className="h-12 mb-4" />
                    <p className="text-sm">"The future of KOL marketing is here"</p>
                    <p className="text-sm font-semibold mt-2">- Marketing Weekly</p>
                  </Card>
                  <Card className="p-4">
                    <img src="/placeholder.svg" alt="Digital Trends Logo" className="h-12 mb-4" />
                    <p className="text-sm">"A game-changer for brands and influencers"</p>
                    <p className="text-sm font-semibold mt-2">- Digital Trends</p>
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

export default Press;