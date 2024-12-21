import Press from "@/pages/Press";
import PressReleases from "@/pages/press/PressReleases";
import MediaKit from "@/pages/press/MediaKit";
import NewsRoom from "@/pages/press/NewsRoom";
import MediaContact from "@/pages/press/MediaContact";

export const pressRoutes = [
  {
    path: "/press",
    element: Press,
  },
  {
    path: "/press/releases",
    element: PressReleases,
  },
  {
    path: "/press/media-kit",
    element: MediaKit,
  },
  {
    path: "/press/newsroom",
    element: NewsRoom,
  },
  {
    path: "/press/contact",
    element: MediaContact,
  },
];