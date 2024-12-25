import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NavLinks } from "./NavLinks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const DesktopNav = () => {
  const { t, language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'vi', label: 'Tiếng Việt' },
  ];

  return (
    <div className="hidden md:flex items-center space-x-6">
      <NavLinks />
      
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-kolerr-purple focus:ring-offset-2"
              aria-label="Change language"
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
            className="text-foreground hover:scale-105 transition-transform text-sm focus:outline-none focus:ring-2 focus:ring-kolerr-purple focus:ring-offset-2"
          >
            {t('auth.signin')}
          </Button>
        </Link>
        <Link to="/auth/register">
          <Button 
            className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white hover:scale-105 transition-transform hover:opacity-90 text-sm focus:outline-none focus:ring-2 focus:ring-kolerr-purple focus:ring-offset-2"
          >
            {t('auth.signup')}
          </Button>
        </Link>
      </div>
    </div>
  );
};