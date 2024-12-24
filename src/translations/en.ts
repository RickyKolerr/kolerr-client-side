export const commonTranslations = {
  // Navigation
  "nav.home": "Home",
  "nav.campaigns": "Campaigns",
  "nav.slots": "Slots",
  "nav.kols": "KOLs",
  "nav.brands": "Brands",
  "nav.pricing": "Pricing",
  "nav.contact": "Contact",
};

// Auth translations
export const authTranslations = {
  "auth.signin": "Sign In",
  "auth.signup": "Sign Up",
  "auth.password": "Password",
  "auth.accountType": "Account Type",
  "auth.selectAccountType": "Select Account Type",
  "auth.accountType.kol": "KOL/Influencer",
  "auth.accountType.brand": "Brand/Business",
  "auth.haveAccount": "Already have an account?",
  "auth.google": "Continue with Google",
  "auth.facebook": "Continue with Facebook",
  "auth.instagram": "Continue with Instagram",
  "auth.tiktok": "Continue with TikTok",
  "auth.or": "or continue with",
  "auth.social.title": "Social Login",
  "auth.social.subtitle": "Choose your preferred login method",
};

// Search translations
export const searchTranslations = {
  "search.title": "Find Your Perfect Match",
  "search.subtitle": "Search through thousands of KOLs and available slots",
  "search.placeholder": "Search KOLs or slots...",
  "search.button": "Search Now",
};

// Combine all translations
export const en = {
  ...commonTranslations,
  ...authTranslations,
  ...searchTranslations,
};
