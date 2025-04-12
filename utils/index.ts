import { PersonaData } from "@/types";

export const getSortedUserType = (personaData: PersonaData | null) => {
  if (!personaData) return [];
  const keys = [
    "explorer_score",
    "diamond_score",
    "whale_score",
    "degen_score",
  ] as const;

  const sorted = keys
    .map((key) => ({
      key,
      value: personaData?.wallet?.[key] ?? 0,
    }))
    .sort((a, b) => b.value - a.value)
    .map((item) => {
      const base = item.key.replace(/_score$/, ""); // '_score' 제거
      return base.charAt(0).toUpperCase() + base.slice(1); // Capitalize
    });

  return sorted;
};
