import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const NavLinks = () => {
  const { t } = useLanguage();

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

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="nav-link text-foreground/80 hover:text-foreground transition-all text-sm focus:outline-none focus:ring-2 focus:ring-kolerr-purple focus:ring-offset-2 rounded-md"
          title={item.shortcut ? `Shortcut: ${item.shortcut}` : undefined}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};