import { createContext, useContext, useState } from "react";

type Language = "en" | "vi";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    "nav.home": "Home",
    "nav.campaigns": "Campaigns",
    "nav.slots": "Slots",
    "nav.kols": "KOLs",
    "nav.brands": "Brands",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "auth.signin": "Sign In",
    "auth.signup": "Sign Up",
    "showcase.title": "Key Opinion Leaders",
    "showcase.search": "Search KOLs...",
    "showcase.sort": "Sort by",
    "showcase.partnership": "Partnership Details",
  },
  vi: {
    "nav.home": "Trang chủ",
    "nav.campaigns": "Chiến dịch",
    "nav.slots": "Vị trí",
    "nav.kols": "KOLs",
    "nav.brands": "Thương hiệu",
    "nav.pricing": "Bảng giá",
    "nav.contact": "Liên hệ",
    "auth.signin": "Đăng nhập",
    "auth.signup": "Đăng ký",
    "showcase.title": "Người có tầm ảnh hưởng",
    "showcase.search": "Tìm kiếm KOLs...",
    "showcase.sort": "Sắp xếp theo",
    "showcase.partnership": "Chi tiết hợp tác",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("language") as Language) || "en";
    }
    return "en";
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "vi" : "en";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
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