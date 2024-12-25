import React from 'react';
import { Card } from "@/components/ui/card";

export function KOLSelection() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">KOL Selection</h2>
      <p className="text-muted-foreground">Browse and select KOLs for your campaigns.</p>
    </Card>
  );
}