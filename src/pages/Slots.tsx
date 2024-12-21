import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SlotDashboard from "@/components/slots/SlotDashboard";
import AvailableSlots from "@/components/slots/AvailableSlots";
import MySlots from "@/components/slots/MySlots";

const Slots = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent mb-2">
          Slot System
        </h1>
        <p className="text-muted-foreground mb-8">
          Manage your campaign slots and collaborations efficiently
        </p>
        
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="bg-background border border-input">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="available">Available Slots</TabsTrigger>
            <TabsTrigger value="my-slots">My Slots</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="space-y-4">
            <SlotDashboard />
          </TabsContent>
          <TabsContent value="available" className="space-y-4">
            <AvailableSlots />
          </TabsContent>
          <TabsContent value="my-slots" className="space-y-4">
            <MySlots />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Slots;