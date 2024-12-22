import { lazy } from "react";

const Index = lazy(() => import("@/pages/Index"));
const Auth = lazy(() => import("@/pages/auth/Auth"));
const Slots = lazy(() => import("@/pages/Slots"));
const Brands = lazy(() => import("@/pages/Brands"));
const Campaigns = lazy(() => import("@/pages/Campaigns"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Register = lazy(() => import("@/pages/auth/Register"));
const ForgotPassword = lazy(() => import("@/pages/auth/ForgotPassword"));

export const mainRoutes = [
  {
    path: "/",
    element: Index,
  },
  {
    path: "/auth",
    element: Auth,
  },
  {
    path: "/slots",
    element: Slots,
  },
  {
    path: "/brands/*",
    element: Brands,
  },
  {
    path: "/campaigns",
    element: Campaigns,
  },
  {
    path: "/auth/login",
    element: Login,
  },
  {
    path: "/auth/register",
    element: Register,
  },
  {
    path: "/auth/forgot-password",
    element: ForgotPassword,
  },
];