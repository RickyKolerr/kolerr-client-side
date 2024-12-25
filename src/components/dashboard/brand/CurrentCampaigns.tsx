import React from 'react';
import { Card } from "@/components/ui/card";

export function CurrentCampaigns() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Current Campaigns</h2>
      <p className="text-muted-foreground">Your active campaign management will appear here.</p>
    </Card>
  );
}