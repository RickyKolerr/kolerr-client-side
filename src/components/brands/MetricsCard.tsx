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
    <>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="space-y-1">
            <CardTitle className="text-sm text-muted-foreground">
              {title}
            </CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">{value}</span>
              {trend === "up" ? (
                <TrendingUp className={`h-4 w-4 text-green-500`} />
              ) : (
                <TrendingDown className={`h-4 w-4 text-red-500`} />
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
          <div className={`w-12 h-12 rounded-full bg-${color}/10 flex items-center justify-center`}>
            <Icon className={`h-6 w-6 text-${color}`} />
          </div>
        </CardHeader>
      </Card>
      
      <style>
        {`
          .metric-gradient {
            background: linear-gradient(to right, #00F5FF, #9C27B0);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
        `}
      </style>
    </>
  );
};
