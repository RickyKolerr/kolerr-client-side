import { en } from './en';
import { vi } from './vi';

export const translations = {
  en,
  vi,
} as const;

// Create a type that includes all possible translation keys
export type TranslationKey = keyof typeof en;

// Validate that Vietnamese translations have the same keys as English
type ValidateTranslations<T extends Record<string, any>> = {
  [K in keyof typeof en]: K extends keyof T ? T[K] : never;
};

// This will cause a type error if vi is missing any keys that exist in en
export type ValidateVI = ValidateTranslations<typeof vi>;