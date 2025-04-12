"use client";
import { Button } from "@/components/ui/button";
import { dummyPersonaData } from "@/utils/dummyData";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import AIAssistant from "@/components/ai-assistant";
import PersonaScores from "@/components/persona-scores";
import Link from "next/link";
import SimilarPersonaCommunity from "@/components/similar-persona-community";
import { getSortedUserType } from "@/utils";
import { usePersonaData } from "@/hooks/usePersonaData";
import TypeBadge from "@/components/type-badge";
import PersonaRecommendations from "@/components/persona-recommendations";
import Automation from "@/components/automation";
interface PersonaData {
  wallet: {
    address: string;
    balance: number;
    distinct_contract_count: number;
    dex_platform_diversity: number;
    avg_token_holding_period: number;
    transaction_frequency: number;
    dex_volume_usd: number;
    nft_collections_diversity: number;
    explorer_score: number;
    diamond_score: number;
    whale_score: number;
    degen_score: number;
    distinct_contract_count_percentile: number;
    dex_platform_diversity_percentile: number;
    avg_token_holding_period_percentile: number;
    transaction_frequency_percentile: number;
    dex_volume_usd_percentile: number;
    nft_collections_diversity_percentile: number;
    created_at: string;
    updated_at: string;
  };
}

export default function Dashboard() {
  const { primaryWallet } = useDynamicContext();
  const { data: personaData, isLoading } = usePersonaData(
    primaryWallet?.address
  );
  const sorted = useMemo(
    () => getSortedUserType(dummyPersonaData),
    [dummyPersonaData]
  );

  // const chartData = personaData
  //   ? [
  //       {
  //         subject: "Explorer",
  //         value: personaData.wallet.explorer_score,
  //         fullMark: 10,
  //       },
  //       {
  //         subject: "Diamond",
  //         value: personaData.wallet.diamond_score,
  //         fullMark: 10,
  //       },
  //       {
  //         subject: "Whale",
  //         value: personaData.wallet.whale_score,
  //         fullMark: 10,
  //       },
  //       {
  //         subject: "Degen",
  //         value: personaData.wallet.degen_score,
  //         fullMark: 10,
  //       },
  //     ]
  //   : [];

  return (
    <div>
      <div className="flex gap-4 px-6">
        <TypeBadge />
        <PersonaRecommendations />
        <Automation />
      </div>
      <div className="flex gap-4 px-6">
        <PersonaScores personaData={dummyPersonaData} />
        <AIAssistant className="w-[40%] my-6" />
        <SimilarPersonaCommunity sortedUserType={sorted} />
      </div>
    </div>
  );
}
