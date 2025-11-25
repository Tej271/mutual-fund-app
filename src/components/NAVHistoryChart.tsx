import { TrendingUp, TrendingDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border rounded-lg shadow-lg">
        <p className="font-medium">{label}</p>
        <p className="text-blue-500">NAV: ₹{payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

export function NAVHistoryChart({ data, isLoading }: NAVHistoryChartProps) {
  if (isLoading || !data?.length) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-32" />
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <Skeleton className="h-full w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  const firstNav = data[0]?.nav || 0;
  const lastNav = data[data.length - 1]?.nav || 0;
  const trend = lastNav >= firstNav ? "up" : "down";
  const percentageChange = ((lastNav - firstNav) / firstNav) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>NAV History</CardTitle>
        <CardDescription>Last {data.length} days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis
                dataKey="formattedDate"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tick={{ fontSize: 12 }}
                interval={0}
              />
              <YAxis
                domain={["dataMin - 1", "dataMax + 1"]}
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tickFormatter={(value) => `₹${value}`}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="nav"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <div className="px-6 pb-4">
        <div className="flex items-center gap-2 text-sm">
          {trend === "up" ? (
            <TrendingUp className="h-4 w-4 text-green-500" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500" />
          )}
          <span className={trend === "up" ? "text-green-500" : "text-red-500"}>
            {Math.abs(percentageChange).toFixed(2)}% {trend === "up" ? "increase" : "decrease"} in
            last {data.length} days
          </span>
        </div>
      </div>
    </Card>
  );
}

interface NAVHistoryChartProps {
  data: { formattedDate: string; nav: number }[];
  isLoading?: boolean;
}
