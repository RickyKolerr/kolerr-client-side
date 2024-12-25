import { authVi } from './modules/auth/vi';
import { navigationVi } from './modules/navigation/vi';
import { landingVi } from './modules/landing/vi';
import { translationVi } from './modules/translation/vi';

export const vi = {
  ...authVi,
  ...navigationVi,
  ...landingVi,
  ...translationVi,
};