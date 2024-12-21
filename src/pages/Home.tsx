import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Search, Brain, Stopwatch, Shield, Users, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-6 text-4xl md:text-6xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          Connect with Top Influencers for Your Brand Campaigns
        </h1>
        <p className="mb-8 text-xl text-gray-400">
          Find, Match, and Collaborate with the Best KOLs in Vietnam
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for KOLs by Name, Industry, or Platform"
              className="pl-10 py-6 text-lg bg-white/10 border-gray-700"
            />
          </div>
        </div>
        
        <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white px-8 py-6 text-lg h-auto">
          Start Your Campaign Today
        </Button>
      </section>

      {/* How It Works Section */}
      <section className="bg-black/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            How Kolerr Empowers Brands & Influencers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Search for KOLs",
                description: "Easily search and discover KOLs based on platform, industry, and audience.",
                icon: Search
              },
              {
                title: "AI Matching",
                description: "Let our AI recommend the best matches for your campaign, tailored to your needs.",
                icon: Brain
              },
              {
                title: "Real-Time Collaboration",
                description: "Manage campaigns in real-time and track KOL performance for better results.",
                icon: Stopwatch
              }
            ].map((step, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <step.icon className="w-12 h-12 text-kolerr-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured KOLs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Top Influencers in Vietnam Ready for Your Campaign
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((kol) => (
              <Card key={kol} className="bg-white/5 border-gray-800">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-kolerr-cyan to-kolerr-purple" />
                  <CardTitle className="text-center text-white">KOL Name {kol}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-400">
                  <p className="mb-2">Fashion & Lifestyle</p>
                  <p>500K Followers</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Kolerr Section */}
      <section className="bg-black/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Why Choose Kolerr for Your Campaigns?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Matchmaking",
                description: "Match with KOLs based on your campaign's unique needs.",
                icon: Brain
              },
              {
                title: "Real-Time Campaign Tracking",
                description: "Track your campaign's success in real-time with detailed insights.",
                icon: Stopwatch
              },
              {
                title: "Transparency & Trust",
                description: "View KOL credibility scores and ratings from previous campaigns.",
                icon: Shield
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">
                  <feature.icon className="w-12 h-12 text-kolerr-orange" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Campaign?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of successful brands and KOLs on Kolerr
          </p>
          <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white px-8 py-6 text-lg h-auto">
            Get Started Today <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>For KOLs</li>
                <li>For Brands</li>
                <li>Pricing</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Support</li>
                <li>Sales</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Users className="text-gray-400 w-6 h-6" />
                <Users className="text-gray-400 w-6 h-6" />
                <Users className="text-gray-400 w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2024 Kolerr. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;