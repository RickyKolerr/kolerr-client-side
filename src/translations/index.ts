import { en } from './en';
import { vi } from './vi';

export const translations = {
  en,
  vi,
} as const;

// Create a union type of all possible translation keys by extracting them from the English translations
export type TranslationKey = keyof typeof en | 
  "auth.signin" | "auth.signup" | "auth.password" | "auth.or" | 
  "auth.google" | "auth.facebook" | "auth.instagram" | "auth.tiktok" |
  "auth.social.title" | "auth.social.subtitle" | "auth.accountType" |
  "auth.selectAccountType" | "auth.accountType.kol" | "auth.accountType.brand" |
  "auth.haveAccount" | "payment.stripe.desc" | "payment.local.title" |
  "payment.local.desc" | "payment.paypal.desc" | "payment.select" |
  "benefits.access" | "benefits.ai" | "benefits.tracking" | "benefits.analytics" |
  "benefits.safety" | "benefits.support" | "benefits.title" |
  "cta.title" | "cta.subtitle" | "cta.button" |
  "howItWorks.search.title" | "howItWorks.search.desc" |
  "howItWorks.ai.title" | "howItWorks.ai.desc" |
  "howItWorks.collab.title" | "howItWorks.collab.desc" |
  "howItWorks.title" | "showcase.title" | "showcase.search" |
  "showcase.sort" | "showcase.partnership" |
  "stats.activeKols" | "stats.totalReach" | "stats.campaigns" |
  "stats.satisfaction" | "pricing.features.basicAI" |
  "pricing.features.limitedSearches" | "pricing.features.basicAnalytics" |
  "pricing.features.communityAccess" | "pricing.features.freeTrial" |
  "pricing.features.searches50" | "pricing.features.slots2" |
  "pricing.features.advancedFiltering" | "pricing.features.communityTools" |
  "pricing.features.payPerSearch" | "pricing.features.unlimitedSearches" |
  "pricing.features.slots10" | "pricing.features.enhancedAnalytics" |
  "pricing.features.realtimeTracking" | "pricing.features.prioritySupport" |
  "pricing.features.unlimitedSlots" | "pricing.features.trendAnalysis" |
  "pricing.features.dedicatedManager" | "pricing.features.customIntegrations" |
  "pricing.features.teamTools" | "pricing.recommended" | "pricing.custom" |
  "pricing.contactUs" | "pricing.getStarted" | "pricing.title" |
  "pricing.subtitle" | "pricing.monthly" | "pricing.annual" |
  "pricing.perYear" | "pricing.perMonth" | "pricing.plans.free.name" |
  "pricing.plans.free.duration" | "pricing.plans.basic.name" |
  "pricing.plans.pro.name" | "pricing.plans.enterprise.name" |
  "slots.title" | "slots.subtitle" | "slots.tabs.dashboard" |
  "slots.tabs.available" | "slots.tabs.mySlots" |
  "slots.available.search" | "slots.available.brand" |
  "slots.available.budget" | "slots.available.dates" |
  "slots.available.followers" | "slots.available.applyNow" |
  "slots.mySlots.brand" | "slots.mySlots.budget" |
  "slots.mySlots.deadline" | "slots.mySlots.requirements" |
  "slots.mySlots.progress" | "slots.mySlots.viewDetails" |
  "slots.mySlots.acceptInvitation" | "checkout.selectedPlan";