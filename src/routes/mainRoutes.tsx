import { lazy } from "react";

const Index = lazy(() => import("@/pages/Index"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const Checkout = lazy(() => import("@/pages/Checkout"));

export const mainRoutes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
];
