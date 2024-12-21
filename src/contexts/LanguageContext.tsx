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
    "hero.title": "Connect with Top KOLs",
    "hero.subtitle": "Find and collaborate with the most influential Key Opinion Leaders for your brand campaigns",
    "hero.getStarted": "Get Started",
    "hero.learnMore": "Learn More",
    "stats.kols": "Active KOLs",
    "stats.reach": "Total Reach",
    "stats.brands": "Partner Brands",
    "showcase.title": "Featured Key Opinion Leaders",
    "showcase.search": "Search KOLs...",
    "showcase.sort": "Sort by",
    "showcase.partnership": "Partnership Details",
    "cta.title": "Ready to Grow Your Brand?",
    "cta.subtitle": "Join thousands of successful brands leveraging the power of KOL marketing",
    "cta.button": "Start Now"
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
    "hero.title": "Kết nối với KOLs Hàng đầu",
    "hero.subtitle": "Tìm kiếm và hợp tác với những Người có Tầm ảnh hưởng lớn nhất cho chiến dịch thương hiệu của bạn",
    "hero.getStarted": "Bắt đầu ngay",
    "hero.learnMore": "Tìm hiểu thêm",
    "stats.kols": "KOLs Đang hoạt động",
    "stats.reach": "Tổng Tiếp cận",
    "stats.brands": "Thương hiệu Đối tác",
    "showcase.title": "KOLs Nổi bật",
    "showcase.search": "Tìm kiếm KOLs...",
    "showcase.sort": "Sắp xếp theo",
    "showcase.partnership": "Chi tiết Hợp tác",
    "cta.title": "Sẵn sàng Phát triển Thương hiệu?",
    "cta.subtitle": "Tham gia cùng hàng nghìn thương hiệu thành công tận dụng sức mạnh của tiếp thị KOL",
    "cta.button": "Bắt đầu ngay"
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