import { createContext, useContext, useState } from "react";

type Language = "en" | "vi";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.campaigns": "Campaigns",
    "nav.slots": "Slots",
    "nav.kols": "KOLs",
    "nav.brands": "Brands",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "auth.signin": "Sign In",
    "auth.signup": "Sign Up",

    // Hero Section
    "hero.title": "Connect with Top KOLs",
    "hero.subtitle": "Find and collaborate with the most influential Key Opinion Leaders for your brand campaigns",
    "hero.getStarted": "Get Started",
    "hero.learnMore": "Learn More",
    "hero.searchPlaceholder": "Search for KOLs by Name, Industry, or Platform",

    // Features Section
    "features.title": "Why Choose Kolerr?",
    "features.premiumKols": "Premium KOLs",
    "features.premiumKolsDesc": "Access to Vietnam's top influencers across all major platforms",
    "features.analytics": "Real-Time Analytics",
    "features.analyticsDesc": "Track campaign performance with detailed metrics and insights",
    "features.verified": "Verified Profiles",
    "features.verifiedDesc": "All KOLs are verified for authenticity and engagement",
    "features.safety": "Brand Safety",
    "features.safetyDesc": "Advanced content monitoring and brand safety measures",

    // How It Works
    "howItWorks.title": "How Kolerr Works",
    "howItWorks.search.title": "Search for KOLs",
    "howItWorks.search.desc": "Easily search and discover KOLs based on platform, industry, and audience.",
    "howItWorks.ai.title": "AI Matching",
    "howItWorks.ai.desc": "Let our AI recommend the best matches for your campaign, tailored to your needs.",
    "howItWorks.collab.title": "Real-Time Collaboration",
    "howItWorks.collab.desc": "Manage campaigns in real-time and track KOL performance for better results.",

    // Stats
    "stats.activeKols": "Active KOLs",
    "stats.totalReach": "Total Reach",
    "stats.campaigns": "Successful Campaigns",
    "stats.satisfaction": "Client Satisfaction",

    // Benefits
    "benefits.title": "Benefits for Brands",
    "benefits.access": "Access to verified top-tier KOLs",
    "benefits.ai": "AI-powered matching algorithm",
    "benefits.tracking": "Real-time campaign tracking",
    "benefits.analytics": "Detailed analytics and reporting",
    "benefits.safety": "Brand safety monitoring",
    "benefits.support": "Dedicated support team",

    // CTA Section
    "cta.title": "Ready to Start Your Campaign?",
    "cta.subtitle": "Join thousands of successful brands and KOLs on Kolerr. Start your journey today and elevate your brand's presence.",
    "cta.button": "Start Your Campaign Today",

    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.about": "About Us",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.careers": "Careers",
    "footer.features": "Features",
    "footer.forKols": "For KOLs",
    "footer.forBrands": "For Brands",
    "footer.pricing": "Pricing",
    "footer.blog": "Blog",
    "footer.contact": "Contact",
    "footer.support": "Support",
    "footer.sales": "Sales",
    "footer.press": "Press",
    "footer.followUs": "Follow Us",
    "footer.copyright": "© 2024 Kolerr. All rights reserved.",

    // Campaigns
    "campaigns.title": "Campaign Dashboard",
    "campaigns.subtitle": "Monitor and manage your active campaigns",
    "campaigns.metrics": "Campaign Analytics",
    "campaigns.reach": "Total Reach",
    "campaigns.engagement": "Engagement Rate",
    "campaigns.shares": "Shares",
    "campaigns.conversion": "Conversion Rate",

    // KOLs
    "kols.title": "Discover Top KOLs",
    "kols.subtitle": "Connect with Vietnam's most influential content creators",
    "kols.search": "Search KOLs...",
    "kols.filter": "Filter",
    "kols.sort": "Sort by",
    "kols.followers": "Followers",
    "kols.engagement": "Engagement",
    "kols.details": "View Details",

    // Contact
    "contact.title": "Get in Touch",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.subject": "Subject",
    "contact.message": "Your Message",
    "contact.send": "Send Message",
    "contact.visit": "Visit Us",
    "contact.emailUs": "Email Us",
    "contact.callUs": "Call Us",

    // Auth
    "auth.login.title": "Welcome back",
    "auth.login.subtitle": "Enter your credentials to access your account",
    "auth.login.email": "Email",
    "auth.login.password": "Password",
    "auth.login.forgot": "Forgot your password?",
    "auth.login.noAccount": "Don't have an account?",
    "auth.register.title": "Create an Account",
    "auth.register.subtitle": "Join our community of brands and influencers",
  },
  vi: {
    // Navigation
    "nav.home": "Trang chủ",
    "nav.campaigns": "Chiến dịch",
    "nav.slots": "Vị trí",
    "nav.kols": "KOLs",
    "nav.brands": "Thương hiệu",
    "nav.pricing": "Bảng giá",
    "nav.contact": "Liên hệ",
    "auth.signin": "Đăng nhập",
    "auth.signup": "Đăng ký",

    // Hero Section
    "hero.title": "Kết nối với KOLs Hàng đầu",
    "hero.subtitle": "Tìm kiếm và hợp tác với những Người có Tầm ảnh hưởng lớn nhất cho chiến dịch thương hiệu của bạn",
    "hero.getStarted": "Bắt đầu ngay",
    "hero.learnMore": "Tìm hiểu thêm",
    "hero.searchPlaceholder": "Tìm KOLs theo Tên, Ngành nghề hoặc Nền tảng",

    // Features Section
    "features.title": "Tại sao chọn Kolerr?",
    "features.premiumKols": "KOLs Cao cấp",
    "features.premiumKolsDesc": "Tiếp cận KOLs hàng đầu Việt Nam trên mọi nền tảng",
    "features.analytics": "Phân tích Thời gian thực",
    "features.analyticsDesc": "Theo dõi hiệu suất chiến dịch với số liệu chi tiết",
    "features.verified": "Hồ sơ Đã xác minh",
    "features.verifiedDesc": "Mọi KOL đều được xác minh về tính xác thực",
    "features.safety": "An toàn Thương hiệu",
    "features.safetyDesc": "Giám sát nội dung và đảm bảo an toàn thương hiệu",

    // How It Works
    "howItWorks.title": "Kolerr Hoạt động Thế nào",
    "howItWorks.search.title": "Tìm kiếm KOLs",
    "howItWorks.search.desc": "Dễ dàng tìm kiếm KOLs dựa trên nền tảng, ngành nghề và đối tượng.",
    "howItWorks.ai.title": "Kết nối AI",
    "howItWorks.ai.desc": "Để AI đề xuất những KOL phù hợp nhất cho chiến dịch của bạn.",
    "howItWorks.collab.title": "Hợp tác Thời gian thực",
    "howItWorks.collab.desc": "Quản lý chiến dịch và theo dõi hiệu suất KOL trong thời gian thực.",

    // Stats
    "stats.activeKols": "KOLs Đang hoạt động",
    "stats.totalReach": "Tổng Tiếp cận",
    "stats.campaigns": "Chiến dịch Thành công",
    "stats.satisfaction": "Sự hài lòng",

    // Benefits
    "benefits.title": "Lợi ích cho Thương hiệu",
    "benefits.access": "Tiếp cận KOLs hàng đầu đã xác minh",
    "benefits.ai": "Thuật toán kết nối AI",
    "benefits.tracking": "Theo dõi chiến dịch thời gian thực",
    "benefits.analytics": "Phân tích và báo cáo chi tiết",
    "benefits.safety": "Giám sát an toàn thương hiệu",
    "benefits.support": "Đội ngũ hỗ trợ tận tâm",

    // CTA Section
    "cta.title": "Sẵn sàng Bắt đầu Chiến dịch?",
    "cta.subtitle": "Tham gia cùng hàng nghìn thương hiệu và KOL thành công trên Kolerr. Bắt đầu hành trình của bạn ngay hôm nay.",
    "cta.button": "Bắt đầu Chiến dịch Ngay",

    // Footer
    "footer.quickLinks": "Liên kết Nhanh",
    "footer.about": "Về chúng tôi",
    "footer.privacy": "Chính sách Bảo mật",
    "footer.terms": "Điều khoản Dịch vụ",
    "footer.careers": "Tuyển dụng",
    "footer.features": "Tính năng",
    "footer.forKols": "Dành cho KOLs",
    "footer.forBrands": "Dành cho Thương hiệu",
    "footer.pricing": "Bảng giá",
    "footer.blog": "Blog",
    "footer.contact": "Liên hệ",
    "footer.support": "Hỗ trợ",
    "footer.sales": "Kinh doanh",
    "footer.press": "Báo chí",
    "footer.followUs": "Theo dõi",
    "footer.copyright": "© 2024 Kolerr. Bảo lưu mọi quyền.",

    // Campaigns
    "campaigns.title": "Bảng điều khiển Chiến dịch",
    "campaigns.subtitle": "Theo dõi và quản lý chiến dịch đang hoạt động",
    "campaigns.metrics": "Phân tích Chiến dịch",
    "campaigns.reach": "Tổng Tiếp cận",
    "campaigns.engagement": "Tỷ lệ Tương tác",
    "campaigns.shares": "Chia sẻ",
    "campaigns.conversion": "Tỷ lệ Chuyển đổi",

    // KOLs
    "kols.title": "Khám phá KOLs Hàng đầu",
    "kols.subtitle": "Kết nối với những người sáng tạo nội dung có ảnh hưởng nhất Việt Nam",
    "kols.search": "Tìm KOLs...",
    "kols.filter": "Lọc",
    "kols.sort": "Sắp xếp theo",
    "kols.followers": "Người theo dõi",
    "kols.engagement": "Tương tác",
    "kols.details": "Xem Chi tiết",

    // Contact
    "contact.title": "Liên hệ",
    "contact.name": "Tên của bạn",
    "contact.email": "Email của bạn",
    "contact.subject": "Chủ đề",
    "contact.message": "Tin nhắn của bạn",
    "contact.send": "Gửi Tin nhắn",
    "contact.visit": "Địa chỉ",
    "contact.emailUs": "Email",
    "contact.callUs": "Điện thoại",

    // Auth
    "auth.login.title": "Chào mừng trở lại",
    "auth.login.subtitle": "Nhập thông tin đăng nhập của bạn",
    "auth.login.email": "Email",
    "auth.login.password": "Mật khẩu",
    "auth.login.forgot": "Quên mật khẩu?",
    "auth.login.noAccount": "Chưa có tài khoản?",
    "auth.register.title": "Tạo Tài khoản",
    "auth.register.subtitle": "Tham gia cộng đồng thương hiệu và người có ảnh hưởng của chúng tôi",
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