"use client";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useMemo } from "react";
import AIAssistant from "@/components/ai-assistant";
import PersonaScores from "@/components/persona-scores";
import SimilarPersonaCommunity from "@/components/persona/similar-persona-community";
import { getSortedUserType } from "@/utils";
import { usePersonaData } from "@/hooks/usePersonaData";
import TypeBadge from "@/components/type-badge";
import PersonaRecommendations from "@/components/persona/persona-recommendations";
import Automation from "@/components/automation";
import usePersonaGroup from "@/hooks/use-persona-group";
import { toast } from "sonner";

export default function Dashboard() {
  const { primaryWallet } = useDynamicContext();
  const { data, isLoading } = usePersonaData(primaryWallet?.address);
  const sorted = useMemo(() => getSortedUserType(data), []);
  const { data: groupData, error } = usePersonaGroup({
    address: primaryWallet?.address,
    group: sorted.slice(0, 2).join("_"),
  });
  if (error) {
    toast.error(error.message);
  }
  return (
    <div>
      <div className="flex gap-4 px-6">
        <TypeBadge isLoading={isLoading} data={data} />
        <PersonaRecommendations groupData={groupData} />
        <Automation />
      </div>
      <div className="flex gap-4 px-6">
        <PersonaScores personaData={data} />
        <AIAssistant className="w-[40%] my-6" />
        <SimilarPersonaCommunity sortedUserType={sorted} />
      </div>
    </div>
  );
}
