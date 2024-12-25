import { ChatWindow } from "@/components/chat/ChatWindow";
import { ContractForm } from "@/components/contracts/ContractForm";
import { ContractHandleBar } from "@/components/contracts/ContractHandleBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";

const Communication = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent mb-4 sm:mb-8">
          {t('nav.communication')}
        </h1>
        
        <Tabs defaultValue="chat" className="w-full">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="chat" className="flex-1">Chat</TabsTrigger>
            <TabsTrigger value="contracts" className="flex-1">Contracts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat" className="mt-0">
            <ChatWindow />
          </TabsContent>
          
          <TabsContent value="contracts" className="mt-0 space-y-4">
            <ContractForm />
            <ContractHandleBar />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Communication;