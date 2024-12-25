import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BenefitsSkeleton } from "@/components/ui/skeleton-loader";
import { useQuery } from "@tanstack/react-query";

const BenefitsSection = () => {
  const { t } = useLanguage();

  const { data: benefits, isLoading } = useQuery({
    queryKey: ['benefits'],
    queryFn: async () => {
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return [
        t("benefits.access"),
        t("benefits.ai"),
        t("benefits.tracking"),
        t("benefits.analytics"),
        t("benefits.safety"),
        t("benefits.support")
      ];
    }
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
            {t("benefits.title")}
          </h2>
          <BenefitsSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          {t("benefits.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits?.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
              <CheckCircle2 className="text-kolerr-cyan flex-shrink-0" />
              <span className="text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;