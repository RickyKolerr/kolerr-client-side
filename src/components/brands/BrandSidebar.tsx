import {
  BarChart3,
  Calendar,
  Plus,
  Users,
  Wallet,
  MessageCircle,
  ChevronRight,
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
import { Link } from "react-router-dom";

const menuItems = [
  { 
    title: "Dashboard", 
    icon: BarChart3, 
    url: "/brands",
    description: "Overview of your campaign performance"
  },
  { 
    title: "Create Campaign", 
    icon: Plus, 
    url: "/brands/create",
    description: "Start a new marketing campaign"
  },
  { 
    title: "Manage Slots", 
    icon: Calendar, 
    url: "/brands/slots",
    description: "Schedule and organize campaign slots"
  },
  { 
    title: "Track Progress", 
    icon: BarChart3, 
    url: "/brands/progress",
    description: "Monitor campaign metrics and KPIs"
  },
  { 
    title: "Review KOLs", 
    icon: Users, 
    url: "/brands/kols",
    description: "Evaluate and manage KOL partnerships"
  },
  { 
    title: "Billing & Performance", 
    icon: Wallet, 
    url: "/brands/billing",
    description: "Manage payments and view analytics"
  },
  { 
    title: "Communication", 
    icon: MessageCircle, 
    url: "/communication",
    description: "Message and collaborate with KOLs"
  },
];

export function BrandSidebar() {
  return (
    <Sidebar className="border-r border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold px-4 py-2 text-foreground/80">
            Brand Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.url} 
                      className="flex items-center gap-3 px-4 py-3 hover:bg-accent rounded-lg transition-colors group relative"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <div className="flex flex-col">
                          <span className="font-medium text-sm group-hover:text-primary transition-colors">
                            {item.title}
                          </span>
                          <span className="text-xs text-muted-foreground hidden group-hover:block transition-opacity">
                            {item.description}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
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