import { Button } from "@/components/ui/button";

export const PricingHeader = () => {
  return (
    <div className="space-y-4 text-center mb-12">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
        Choose Your Perfect Plan
      </h1>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Flexible pricing options designed to match your influencer marketing needs
      </p>
      <div className="flex justify-center gap-4">
        <Button variant="outline">Monthly Billing</Button>
        <Button variant="outline">Annual Billing</Button>
      </div>
    </div>
  );
};