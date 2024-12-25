import { en } from './en';
import { vi } from './vi';

export const translations = {
  en,
  vi,
} as const;

// Update the TranslationKey type to include all possible translation keys
export type TranslationKey = 
  | keyof typeof en 
  | "payment.stripe.desc"
  | "payment.local.title"
  | "payment.local.desc"
  | "payment.paypal.desc"
  | "payment.select"
  | "benefits.access"
  | "benefits.ai"
  | "benefits.tracking"
  | "benefits.analytics"
  | "benefits.safety"
  | "benefits.support"
  | "benefits.title"
  | "cta.title"
  | "cta.subtitle"
  | "cta.button"
  | "landing.contact.title"
  | "landing.contact.visit"
  | "landing.contact.email"
  | "landing.contact.call"
  | "landing.contact.form.name"
  | "landing.contact.form.email"
  | "landing.contact.form.subject"
  | "landing.contact.form.message"
  | "landing.contact.form.send"
  | "landing.features.title"
  | "landing.features.ai.title"
  | "landing.features.ai.desc"
  | "landing.features.campaign.title"
  | "landing.features.campaign.desc"
  | "landing.features.booking.title"
  | "landing.features.booking.desc"
  | "landing.features.analytics.title"
  | "landing.features.analytics.desc"
  | "landing.hero.title"
  | "landing.hero.subtitle"
  | "landing.hero.cta.start"
  | "landing.hero.cta.demo"
  | "landing.hero.stats.kols"
  | "landing.hero.stats.reach"
  | "landing.hero.stats.campaigns"
  | "landing.hero.stats.success"
  | "landing.trusted.title"
  | "howItWorks.search.title"
  | "howItWorks.search.desc"
  | "howItWorks.ai.title"
  | "howItWorks.ai.desc"
  | "howItWorks.collab.title"
  | "howItWorks.collab.desc"
  | "howItWorks.title"
  | "showcase.title"
  | "showcase.search"
  | "showcase.sort"
  | "showcase.partnership"
  | "search.title"
  | "search.subtitle"
  | "search.placeholder"
  | "search.button"
  | "stats.activeKols"
  | "stats.totalReach"
  | "stats.campaigns"
  | "stats.satisfaction"
  | "pricing.recommended"
  | "pricing.custom"
  | "pricing.contactUs"
  | "pricing.getStarted"
  | "pricing.title"
  | "pricing.subtitle"
  | "pricing.monthly"
  | "pricing.annual"
  | "pricing.perYear"
  | "pricing.perMonth"
  | "pricing.plans.free.name"
  | "pricing.plans.free.duration"
  | "pricing.features.basicAI"
  | "pricing.features.limitedSearches"
  | "pricing.features.basicAnalytics"
  | "pricing.features.communityAccess"
  | "pricing.features.freeTrial"
  | "pricing.plans.basic.name"
  | "pricing.features.searches50"
  | "pricing.features.slots2"
  | "pricing.features.advancedFiltering"
  | "pricing.features.communityTools"
  | "pricing.features.payPerSearch"
  | "pricing.plans.pro.name"
  | "pricing.features.unlimitedSearches"
  | "pricing.features.slots10"
  | "pricing.features.enhancedAnalytics"
  | "pricing.features.realtimeTracking"
  | "pricing.features.prioritySupport"
  | "pricing.plans.enterprise.name"
  | "pricing.features.unlimitedSlots"
  | "pricing.features.trendAnalysis"
  | "pricing.features.dedicatedManager"
  | "pricing.features.customIntegrations"
  | "pricing.features.teamTools"
  | "checkout.selectedPlan"
  | "campaigns.title"
  | "campaigns.subtitle"
  | "campaigns.searchPlaceholder"
  | "campaigns.tabs.create"
  | "campaigns.tabs.manage"
  | "campaigns.tabs.analytics"
  | "campaigns.createNew";