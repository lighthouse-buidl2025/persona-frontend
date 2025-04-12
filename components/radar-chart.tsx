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
export default function RadarChart({
  personaData,
}: {
  personaData: PersonaData;
}) {
  return (
    <ChartContainer config={chartConfig} className="w-full">
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
  );
}
