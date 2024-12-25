import React from 'react';
import { Card } from "@/components/ui/card";

export function CampaignAnalytics() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Campaign Analytics</h2>
      <p className="text-muted-foreground">View your campaign performance metrics here.</p>
    </Card>
  );
}