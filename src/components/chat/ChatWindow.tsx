import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getUserType } from "@/utils/userTypeUtils";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ChatLabels } from "./ChatLabels";

interface Message {
  id: string;
  sender: string;
  senderType: string;
  content: string;
  timestamp: Date;
  type: "text" | "file";
  fileUrl?: string;
  fileName?: string;
}

export const ChatWindow = () => {
  const { toast } = useToast();
  const userType = getUserType();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "Kolerr Support",
      senderType: "support",
      content: "Welcome to Kolerr! How can we assist you today?",
      timestamp: new Date(),
      type: "text"
    }
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  const [selectedLabel, setSelectedLabel] = useState<string>("all");
  
  const labels = [
    { id: "all", name: "All Messages", color: "bg-gray-500" },
    { id: "campaign", name: "Campaign", color: "bg-kolerr-cyan" },
    { id: "contract", name: "Contract", color: "bg-kolerr-purple" },
    { id: "support", name: "Support", color: "bg-kolerr-orange" }
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: Date.now().toString(),
      sender: "You",
      senderType: userType,
      content: newMessage,
      timestamp: new Date(),
      type: "text"
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileMessage: Message = {
      id: Date.now().toString(),
      sender: "You",
      senderType: userType,
      content: "Sent a file",
      timestamp: new Date(),
      type: "file",
      fileName: file.name,
      fileUrl: URL.createObjectURL(file)
    };

    setMessages([...messages, fileMessage]);
    toast({
      title: "File uploaded",
      description: `${file.name} has been uploaded successfully.`
    });
  };

  return (
    <Card className="w-full h-[600px] flex flex-col">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Support Chat
        </CardTitle>
        <ChatLabels
          labels={labels}
          selectedLabel={selectedLabel}
          setSelectedLabel={setSelectedLabel}
        />
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4">
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} {...message} />
            ))}
          </div>
        </ScrollArea>
        <ChatInput
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleSendMessage={handleSendMessage}
          handleFileUpload={handleFileUpload}
        />
      </CardContent>
    </Card>
  );
};