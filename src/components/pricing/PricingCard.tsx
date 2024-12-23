import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/translations";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

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
      navigate("/auth/register");
    } else {
      navigate(`/checkout?plan=${planId}&billing=${isAnnual ? "annual" : "monthly"}`);
    }
  };

  return (
    <Card 
      className={cn(
        "relative group transition-all duration-300 hover:scale-105",
        "before:absolute before:inset-0 before:rounded-lg before:p-[2px]",
        "before:bg-gradient-to-r before:from-kolerr-cyan before:via-kolerr-purple before:to-kolerr-orange",
        "before:content-[''] before:-z-10 before:transition-all",
        recommended ? "shadow-lg shadow-kolerr-purple/20" : "hover:shadow-lg"
      )}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-kolerr-cyan to-kolerr-purple text-white px-4 py-1 rounded-full text-sm font-medium">
            {t("pricing.recommended")}
          </span>
        </div>
      )}
      <CardHeader className="space-y-4 text-center">
        <CardTitle className="text-2xl bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          {t(name)}
        </CardTitle>
        <div className="space-y-2">
          <div className="text-4xl font-bold">
            {priceUSD === null ? t("pricing.custom") : `$${priceUSD}`}
          </div>
          <div className="text-sm text-muted-foreground">
            {priceVND === null ? t("pricing.contactUs") : `${priceVND} VND`}
          </div>
          <div className="text-sm text-muted-foreground">{t(duration)}</div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 group/item">
              <div className="rounded-full p-1 bg-gradient-to-r from-kolerr-cyan to-kolerr-purple group-hover/item:scale-110 transition-transform">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm">{t(feature)}</span>
            </li>
          ))}
        </ul>
        <Button 
          className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90 transition-opacity"
          onClick={handleGetStarted}
        >
          {t("pricing.getStarted")}
        </Button>
      </CardContent>
    </Card>
  );
};