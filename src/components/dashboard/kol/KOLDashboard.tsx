import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Calendar, DollarSign, User, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function KOLDashboard() {
  const { toast } = useToast();

  const handleAIAssistant = () => {
    toast({
      title: "AI Assistant",
      description: "How can I help you find the perfect campaigns today?",
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
            KOL Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your campaigns and track earnings
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
            Current Campaigns
          </TabsTrigger>
          <TabsTrigger
            value="availability"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Slot Availability
          </TabsTrigger>
          <TabsTrigger
            value="earnings"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            <DollarSign className="h-4 w-4 mr-2" />
            Earnings/Status
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            <User className="h-4 w-4 mr-2" />
            KOL Info
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
                    Current Campaigns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>View and manage your active campaign commitments.</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="availability">
            <motion.div variants={itemAnimation}>
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Slot Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Manage your availability for upcoming campaigns.</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="earnings">
            <motion.div variants={itemAnimation}>
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Earnings & Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Track your earnings and campaign performance metrics.</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="profile">
            <motion.div variants={itemAnimation}>
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    KOL Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Manage your profile, portfolio, and social media presence.</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </motion.div>
      </Tabs>
    </div>
  );
}