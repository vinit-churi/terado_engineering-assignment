import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CHART_DATA_1, CHART_DATA_2 } from "@/constants/ChartData";
import { useState } from "react";
const DashboardChart = () => {
  const [timeFrame, setTimeFrame] = useState("month");
  return (
    <div className="flex-1 h-max border border-solid border-slate-400 rounded-md pt-4">
      <div className="flex justify-between px-6 mb-5">
        <h2 className="text-xl font-semibold">Lifetime Sales</h2>
        <Select
          value={timeFrame}
          onValueChange={(value) => setTimeFrame(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select TimeFrame" className="font-bold" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="month">Month</SelectItem>
            <SelectItem value="year">Year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={timeFrame === "month" ? CHART_DATA_1 : CHART_DATA_2}
            margin={{
              // top: 5,
              right: 30,
              // left: 20,
              // bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              interval={window.innerWidth <= 768 ? 4 : 0}
            />
            <YAxis
              axisLine={false}
              tickFormatter={(tick) => `${tick / 1000}K`}
            />
            <Tooltip />
            <Bar
              dataKey="income"
              fill="#FFA93E"
              activeBar={<Rectangle />}
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="users"
              fill="#3284FF"
              activeBar={<Rectangle />}
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="sales"
              fill="#31CAEC"
              activeBar={<Rectangle />}
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="taxes"
              fill="#40C854"
              activeBar={<Rectangle />}
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardChart;
