import { TrendingUp, Users, Star, DollarSign } from "lucide-react";
import { MetricsCard } from "../MetricsCard";

export const MetricsOverview = () => {
  const metrics = [
    {
      title: "Campaign Performance",
      value: "+24.5%",
      trend: "up" as const,
      icon: TrendingUp,
      description: "vs. last month",
      color: "green-500"
    },
    {
      title: "Average ROI",
      value: "182%",
      trend: "up" as const,
      icon: DollarSign,
      description: "across campaigns",
      color: "blue-500"
    },
    {
      title: "KOL Retention",
      value: "92%",
      trend: "down" as const,
      icon: Users,
      description: "-3% this month",
      color: "yellow-500"
    },
    {
      title: "Brand Rating",
      value: "4.8",
      trend: "up" as const,
      icon: Star,
      description: "from KOLs",
      color: "purple-500"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <MetricsCard key={index} {...metric} />
      ))}
    </div>
  );
};