import { mainRoutes } from "./mainRoutes";
import { aboutRoutes } from "./aboutRoutes";
import { careersRoutes } from "./careersRoutes";
import { supportRoutes } from "./supportRoutes";
import { salesRoutes } from "./salesRoutes";
import { pressRoutes } from "./pressRoutes";
export { AppRoutes } from "./AppRoutes";

export const routes = [
  ...mainRoutes,
  ...aboutRoutes,
  ...careersRoutes,
  ...supportRoutes,
  ...salesRoutes,
  ...pressRoutes,
];