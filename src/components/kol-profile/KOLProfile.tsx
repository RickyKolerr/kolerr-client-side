import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getUserType } from "@/utils/userTypeUtils";
import { Facebook, Instagram, Twitter, Calendar } from "lucide-react";

const KOLProfile = () => {
  const { id } = useParams();
  const userType = getUserType();
  const [activeTab, setActiveTab] = useState("portfolio");

  // Mock data - replace with actual data fetching
  const kolData = {
    name: "Alex Johnson",
    image: "https://i.pravatar.cc/150?img=1",
    bio: "Professional content creator specializing in lifestyle and tech reviews",
    followers: "1.2M",
    engagement: "8.5%",
    expertise: "Tech & Lifestyle",
    location: "Ho Chi Minh City",
    completedCampaigns: 45,
    rating: 4.8,
    availability: "Available from May 1st",
    socialLinks: [
      { platform: "instagram", url: "https://instagram.com/alexj" },
      { platform: "facebook", url: "https://facebook.com/alexjohnson" },
      { platform: "twitter", url: "https://twitter.com/alexj" }
    ],
    portfolio: [
      {
        title: "Tech Review Series",
        description: "In-depth reviews of latest smartphones",
        metrics: "2.5M views, 15% engagement rate",
        image: "https://i.pravatar.cc/300?img=1"
      },
      // Add more portfolio items
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-white/10 border-white/20 p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="rounded-xl overflow-hidden mb-6">
              <img 
                src={kolData.image} 
                alt={kolData.name} 
                className="w-full aspect-square object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold mb-2 gradient-text">{kolData.name}</h1>
            <p className="text-muted-foreground mb-4">{kolData.bio}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Followers</p>
                <p className="text-xl font-bold">{kolData.followers}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Engagement</p>
                <p className="text-xl font-bold">{kolData.engagement}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Campaigns</p>
                <p className="text-xl font-bold">{kolData.completedCampaigns}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Rating</p>
                <p className="text-xl font-bold">{kolData.rating}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{kolData.availability}</span>
              </div>
              
              <div className="flex gap-2">
                {kolData.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {link.platform === 'instagram' && <Instagram className="w-5 h-5" />}
                    {link.platform === 'facebook' && <Facebook className="w-5 h-5" />}
                    {link.platform === 'twitter' && <Twitter className="w-5 h-5" />}
                  </a>
                ))}
              </div>

              {userType === 'brand' && (
                <Button className="w-full gradient-bg">
                  Invite to Campaign
                </Button>
              )}
            </div>
          </div>

          <div className="flex-1">
            <Tabs defaultValue="portfolio" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="statistics">Statistics</TabsTrigger>
                <TabsTrigger value="availability">Availability</TabsTrigger>
              </TabsList>

              <TabsContent value="portfolio" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {kolData.portfolio.map((item, index) => (
                    <Card key={index} className="bg-white/5 border-white/10">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {item.description}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.metrics}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="statistics" className="mt-6">
                {/* Add statistics content */}
                <div className="text-center text-muted-foreground">
                  Statistics content coming soon
                </div>
              </TabsContent>

              <TabsContent value="availability" className="mt-6">
                {/* Add availability calendar */}
                <div className="text-center text-muted-foreground">
                  Availability calendar coming soon
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default KOLProfile;