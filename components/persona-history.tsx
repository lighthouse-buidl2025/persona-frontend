import { Line, XAxis, YAxis } from "recharts";
import dayjs from "dayjs";
type PersonaScoreItemWithMonth = PersonaScoreItem & {
  month: string;
};
const dummyData = [
  {
    id: 4097,
    explorer_score: 6.7,
    diamond_score: 7.3,
    whale_score: 6.2,
    degen_score: 5.9,
    created_at: "2024-12-12 01:59:31",
  },
  {
    id: 4098,
    explorer_score: 6.7,
    diamond_score: 7.3,
    whale_score: 6.2,
    degen_score: 5.9,
    created_at: "2025-01-12 12:46:54",
  },
  {
    id: 4099,
    explorer_score: 6.7,
    diamond_score: 7.3,
    whale_score: 6.2,
    degen_score: 5.9,
    created_at: "2025-02-12 12:46:54",
  },
  {
    id: 4100,
    explorer_score: 6.7,
    diamond_score: 7.3,
    whale_score: 6.2,
    degen_score: 5.9,
    created_at: "2025-03-12 12:49:50",
  },
  {
    id: 4101,
    explorer_score: 6.7,
    diamond_score: 7.3,
    whale_score: 6.2,
    degen_score: 5.9,
    created_at: "2025-04-12 12:56:31",
  },
];

import { CartesianGrid } from "recharts";

import { LineChart } from "recharts";
import { ChartConfig, ChartContainer } from "./ui/chart";
import { useEffect, useState } from "react";
import { PersonaScoreItem } from "@/types";

const chartConfig = {
  explorer_score: {
    label: "explorer_score",
    color: "#2563eb",
  },
  diamond_score: {
    label: "diamond_score",
    color: "#F43F5E",
  },
  whale_score: {
    label: "whale_score",
    color: "	#EAB308",
  },
  degen_score: {
    label: "degen_score",
    color: "#EC4899",
  },
} satisfies ChartConfig;
export default function PersonaHistory() {
  const [history, setHistory] = useState<PersonaScoreItemWithMonth[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      // TODO: remove this
      // const response = await fetch(`/api/persona-engine/logs/${wallet}`);
      // const data = await response.json();
      const data: PersonaScoreItemWithMonth[] = dummyData.map((el) => ({
        ...el,
        month: dayjs(el.created_at).format("MMMM"),
      }));
      setHistory(data);
    };
    fetchData();
  }, []);

  return (
    <section className="bg-white shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] h-fit border border-gray-200 rounded-lg m-6 p-6">
      <h2 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-gray-700">
        Persona History Changes
      </h2>
      <p className="text-gray-500 font-[family-name:var(--font-poppins)]  ">
        How your persona has changed over recent 6 months.
      </p>
      <ChartContainer config={chartConfig} className="w-full h-[300px]  mt-6">
        <LineChart
          data={history}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickCount={6}
            height={100}
            scale="linear"
            type="number"
            domain={[0, 10]}
          />
          <Line
            dataKey="explorer_score"
            stroke="#3B82F6"
            strokeWidth={2}
            radius={4}
          />
          <Line
            dataKey="diamond_score"
            stroke="#F43F5E"
            strokeWidth={2}
            radius={4}
          />
          <Line
            dataKey="whale_score"
            stroke="#EAB308"
            strokeWidth={2}
            radius={4}
          />
          <Line
            dataKey="degen_score"
            stroke="#EC4899"
            strokeWidth={2}
            radius={4}
          />
        </LineChart>
      </ChartContainer>
    </section>
  );
}
