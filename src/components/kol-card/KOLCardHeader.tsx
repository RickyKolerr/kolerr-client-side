import { motion } from "framer-motion";

interface KOLCardHeaderProps {
  name: string;
  image: string;
  expertise?: string;
  location?: string;
}

export const KOLCardHeader = ({ name, image, expertise, location }: KOLCardHeaderProps) => {
  return (
    <div className="relative mb-6 flex items-center gap-4">
      <motion.div 
        className="relative h-20 w-20 overflow-hidden rounded-xl gradient-border"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" 
        />
      </motion.div>
      <div className="flex-1">
        <h3 className="text-xl font-bold gradient-text">{name}</h3>
        {expertise && (
          <p className="text-sm text-muted-foreground">{expertise}</p>
        )}
        {location && (
          <p className="text-sm text-muted-foreground mt-1">{location}</p>
        )}
      </div>
    </div>
  );
};