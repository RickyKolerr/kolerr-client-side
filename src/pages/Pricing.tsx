import Navbar from "@/components/Navbar";
import { PricingHeader } from "@/components/pricing/PricingHeader";
import { PricingCard } from "@/components/pricing/PricingCard";
import { AddOnCard } from "@/components/pricing/AddOnCard";
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
    planId: string;
  }[] = [
    {
      name: "pricing.plans.free.name",
      priceVND: "0",
      priceUSD: 0,
      duration: "pricing.plans.free.duration",
      planId: "free",
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
      planId: "basic",
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
      planId: "pro",
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
      planId: "enterprise",
      features: [
        "pricing.features.unlimitedSlots",
        "pricing.features.trendAnalysis",
        "pricing.features.dedicatedManager",
        "pricing.features.customIntegrations",
        "pricing.features.teamTools"
      ]
    }
  ];

  const searchPackages = [
    {
      name: "Single Search",
      price: 5000,
      description: "One-time AI-powered search credit"
    },
    {
      name: "Search Pack (10)",
      price: 45000,
      description: "10 AI-powered searches with 10% discount"
    },
    {
      name: "Search Pack (50)",
      price: 200000,
      description: "50 AI-powered searches with 20% discount"
    },
    {
      name: "Search Pack (100)",
      price: 380000,
      description: "100 AI-powered searches with 24% discount"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <PricingHeader isAnnual={isAnnual} onToggle={() => setIsAnnual(!isAnnual)} />
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              priceUSD={plan.priceUSD}
              priceVND={plan.priceVND}
              duration={plan.duration}
              features={plan.features}
              recommended={plan.recommended}
              planId={plan.planId}
              isAnnual={isAnnual}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Pay Per Search Plans
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {searchPackages.map((pkg) => (
              <AddOnCard
                key={pkg.name}
                name={pkg.name}
                price={pkg.price}
                description={pkg.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;