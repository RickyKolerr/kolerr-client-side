import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  User, 
  Paperclip,
  Image as ImageIcon,
  File,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  type: "text" | "file";
  fileUrl?: string;
  fileName?: string;
}

interface ChatLabel {
  id: string;
  name: string;
  color: string;
}

export const ChatWindow = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "John Doe",
      content: "Hi, I'm interested in collaborating!",
      timestamp: new Date(),
      type: "text"
    },
    {
      id: "2",
      sender: "Jane Smith",
      content: "Great! Let's discuss the details.",
      timestamp: new Date(),
      type: "text"
    }
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  const [selectedLabel, setSelectedLabel] = useState<string>("all");
  
  const labels: ChatLabel[] = [
    { id: "all", name: "All Messages", color: "bg-gray-500" },
    { id: "campaign", name: "Campaign", color: "bg-blue-500" },
    { id: "contract", name: "Contract", color: "bg-green-500" },
    { id: "invitation", name: "Invitation", color: "bg-purple-500" }
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: Date.now().toString(),
      sender: "You",
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

    // In a real app, you would upload the file to a server here
    const fileMessage: Message = {
      id: Date.now().toString(),
      sender: "You",
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
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Chat
        </CardTitle>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {labels.map((label) => (
            <Badge
              key={label.id}
              variant={selectedLabel === label.id ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedLabel(label.id)}
            >
              {label.name}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-2 ${
                  message.sender === "You" ? "flex-row-reverse" : ""
                }`}
              >
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "You"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm font-medium mb-1">{message.sender}</p>
                  {message.type === "text" ? (
                    <p className="text-sm">{message.content}</p>
                  ) : (
                    <div className="flex items-center gap-2">
                      <File className="h-4 w-4" />
                      <a 
                        href={message.fileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm underline"
                      >
                        {message.fileName}
                      </a>
                    </div>
                  )}
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex gap-2 mt-4">
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <Paperclip className="h-4 w-4" />
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleFileUpload}
              />
            </Button>
            <Button onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};