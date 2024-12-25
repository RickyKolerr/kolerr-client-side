import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { CreditCard, Globe2, Wallet } from "lucide-react";

const PaymentMethods = () => {
  const { t } = useLanguage();

  const paymentMethods = [
    {
      id: "stripe",
      name: "Stripe",
      icon: <CreditCard className="w-6 h-6" />,
      description: t("payment.stripe.desc"),
    },
    {
      id: "local",
      name: t("payment.local.title"),
      icon: <Wallet className="w-6 h-6" />,
      description: t("payment.local.desc"),
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: <Globe2 className="w-6 h-6" />,
      description: t("payment.paypal.desc"),
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {paymentMethods.map((method) => (
        <Card key={method.id} className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {method.icon}
              {method.name}
            </CardTitle>
            <CardDescription>{method.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange"
              onClick={() => console.log(`Selected payment method: ${method.id}`)}
            >
              {t("payment.select")}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PaymentMethods;