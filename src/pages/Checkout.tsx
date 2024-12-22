import Navbar from "@/components/Navbar";
import PaymentMethods from "@/components/checkout/PaymentMethods";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSearchParams } from "react-router-dom";
import { TranslationKey } from "@/translations";

const Checkout = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");
  const isAnnual = searchParams.get("billing") === "annual";

  const getPriceForPlan = () => {
    switch (plan) {
      case "basic":
        return {
          usd: isAnnual ? 65 : 6.50,
          vnd: isAnnual ? "1,500,000" : "150,000"
        };
      case "pro":
        return {
          usd: isAnnual ? 150 : 15,
          vnd: isAnnual ? "3,500,000" : "350,000"
        };
      case "enterprise":
        return {
          usd: isAnnual ? 350 : 35,
          vnd: isAnnual ? "8,000,000" : "800,000"
        };
      default:
        return null;
    }
  };

  const price = getPriceForPlan();
  const planNameKey = plan ? `pricing.plans.${plan}.name` as TranslationKey : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                {t("checkout.selectedPlan")}: {planNameKey && t(planNameKey)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {price && (
                <div className="text-2xl font-bold mb-6">
                  ${price.usd} USD
                  <span className="text-base font-normal text-muted-foreground block">
                    ({price.vnd} VND)
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {isAnnual ? t("pricing.perYear") : t("pricing.perMonth")}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          <PaymentMethods />
        </div>
      </div>
    </div>
  );
};

export default Checkout;