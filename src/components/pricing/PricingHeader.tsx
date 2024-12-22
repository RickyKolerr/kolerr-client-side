import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export const PricingHeader = () => {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="space-y-4 text-center mb-12">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
        {t("pricing.title")}
      </h1>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {t("pricing.subtitle")}
      </p>
      <div className="flex justify-center gap-4">
        <Button 
          variant={isAnnual ? "outline" : "default"}
          onClick={() => setIsAnnual(false)}
          className={!isAnnual ? "bg-gradient-to-r from-kolerr-cyan to-kolerr-purple text-white" : ""}
        >
          {t("pricing.monthly")}
        </Button>
        <Button 
          variant={!isAnnual ? "outline" : "default"}
          onClick={() => setIsAnnual(true)}
          className={isAnnual ? "bg-gradient-to-r from-kolerr-cyan to-kolerr-purple text-white" : ""}
        >
          {t("pricing.annual")} (Save 20%)
        </Button>
      </div>
    </div>
  );
};