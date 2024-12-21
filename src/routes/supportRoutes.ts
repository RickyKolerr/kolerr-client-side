import Support from "@/pages/Support";
import FAQ from "@/pages/support/FAQ";
import ContactSupport from "@/pages/support/ContactSupport";
import Documentation from "@/pages/support/Documentation";
import TechnicalSupport from "@/pages/support/TechnicalSupport";

export const supportRoutes = [
  {
    path: "/support",
    element: Support,
  },
  {
    path: "/support/faq",
    element: FAQ,
  },
  {
    path: "/support/contact",
    element: ContactSupport,
  },
  {
    path: "/support/docs",
    element: Documentation,
  },
  {
    path: "/support/technical",
    element: TechnicalSupport,
  },
];