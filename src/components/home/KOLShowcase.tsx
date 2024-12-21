import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const KOLShowcase = () => {
  const { t } = useLanguage();
  
  const kols = [
    {
      name: "Alex Johnson",
      image: "https://i.pravatar.cc/150?img=1",
      followers: "1.2M",
      engagement: "8.5%",
    },
    {
      name: "Sarah Lee",
      image: "https://i.pravatar.cc/150?img=5",
      followers: "980K",
      engagement: "7.2%",
    },
    {
      name: "Michael Brown",
      image: "https://i.pravatar.cc/150?img=8",
      followers: "1.5M",
      engagement: "9.1%",
    },
  ];

  return (
    <section className="py-16 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent mb-4 md:mb-0 hover:scale-105 transition-transform">
            {t('showcase.title')}
          </h2>
          <div className="flex w-full md:w-auto gap-4">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <Input
                type="text"
                placeholder={t('showcase.search')}
                className="pl-10 bg-white/10 text-foreground border-gray-700 hover:border-kolerr-cyan transition-colors"
              />
            </div>
            <select className="bg-white/10 text-foreground border-gray-700 rounded-md px-4 py-2 hover:border-kolerr-cyan transition-colors">
              <option value="popularity">{t('showcase.sort')} Popularity</option>
              <option value="followers">{t('showcase.sort')} Followers</option>
              <option value="engagement">{t('showcase.sort')} Engagement</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kols.map((kol) => (
            <Card 
              key={kol.name} 
              className="overflow-hidden bg-card text-card-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,245,255,0.3)] dark:hover:shadow-[0_0_30px_rgba(156,39,176,0.3)]"
            >
              <div className="p-6 text-center">
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full ring-2 ring-kolerr-cyan/30 hover:ring-kolerr-purple/50 transition-all duration-300">
                  <img
                    src={kol.image}
                    alt={kol.name}
                    className="h-full w-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-kolerr-cyan transition-colors">
                  {kol.name}
                </h3>
                <div className="space-y-2 text-sm text-foreground/80 mb-4">
                  <p>Followers: {kol.followers}</p>
                  <p>Engagement: {kol.engagement}</p>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white 
                           hover:opacity-90 hover:scale-105 transition-all duration-300 
                           hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] dark:hover:shadow-[0_0_20px_rgba(156,39,176,0.5)]"
                >
                  {t('showcase.partnership')}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KOLShowcase;