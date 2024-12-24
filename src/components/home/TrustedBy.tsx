import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const TrustedBy = () => {
  const { t } = useLanguage();
  
  const brands = [
    {
      name: "Shopee",
      url: "https://shopee.vn",
    },
    {
      name: "Lazada",
      url: "https://www.lazada.vn",
    },
    {
      name: "Tiki",
      url: "https://tiki.vn",
    },
    {
      name: "VinFast",
      url: "https://vinfastauto.com",
    },
    {
      name: "MoMo",
      url: "https://momo.vn",
    },
    {
      name: "Grab Vietnam",
      url: "https://grab.com/vn",
    },
    {
      name: "The Coffee House",
      url: "https://thecoffeehouse.com",
    },
    {
      name: "Highlands Coffee",
      url: "https://www.highlandscoffee.com.vn",
    },
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
            <motion.a
              key={index}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="group relative flex items-center gap-2 text-foreground/40 text-lg font-medium 
                       hover:text-foreground/90 transition-all duration-300
                       hover:scale-105 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {brand.name}
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange 
                           group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;