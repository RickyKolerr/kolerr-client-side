import React from 'react';
import { Card } from "@/components/ui/card";

export function KOLMatching() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">KOL Matching</h2>
      <p className="text-muted-foreground">Match KOLs with client campaigns.</p>
    </Card>
  );
}