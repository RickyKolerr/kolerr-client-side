import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Languages, Menu } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { label: t("nav.dashboard"), path: "/dashboard" },
    { label: t("nav.campaigns"), path: "/campaigns" },
    { label: t("nav.slots"), path: "/slots" },
    { label: t("nav.kols"), path: "/kols" },
    { label: t("nav.brands"), path: "/brands" },
    { label: t("nav.pricing"), path: "/pricing" },
    { label: t("nav.contact"), path: "/contact" },
    { label: t("nav.communication"), path: "/communication" },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "English" },
    { code: "vi", label: "Tiếng Việt" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b transition-colors duration-300">
      <Container className="mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="min-w-12  flex items-center">
            <Link to="/" className="w-full flex items-center group">
              <img
                src="/lovable-uploads/logo.png"
                alt="Kolerr Logo"
                className="w-full sm:h-auto md:h-auto transform transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link text-foreground/80 hover:text-foreground transition-all text-sm"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:scale-110 transition-transform"
                  >
                    <Languages className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`cursor-pointer ${
                        language === lang.code ? "bg-accent" : ""
                      }`}
                    >
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/auth/login">
                <Button
                  variant="ghost"
                  className="text-foreground hover:scale-105 transition-transform text-sm"
                >
                  {t("auth.signin")}
                </Button>
              </Link>
              <Link to="/auth/register">
                <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white hover:scale-105 transition-transform hover:opacity-90 text-sm">
                  {t("auth.signup")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[80%] sm:w-[385px] pt-safe-top"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center justify-center">
                    <img
                      src="/lovable-uploads/bf109a68-3ded-4be7-bf03-b641d5c6441d.png"
                      alt="Kolerr Logo"
                      className="h-8 w-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="text-foreground/80 hover:text-foreground hover:translate-x-2 transition-all px-3 py-2 text-base"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <hr className="my-4 border-gray-800" />
                  <div className="flex items-center justify-between px-3">
                    <ThemeToggle />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Languages className="h-5 w-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {languages.map((lang) => (
                          <DropdownMenuItem
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            className={
                              language === lang.code ? "bg-accent" : ""
                            }
                          >
                            {lang.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex flex-col gap-3 px-3">
                    <Link to="/auth/login" className="w-full mt-2">
                      <Button
                        variant="ghost"
                        className="w-full text-foreground hover:scale-105 transition-transform h-10"
                      >
                        {t("auth.signin")}
                      </Button>
                    </Link>
                    <Link to="/auth/register" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white hover:scale-105 transition-transform hover:opacity-90 h-10">
                        {t("auth.signup")}
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
