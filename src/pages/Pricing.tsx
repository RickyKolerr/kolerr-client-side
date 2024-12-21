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
}

const Pricing = () => {
  const plans: Plan[] = [
    {
      name: "Starter",
      description: "Perfect for new KOLs and small brands",
      price: {
        vnd: "500,000",
        usd: "20"
      },
      features: [
        "Basic profile customization",
        "Up to 5 active campaigns",
        "Basic analytics",
        "Email support"
      ]
    },
    {
      name: "Professional",
      description: "For growing influencers and established brands",
      price: {
        vnd: 2000000,
        usd: "80"
      },
      features: [
        "Advanced profile customization",
        "Unlimited active campaigns",
        "Priority matching algorithm",
        "Advanced analytics",
        "Priority support",
        "Campaign performance insights"
      ]
    },
    {
      name: "Enterprise",
      description: "For large agencies and professional KOLs",
      price: {
        vnd: "Contact us",
        usd: "Contact us"
      },
      features: [
        "Custom solutions",
        "Dedicated account manager",
        "API access",
        "Custom analytics",
        "24/7 premium support",
        "Custom integrations",
        "Bulk campaign management"
      ]
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

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
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
                <Button className="w-full" variant={plan.name === "Professional" ? "default" : "outline"}>
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardFooter>
            </Card>
          ))}
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