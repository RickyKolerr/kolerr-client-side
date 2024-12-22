import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, Calendar, Bell, TrendingUp, Clock, Target, Briefcase, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const SlotDashboard = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  // Simulated user type - in real app, this would come from auth context
  const userType = "kol"; // or "brand" or "agency"

  const getWelcomeMessage = () => {
    const name = "John Doe"; // This would come from auth context
    switch (userType) {
      case "kol":
        return `Welcome, ${name}! Let's connect you to the perfect campaigns and grow your influence.`;
      case "brand":
        return `Welcome, ${name}! Ready to launch impactful campaigns?`;
      case "agency":
        return `Welcome, ${name}! Let's streamline your influencer marketing campaigns.`;
      default:
        return `Welcome, ${name}!`;
    }
  };

  const stats = [
    {
      title: userType === "kol" ? "Available Slots" : "Open Slots",
      value: "12",
      icon: Calendar,
      description: "Open for applications",
      color: "cyan",
      trend: "+3 this week"
    },
    {
      title: userType === "kol" ? "Active Campaigns" : "Active Slots",
      value: "3",
      icon: Activity,
      description: "Currently participating",
      color: "purple",
      trend: "On track"
    },
    {
      title: userType === "kol" ? "Total Applications" : "Total Applicants",
      value: "28",
      icon: Users,
      description: "Across all campaigns",
      color: "orange",
      trend: "+15% vs last month"
    },
    {
      title: "Pending Actions",
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

  const handleAIAssistance = () => {
    toast({
      title: "AI Assistant",
      description: "How can I help you with your slots today?",
      duration: 5000,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gradient bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            {getWelcomeMessage()}
          </h1>
          <p className="text-muted-foreground mt-2">
            {userType === "kol" 
              ? "View and manage your campaign slots" 
              : "Manage and track your campaign slots"}
          </p>
        </div>
        <Button
          onClick={handleAIAssistance}
          variant="outline"
          className="gap-2"
        >
          <Star className="h-4 w-4" />
          AI Assistant
        </Button>
      </div>

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
          <h2 className="text-2xl font-semibold">
            {userType === "kol" ? "Your Active Slots" : "Recent Slot Activity"}
          </h2>
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
                      <span>Progress</span>
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