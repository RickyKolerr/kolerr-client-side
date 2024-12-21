import { useLanguage } from "@/contexts/LanguageContext";

const StatsSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    { number: "10K+", label: t("stats.activeKols") },
    { number: "50M+", label: t("stats.totalReach") },
    { number: "1000+", label: t("stats.campaigns") },
    { number: "95%", label: t("stats.satisfaction") }
  ];

  return (
    <section className="bg-black/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan to-kolerr-purple bg-clip-text text-transparent mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;