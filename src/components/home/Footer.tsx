import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const links = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" }
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Contact", href: "/contact" }
    ],
    solutions: [
      { label: "For Brands", href: "/brands" },
      { label: "For KOLs", href: "/kols" },
      { label: "For Agencies", href: "/agencies" },
      { label: "Enterprise", href: "/enterprise" }
    ]
  };

  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="/lovable-uploads/8fa1fb98-f606-4338-b651-0f6ad91f5537.png" alt="Kolerr Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Kolerr</span>
            </Link>
            <p className="text-foreground/80">
              Vietnam's leading AI-powered influencer marketing platform connecting brands with KOLs.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-foreground/80 hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {links.support.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-foreground/80 hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {links.solutions.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-foreground/80 hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 mb-4 md:mb-0">
            © 2024 Kolerr. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;