import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Search, Brain, Timer, Shield, Users, ArrowRight, CheckCircle2, Star, TrendingUp, Award } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import KOLShowcase from "@/components/home/KOLShowcase";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Star,
      title: "Premium KOLs",
      description: "Access to Vietnam's top influencers across all major platforms"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Track campaign performance with detailed metrics and insights"
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "All KOLs are verified for authenticity and engagement"
    },
    {
      icon: Award,
      title: "Brand Safety",
      description: "Advanced content monitoring and brand safety measures"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active KOLs" },
    { number: "50M+", label: "Total Reach" },
    { number: "1000+", label: "Successful Campaigns" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Enhanced Visual */}
      <section className="relative container mx-auto px-4 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kolerr-cyan/20 via-kolerr-purple/20 to-kolerr-orange/20 pointer-events-none" />
        <div className="relative z-10">
          <h1 className="mb-6 text-4xl md:text-6xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent animate-fade-in">
            Connect with Top Influencers for Your Brand Campaigns
          </h1>
          <p className="mb-8 text-xl text-gray-400 max-w-3xl mx-auto">
            Find, Match, and Collaborate with the Best KOLs in Vietnam. Our AI-powered platform ensures perfect matches for your brand's success.
          </p>
          
          {/* Enhanced Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for KOLs by Name, Industry, or Platform"
                className="pl-10 py-6 text-lg bg-white/10 border-gray-700 hover:border-kolerr-cyan transition-colors"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/auth/register">
              <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white px-8 py-6 text-lg h-auto hover:opacity-90 hover:scale-105 transition-all">
                Get Started Today
              </Button>
            </Link>
            <Link to="/learn-more">
              <Button variant="outline" className="px-8 py-6 text-lg h-auto hover:bg-white/5">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan to-kolerr-purple bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Why Choose Kolerr?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-lg bg-white/5 border border-gray-800 hover:border-kolerr-cyan transition-colors">
                <feature.icon className="w-12 h-12 mb-4 text-kolerr-cyan" />
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-black/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            How Kolerr Works
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
                icon: Timer
              }
            ].map((step, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg text-center border border-gray-800 hover:border-kolerr-purple transition-colors">
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

      {/* KOL Showcase Section */}
      <KOLShowcase />

      {/* Benefits Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Benefits for Brands
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Access to verified top-tier KOLs",
              "AI-powered matching algorithm",
              "Real-time campaign tracking",
              "Detailed analytics and reporting",
              "Brand safety monitoring",
              "Dedicated support team"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                <CheckCircle2 className="text-kolerr-cyan flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Ready to Start Your Campaign?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of successful brands and KOLs on Kolerr. Start your journey today and elevate your brand's presence.
          </p>
          <Link to="/auth/register">
            <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white px-8 py-6 text-lg h-auto hover:opacity-90 hover:scale-105 transition-all">
              Start Your Campaign Today <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-kolerr-cyan transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-kolerr-cyan transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-kolerr-cyan transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-kolerr-cyan transition-colors cursor-pointer">Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-kolerr-cyan transition-colors cursor-pointer">For KOLs</li>
                <li className="hover:text-kolerr-cyan transition-colors cursor-pointer">For Brands</li>
                <li className="hover:text-kolerr-cyan transition-colors cursor-pointer">Pricing</li>
                <li className="hover:text-kolerr-cyan transition-colors cursor-pointer">Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-kolerr-cyan transition-colors cursor-pointer">Support</li>
                <li className="hover:text-kolerr-cyan transition-colors cursor-pointer">Sales</li>
                <li className="hover:text-kolerr-cyan transition-colors cursor-pointer">Press</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Users className="text-gray-400 w-6 h-6 hover:text-kolerr-cyan transition-colors cursor-pointer" />
                <Users className="text-gray-400 w-6 h-6 hover:text-kolerr-cyan transition-colors cursor-pointer" />
                <Users className="text-gray-400 w-6 h-6 hover:text-kolerr-cyan transition-colors cursor-pointer" />
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