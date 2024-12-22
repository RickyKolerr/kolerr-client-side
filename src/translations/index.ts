import { en } from './en';
import { vi } from './vi';

export const translations = {
  en,
  vi,
} as const;

export type TranslationKey = keyof typeof en;