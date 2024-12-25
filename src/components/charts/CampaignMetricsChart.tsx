import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MetricData {
  date: string;
  engagement: number;
  reach: number;
  conversions: number;
}

interface CampaignMetricsChartProps {
  data: MetricData[];
  title?: string;
}

export const CampaignMetricsChart = ({ data, title = "Campaign Performance" }: CampaignMetricsChartProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="date" 
                className="text-muted-foreground text-sm"
              />
              <YAxis className="text-muted-foreground text-sm" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem',
                }}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="engagement" 
                stroke="hsl(var(--primary))" 
                activeDot={{ r: 8 }}
              />
              <Line 
                type="monotone" 
                dataKey="reach" 
                stroke="hsl(var(--secondary))" 
                activeDot={{ r: 8 }}
              />
              <Line 
                type="monotone" 
                dataKey="conversions" 
                stroke="hsl(var(--accent))" 
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};