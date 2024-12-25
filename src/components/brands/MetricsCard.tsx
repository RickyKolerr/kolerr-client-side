import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  trend: "up" | "down";
  icon: any;
  description: string;
  color: string;
}

export const MetricsCard = ({ title, value, trend, icon: Icon, description, color }: MetricCardProps) => {
  return (
    <Card className="bg-black/40 border-white/10 hover:bg-white/5 transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xs sm:text-sm text-gray-400">
            {title}
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold">{value}</span>
            {trend === "up" ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
          </div>
          <p className="text-xs sm:text-sm text-gray-400">
            {description}
          </p>
        </div>
        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-kolerr-${color}/20 flex items-center justify-center`}>
          <Icon className={`h-4 w-4 sm:h-5 sm:w-5 text-kolerr-${color}`} />
        </div>
      </CardHeader>
    </Card>
  );
};