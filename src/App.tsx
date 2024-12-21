import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import KOLs from "./pages/KOLs";
import Brands from "./pages/Brands";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Slots from "./pages/Slots";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Careers from "./pages/Careers";
import Support from "./pages/Support";
import Sales from "./pages/Sales";
import Press from "./pages/Press";

// About sub-pages
import Team from "./pages/about/Team";
import Mission from "./pages/about/Mission";
import Values from "./pages/about/Values";
import History from "./pages/about/History";

// Careers sub-pages
import JobOpenings from "./pages/careers/JobOpenings";
import Benefits from "./pages/careers/Benefits";
import Culture from "./pages/careers/Culture";
import Internships from "./pages/careers/Internships";

// Support sub-pages
import FAQ from "./pages/support/FAQ";
import ContactSupport from "./pages/support/ContactSupport";
import Documentation from "./pages/support/Documentation";
import TechnicalSupport from "./pages/support/TechnicalSupport";

// Sales sub-pages
import Enterprise from "./pages/sales/Enterprise";
import SmallBusiness from "./pages/sales/SmallBusiness";
import Partnerships from "./pages/sales/Partnerships";
import CustomSolutions from "./pages/sales/CustomSolutions";

// Press sub-pages
import PressReleases from "./pages/press/PressReleases";
import MediaKit from "./pages/press/MediaKit";
import NewsRoom from "./pages/press/NewsRoom";
import MediaContact from "./pages/press/MediaContact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/kols" element={<KOLs />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/slots" element={<Slots />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          
          {/* About Us and sub-pages */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/values" element={<Values />} />
          <Route path="/about/history" element={<History />} />
          
          {/* Privacy and Terms */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          
          {/* Careers and sub-pages */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/openings" element={<JobOpenings />} />
          <Route path="/careers/benefits" element={<Benefits />} />
          <Route path="/careers/culture" element={<Culture />} />
          <Route path="/careers/internships" element={<Internships />} />
          
          {/* Support and sub-pages */}
          <Route path="/support" element={<Support />} />
          <Route path="/support/faq" element={<FAQ />} />
          <Route path="/support/contact" element={<ContactSupport />} />
          <Route path="/support/docs" element={<Documentation />} />
          <Route path="/support/technical" element={<TechnicalSupport />} />
          
          {/* Sales and sub-pages */}
          <Route path="/sales" element={<Sales />} />
          <Route path="/sales/enterprise" element={<Enterprise />} />
          <Route path="/sales/small-business" element={<SmallBusiness />} />
          <Route path="/sales/partnerships" element={<Partnerships />} />
          <Route path="/sales/custom" element={<CustomSolutions />} />
          
          {/* Press and sub-pages */}
          <Route path="/press" element={<Press />} />
          <Route path="/press/releases" element={<PressReleases />} />
          <Route path="/press/media-kit" element={<MediaKit />} />
          <Route path="/press/newsroom" element={<NewsRoom />} />
          <Route path="/press/contact" element={<MediaContact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;