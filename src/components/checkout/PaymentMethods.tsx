import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Globe2, Wallet } from "lucide-react";

const PaymentMethods = () => {
  const paymentMethods = [
    {
      id: "stripe",
      name: "Stripe",
      icon: <CreditCard className="w-6 h-6" />,
      description: "Secure payment processing with Stripe",
    },
    {
      id: "local",
      name: "Local Payment",
      icon: <Wallet className="w-6 h-6" />,
      description: "Pay using local payment methods",
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: <Globe2 className="w-6 h-6" />,
      description: "Fast and secure payment with PayPal",
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
              Select Payment Method
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PaymentMethods;