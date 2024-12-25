import { en } from './en';
import { vi } from './vi';

export const translations = {
  en,
  vi,
} as const;

export type TranslationKey = keyof typeof en;

// Type guard to check if a key exists in translations
export const isValidTranslationKey = (key: string): key is TranslationKey => {
  return key in en;
};