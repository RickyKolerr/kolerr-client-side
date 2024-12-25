import { getUserType } from "@/utils/userTypeUtils";
import { Building2, HeadphonesIcon, Star, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  id: string;
  sender: string;
  senderType: string;
  content: string;
  timestamp: Date;
  type: "text" | "file";
  fileUrl?: string;
  fileName?: string;
}

export const ChatMessage = ({
  sender,
  senderType,
  content,
  timestamp,
  type,
  fileUrl,
  fileName
}: ChatMessageProps) => {
  const currentUserType = getUserType();
  const isCurrentUser = sender === "You";

  const getSenderIcon = (type: string) => {
    switch (type) {
      case 'support':
        return <HeadphonesIcon className="h-4 w-4" />;
      case 'brand':
        return <Building2 className="h-4 w-4" />;
      case 'kol':
        return <Star className="h-4 w-4" />;
      case 'agency':
        return <Users className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "flex items-start gap-2 animate-fade-in",
        isCurrentUser ? "flex-row-reverse" : ""
      )}
    >
      <Avatar className="h-8 w-8">
        <AvatarImage src={`/avatars/${senderType}.png`} />
        <AvatarFallback className="bg-gradient-to-r from-kolerr-cyan to-kolerr-purple">
          {getSenderIcon(senderType)}
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "max-w-[80%] rounded-lg p-3",
          isCurrentUser
            ? "bg-gradient-to-r from-kolerr-cyan to-kolerr-purple text-white"
            : "bg-muted"
        )}
      >
        <p className="text-sm font-medium mb-1">{sender}</p>
        {type === "text" ? (
          <p className="text-sm">{content}</p>
        ) : (
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline flex items-center gap-2"
          >
            {fileName}
          </a>
        )}
        <p className="text-xs opacity-70 mt-1">
          {timestamp.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};