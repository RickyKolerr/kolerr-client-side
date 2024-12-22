import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PaymentMethods from "@/components/checkout/PaymentMethods";
import { useLanguage } from "@/contexts/LanguageContext";

interface SelectedPlan {
  name: string;
  priceUSD: number | null;
  priceVND: string | null;
  duration: string;
}

const Checkout = () => {
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const planData = sessionStorage.getItem('selectedPlan');
    if (!planData) {
      navigate('/pricing');
      return;
    }
    setSelectedPlan(JSON.parse(planData));
  }, [navigate]);

  if (!selectedPlan) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
              {t("checkout.title")}
            </h1>
            <p className="text-muted-foreground">
              {t("checkout.selectedPlan")}: {t(selectedPlan.name as any)}
            </p>
            <p className="text-lg font-semibold">
              {selectedPlan.priceUSD ? `$${selectedPlan.priceUSD}` : ''} 
              {selectedPlan.priceVND ? ` (${selectedPlan.priceVND} VND)` : ''} 
              / {t(selectedPlan.duration as any)}
            </p>
          </div>
          <PaymentMethods />
        </div>
      </div>
    </div>
  );
};

export default Checkout;