import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          {t("cta.title")}
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          {t("cta.subtitle")}
        </p>
        <Link to="/auth/register">
          <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white px-8 py-6 text-lg h-auto hover:opacity-90 hover:scale-105 transition-all">
            {t("cta.button")} <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;