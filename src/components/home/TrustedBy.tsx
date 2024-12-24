import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const TrustedBy = () => {
  const { t } = useLanguage();
  
  const brands = [
    "Shopee", "Lazada", "Tiki", "VinFast", "MoMo", "Grab Vietnam", 
    "The Coffee House", "Highlands Coffee"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-background via-background/50 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm uppercase tracking-wider text-foreground/60 mb-8">
          {t("landing.trusted.title")}
        </h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {brands.map((brand, index) => (
            <motion.span 
              key={index}
              variants={item}
              className="text-foreground/40 text-lg font-medium 
                       hover:text-foreground/60 transition-colors
                       hover:scale-105 cursor-pointer"
            >
              {brand}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;