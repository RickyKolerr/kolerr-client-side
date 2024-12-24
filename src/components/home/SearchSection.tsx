import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSearch = () => {
    // This would be replaced with actual search logic when connected to backend
    if (!searchQuery.trim()) {
      toast({
        title: "Please enter a search term",
        description: "Enter keywords to search for KOLs or slots",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Registration required",
      description: "Please register or login to start searching",
      action: (
        <Link to="/auth/register">
          <Button variant="outline" size="sm">
            Register Now
          </Button>
        </Link>
      ),
    });
  };

  return (
    <section className="py-16 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
              {t('search.title') || 'Find Your Perfect Match'}
            </h2>
            <p className="text-muted-foreground">
              {t('search.subtitle') || 'Search through thousands of KOLs and available slots'}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t('search.placeholder') || 'Search KOLs or slots...'}
                className="pl-10 bg-white/10 border-gray-700 focus:border-kolerr-cyan transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              onClick={handleSearch}
              className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange hover:opacity-90 transition-all"
            >
              {t('search.button') || 'Search Now'}
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="font-semibold">Free Plan</div>
              <div className="text-muted-foreground">5 searches/month</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="font-semibold">Basic Plan</div>
              <div className="text-muted-foreground">50 searches/month</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="font-semibold">Pro Plan</div>
              <div className="text-muted-foreground">Unlimited searches</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="font-semibold">Enterprise</div>
              <div className="text-muted-foreground">Custom limits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;