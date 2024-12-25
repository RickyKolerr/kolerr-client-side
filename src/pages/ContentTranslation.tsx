import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";

const ContentTranslation = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      toast({
        title: t("translation.error.empty"),
        description: t("translation.error.emptyDesc"),
        variant: "destructive",
      });
      return;
    }

    setIsTranslating(true);
    // Simulated translation delay - replace with actual translation API
    setTimeout(() => {
      setTranslatedText(inputText);
      setIsTranslating(false);
      toast({
        title: t("translation.success"),
        description: t("translation.successDesc"),
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent">
          {t("translation.title")}
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              {language === "en" ? "English" : "Tiếng Việt"}
            </h2>
            <Textarea
              placeholder={t("translation.inputPlaceholder")}
              className="h-64 resize-none"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              {language === "en" ? "Tiếng Việt" : "English"}
            </h2>
            <Textarea
              placeholder={t("translation.outputPlaceholder")}
              className="h-64 resize-none"
              value={translatedText}
              readOnly
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            onClick={handleTranslate}
            disabled={isTranslating}
            className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange"
          >
            {isTranslating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {t("translation.button")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentTranslation;