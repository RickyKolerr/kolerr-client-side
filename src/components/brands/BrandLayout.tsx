import { BrandSidebar } from "./BrandSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

interface BrandLayoutProps {
  children: React.ReactNode;
}

export function BrandLayout({ children }: BrandLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <BrandSidebar />
        <main className="flex-1 p-8 bg-background">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}