import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { getUserType } from "@/utils/userTypeUtils";
import { useQuery } from "@tanstack/react-query";
import SlotDashboard from "@/components/slots/SlotDashboard";
import AvailableSlots from "@/components/slots/AvailableSlots";
import MySlots from "@/components/slots/MySlots";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const Slots = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const userType = getUserType();

  // Example of how to fetch slots data
  const { data: slotsData, isLoading, error } = useQuery({
    queryKey: ['slots'],
    queryFn: async () => {
      const response = await fetch('/api/slots');
      if (!response.ok) {
        throw new Error('Failed to fetch slots');
      }
      return response.json();
    },
  });

  useEffect(() => {
    toast({
      title: t('slots.welcome.title'),
      description: t('slots.welcome.description'),
      duration: 5000,
    });
  }, [toast, t]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 space-y-8">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-8 w-1/2" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-[300px] rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to load slots. Please try again later.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

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
          <TabsList className="bg-background border border-input overflow-x-auto flex whitespace-nowrap">
            <TabsTrigger value="dashboard" className="min-w-[120px]">
              {t('slots.tabs.dashboard')}
            </TabsTrigger>
            <TabsTrigger value="available" className="min-w-[120px]">
              {t('slots.tabs.available')}
            </TabsTrigger>
            {userType === 'kol' && (
              <TabsTrigger value="my-slots" className="min-w-[120px]">
                {t('slots.tabs.mySlots')}
              </TabsTrigger>
            )}
          </TabsList>

<TabsContent value="dashboard" className="space-y-4">
  <SlotDashboard />
</TabsContent>

<TabsContent value="available" className="space-y-4">
  <AvailableSlots />
</TabsContent>

{userType === 'kol' && (
  <TabsContent value="my-slots" className="space-y-4">
    <MySlots />
  </TabsContent>
)}

        </Tabs>
      </div>
    </div>
  );
};

export default Slots;
