import React from 'react';
import { Card } from "@/components/ui/card";

export function ClientCampaigns() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Client Campaigns</h2>
      <p className="text-muted-foreground">Manage your clients' campaigns here.</p>
    </Card>
  );
}