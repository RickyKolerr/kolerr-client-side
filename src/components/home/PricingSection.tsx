import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free Trial",
      priceUSD: 0,
      priceVND: "0",
      duration: "14 days",
      features: [
        "Basic AI matchmaking",
        "Limited slots",
        "Basic analytics",
        "Email support"
      ]
    },
    {
      name: "Pro",
      priceUSD: 49,
      priceVND: "1,225,000",
      duration: "per month",
      features: [
        "Advanced AI matchmaking",
        "Unlimited slots",
        "Real-time analytics",
        "Priority support",
        "Campaign management",
        "Performance insights"
      ]
    },
    {
      name: "Enterprise",
      priceUSD: null,
      priceVND: null,
      duration: "tailored solution",
      features: [
        "Full platform access",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced reporting",
        "API access",
        "24/7 premium support"
      ]
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          Choose Your Plan
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="hover:scale-105 transition-duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                <div className="text-center mt-4">
                  <div className="text-4xl font-bold">
                    {plan.priceUSD === null ? 'Custom' : `$${plan.priceUSD}`}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.priceVND === null ? 'Contact us' : `${plan.priceVND} VND`}
                  </div>
                  <div className="text-foreground/60">/{plan.duration}</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-kolerr-cyan" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-6 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;