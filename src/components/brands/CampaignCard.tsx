import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";
import { Campaign } from "@/types/campaign";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ManageSlotForm } from "./slots/ManageSlotForm";
import { motion, AnimatePresence } from "framer-motion";

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const totalSlots = campaign.slots?.length || 0;
  const filledSlots = campaign.slots?.filter(slot => slot.status === "Filled").length || 0;

  const campaignBackgrounds = {
    "Fashion": "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    "Tech": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    "Beauty": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    "default": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  };

  const backgroundImage = campaignBackgrounds[campaign.category as keyof typeof campaignBackgrounds] || campaignBackgrounds.default;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: { 
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const statsVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      layoutId={`campaign-${campaign.id}`}
    >
      <Card className="overflow-hidden glass-card">
        <motion.div 
          className="h-32 w-full bg-cover bg-center relative"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage})` 
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <CardHeader className="flex flex-col h-full">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <CardTitle className="text-lg font-semibold line-clamp-2 text-white">
                    {campaign.name}
                  </CardTitle>
                </motion.div>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                    {campaign.category}
                  </Badge>
                  <Badge
                    variant={campaign.status === "Active" ? "default" : "secondary"}
                    className={campaign.status === "Active" ? "bg-green-500" : ""}
                  >
                    {campaign.status}
                  </Badge>
                </motion.div>
              </div>
            </div>
          </CardHeader>
        </motion.div>
        <CardContent className="space-y-4 pt-4">
          <motion.div 
            className="flex items-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Calendar className="h-4 w-4" />
            <span>Deadline: {campaign.deadline}</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-between text-sm mb-2">
              <span>Campaign Progress</span>
              <span>{campaign.progress}%</span>
            </div>
            <Progress value={campaign.progress} className="h-2" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="text-center p-2 bg-background/50 backdrop-blur-sm rounded-lg"
              variants={statsVariants}
              whileHover="hover"
            >
              <p className="text-xs text-muted-foreground">Slots</p>
              <p className="font-semibold gradient-text">{`${filledSlots}/${totalSlots}`}</p>
            </motion.div>
            <motion.div 
              className="text-center p-2 bg-background/50 backdrop-blur-sm rounded-lg"
              variants={statsVariants}
              whileHover="hover"
            >
              <p className="text-xs text-muted-foreground">Budget</p>
              <p className="font-semibold gradient-text">{campaign.budget}</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button 
              variant="outline" 
              className="w-full gradient-border hover-scale"
              onClick={() => setIsFormOpen(true)}
            >
              <Users className="h-4 w-4 mr-2" />
              Manage Slots
            </Button>
          </motion.div>
        </CardContent>

        <AnimatePresence>
          {isFormOpen && (
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogContent className="max-w-3xl glass-card">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <ManageSlotForm 
                    campaignId={campaign.id}
                    onClose={() => setIsFormOpen(false)}
                  />
                </motion.div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};