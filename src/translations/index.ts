import { en } from './en';
import { vi } from './vi';

export const translations = {
  en,
  vi,
} as const;

// Update the TranslationKey type to include all possible translation keys
export type TranslationKey = keyof typeof en;