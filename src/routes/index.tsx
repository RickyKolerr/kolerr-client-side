import { Routes as RouterRoutes, Route } from "react-router-dom";
import { mainRoutes } from "./mainRoutes";
import { aboutRoutes } from "./aboutRoutes";
import { careersRoutes } from "./careersRoutes";
import { supportRoutes } from "./supportRoutes";
import { salesRoutes } from "./salesRoutes";
import { pressRoutes } from "./pressRoutes";

export const routes = [
  ...mainRoutes,
  ...aboutRoutes,
  ...careersRoutes,
  ...supportRoutes,
  ...salesRoutes,
  ...pressRoutes,
];

export const Routes = () => {
  return (
    <RouterRoutes>
      {routes.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </RouterRoutes>
  );
};