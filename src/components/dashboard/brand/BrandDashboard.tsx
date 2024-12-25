import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, Calendar, Info, PieChart, Settings, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { MetricsOverview } from "@/components/brands/dashboard/MetricsOverview";
import { CampaignsList } from "@/components/brands/dashboard/CampaignsList";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function BrandDashboard() {
  const navigate = useNavigate();

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
            Brand Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your campaigns and track performance
          </p>
        </div>
        <Button 
          onClick={() => navigate("/brands/create")}
          className="bg-gradient-to-r from-kolerr-cyan to-kolerr-purple hover:opacity-90"
        >
          Create Campaign
        </Button>
      </motion.div>

      <MetricsOverview />

      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList className="grid grid-cols-5 gap-4 bg-transparent h-auto p-0">
          <TabsTrigger
            value="campaigns"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Current Campaigns
          </TabsTrigger>
          <TabsTrigger
            value="slots"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Slot Management
          </TabsTrigger>
          <TabsTrigger
            value="kols"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            <Users className="h-4 w-4 mr-2" />
            KOL Selection
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            <PieChart className="h-4 w-4 mr-2" />
            Analytics
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            <Info className="h-4 w-4 mr-2" />
            Brand Info
          </TabsTrigger>
        </TabsList>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          <TabsContent value="campaigns">
            <motion.div variants={itemAnimation}>
              <CampaignsList campaigns={[]} />
            </motion.div>
          </TabsContent>

          <TabsContent value="slots">
            <motion.div variants={itemAnimation}>
              <Card>
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
            </motion.div>
          </TabsContent>

          <TabsContent value="kols">
            <motion.div variants={itemAnimation}>
              <Card>
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
            </motion.div>
          </TabsContent>

          <TabsContent value="analytics">
            <motion.div variants={itemAnimation}>
              <Card>
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
            </motion.div>
          </TabsContent>

          <TabsContent value="profile">
            <motion.div variants={itemAnimation}>
              <Card>
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
            </motion.div>
          </TabsContent>
        </motion.div>
      </Tabs>
    </div>
  );
}