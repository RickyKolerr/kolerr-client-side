import React from 'react';
import { Card } from "@/components/ui/card";

export function AgencyProfile() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Agency Profile</h2>
      <p className="text-muted-foreground">Manage your agency information and settings.</p>
    </Card>
  );
}