import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface TabItem {
  value: string;
  label: string;
  icon: LucideIcon;
  content: React.ReactNode;
}

interface DashboardTabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  className?: string;
}

export function DashboardTabs({ tabs, defaultTab, className }: DashboardTabsProps) {
  return (
    <div className={cn("rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm overflow-hidden", className)}>
      <Tabs defaultValue={defaultTab || tabs[0].value} className="w-full">
        <div className="flex flex-col gap-4 p-4">
          <TabsList className="h-auto grid grid-cols-2 sm:grid-cols-5 gap-2 bg-transparent">
            {tabs.map(({ value, icon: Icon, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 h-auto",
                  "data-[state=active]:bg-primary/10 data-[state=active]:text-primary",
                  "whitespace-nowrap text-sm"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{label.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="p-4">
          {tabs.map(({ value, content }) => (
            <TabsContent key={value} value={value}>
              {content}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}