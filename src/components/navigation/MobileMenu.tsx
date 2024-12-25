import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

export const MobileMenu = () => {
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { label: t('nav.dashboard'), path: '/dashboard', shortcut: '' },
    { label: t('nav.campaigns'), path: '/campaigns', shortcut: 'Ctrl+C' },
    { label: t('nav.slots'), path: '/slots', shortcut: '' },
    { label: t('nav.kols'), path: '/kols', shortcut: 'Ctrl+K' },
    { label: t('nav.brands'), path: '/brands', shortcut: '' },
    { label: t('nav.pricing'), path: '/pricing', shortcut: 'Ctrl+P' },
    { label: t('nav.contact'), path: '/contact', shortcut: '' },
    { label: t('nav.communication'), path: '/communication', shortcut: '' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'vi', label: 'Tiếng Việt' },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-10 w-10 focus:outline-none focus:ring-2 focus:ring-kolerr-purple focus:ring-offset-2"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh] rounded-t-[20px] pt-safe-top">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/bf109a68-3ded-4be7-bf03-b641d5c6441d.png" 
              alt="Kolerr Logo" 
              className="h-8 w-auto" 
            />
          </SheetTitle>
        </SheetHeader>
        <motion.div 
          className="flex flex-col gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className="text-foreground/80 hover:text-foreground hover:translate-x-2 transition-all px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-kolerr-purple rounded-md block"
                title={item.shortcut ? `Shortcut: ${item.shortcut}` : undefined}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <hr className="my-4 border-gray-800" />
          <div className="flex items-center justify-between px-3">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="focus:outline-none focus:ring-2 focus:ring-kolerr-purple focus:ring-offset-2"
                >
                  <Languages className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? 'bg-accent' : ''}
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
                className="w-full text-foreground hover:scale-105 transition-transform h-10 focus:outline-none focus:ring-2 focus:ring-kolerr-purple focus:ring-offset-2"
              >
                {t('auth.signin')}
              </Button>
            </Link>
            <Link to="/auth/register" className="w-full">
              <Button 
                className="w-full bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white hover:scale-105 transition-transform hover:opacity-90 h-10 focus:outline-none focus:ring-2 focus:ring-kolerr-purple focus:ring-offset-2"
              >
                {t('auth.signup')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};