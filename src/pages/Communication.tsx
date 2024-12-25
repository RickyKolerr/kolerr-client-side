import { useEffect } from "react";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { ContractForm } from "@/components/contracts/ContractForm";
import { ContractHandleBar } from "@/components/contracts/ContractHandleBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const Communication = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Welcome to Chat & Docs",
      description: "Connect and manage your documents in one place.",
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-4 sm:py-8 space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl sm:text-4xl font-bold gradient-text">
            {t('nav.communication')}
          </h1>
          <p className="text-muted-foreground">
            Manage your conversations and documents efficiently
          </p>
        </div>
        
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-0">
            <Tabs defaultValue="chat" className="w-full">
              <TabsList className="w-full mb-4 grid grid-cols-2 gap-4 bg-transparent h-auto p-0">
                <TabsTrigger 
                  value="chat" 
                  className="gradient-border relative data-[state=active]:bg-background data-[state=active]:text-foreground px-8 py-3"
                >
                  Chat
                </TabsTrigger>
                <TabsTrigger 
                  value="docs" 
                  className="gradient-border relative data-[state=active]:bg-background data-[state=active]:text-foreground px-8 py-3"
                >
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Communication;