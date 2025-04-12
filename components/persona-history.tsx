import { Line } from "recharts";

import { CartesianGrid } from "recharts";

import { LineChart } from "recharts";
import { ChartConfig, ChartContainer } from "./ui/chart";
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;
export default function PersonaHistory() {
  return (
    <section className="h-fit border border-gray-200 rounded-lg m-6 p-6">
      <h2 className="text-xl font-bold text-gray-700">
        Persona History Changes
      </h2>
      <p className="text-gray-500">
        How your persona has changed over recent 6 months.
      </p>
      <ChartContainer config={chartConfig} className="w-full">
        <LineChart data={chartData}>
          <CartesianGrid vertical={false} />
          <Line dataKey="desktop" stroke="var(--color-desktop)" radius={4} />
          <Line dataKey="mobile" stroke="var(--color-mobile)" radius={4} />
        </LineChart>
      </ChartContainer>
    </section>
  );
}
