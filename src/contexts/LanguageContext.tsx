import { createContext, useContext, useState } from "react";
import { translations, TranslationKey } from "@/translations";

export type Language = "en" | "vi";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("language");
      return (stored === "en" || stored === "vi" ? stored : "en") as Language;
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    localStorage.setItem("language", lang);
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};