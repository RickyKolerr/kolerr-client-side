import React from 'react';
import { Card } from "@/components/ui/card";

export function KOLProfile() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">KOL Profile</h2>
      <p className="text-muted-foreground">Manage your profile information and portfolio.</p>
    </Card>
  );
}