import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import { DollarSign, Calendar, Star, TrendingUp } from "lucide-react";

export function KOLDashboard() {
  const { t } = useLanguage();
  
  const metrics = [
    {
      title: "Total Earnings",
      value: "$12,450",
      change: "+12.5%",
      icon: DollarSign
    },
    {
      title: "Active Campaigns",
      value: "8",
      change: "+2",
      icon: Calendar
    },
    {
      title: "Rating",
      value: "4.8",
      change: "+0.2",
      icon: Star
    },
    {
      title: "Engagement Rate",
      value: "8.5%",
      change: "+1.2%",
      icon: TrendingUp
    }
  ];

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto p-4 sm:p-6">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
            KOL Dashboard
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Manage your campaigns and track performance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-4 bg-black/40 border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <metric.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm text-green-500">{metric.change}</span>
              </div>
              <div>
                <p className="text-2xl font-bold mb-1">{metric.value}</p>
                <p className="text-sm text-gray-400">{metric.title}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-black/40 border-white/10">
            <h2 className="text-xl font-semibold mb-4">Current Campaigns</h2>
            <div className="space-y-4">
              {/* Campaign list will go here */}
            </div>
          </Card>

          <Card className="p-6 bg-black/40 border-white/10">
            <h2 className="text-xl font-semibold mb-4">Slot Availability</h2>
            <div className="space-y-4">
              {/* Slot availability calendar will go here */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}