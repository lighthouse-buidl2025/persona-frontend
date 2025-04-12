import {
  RadarChart as RadarChartRecharts,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { ChartContainer, type ChartConfig } from "./ui/chart";
import { PersonaData } from "@/types";
import { transformToChartData } from "@/utils/chartData";

const chartConfig = {
  explorer: {
    label: "Explorer",
    color: "#2563eb",
  },
  diamond: {
    label: "Diamond",
    color: "#60a5fa",
  },
  whale: {
    label: "Whale",
    color: "#34d399",
  },
  degen: {
    label: "Degen",
    color: "#f472b6",
  },
} satisfies ChartConfig;
export default function PersonaScores({
  personaData,
}: {
  personaData: PersonaData;
}) {
  return (
    <section className="bg-white shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] w-[30%] border border-gray-200 rounded-lg p-6 my-6">
      <h1 className="text-xl font-bold text-gray-700 mb-8 font-[family-name:var(--font-poppins)]">
        Metrics
      </h1>
      <div className="mt-10">
        <ChartContainer config={chartConfig} className="w-full font-boldr">
          <RadarChartRecharts data={transformToChartData(personaData)}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis domain={[0, 10]} />
            <Radar
              name="Score"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChartRecharts>
        </ChartContainer>
      </div>
    </section>
  );
}
