import { navigationVi } from './modules/navigation.vi';
import { authVi } from './modules/auth.vi';
import { landingVi } from './modules/landing.vi';

export const vi = {
  ...navigationVi,
  ...authVi,
  ...landingVi,
  // Landing page translations
  'landing.hero.title': 'Nền tảng tiếp thị KOL hàng đầu',
  'landing.hero.subtitle': 'Kết nối thương hiệu với những người có tầm ảnh hưởng phù hợp nhất',
  'landing.hero.cta.start': 'Bắt đầu ngay',
  'landing.hero.cta.demo': 'Xem demo',
  'landing.hero.stats.kols': 'KOLs đã xác minh',
  'landing.hero.stats.reach': 'Lượt tiếp cận',
  'landing.hero.stats.campaigns': 'Chiến dịch thành công',
  'landing.hero.stats.success': 'Tỷ lệ thành công',
  
  // Navigation translations
  'nav.dashboard': 'Bảng điều khiển',
  'nav.campaigns': 'Chiến dịch',
  'nav.slots': 'Vị trí',
  'nav.kols': 'KOLs',
  'nav.brands': 'Thương hiệu',
  'nav.pricing': 'Bảng giá',
  'nav.contact': 'Liên hệ',
  'nav.communication': 'Giao tiếp',
  
  // Auth translations
  'auth.signin': 'Đăng nhập',
  'auth.signup': 'Đăng ký',
} as const;