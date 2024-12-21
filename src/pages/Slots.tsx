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
        <h1 className="text-4xl font-bold text-white mb-4">Slot System</h1>
        <p className="text-gray-400 mb-8">Manage your campaign slots and collaborations</p>
        
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="available">Available Slots</TabsTrigger>
            <TabsTrigger value="my-slots">My Slots</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            <SlotDashboard />
          </TabsContent>
          <TabsContent value="available">
            <AvailableSlots />
          </TabsContent>
          <TabsContent value="my-slots">
            <MySlots />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Slots;