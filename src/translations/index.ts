import { navigationTranslations } from './modules/navigation';
import { authTranslations } from './modules/auth';
import { landingTranslations } from './modules/landing';
import { paymentTranslations } from './modules/payment';
import { benefitsTranslations } from './modules/benefits';
import { slotsTranslations } from './modules/slots';

// Merge all translations
export const translations = {
  en: {
    ...navigationTranslations.en,
    ...authTranslations.en,
    ...landingTranslations.en,
    ...paymentTranslations.en,
    ...benefitsTranslations.en,
    ...slotsTranslations.en,
  },
  vi: {
    ...navigationTranslations.vi,
    ...authTranslations.vi,
    ...landingTranslations.vi,
    ...paymentTranslations.vi,
    ...benefitsTranslations.vi,
    ...slotsTranslations.vi,
  }
} as const;

// Update the TranslationKey type to include all possible translation keys
export type TranslationKey = keyof typeof translations.en;