import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/translations";
import { useNavigate } from "react-router-dom";

interface PricingCardProps {
  name: TranslationKey;
  priceUSD: number | null;
  priceVND: string | null;
  duration: TranslationKey;
  features: TranslationKey[];
  recommended?: boolean;
  planId: string;
  isAnnual: boolean;
}

export const PricingCard = ({
  name,
  priceUSD,
  priceVND,
  duration,
  features,
  recommended,
  planId,
  isAnnual,
}: PricingCardProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (planId === "free") {
      // Handle free plan signup
      navigate("/auth/register");
    } else {
      navigate(`/checkout?plan=${planId}&billing=${isAnnual ? "annual" : "monthly"}`);
    }
  };

  return (
    <Card className={`relative hover:shadow-lg transition-all duration-300 ${
      recommended ? 'border-kolerr-purple' : ''
    }`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-kolerr-cyan to-kolerr-purple text-white text-xs px-3 py-1 rounded-full">
            {t("pricing.recommended")}
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl text-center">{t(name)}</CardTitle>
        <div className="text-center mt-4">
          <div className="text-4xl font-bold">
            {priceUSD === null ? t("pricing.custom") : `$${priceUSD}`}
          </div>
          <div className="text-sm text-muted-foreground">
            {priceVND === null ? t("pricing.contactUs") : `${priceVND} VND`}
          </div>
          <div className="text-foreground/60">{t(duration)}</div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-kolerr-cyan" />
              <span className="text-sm">{t(feature)}</span>
            </li>
          ))}
        </ul>
        <Button 
          className="w-full mt-6 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90"
          onClick={handleGetStarted}
        >
          {t("pricing.getStarted")}
        </Button>
      </CardContent>
    </Card>
  );
};