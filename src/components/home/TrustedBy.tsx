import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const TrustedBy = () => {
  const { t } = useLanguage();
  
  const brands = [
    "Shopee", "Lazada", "Tiki", "VinFast", "MoMo", "Grab Vietnam", 
    "The Coffee House", "Highlands Coffee"
  ];

  return (
    <section className="relative py-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">
            Trusted by Industry Leaders
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Join the growing network of successful brands leveraging our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm
                            hover:bg-white/10 hover:border-kolerr-cyan/30 transition-all duration-300
                            hover:shadow-[0_0_30px_rgba(0,245,255,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-br from-kolerr-cyan/0 to-kolerr-purple/0 
                              group-hover:from-kolerr-cyan/5 group-hover:to-kolerr-purple/5 
                              rounded-xl transition-all duration-300" />
                <h3 className="relative text-lg font-medium text-center text-foreground/70 
                             group-hover:text-foreground transition-colors duration-300">
                  {brand}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-foreground/40">
            And many more companies trust Kolerr for their influencer marketing needs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;