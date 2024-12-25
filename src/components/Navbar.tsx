import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { MobileMenu } from "./navigation/MobileMenu";
import { DesktopNav } from "./navigation/DesktopNav";
import { motion } from "framer-motion";

const Navbar = () => {
  useKeyboardShortcuts(); // Initialize keyboard shortcuts

  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b transition-colors duration-300"
      role="navigation"
      aria-label="Main navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <Container className="mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center group"
              aria-label="Home"
              title="Shortcut: Ctrl+H"
            >
              <motion.img 
                src="/lovable-uploads/bf109a68-3ded-4be7-bf03-b641d5c6441d.png" 
                alt="Kolerr Logo" 
                className="h-8 w-auto sm:h-10 md:h-12 transform transition-transform duration-300 group-hover:scale-110" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
          </div>

          <DesktopNav />
          
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </motion.nav>
  );
};

export default Navbar;