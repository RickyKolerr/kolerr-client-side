import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PressReleases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Press Releases</h1>
            <div className="space-y-6">
              {[
                {
                  date: "March 15, 2024",
                  title: "Kolerr Launches Revolutionary AI-Powered KOL Matching Platform",
                  excerpt: "Kolerr introduces groundbreaking technology to transform influencer marketing in Vietnam..."
                },
                {
                  date: "March 1, 2024",
                  title: "Kolerr Secures Series A Funding",
                  excerpt: "Leading venture capital firms back Kolerr's vision for the future of influencer marketing..."
                }
              ].map((release, index) => (
                <Card key={index} className="p-4">
                  <p className="text-sm text-gray-600">{release.date}</p>
                  <h3 className="text-xl font-semibold my-2">{release.title}</h3>
                  <p className="mb-4">{release.excerpt}</p>
                  <Button variant="outline">Read More</Button>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PressReleases;