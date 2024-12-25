import { navigationVi } from './modules/navigation.vi';
import { authVi } from './modules/auth.vi';
import { landingVi } from './modules/landing.vi';
import { tourVi } from './modules/tour.vi';

export const vi = {
  ...navigationVi,
  ...authVi,
  ...landingVi,
  ...tourVi,
} as const;