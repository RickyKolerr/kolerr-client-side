import Sales from "@/pages/Sales";
import Enterprise from "@/pages/sales/Enterprise";
import SmallBusiness from "@/pages/sales/SmallBusiness";
import Partnerships from "@/pages/sales/Partnerships";
import CustomSolutions from "@/pages/sales/CustomSolutions";

export const salesRoutes = [
  {
    path: "/sales",
    element: Sales,
  },
  {
    path: "/sales/enterprise",
    element: Enterprise,
  },
  {
    path: "/sales/small-business",
    element: SmallBusiness,
  },
  {
    path: "/sales/partnerships",
    element: Partnerships,
  },
  {
    path: "/sales/custom",
    element: CustomSolutions,
  },
];