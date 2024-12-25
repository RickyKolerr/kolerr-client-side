import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, PieChart, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

export function BrandDashboard() {
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const handleAIAssistant = () => {
    toast({
      title: "AI Assistant",
      description: "How can I help you manage your campaigns today?",
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
    <div className="space-y-6 py-4 sm:py-6">
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
            Manage client campaigns and KOL relationships
          </p>
        </div>
        <Button 
          onClick={handleAIAssistant}
          variant="outline"
          className="w-full sm:w-auto gap-2"
        >
          AI Assistant
        </Button>
      </motion.div>

      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList className={`grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-4 gap-4'} bg-transparent h-auto p-0`}>
          <TabsTrigger
            value="campaigns"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Client</span> Campaigns
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
            Reporting
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            <Info className="h-4 w-4 mr-2" />
            Info
          </TabsTrigger>
        </TabsList>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          <TabsContent value="campaigns">
            <motion.div variants={itemAnimation}>
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <BarChart3 className="h-5 w-5" />
                    Campaign Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Manage your campaigns and track their progress.</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="matching">
            <motion.div variants={itemAnimation}>
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Users className="h-5 w-5" />
                    KOL Matching
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Match KOLs with client campaigns based on requirements.</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="reporting">
            <motion.div variants={itemAnimation}>
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <PieChart className="h-5 w-5" />
                    Campaign Reporting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">View comprehensive reports and insights for all campaigns.</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="profile">
            <motion.div variants={itemAnimation}>
              <Card className="bg-card/50 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Info className="h-5 w-5" />
                    Agency Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Manage your agency profile, logo, and contact information.</p>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </motion.div>
      </Tabs>
    </div>
  );
}
