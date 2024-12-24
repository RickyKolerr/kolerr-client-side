import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getUserType } from "@/utils/userTypeUtils";

const PricingSection = () => {
  const { t } = useLanguage();
  const userType = getUserType();

  const plans = [
    {
      name: "Free Trial",
      priceUSD: 0,
      priceVND: "0",
      duration: "14 days",
      features: [
        "Basic AI matchmaking",
        "Limited slots",
        "Basic analytics",
        "Email support"
      ],
      recommended: userType === 'kol'
    },
    {
      name: "Pro",
      priceUSD: 49,
      priceVND: "1,225,000",
      duration: "per month",
      features: [
        "Advanced AI matchmaking",
        "Unlimited slots",
        "Real-time analytics",
        "Priority support",
        "Campaign management",
        "Performance insights"
      ],
      recommended: userType === 'brand'
    },
    {
      name: "Enterprise",
      priceUSD: null,
      priceVND: null,
      duration: "tailored solution",
      features: [
        "Full platform access",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced reporting",
        "API access",
        "24/7 premium support"
      ],
      recommended: userType === 'agency'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tailored solutions for KOLs, brands, and agencies
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={item}>
              <Card 
                className={`relative hover:scale-105 transition-all duration-300 ${
                  plan.recommended ? 'border-2 border-kolerr-purple' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-kolerr-cyan to-kolerr-purple text-white px-4 py-1 rounded-full text-sm">
                      Recommended for {userType}
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                    {plan.name}
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Best suited for {userType}s</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </CardTitle>
                  <div className="text-center mt-4">
                    <div className="text-4xl font-bold">
                      {plan.priceUSD === null ? 'Custom' : `$${plan.priceUSD}`}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.priceVND === null ? 'Contact us' : `${plan.priceVND} VND`}
                    </div>
                    <div className="text-foreground/60">/{plan.duration}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-kolerr-cyan flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90 transition-all duration-300"
                  >
                    {plan.priceUSD === null ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;