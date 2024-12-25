import { navigationVi } from './modules/navigation.vi';
import { authVi } from './modules/auth.vi';

export const vi = {
  ...navigationVi,
  ...authVi,

  // Hero Section
  "landing.hero.title": "Kết nối với KOLs hàng đầu Việt Nam thông qua AI",
  "landing.hero.subtitle": "Khởi chạy chiến dịch thành công với phân tích dữ liệu và thống kê thời gian thực. Tham gia cùng hàng nghìn thương hiệu và người có tầm ảnh hưởng đang phát triển với Kolerr.",
  "landing.hero.cta.start": "Dùng thử miễn phí",
  "landing.hero.cta.demo": "Xem Demo",
  "landing.hero.stats.kols": "KOLs đang hoạt động",
  "landing.hero.stats.reach": "Tổng lượt tiếp cận",
  "landing.hero.stats.campaigns": "Chiến dịch",
  "landing.hero.stats.success": "Tỷ lệ thành công",

  // Features
  "features.title": "Tính năng mạnh mẽ cho sự phát triển",
  "features.ai": "Kết nối thông minh với AI",
  "features.ai.desc": "Kết nối với KOL hoặc thương hiệu phù hợp dựa trên dữ liệu thời gian thực và thuật toán AI.",
  "features.campaign": "Quản lý chiến dịch thời gian thực",
  "features.campaign.desc": "Theo dõi và tối ưu hóa chiến dịch của bạn với phân tích toàn diện và thông tin hiệu suất.",
  "features.booking": "Đặt lịch ngay lập tức",
  "features.booking.desc": "Đặt lịch chiến dịch ngay lập tức và quản lý lịch nội dung hiệu quả.",
  "features.analytics": "Phân tích thông minh",
  "features.analytics.desc": "Đưa ra quyết định dựa trên dữ liệu với phân tích nâng cao và theo dõi hiệu suất.",

  // Stats
  "stats.activeKols": "KOLs đang hoạt động",
  "stats.totalReach": "Tổng lượt tiếp cận",
  "stats.campaigns": "Chiến dịch thành công",
  "stats.satisfaction": "Sự hài lòng của khách hàng",

  // Benefits
  "benefits.title": "Tại sao chọn Kolerr?",
  "benefits.access": "Tiếp cận KOLs hàng đầu đã xác thực",
  "benefits.ai": "Thuật toán kết nối bằng AI",
  "benefits.tracking": "Theo dõi chiến dịch thời gian thực",
  "benefits.analytics": "Phân tích và báo cáo chi tiết",
  "benefits.safety": "Giám sát an toàn thương hiệu",
  "benefits.support": "Đội ngũ hỗ trợ tận tâm",

  // CTA
  "cta.title": "Sẵn sàng thay đổi tầm ảnh hưởng của bạn?",
  "cta.subtitle": "Tham gia cùng hàng nghìn thương hiệu và KOLs thành công trên Kolerr. Bắt đầu hành trình của bạn ngay hôm nay.",
  "cta.button": "Bắt đầu ngay",

  // Landing Page
  "landing.trusted.title": "Được tin dùng bởi các thương hiệu hàng đầu",

  // Search Section
  "search.title": "Tìm kiếm KOL phù hợp",
  "search.subtitle": "Tìm kiếm trong hàng nghìn KOL đã xác thực và các slot chiến dịch có sẵn",
  "search.placeholder": "Tìm kiếm theo tên, danh mục hoặc nền tảng...",
  "search.button": "Tìm kiếm ngay",

  // Pricing Section
  "pricing.title": "Chọn gói phù hợp với bạn",
  "pricing.subtitle": "Giải pháp linh hoạt cho mọi nhu cầu marketing của bạn",
  "pricing.monthly": "Thanh toán hàng tháng",
  "pricing.annual": "Thanh toán hàng năm",
  "pricing.getStarted": "Bắt đầu",
  "pricing.recommended": "Phổ biến nhất",
  "pricing.custom": "Tùy chỉnh",
  "pricing.contactUs": "Liên hệ",
  "pricing.perMonth": "mỗi tháng",
  "pricing.perYear": "mỗi năm",
  "pricing.savePercent": "Tiết kiệm {percent}%",
  "pricing.searchCredits": "lượt tìm kiếm"
} as const;