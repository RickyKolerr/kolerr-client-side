import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SlotDashboard from "@/components/slots/SlotDashboard";
import AvailableSlots from "@/components/slots/AvailableSlots";
import MySlots from "@/components/slots/MySlots";
import { useLanguage } from "@/contexts/LanguageContext";

const Slots = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent mb-2">
          {t('slots.title')}
        </h1>
        <p className="text-muted-foreground mb-8">
          {t('slots.subtitle')}
        </p>
        
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="bg-background border border-input">
            <TabsTrigger value="dashboard">{t('slots.tabs.dashboard')}</TabsTrigger>
            <TabsTrigger value="available">{t('slots.tabs.available')}</TabsTrigger>
            <TabsTrigger value="my-slots">{t('slots.tabs.mySlots')}</TabsTrigger>
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