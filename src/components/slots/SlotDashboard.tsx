import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, Calendar, Bell } from "lucide-react";

const SlotDashboard = () => {
  const stats = [
    {
      title: "Available Slots",
      value: "12",
      icon: Calendar,
      description: "Open for applications"
    },
    {
      title: "Active Slots",
      value: "3",
      icon: Activity,
      description: "Currently participating"
    },
    {
      title: "Total Applications",
      value: "28",
      icon: Users,
      description: "Across all campaigns"
    },
    {
      title: "Pending Invites",
      value: "5",
      icon: Bell,
      description: "Awaiting response"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SlotDashboard;