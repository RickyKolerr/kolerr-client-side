import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

interface PricingHeaderProps {
  isAnnual: boolean;
  onToggle: () => void;
}

export const PricingHeader = ({ isAnnual, onToggle }: PricingHeaderProps) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 text-center mb-16">
      <motion.h1 
        className="text-5xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("pricing.title")}
      </motion.h1>
      <motion.p 
        className="text-lg text-muted-foreground max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("pricing.subtitle")}
      </motion.p>
      <motion.div 
        className="flex justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button 
          variant={!isAnnual ? "default" : "outline"}
          onClick={() => !isAnnual || onToggle()}
          className={cn(
            "relative transition-all duration-300",
            !isAnnual && "bg-gradient-to-r from-kolerr-cyan to-kolerr-purple"
          )}
        >
          {t("pricing.monthly")}
        </Button>
        <Button 
          variant={isAnnual ? "default" : "outline"}
          onClick={() => isAnnual || onToggle()}
          className={cn(
            "relative transition-all duration-300",
            isAnnual && "bg-gradient-to-r from-kolerr-cyan to-kolerr-purple"
          )}
        >
          {t("pricing.annual")}
        </Button>
      </motion.div>
    </div>
  );
};