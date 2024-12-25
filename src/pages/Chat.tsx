import { useState } from "react";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Archive, MessageCircle, Search, Users, Building2, Star, HeadphonesIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { getUserType } from "@/utils/userTypeUtils";
import { cn } from "@/lib/utils";

const Chat = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const userType = getUserType();

  const getConversationsByUserType = () => {
    switch (userType) {
      case 'brand':
        return [
          { id: "1", name: "Kolerr Support", type: "support", lastMessage: "How can we help you with your campaign?", unread: true, time: "2m ago" },
          { id: "2", name: "Beauty KOL Network", type: "kol", lastMessage: "Campaign proposal received", unread: true, time: "1h ago" },
          { id: "3", name: "Fashion Influencer Group", type: "kol", lastMessage: "Contract details updated", unread: false, time: "2h ago" },
        ];
      case 'agency':
        return [
          { id: "1", name: "Kolerr Support", type: "support", lastMessage: "Agency dashboard access granted", unread: true, time: "5m ago" },
          { id: "2", name: "Client Brand A", type: "brand", lastMessage: "Campaign metrics updated", unread: true, time: "30m ago" },
          { id: "3", name: "Lifestyle KOLs", type: "kol", lastMessage: "New collaboration request", unread: false, time: "1h ago" },
        ];
      case 'kol':
        return [
          { id: "1", name: "Kolerr Support", type: "support", lastMessage: "Your profile verification is complete", unread: true, time: "10m ago" },
          { id: "2", name: "Fashion Brand X", type: "brand", lastMessage: "New campaign opportunity", unread: true, time: "1h ago" },
          { id: "3", name: "Beauty Agency", type: "agency", lastMessage: "Partnership discussion", unread: false, time: "3h ago" },
        ];
      default:
        return [];
    }
  };

  const conversations = getConversationsByUserType();

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'support':
        return <HeadphonesIcon className="h-4 w-4 text-kolerr-cyan" />;
      case 'brand':
        return <Building2 className="h-4 w-4 text-kolerr-purple" />;
      case 'kol':
        return <Star className="h-4 w-4 text-kolerr-orange" />;
      case 'agency':
        return <Users className="h-4 w-4 text-kolerr-yellow" />;
      default:
        return <MessageCircle className="h-4 w-4" />;
    }
  };

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
                        className={cn(
                          "p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors",
                          activeChat === conv.id && "bg-accent"
                        )}
                        onClick={() => setActiveChat(conv.id)}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            {getTypeIcon(conv.type)}
                            <h3 className="font-medium">{conv.name}</h3>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {conv.time}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate pl-6">
                          {conv.lastMessage}
                        </p>
                        {conv.unread && (
                          <div className="flex justify-end">
                            <Badge
                              variant="default"
                              className="mt-2 bg-gradient-to-r from-kolerr-cyan to-kolerr-purple"
                            >
                              New
                            </Badge>
                          </div>
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