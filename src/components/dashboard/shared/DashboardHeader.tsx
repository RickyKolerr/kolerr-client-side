import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
  onAIAssistant?: () => void;
  actionButton?: React.ReactNode;
}

export function DashboardHeader({ 
  title, 
  subtitle, 
  onAIAssistant,
  actionButton 
}: DashboardHeaderProps) {
  const { toast } = useToast();

  const handleAIAssistant = () => {
    if (onAIAssistant) {
      onAIAssistant();
    } else {
      toast({
        title: "AI Assistant",
        description: "How can I help you today?",
        duration: 5000,
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
    >
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-2">
          {subtitle}
        </p>
      </div>
      <div className="flex w-full sm:w-auto gap-2">
        <Button 
          onClick={handleAIAssistant}
          variant="outline"
          className="flex-1 sm:flex-none gap-2 h-10"
        >
          <Star className="h-4 w-4" />
          <span className="whitespace-nowrap">AI Assistant</span>
        </Button>
        {actionButton}
      </div>
    </motion.div>
  );
}