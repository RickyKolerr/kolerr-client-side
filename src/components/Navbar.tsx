import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/8fa1fb98-f606-4338-b651-0f6ad91f5537.png" alt="Kolerr Logo" className="h-8 w-8" />
              <span className="ml-2 text-white text-xl font-bold">Kolerr</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2">Home</Link>
            <Link to="/campaigns" className="text-gray-300 hover:text-white px-3 py-2">Campaigns</Link>
            <Link to="/slots" className="text-gray-300 hover:text-white px-3 py-2">Slots</Link>
            <Link to="/kols" className="text-gray-300 hover:text-white px-3 py-2">KOLs</Link>
            <Link to="/brands" className="text-gray-300 hover:text-white px-3 py-2">Brands</Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white px-3 py-2">Pricing</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2">Contact</Link>
            <div className="flex items-center space-x-2">
              <Link to="/auth/login">
                <Button variant="ghost" className="text-white">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth/register">
                <Button className="bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange text-white">
                  Sign Up
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