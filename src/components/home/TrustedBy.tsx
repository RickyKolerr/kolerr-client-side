import { useLanguage } from "@/contexts/LanguageContext";

const TrustedBy = () => {
  const { t } = useLanguage();
  
  const brands = [
    "Shopee", "Lazada", "Tiki", "VinFast", "MoMo", "Grab Vietnam", 
    "The Coffee House", "Highlands Coffee"
  ];

  return (
    <section className="py-12 bg-black/5">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm uppercase tracking-wider text-foreground/60 mb-8">
          Trusted by Leading Brands in Vietnam
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {brands.map((brand, index) => (
            <span 
              key={index}
              className="text-foreground/40 text-lg font-medium hover:text-foreground/60 transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;