import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/translations";

interface PricingCardProps {
  name: TranslationKey;
  priceUSD: number | null;
  priceVND: string | null;
  searchCredits: number;
  duration: TranslationKey;
  features: TranslationKey[];
  recommended?: boolean;
  isAnnual?: boolean;
}

export const PricingCard = ({
  name,
  priceUSD,
  priceVND,
  searchCredits,
  duration,
  features,
  recommended,
  isAnnual = false,
}: PricingCardProps) => {
  const { t } = useLanguage();

  const getAdjustedPrice = () => {
    if (priceUSD === null) return null;
    const monthlyPrice = priceUSD;
    return isAnnual ? monthlyPrice * 0.8 : monthlyPrice; // 20% discount for annual
  };

  const getAdjustedVNDPrice = () => {
    if (priceVND === null) return null;
    const monthlyPrice = parseInt(priceVND.replace(/,/g, ""));
    return isAnnual 
      ? new Intl.NumberFormat("vi-VN").format(monthlyPrice * 0.8)
      : priceVND;
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
            {priceUSD === null ? t("pricing.custom") : `$${getAdjustedPrice()}`}
          </div>
          <div className="text-sm text-muted-foreground">
            {priceVND === null ? t("pricing.contactUs") : `${getAdjustedVNDPrice()} VND`}
          </div>
          <div className="text-foreground/60">
            {isAnnual ? t("pricing.perYear") : t(duration)}
          </div>
          {searchCredits > 0 && (
            <div className="mt-2 text-sm text-kolerr-purple">
              {searchCredits} {t("pricing.searchCredits")}
            </div>
          )}
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
        >
          {t("pricing.getStarted")}
        </Button>
      </CardContent>
    </Card>
  );
};