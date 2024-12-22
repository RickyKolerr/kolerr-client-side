import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  CreditCard, 
  Globe2, 
  Wallet, 
  QrCode,
  Building2,
  CreditCardIcon,
  SmartphoneNfc
} from "lucide-react";

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
      id: "paypal",
      name: "PayPal",
      icon: <Globe2 className="w-6 h-6" />,
      description: t("payment.paypal.desc"),
    },
    {
      id: "momo",
      name: "MoMo",
      icon: <SmartphoneNfc className="w-6 h-6 text-pink-500" />,
      description: t("payment.momo.desc"),
    },
    {
      id: "vnpay",
      name: "VNPay",
      icon: <QrCode className="w-6 h-6 text-blue-500" />,
      description: t("payment.vnpay.desc"),
    },
    {
      id: "banking",
      name: t("payment.banking.title"),
      icon: <Building2 className="w-6 h-6 text-green-500" />,
      description: t("payment.banking.desc"),
    },
    {
      id: "cod",
      name: t("payment.cod.title"),
      icon: <Wallet className="w-6 h-6" />,
      description: t("payment.cod.desc"),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
        {t("payment.methods.title")}
      </h2>
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
    </div>
  );
};

export default PaymentMethods;