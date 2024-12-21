import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const NewsRoom = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-4xl font-bold mb-6">Newsroom</h1>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    source: "Tech News Daily",
                    quote: "Kolerr is revolutionizing the influencer marketing landscape"
                  },
                  {
                    source: "Marketing Weekly",
                    quote: "The future of KOL marketing is here"
                  },
                  {
                    source: "Digital Trends",
                    quote: "A game-changer for brands and influencers"
                  }
                ].map((news, index) => (
                  <Card key={index} className="p-4">
                    <p className="text-sm">{news.quote}</p>
                    <p className="text-sm font-semibold mt-2">- {news.source}</p>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewsRoom;