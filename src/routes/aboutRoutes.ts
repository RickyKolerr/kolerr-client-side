import AboutUs from "@/pages/AboutUs";
import Team from "@/pages/about/Team";
import Mission from "@/pages/about/Mission";
import Values from "@/pages/about/Values";
import History from "@/pages/about/History";

export const aboutRoutes = [
  {
    path: "/about",
    element: AboutUs,
  },
  {
    path: "/about/team",
    element: Team,
  },
  {
    path: "/about/mission",
    element: Mission,
  },
  {
    path: "/about/values",
    element: Values,
  },
  {
    path: "/about/history",
    element: History,
  },
];