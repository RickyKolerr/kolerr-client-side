import Navbar from "@/components/Navbar";
import { BrandDashboard } from "@/components/brands/BrandDashboard";
import { BrandSidebar } from "@/components/brands/BrandSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Brands = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <BrandSidebar />
          <main className="flex-1 p-8">
            <BrandDashboard />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Brands;