import { en } from './en';
import { vi } from './vi';

export const translations = {
  en,
  vi,
} as const;

// Create a union type of all possible translation keys
export type TranslationKey = keyof typeof en;