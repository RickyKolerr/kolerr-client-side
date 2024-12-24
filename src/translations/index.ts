import { en } from './en';
import { vi } from './vi';

export const translations = {
  en,
  vi,
} as const;

// Create a type that includes all possible translation keys
export type TranslationKey = keyof typeof en | 
  'payment.stripe.desc' | 'payment.local.title' | 'payment.local.desc' | 'payment.paypal.desc' | 'payment.select' |
  'benefits.access' | 'benefits.ai' | 'benefits.tracking' | 'benefits.analytics' | 'benefits.safety' | 'benefits.support' | 'benefits.title' |
  'cta.title' | 'cta.subtitle' | 'cta.button' |
  'landing.contact.title' | 'landing.contact.visit' | 'landing.contact.email' | 'landing.contact.call' |
  'landing.contact.form.name' | 'landing.contact.form.email' | 'landing.contact.form.subject' | 'landing.contact.form.message' | 'landing.contact.form.send' |
  'howItWorks.search.title' | 'howItWorks.search.desc' | 'howItWorks.ai.title' | 'howItWorks.ai.desc' |
  'howItWorks.collab.title' | 'howItWorks.collab.desc' | 'howItWorks.title' |
  'showcase.title' | 'showcase.search' | 'showcase.sort' | 'showcase.partnership' |
  'search.title' | 'search.subtitle' | 'search.placeholder' | 'search.button' |
  'stats.activeKols' | 'stats.totalReach' | 'stats.campaigns' | 'stats.satisfaction' |
  'landing.trusted.title' |
  'pricing.recommended' | 'pricing.custom' | 'pricing.contactUs' | 'pricing.getStarted' |
  'pricing.title' | 'pricing.subtitle' | 'pricing.monthly' | 'pricing.annual' |
  'slots.mySlots.brand' | 'slots.mySlots.budget' | 'slots.mySlots.deadline' | 'slots.mySlots.requirements' |
  'slots.mySlots.progress' | 'slots.mySlots.viewDetails' | 'slots.mySlots.acceptInvitation' |
  'checkout.selectedPlan' | 'pricing.perYear' | 'pricing.perMonth' |
  'pricing.plans.free.name' | 'pricing.plans.free.duration' |
  'pricing.features.basicAI' | 'pricing.features.limitedSearches' | 'pricing.features.basicAnalytics' |
  'pricing.features.communityAccess' | 'pricing.features.freeTrial' | 'pricing.features.searches50' |
  'pricing.features.slots2' | 'pricing.features.advancedFiltering' | 'pricing.features.communityTools' |
  'pricing.features.payPerSearch' | 'pricing.features.unlimitedSearches' | 'pricing.features.slots10' |
  'pricing.features.enhancedAnalytics' | 'pricing.features.realtimeTracking' | 'pricing.features.prioritySupport' |
  'pricing.features.unlimitedSlots' | 'pricing.features.trendAnalysis' | 'pricing.features.dedicatedManager' |
  'pricing.features.customIntegrations' | 'pricing.features.teamTools' |
  'slots.title' | 'slots.subtitle' | 'slots.tabs.dashboard' | 'slots.tabs.available' | 'slots.tabs.mySlots';