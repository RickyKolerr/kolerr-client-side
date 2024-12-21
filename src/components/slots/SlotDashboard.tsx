import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, Calendar, Bell, TrendingUp, Clock, Target } from "lucide-react";

const SlotDashboard = () => {
  const stats = [
    {
      title: "Available Slots",
      value: "12",
      icon: Calendar,
      description: "Open for applications",
      color: "cyan"
    },
    {
      title: "Active Slots",
      value: "3",
      icon: Activity,
      description: "Currently participating",
      color: "purple"
    },
    {
      title: "Total Applications",
      value: "28",
      icon: Users,
      description: "Across all campaigns",
      color: "orange"
    },
    {
      title: "Pending Invites",
      value: "5",
      icon: Bell,
      description: "Awaiting response",
      color: "yellow"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center space-y-0">
              <div className={`w-14 h-14 rounded-full bg-kolerr-${stat.color}/10 flex items-center justify-center mr-4`}>
                <stat.icon className={`h-6 w-6 text-kolerr-${stat.color}`} />
              </div>
              <div>
                <CardTitle className="text-lg">{stat.title}</CardTitle>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SlotDashboard;