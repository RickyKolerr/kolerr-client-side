import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const FooterSection = () => {
  const links = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" }
    ],
    support: [
      { label: "Help Center", href: "/support" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" }
    ],
    features: [
      { label: "For KOLs", href: "/kols" },
      { label: "For Brands", href: "/brands" },
      { label: "Pricing", href: "/pricing" }
    ]
  };

  return (
    <footer className="bg-black/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-kolerr-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-kolerr-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              {links.features.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-gray-400 hover:text-kolerr-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-kolerr-cyan transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-kolerr-cyan transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-kolerr-cyan transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 Kolerr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;