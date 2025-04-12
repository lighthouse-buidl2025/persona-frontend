import { PersonaData } from "@/types";

export interface ChartData {
  subject: string;
  value: number;
  fullMark: number;
}

export const transformToChartData = (
  personaData: PersonaData | null
): ChartData[] => {
  if (!personaData) return [];

  return [
    {
      subject: "Explorer",
      value: personaData.wallet.explorer_score,
      fullMark: 10,
    },
    {
      subject: "Diamond",
      value: personaData.wallet.diamond_score,
      fullMark: 10,
    },
    {
      subject: "Whale",
      value: personaData.wallet.whale_score,
      fullMark: 10,
    },
    {
      subject: "Degen",
      value: personaData.wallet.degen_score,
      fullMark: 10,
    },
  ];
};
