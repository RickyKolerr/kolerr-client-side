import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Languages, Menu } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
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
    { label: t('nav.campaigns'), path: '/campaigns' },
    { label: t('nav.slots'), path: '/slots' },
    { label: t('nav.kols'), path: '/kols' },
    { label: t('nav.brands'), path: '/brands' },
    { label: t('nav.pricing'), path: '/pricing' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'vi', label: 'Tiếng Việt' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src="/lovable-uploads/a1f44af1-affe-4843-83d9-b709b2c93e78.png" 
                alt="Kolerr Logo" 
                className="h-8 w-auto sm:h-10 md:h-12 transform transition-transform duration-300 group-hover:scale-110" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-foreground/80 hover:text-foreground hover:scale-105 transition-all px-3 py-2"
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex items-center space-x-2">
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
                        language === lang.code ? 'bg-accent' : ''
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
                  className="text-foreground hover:scale-105 transition-transform"
                >
                  {t('auth.signin')}
                </Button>
              </Link>
              <Link to="/auth/register">
                <Button 
                  className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white hover:scale-105 transition-transform hover:opacity-90"
                >
                  {t('auth.signup')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/a1f44af1-affe-4843-83d9-b709b2c93e78.png" 
                      alt="Kolerr Logo" 
                      className="h-10 w-auto" 
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="text-foreground/80 hover:text-foreground hover:translate-x-2 transition-all px-3 py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <hr className="my-4" />
                  <div className="flex flex-col gap-2 px-3">
                    {languages.map((lang) => (
                      <Button
                        key={lang.code}
                        variant="ghost"
                        onClick={() => setLanguage(lang.code)}
                        className={`justify-start ${
                          language === lang.code ? 'bg-accent' : ''
                        }`}
                      >
                        {lang.label}
                      </Button>
                    ))}
                    <Link to="/auth/login" className="w-full">
                      <Button 
                        variant="ghost" 
                        className="w-full text-foreground hover:scale-105 transition-transform"
                      >
                        {t('auth.signin')}
                      </Button>
                    </Link>
                    <Link to="/auth/register" className="w-full">
                      <Button 
                        className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white hover:scale-105 transition-transform hover:opacity-90"
                      >
                        {t('auth.signup')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;