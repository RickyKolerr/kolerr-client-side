import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, Calendar, Info, PieChart, Settings, TrendingUp, Star } from "lucide-react";
import { motion } from "framer-motion";
import { MetricsOverview } from "@/components/brands/dashboard/MetricsOverview";
import { CampaignsList } from "@/components/brands/dashboard/CampaignsList";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function BrandDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAIAssistant = () => {
    toast({
      title: "AI Assistant",
      description: "How can I help you with your campaigns today?",
      duration: 5000,
    });
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Brand Dashboard
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Manage your campaigns and track performance
          </p>
        </div>
        <div className="flex w-full sm:w-auto gap-2">
          <Button 
            onClick={handleAIAssistant}
            variant="outline"
            className="flex-1 sm:flex-none gap-2 h-10"
          >
            <Star className="h-4 w-4" />
            <span className="whitespace-nowrap">AI Assistant</span>
          </Button>
          <Button 
            onClick={() => navigate("/brands/create")}
            className="flex-1 sm:flex-none bg-gradient-to-r from-kolerr-cyan to-kolerr-purple hover:opacity-90 h-10"
          >
            Create Campaign
          </Button>
        </div>
      </motion.div>

      <MetricsOverview />

      <div className="rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm overflow-hidden">
        <Tabs defaultValue="campaigns" className="w-full">
          <div className="flex flex-col gap-4 p-4">
            <TabsList className="h-auto grid grid-cols-2 sm:grid-cols-5 gap-2 bg-transparent">
              {[
                { value: "campaigns", icon: BarChart3, label: "Current Campaigns" },
                { value: "slots", icon: Calendar, label: "Slot Management" },
                { value: "kols", icon: Users, label: "KOL Selection" },
                { value: "analytics", icon: PieChart, label: "Analytics" },
                { value: "profile", icon: Info, label: "Brand Info" },
              ].map(({ value, icon: Icon, label }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 h-auto",
                    "data-[state=active]:bg-primary/10 data-[state=active]:text-primary",
                    "whitespace-nowrap text-sm"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">{label.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="p-4">
            <TabsContent value="campaigns">
              <CampaignsList campaigns={[]} />
            </TabsContent>
            <TabsContent value="slots">
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Slot Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Manage your campaign slots and KOL positions here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="kols">
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    KOL Selection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Browse and select KOLs for your campaigns.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics">
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Campaign Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>View detailed analytics and performance metrics for your campaigns.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="profile">
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Brand Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Manage your brand profile, logo, and social media links.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
