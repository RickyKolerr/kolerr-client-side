import { navigationVi } from './modules/navigation.vi';
import { authVi } from './modules/auth.vi';

export const vi = {
  ...navigationVi,
  ...authVi,
} as const;
