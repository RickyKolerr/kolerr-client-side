import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
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
    try {
      const stored = localStorage.getItem("language");
      return (stored === "en" || stored === "vi") ? stored : "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      document.documentElement.lang = language;
      localStorage.setItem("language", language);
    } catch (error) {
      console.error("Error setting language:", error);
    }
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "vi" : "en");
  }, [language, setLanguage]);

  const t = useCallback((key: TranslationKey): string => {
    return translations[language][key] || key;
  }, [language]);

  const value = React.useMemo(() => ({
    language,
    toggleLanguage,
    setLanguage,
    t,
  }), [language, toggleLanguage, setLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>
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