import Navbar from "@/components/Navbar";
import { BrandLayout } from "@/components/brands/BrandLayout";
import { BrandDashboard } from "@/components/brands/BrandDashboard";
import { ManageSlots } from "@/components/brands/pages/ManageSlots";
import { TrackProgress } from "@/components/brands/pages/TrackProgress";
import { Routes, Route } from "react-router-dom";

const Brands = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BrandLayout>
        <Routes>
          <Route index element={<BrandDashboard />} />
          <Route path="slots" element={<ManageSlots />} />
          <Route path="progress" element={<TrackProgress />} />
        </Routes>
      </BrandLayout>
    </div>
  );
};

export default Brands;