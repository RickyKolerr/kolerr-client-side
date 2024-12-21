import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-kolerr-cyan via-kolerr-purple to-kolerr-orange" />
              <span className="ml-2 text-white text-xl font-bold">Kolerr</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2">Home</Link>
              <Link to="/campaigns" className="text-gray-300 hover:text-white px-3 py-2">Campaigns</Link>
              <Link to="/kols" className="text-gray-300 hover:text-white px-3 py-2">KOLs</Link>
              <Link to="/brands" className="text-gray-300 hover:text-white px-3 py-2">Brands</Link>
              <Link to="/pricing" className="text-gray-300 hover:text-white px-3 py-2">Pricing</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;