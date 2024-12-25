import { navigationVi } from './modules/navigation.vi';
import { authVi } from './modules/auth.vi';
import { landingVi } from './modules/landing.vi';

export const vi = {
  ...navigationVi,
  ...authVi,
  ...landingVi,
  // Landing page translations
  'landing.hero.title': 'Nền tảng tiếp thị KOL hàng đầu Việt Nam',
  'landing.hero.subtitle': 'Kết nối doanh nghiệp với KOL phù hợp nhất thông qua công nghệ AI',
  'landing.hero.cta.start': 'Bắt đầu ngay',
  'landing.hero.cta.demo': 'Xem trình diễn',
  'landing.hero.stats.kols': 'KOL đã xác thực',
  'landing.hero.stats.reach': 'Lượt tiếp cận',
  'landing.hero.stats.campaigns': 'Chiến dịch thành công',
  'landing.hero.stats.success': 'Tỷ lệ thành công',
} as const;