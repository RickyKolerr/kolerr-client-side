import { motion } from "framer-motion";

interface KOLCardMetricsProps {
  followers: string;
  engagement: string;
  completedCampaigns?: number;
  availability?: string;
}

export const KOLCardMetrics = ({ 
  followers, 
  engagement, 
  completedCampaigns, 
  availability 
}: KOLCardMetricsProps) => {
  return (
    <>
      <div className="mb-6 grid grid-cols-2 gap-4">
        <motion.div 
          className="rounded-lg bg-background/50 backdrop-blur-sm p-3 text-center hover-scale"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-sm text-muted-foreground">Followers</p>
          <p className="text-lg font-bold gradient-text">{followers}</p>
        </motion.div>
        <motion.div 
          className="rounded-lg bg-background/50 backdrop-blur-sm p-3 text-center hover-scale"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-sm text-muted-foreground">Engagement</p>
          <p className="text-lg font-bold gradient-text">{engagement}</p>
        </motion.div>
      </div>

      {completedCampaigns !== undefined && (
        <div className="mb-4 text-center">
          <p className="text-sm text-muted-foreground">
            {completedCampaigns} Campaigns Completed
          </p>
        </div>
      )}

      {availability && (
        <div className="mb-4 text-center">
          <p className="text-sm text-muted-foreground">
            Available: {availability}
          </p>
        </div>
      )}
    </>
  );
};