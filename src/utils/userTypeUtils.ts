export type UserType = 'kol' | 'brand' | 'agency';

export const getUserType = (): UserType => {
  // This should be replaced with actual auth logic
  // For now, we'll simulate it with a mock value
  return 'brand';
};

export const canCreateCampaign = (userType: UserType): boolean => {
  return userType === 'brand' || userType === 'agency';
};

export const canViewCampaignAnalytics = (userType: UserType): boolean => {
  return userType === 'brand' || userType === 'agency';
};

export const canApplyToCampaign = (userType: UserType): boolean => {
  return userType === 'kol';
};

export const canManageKOLs = (userType: UserType): boolean => {
  return userType === 'brand' || userType === 'agency';
};

export const canManageSlots = (userType: UserType): boolean => {
  return userType === 'brand' || userType === 'agency';
};

export const isKOL = (userType: UserType): boolean => {
  return userType === 'kol';
};

export const isBrand = (userType: UserType): boolean => {
  return userType === 'brand';
};

export const isAgency = (userType: UserType): boolean => {
  return userType === 'agency';
};