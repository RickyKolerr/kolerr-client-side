import Index from "@/pages/Index";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import Campaigns from "@/pages/Campaigns";
import KOLs from "@/pages/KOLs";
import Brands from "@/pages/Brands";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Slots from "@/pages/Slots";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import GetStarted from "@/pages/GetStarted";
import LearnMore from "@/pages/LearnMore";
import Checkout from "@/pages/Checkout";
import Communication from "@/pages/Communication";

export const mainRoutes = [
  {
    path: "/",
    element: Index,
  },
  {
    path: "/dashboard/*",
    element: DashboardLayout,
  },
  {
    path: "/campaigns/*",
    element: Campaigns,
  },
  {
    path: "/kols/*",
    element: KOLs,
  },
  {
    path: "/brands/*",
    element: Brands,
  },
  {
    path: "/pricing",
    element: Pricing,
  },
  {
    path: "/contact",
    element: Contact,
  },
  {
    path: "/slots/*",
    element: Slots,
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
  {
    path: "/privacy",
    element: PrivacyPolicy,
  },
  {
    path: "/terms",
    element: TermsOfService,
  },
  {
    path: "/get-started",
    element: GetStarted,
  },
  {
    path: "/learn-more",
    element: LearnMore,
  },
  {
    path: "/checkout",
    element: Checkout,
  },
  {
    path: "/communication",
    element: Communication,
  },
];