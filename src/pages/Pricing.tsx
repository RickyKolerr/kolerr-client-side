import Navbar from "@/components/Navbar";
import { PricingHeader } from "@/components/pricing/PricingHeader";
import { PricingCard } from "@/components/pricing/PricingCard";

const Pricing = () => {
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
      recommended: true,
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <PricingHeader />
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              priceUSD={plan.priceUSD}
              priceVND={plan.priceVND}
              duration={plan.duration}
              features={plan.features}
              recommended={plan.recommended}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;