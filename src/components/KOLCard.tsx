import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { KOLCardHeader } from "./kol-card/KOLCardHeader";
import { KOLCardMetrics } from "./kol-card/KOLCardMetrics";
import { KOLCardSocial } from "./kol-card/KOLCardSocial";
import { KOLCardActions } from "./kol-card/KOLCardActions";

interface SocialLink {
  platform: string;
  url: string;
}

interface KOLCardProps {
  id: string;
  name: string;
  image: string;
  followers: string;
  engagement: string;
  expertise?: string;
  location?: string;
  availability?: string;
  rating?: number;
  completedCampaigns?: number;
  socialLinks?: SocialLink[];
}

const KOLCard = ({ 
  id,
  name, 
  image, 
  followers, 
  engagement, 
  expertise,
  location,
  availability,
  completedCampaigns,
  socialLinks 
}: KOLCardProps) => {
  const navigate = useNavigate();
  
  const handleViewProfile = () => {
    navigate(`/kols/${id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 card-hover animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="relative p-6">
          <KOLCardHeader 
            name={name}
            image={image}
            expertise={expertise}
            location={location}
          />

          <KOLCardMetrics 
            followers={followers}
            engagement={engagement}
            completedCampaigns={completedCampaigns}
            availability={availability}
          />

          <KOLCardSocial socialLinks={socialLinks} />

          <KOLCardActions onViewProfile={handleViewProfile} />
        </div>
      </Card>
    </motion.div>
  );
};

export default KOLCard;