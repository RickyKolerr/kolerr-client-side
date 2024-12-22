import Navbar from "@/components/Navbar";
import { PricingHeader } from "@/components/pricing/PricingHeader";
import { PricingCard } from "@/components/pricing/PricingCard";

const Pricing = () => {
  const plans = [
    {
      name: "pricing.plans.free.name",
      priceUSD: 0,
      priceVND: "0",
      duration: "pricing.plans.free.duration",
      features: [
        "pricing.features.basicAI",
        "pricing.features.limitedSlots",
        "pricing.features.basicAnalytics",
        "pricing.features.emailSupport"
      ]
    },
    {
      name: "pricing.plans.pro.name",
      priceUSD: 49,
      priceVND: "1,225,000",
      duration: "pricing.perMonth",
      recommended: true,
      features: [
        "pricing.features.advancedAI",
        "pricing.features.unlimitedSlots",
        "pricing.features.realtimeAnalytics",
        "pricing.features.prioritySupport",
        "pricing.features.campaignManagement",
        "pricing.features.performanceInsights"
      ]
    },
    {
      name: "pricing.plans.enterprise.name",
      priceUSD: null,
      priceVND: null,
      duration: "pricing.plans.enterprise.duration",
      features: [
        "pricing.features.fullAccess",
        "pricing.features.dedicatedManager",
        "pricing.features.customIntegrations",
        "pricing.features.advancedReporting",
        "pricing.features.apiAccess",
        "pricing.features.premiumSupport"
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