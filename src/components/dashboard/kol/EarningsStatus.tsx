import React from 'react';
import { Card } from "@/components/ui/card";

export function EarningsStatus() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Earnings Status</h2>
      <p className="text-muted-foreground">Track your earnings and payment status.</p>
    </Card>
  );
}