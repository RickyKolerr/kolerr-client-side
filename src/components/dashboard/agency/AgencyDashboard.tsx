import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, PieChart, Info, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function AgencyDashboard() {
  const { toast } = useToast();

  const handleAIAssistant = () => {
    toast({
      title: "AI Assistant",
      description: "How can I help you manage your client campaigns today?",
      duration: 5000,
    });
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            Agency Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage client campaigns and KOL relationships
          </p>
        </div>
        <Button 
          onClick={handleAIAssistant}
          variant="outline"
          className="gap-2"
        >
          <Star className="h-4 w-4" />
          AI Assistant
        </Button>
      </motion.div>

      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList className="grid grid-cols-4 gap-4 bg-transparent h-auto p-0">
          <TabsTrigger
            value="campaigns"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Client Campaigns
          </TabsTrigger>
          <TabsTrigger
            value="matching"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            <Users className="h-4 w-4 mr-2" />
            KOL Matching
          </TabsTrigger>
          <TabsTrigger
            value="reporting"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            <PieChart className="h-4 w-4 mr-2" />
            Campaign Reporting
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            <Info className="h-4 w-4 mr-2" />
            Agency Info
          </TabsTrigger>
        </TabsList>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          <TabsContent value="campaigns">
            <motion.div variants={itemAnimation}>
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Client Campaign Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Manage your clients' campaigns and track their progress.</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="matching">
            <motion.div variants={itemAnimation}>
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    KOL Matching
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Match KOLs with client campaigns based on requirements.</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="reporting">
            <motion.div variants={itemAnimation}>
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Campaign Reporting & Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>View comprehensive reports and insights for all campaigns.</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="profile">
            <motion.div variants={itemAnimation}>
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    Agency Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Manage your agency profile, logo, and contact information.</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </motion.div>
      </Tabs>
    </div>
  );
}