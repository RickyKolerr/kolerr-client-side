import { Home, PlusCircle, LayoutGrid, Activity, Users, CreditCard, Package, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: Home, label: "Dashboard Overview", href: "#overview" },
  { icon: PlusCircle, label: "Create Campaign", href: "#create" },
  { icon: LayoutGrid, label: "Manage Slots", href: "#slots" },
  { icon: Activity, label: "Track Progress", href: "#progress" },
  { icon: Users, label: "Review KOLs", href: "#kols" },
  { icon: CreditCard, label: "Payment & Transactions", href: "#payments" },
  { icon: Package, label: "Subscription", href: "#subscription" },
];

export function BrandSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Brand Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}