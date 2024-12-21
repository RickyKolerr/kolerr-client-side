import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PlanPrice {
  vnd: string | number;
  usd: string | number;
}

interface Plan {
  name: string;
  description: string;
  price: PlanPrice;
  features: string[];
  searchLimit: string;
  recommended?: string;
}

interface AddOn {
  name: string;
  price: number;
  description: string;
}

const Pricing = () => {
  const plans: Plan[] = [
    {
      name: "Free",
      description: "Perfect for trying out our platform",
      price: {
        vnd: "0",
        usd: "0"
      },
      searchLimit: "1 free search per month",
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
      price: {
        vnd: 125000,
        usd: "5"
      },
      searchLimit: "Up to 10 searches/month",
      recommended: "Small Brands & New KOLs",
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
      price: {
        vnd: 750000,
        usd: "30"
      },
      searchLimit: "Up to 30 searches/month",
      recommended: "Growing KOLs & Brands",
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
      price: {
        vnd: 2500000,
        usd: "100"
      },
      searchLimit: "Unlimited searches",
      recommended: "Large Brands & KOLs",
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

  const addOns: AddOn[] = [
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include access to our AI-powered matchmaking system.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative border-gray-800 flex flex-col">
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-kolerr-purple text-white text-xs px-3 py-1 rounded-full">
                    Recommended for {plan.recommended}
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
                <div className="space-y-2">
                  <p className="text-4xl font-bold">
                    {typeof plan.price.vnd === "string" ? (
                      plan.price.vnd
                    ) : (
                      <>
                        {plan.price.vnd.toLocaleString()} VND
                        <br />
                        <span className="text-sm text-gray-400">(${plan.price.usd} USD)</span>
                      </>
                    )}
                  </p>
                  <p className="text-sm text-gray-400">per month</p>
                  <p className="text-sm font-semibold text-kolerr-cyan">{plan.searchLimit}</p>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.name === "Pro" ? "default" : "outline"}
                >
                  {plan.name === "Free" ? "Get Started" : "Subscribe Now"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Add-Ons</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {addOns.map((addon) => (
              <Card key={addon.name} className="border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl">{addon.name}</CardTitle>
                  <CardDescription>{addon.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">
                    {addon.price.toLocaleString()} VND
                    <span className="text-sm text-gray-400 block">
                      (${(addon.price / 25000).toFixed(2)} USD)
                    </span>
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Add to Plan</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Need a custom solution?</p>
          <Button variant="outline" size="lg">
            Contact our sales team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;