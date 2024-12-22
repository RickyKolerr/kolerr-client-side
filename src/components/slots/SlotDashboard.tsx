import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, Calendar, Bell, TrendingUp, Clock, Target, Briefcase, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const SlotDashboard = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      title: "Available Slots",
      value: "12",
      icon: Calendar,
      description: "Open for applications",
      color: "cyan",
      trend: "+3 this week"
    },
    {
      title: "Active Slots",
      value: "3",
      icon: Activity,
      description: "Currently participating",
      color: "purple",
      trend: "On track"
    },
    {
      title: "Total Applications",
      value: "28",
      icon: Users,
      description: "Across all campaigns",
      color: "orange",
      trend: "+15% vs last month"
    },
    {
      title: "Pending Invites",
      value: "5",
      icon: Bell,
      description: "Awaiting response",
      color: "yellow",
      trend: "2 new today"
    }
  ];

  const upcomingSlots = [
    {
      id: 1,
      title: "Fashion Week Coverage",
      brand: "StyleCo",
      deadline: "2024-04-01",
      requirements: "Min. 50K followers",
      compensation: "$2,000",
      progress: 75
    },
    {
      id: 2,
      title: "Tech Review Series",
      brand: "TechGiant",
      deadline: "2024-04-15",
      requirements: "Tech niche focus",
      compensation: "$1,500",
      progress: 40
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
                <p className="text-sm text-kolerr-purple mt-1">{stat.trend}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Upcoming Slots</h2>
          <Button variant="outline">View All Slots</Button>
        </div>
        <div className="grid gap-4">
          {upcomingSlots.map((slot) => (
            <Card key={slot.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{slot.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Briefcase className="h-4 w-4 mr-2" />
                      {slot.brand}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{slot.compensation}</p>
                    <p className="text-sm text-muted-foreground">Compensation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      {slot.requirements}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Due: {slot.deadline}
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Application Progress</span>
                      <span>{slot.progress}%</span>
                    </div>
                    <Progress value={slot.progress} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlotDashboard;