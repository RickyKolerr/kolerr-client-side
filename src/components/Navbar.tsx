import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Languages, Menu, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.campaigns'), path: '/campaigns' },
    { label: t('nav.slots'), path: '/slots' },
    { label: t('nav.kols'), path: '/kols' },
    { label: t('nav.brands'), path: '/brands' },
    { label: t('nav.pricing'), path: '/pricing' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src="/lovable-uploads/8fa1fb98-f606-4338-b651-0f6ad91f5537.png" 
                alt="Kolerr Logo" 
                className="h-8 w-8 transform transition-transform duration-300 group-hover:scale-110" 
              />
              <span className="ml-2 text-foreground text-xl font-bold group-hover:text-kolerr-cyan transition-colors duration-300">
                Kolerr
              </span>
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
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:scale-110 transition-transform"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                className="hover:scale-110 transition-transform"
              >
                <Languages className="h-5 w-5" />
              </Button>

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
                  <SheetTitle className="flex items-center gap-2">
                    <img 
                      src="/lovable-uploads/8fa1fb98-f606-4338-b651-0f6ad91f5537.png" 
                      alt="Kolerr Logo" 
                      className="h-8 w-8" 
                    />
                    <span>Kolerr</span>
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
                  <hr className="my-4 border-gray-800" />
                  <div className="flex items-center justify-between px-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleTheme}
                      className="hover:scale-110 transition-transform"
                    >
                      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleLanguage}
                      className="hover:scale-110 transition-transform"
                    >
                      <Languages className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2 px-3">
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