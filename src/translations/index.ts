import { commonTranslations } from './sections/common';
import { authTranslations } from './sections/auth';
import { landingTranslations } from './sections/landing';
import { featureTranslations } from './sections/features';
import { pricingTranslations } from './sections/pricing';

// Combine all translations
export const en = {
  ...commonTranslations,
  ...authTranslations,
  ...landingTranslations,
  ...featureTranslations,
  ...pricingTranslations,
} as const;

export const vi = {
  ...commonTranslations,
  ...authTranslations,
  ...landingTranslations,
  ...featureTranslations,
  ...pricingTranslations,
} as const;

// Create a type that includes all possible translation keys
export type TranslationKey = keyof typeof en;