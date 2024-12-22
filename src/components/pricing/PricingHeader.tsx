import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface PricingHeaderProps {
  isAnnual: boolean;
  onToggle: () => void;
}

export const PricingHeader = ({ isAnnual, onToggle }: PricingHeaderProps) => {
  const { t } = useLanguage();

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
          variant={!isAnnual ? "default" : "outline"}
          onClick={() => !isAnnual || onToggle()}
          className={!isAnnual ? "bg-gradient-to-r from-kolerr-cyan to-kolerr-purple" : ""}
        >
          {t("pricing.monthly")}
        </Button>
        <Button 
          variant={isAnnual ? "default" : "outline"}
          onClick={() => isAnnual || onToggle()}
          className={isAnnual ? "bg-gradient-to-r from-kolerr-cyan to-kolerr-purple" : ""}
        >
          {t("pricing.annual")}
        </Button>
      </div>
    </div>
  );
};