import { ChatWindow } from "@/components/chat/ChatWindow";
import { ContractForm } from "@/components/contracts/ContractForm";
import { ContractHandleBar } from "@/components/contracts/ContractHandleBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const Communication = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  // Show a welcome toast when the component mounts
  React.useEffect(() => {
    toast({
      title: "Welcome to Chat & Docs",
      description: "Connect and manage your documents in one place.",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent mb-4 sm:mb-8">
          {t('nav.communication')}
        </h1>
        
        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="w-full mb-4 overflow-x-auto flex-nowrap">
            <TabsTrigger value="chat" className="flex-1 min-w-[120px]">
              Chat
            </TabsTrigger>
            <TabsTrigger value="docs" className="flex-1 min-w-[120px]">
              Documents
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat" className="mt-0">
            <ChatWindow />
          </TabsContent>
          
          <TabsContent value="docs" className="mt-0 space-y-4">
            <ContractForm />
            <ContractHandleBar />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Communication;