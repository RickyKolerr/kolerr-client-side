import Navbar from "@/components/Navbar";
import { PricingHeader } from "@/components/pricing/PricingHeader";
import { PricingCard } from "@/components/pricing/PricingCard";
import { useState } from "react";
import { TranslationKey } from "@/translations";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: {
    name: TranslationKey;
    priceVND: string | null;
    priceUSD: number | null;
    duration: TranslationKey;
    features: TranslationKey[];
    recommended?: boolean;
  }[] = [
    {
      name: "pricing.plans.free.name",
      priceVND: "0",
      priceUSD: 0,
      duration: "pricing.plans.free.duration",
      features: [
        "pricing.features.basicAI",
        "pricing.features.limitedSearches",
        "pricing.features.basicAnalytics",
        "pricing.features.communityAccess",
        "pricing.features.freeTrial"
      ]
    },
    {
      name: "pricing.plans.basic.name",
      priceVND: isAnnual ? "1,500,000" : "150,000",
      priceUSD: isAnnual ? 65 : 6.50,
      duration: isAnnual ? "pricing.perYear" : "pricing.perMonth",
      features: [
        "pricing.features.searches50",
        "pricing.features.slots2",
        "pricing.features.advancedFiltering",
        "pricing.features.communityTools",
        "pricing.features.payPerSearch"
      ]
    },
    {
      name: "pricing.plans.pro.name",
      priceVND: isAnnual ? "3,500,000" : "350,000",
      priceUSD: isAnnual ? 150 : 15,
      duration: isAnnual ? "pricing.perYear" : "pricing.perMonth",
      recommended: true,
      features: [
        "pricing.features.unlimitedSearches",
        "pricing.features.slots10",
        "pricing.features.enhancedAnalytics",
        "pricing.features.realtimeTracking",
        "pricing.features.prioritySupport"
      ]
    },
    {
      name: "pricing.plans.enterprise.name",
      priceVND: isAnnual ? "8,000,000" : "800,000",
      priceUSD: isAnnual ? 350 : 35,
      duration: isAnnual ? "pricing.perYear" : "pricing.perMonth",
      features: [
        "pricing.features.unlimitedSlots",
        "pricing.features.trendAnalysis",
        "pricing.features.dedicatedManager",
        "pricing.features.customIntegrations",
        "pricing.features.teamTools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <PricingHeader isAnnual={isAnnual} onToggle={() => setIsAnnual(!isAnnual)} />
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
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