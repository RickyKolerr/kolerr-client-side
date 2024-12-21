import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, X } from "lucide-react";

export function KOLManagement() {
  const pendingKOLs = [
    {
      id: 1,
      name: "Emma Wilson",
      avatar: "/placeholder.svg",
      credibilityScore: 92,
      expertise: "Fashion & Lifestyle",
    },
    {
      id: 2,
      name: "David Lee",
      avatar: "/placeholder.svg",
      credibilityScore: 88,
      expertise: "Photography",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>KOL Applications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {pendingKOLs.map((kol) => (
          <div
            key={kol.id}
            className="p-4 bg-gray-100 rounded-lg space-y-4"
          >
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={kol.avatar} alt={kol.name} />
                <AvatarFallback>
                  {kol.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{kol.name}</p>
                <p className="text-sm text-gray-500">{kol.expertise}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">
                Score: {kol.credibilityScore}
              </Badge>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="destructive"
                  className="rounded-full"
                >
                  <X className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  className="rounded-full bg-green-500 hover:bg-green-600"
                >
                  <Check className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}