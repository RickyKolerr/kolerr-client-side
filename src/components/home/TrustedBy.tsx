import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const TrustedBy = () => {
  const { t } = useLanguage();
  
  const brands = [
    "Shopee", "Lazada", "Tiki", "VinFast", "MoMo", "Grab Vietnam", 
    "The Coffee House", "Highlands Coffee"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" />
      
      {/* Gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-kolerr-cyan/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg font-medium tracking-wider gradient-text mb-12"
        >
          TRUSTED BY LEADING BRANDS IN VIETNAM
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.2)",
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-kolerr-cyan/0 via-kolerr-purple/0 to-kolerr-orange/0 
                            group-hover:from-kolerr-cyan/10 group-hover:via-kolerr-purple/10 group-hover:to-kolerr-orange/10 
                            rounded-lg transition-all duration-300" />
              
              {/* Glass card effect */}
              <div className="relative px-6 py-3 rounded-lg glass-effect">
                <span className="text-lg font-medium text-foreground/60 group-hover:text-foreground/90 transition-colors duration-300">
                  {brand}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-kolerr-orange/50 to-transparent" />
    </section>
  );
};

export default TrustedBy;