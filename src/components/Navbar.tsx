import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage } = useLanguage();

  return (
    <nav className="bg-background border-b border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src="/lovable-uploads/8fa1fb98-f606-4338-b651-0f6ad91f5537.png" 
                alt="Kolerr Logo" 
                className="h-10 w-10 transform transition-transform duration-300 group-hover:scale-110" 
              />
              <span className="ml-2 text-foreground text-xl font-bold group-hover:text-kolerr-cyan transition-colors duration-300">
                Kolerr
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-foreground/80 hover:text-foreground hover:scale-105 transition-all px-3 py-2">{t('nav.home')}</Link>
            <Link to="/campaigns" className="text-foreground/80 hover:text-foreground hover:scale-105 transition-all px-3 py-2">{t('nav.campaigns')}</Link>
            <Link to="/slots" className="text-foreground/80 hover:text-foreground hover:scale-105 transition-all px-3 py-2">{t('nav.slots')}</Link>
            <Link to="/kols" className="text-foreground/80 hover:text-foreground hover:scale-105 transition-all px-3 py-2">{t('nav.kols')}</Link>
            <Link to="/brands" className="text-foreground/80 hover:text-foreground hover:scale-105 transition-all px-3 py-2">{t('nav.brands')}</Link>
            <Link to="/pricing" className="text-foreground/80 hover:text-foreground hover:scale-105 transition-all px-3 py-2">{t('nav.pricing')}</Link>
            <Link to="/contact" className="text-foreground/80 hover:text-foreground hover:scale-105 transition-all px-3 py-2">{t('nav.contact')}</Link>
            
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;