import React from 'react';
import { Card } from "@/components/ui/card";

export function BrandProfile() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Brand Profile</h2>
      <p className="text-muted-foreground">Manage your brand information and settings.</p>
    </Card>
  );
}