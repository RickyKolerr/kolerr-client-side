import Careers from "@/pages/Careers";
import JobOpenings from "@/pages/careers/JobOpenings";
import Benefits from "@/pages/careers/Benefits";
import Culture from "@/pages/careers/Culture";
import Internships from "@/pages/careers/Internships";

export const careersRoutes = [
  {
    path: "/careers",
    element: Careers,
  },
  {
    path: "/careers/openings",
    element: JobOpenings,
  },
  {
    path: "/careers/benefits",
    element: Benefits,
  },
  {
    path: "/careers/culture",
    element: Culture,
  },
  {
    path: "/careers/internships",
    element: Internships,
  },
];