import Navbar from "@/components/Navbar";
import { PricingHeader } from "@/components/pricing/PricingHeader";
import { PricingCard } from "@/components/pricing/PricingCard";
import { TranslationKey } from "@/translations";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans: {
    name: TranslationKey;
    priceUSD: number | null;
    priceVND: string | null;
    searchCredits: number;
    duration: TranslationKey;
    features: TranslationKey[];
    recommended?: boolean;
  }[] = [
    {
      name: "pricing.plans.starter.name",
      priceUSD: 19,
      priceVND: "475,000",
      searchCredits: 100,
      duration: "pricing.perMonth",
      features: [
        "pricing.features.basicAI",
        "pricing.features.limitedSlots",
        "pricing.features.basicAnalytics",
        "pricing.features.emailSupport",
        "pricing.features.searchCredits"
      ]
    },
    {
      name: "pricing.plans.growth.name",
      priceUSD: 49,
      priceVND: "1,225,000",
      searchCredits: 500,
      duration: "pricing.perMonth",
      recommended: true,
      features: [
        "pricing.features.advancedAI",
        "pricing.features.unlimitedSlots",
        "pricing.features.realtimeAnalytics",
        "pricing.features.prioritySupport",
        "pricing.features.campaignManagement",
        "pricing.features.performanceInsights",
        "pricing.features.searchCredits"
      ]
    },
    {
      name: "pricing.plans.enterprise.name",
      priceUSD: null,
      priceVND: null,
      searchCredits: 0,
      duration: "pricing.plans.enterprise.duration",
      features: [
        "pricing.features.fullAccess",
        "pricing.features.dedicatedManager",
        "pricing.features.customIntegrations",
        "pricing.features.advancedReporting",
        "pricing.features.apiAccess",
        "pricing.features.premiumSupport",
        "pricing.features.unlimitedSearches"
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
              {...plan}
              isAnnual={isAnnual}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;