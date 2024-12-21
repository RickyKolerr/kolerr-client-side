import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string | number;
  duration: string;
  features: string[];
  recommended?: boolean;
}

export const PricingCard = ({
  name,
  price,
  duration,
  features,
  recommended,
}: PricingCardProps) => {
  return (
    <Card className={`relative hover:shadow-lg transition-all duration-300 ${
      recommended ? 'border-kolerr-purple' : ''
    }`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-kolerr-cyan to-kolerr-purple text-white text-xs px-3 py-1 rounded-full">
            Recommended
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl text-center">{name}</CardTitle>
        <div className="text-center mt-4">
          <span className="text-4xl font-bold">
            {typeof price === 'number' ? `$${price}` : price}
          </span>
          <span className="text-muted-foreground">/{duration}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-kolerr-cyan" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className="w-full mt-6 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90"
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
};