import {
  LayoutDashboard,
  Plus,
  Calendar,
  BarChart3,
  Users,
  CreditCard,
  Star,
  Settings,
} from "lucide-react";
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
  { title: "Dashboard Overview", icon: LayoutDashboard, url: "#dashboard" },
  { title: "Create Campaign", icon: Plus, url: "#create" },
  { title: "Manage Slots", icon: Calendar, url: "#slots" },
  { title: "Track Progress", icon: BarChart3, url: "#progress" },
  { title: "Review KOLs", icon: Users, url: "#kols" },
  { title: "Payments", icon: CreditCard, url: "#payments" },
  { title: "Ratings", icon: Star, url: "#ratings" },
  { title: "Settings", icon: Settings, url: "#settings" },
];

export function BrandSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-foreground/70 font-semibold px-2">
            Brand Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={item.url} 
                      className="flex items-center gap-3 px-2 py-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
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