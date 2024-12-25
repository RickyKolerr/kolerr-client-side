import React from 'react';
import { Card } from "@/components/ui/card";

export function SlotAvailability() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Slot Availability</h2>
      <p className="text-muted-foreground">Manage your availability for campaigns.</p>
    </Card>
  );
}