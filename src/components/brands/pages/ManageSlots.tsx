import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Users, Clock, Target } from "lucide-react";

export function ManageSlots() {
  const slots = [
    {
      id: 1,
      title: "Fashion Influencer",
      requirements: "Min 50k followers, Fashion/Lifestyle niche",
      deadline: "2024-04-15",
      applicants: 12,
      status: "Open"
    },
    {
      id: 2,
      title: "Tech Reviewer",
      requirements: "Tech expertise, Min 20k subscribers",
      deadline: "2024-04-20",
      applicants: 8,
      status: "Open"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Manage Slots
          </h1>
          <p className="text-muted-foreground mt-2">
            Create and manage campaign slots for KOLs
          </p>
        </div>
        <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange">
          Create New Slot
        </Button>
      </div>

      <div className="grid gap-6">
        {slots.map((slot) => (
          <Card key={slot.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-semibold">
                {slot.title}
              </CardTitle>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{slot.requirements}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Due: {slot.deadline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{slot.applicants} Applicants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Status: {slot.status}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}