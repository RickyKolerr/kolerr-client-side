import { useState } from "react";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Archive, MessageCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const Chat = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const conversations = [
    { id: 1, name: "Support Team", lastMessage: "How can we help you today?", unread: true, time: "2m ago" },
    { id: 2, name: "Campaign #123", lastMessage: "Contract details updated", unread: false, time: "1h ago" },
    { id: 3, name: "Technical Support", lastMessage: "Issue resolved", unread: false, time: "2h ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[320px,1fr] gap-6">
          {/* Sidebar */}
          <Card className="p-4 h-[600px] flex flex-col">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="all" className="flex-1">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="all" className="flex-1">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  All
                </TabsTrigger>
                <TabsTrigger value="archived" className="flex-1">
                  <Archive className="h-4 w-4 mr-2" />
                  Archived
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="flex-1">
                <ScrollArea className="h-[450px]">
                  <div className="space-y-2">
                    {conversations.map((conv) => (
                      <div
                        key={conv.id}
                        className="p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-medium">{conv.name}</h3>
                          <span className="text-xs text-muted-foreground">
                            {conv.time}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {conv.lastMessage}
                        </p>
                        {conv.unread && (
                          <Badge
                            variant="default"
                            className="mt-2 bg-gradient-to-r from-kolerr-cyan to-kolerr-purple"
                          >
                            New
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="archived" className="flex-1">
                <div className="h-[450px] flex items-center justify-center text-muted-foreground">
                  No archived conversations
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Main Chat Area */}
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default Chat;