import { navigationTranslations } from './modules/navigation';
import { authTranslations } from './modules/auth';
import { landingTranslations } from './modules/landing';

// Merge all translations
export const translations = {
  en: {
    ...navigationTranslations.en,
    ...authTranslations.en,
    ...landingTranslations.en,
  },
  vi: {
    ...navigationTranslations.vi,
    ...authTranslations.vi,
    ...landingTranslations.vi,
  }
} as const;

// Update the TranslationKey type to include all possible translation keys
export type TranslationKey = keyof typeof translations.en;