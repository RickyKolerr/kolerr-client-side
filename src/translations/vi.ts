import { commonTranslations } from './sections/common';
import { authTranslations } from './sections/auth';
import { landingTranslations } from './sections/landing';
import { featureTranslations } from './sections/features';
import { pricingTranslations } from './sections/pricing';

// Re-export all translations
export const vi = {
  ...commonTranslations,
  ...authTranslations,
  ...landingTranslations,
  ...featureTranslations,
  ...pricingTranslations,
} as const;