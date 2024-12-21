import Navbar from "@/components/Navbar";
import { BrandDashboard } from "@/components/brands/BrandDashboard";
import { BrandSidebar } from "@/components/brands/BrandSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Brands = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SidebarProvider>
        <div className="flex min-h-[calc(100vh-4rem)]">
          <BrandSidebar />
          <main className="flex-1 p-4 md:p-8 bg-background overflow-auto">
            <BrandDashboard />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Brands;