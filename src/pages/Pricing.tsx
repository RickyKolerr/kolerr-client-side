import Navbar from "@/components/Navbar";
import { PricingHeader } from "@/components/pricing/PricingHeader";
import { PricingCard } from "@/components/pricing/PricingCard";
import { AddOnCard } from "@/components/pricing/AddOnCard";
import { Button } from "@/components/ui/button"; // Added missing import

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out our platform",
    price: "0",
    duration: "forever",
    features: [
      "Basic AI matchmaking",
      "Limited filtering options",
      "Basic dashboard access",
      "Limited features",
      "No slot access"
    ]
  },
  {
    name: "Basic",
    description: "Recommended for Small Brands and New KOLs",
    price: 125000,
    duration: "month",
    recommended: true,
    features: [
      "Full AI-powered matchmaking",
      "Preference-based matching",
      "Full dashboard access",
      "Advanced filters",
      "Limited slot access",
      "Basic priority",
      "5,000 VND per additional search"
    ]
  },
  {
    name: "Pro",
    description: "For growing influencers and established brands",
    price: 750000,
    duration: "month",
    features: [
      "Advanced AI matchmaking",
      "Deep filtering options",
      "Real-time tracking",
      "Detailed insights",
      "Priority slot access",
      "Faster campaigns",
      "10,000 VND per additional search"
    ]
  },
  {
    name: "Premium",
    description: "Enterprise-grade solutions for large organizations",
    price: 2500000,
    duration: "month",
    features: [
      "Full AI matchmaking suite",
      "Trend analysis tools",
      "Complete campaign management",
      "Real-time tracking",
      "Advanced filtering",
      "Priority access to Premium Slots",
      "20,000 VND per additional search"
    ]
  }
];

const addOns = [
  {
    name: "Premium Slot Access",
    price: 50000,
    description: "Access premium slots with higher visibility"
  },
  {
    name: "Real-Time Campaign Tracking",
    price: 300000,
    description: "Track campaign progress and slot completion in real time"
  },
  {
    name: "AI Trend Analysis",
    price: 400000,
    description: "Access AI-powered insights for market trends and KOL performance"
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <PricingHeader />
        
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              duration={plan.duration}
              features={plan.features}
              recommended={plan.recommended}
            />
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Add-Ons
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {addOns.map((addon) => (
              <AddOnCard
                key={addon.name}
                name={addon.name}
                price={addon.price}
                description={addon.description}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Need a custom solution?</p>
          <Button variant="outline" size="lg">
            Contact our sales team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;