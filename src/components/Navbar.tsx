import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NotificationBell } from "@/components/notifications/NotificationBell";
import { getUserType } from "@/utils/userTypeUtils";

const Navbar = () => {
  const userType = getUserType();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold">
              Kolerr
            </Link>
            <Link to="/campaigns">
              <Button variant="ghost">Campaigns</Button>
            </Link>
            {userType === 'brand' && (
              <Link to="/brands">
                <Button variant="ghost">Dashboard</Button>
              </Link>
            )}
            <Link to="/slots">
              <Button variant="ghost">Slots</Button>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <NotificationBell />
            <Link to="/auth/login">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;