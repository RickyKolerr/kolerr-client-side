import Navbar from "@/components/Navbar";
import { BrandLayout } from "@/components/brands/BrandLayout";
import { BrandDashboard } from "@/components/brands/BrandDashboard";
import { ManageSlots } from "@/components/brands/pages/ManageSlots";
import { TrackProgress } from "@/components/brands/pages/TrackProgress";
import { Routes, Route } from "react-router-dom";
import { UserType, getWelcomeMessage } from "@/utils/userTypeUtils";

const Brands = () => {
  // Simulated user type - in real app, this would come from auth context
  const userType: UserType = "brand";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-kolerr-cyan via-kolerr-purple to-kolerr-orange bg-clip-text text-transparent mb-4">
          {getWelcomeMessage(userType)}
        </h1>
        <BrandLayout>
          <Routes>
            <Route index element={<BrandDashboard />} />
            <Route path="slots" element={<ManageSlots />} />
            <Route path="progress" element={<TrackProgress />} />
          </Routes>
        </BrandLayout>
      </div>
    </div>
  );
};

export default Brands;