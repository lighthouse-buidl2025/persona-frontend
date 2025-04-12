"use client";
import { Button } from "@/components/ui/button";
import { dummyPersonaData } from "@/utils/dummyData";
import RadarChart from "@/components/radar-chart";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useEffect, useState } from "react";
import { toast } from "sonner";

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
  const [personaData, setPersonaData] = useState<PersonaData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPersonaData = async () => {
      if (!primaryWallet?.address) return;

      try {
        setIsLoading(true);
        const response = await fetch(
          `/api/persona-engine/update/${primaryWallet.address}`
        );
        const data = await response.json();

        if (data.success) {
          setPersonaData(data.data);
        } else {
          toast.error("Failed to fetch persona data");
        }
      } catch (error) {
        console.error("Error fetching persona data:", error);
        toast.error("Error fetching persona data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPersonaData();
  }, [primaryWallet?.address]);

  const chartData = personaData
    ? [
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
      ]
    : [];

  return (
    <div>
      <h1 className="text-2xl font-bold p-6 text-gray-700">Dashboard</h1>

      <div className="flex gap-4 px-6">
        <section className="w-[30%] flex flex-col items-center col-span-1 border border-gray-200 rounded-lg p-6 my-6">
          <div className="flex justify-center items-center bg-indigo-200 text-indigo-600 font-bold w-[60px] h-[60px] rounded-[9999px] p-10">
            {primaryWallet?.address.slice(0, 4)}...
          </div>
          <h1 className="text-xl font-bold text-gray-700">Persona Analysis</h1>
          {isLoading ? (
            <div className="flex flex-col items-center mt-2 text-sm">
              <p className="text-gray-500">Loading...</p>
            </div>
          ) : personaData ? (
            <div className="flex flex-col items-center mt-2 text-sm">
              <p className="text-gray-500">
                Active Chains: {personaData.wallet.distinct_contract_count}
              </p>
              <p className="text-gray-500">
                DEX Platforms: {personaData.wallet.dex_platform_diversity}
              </p>
              <p className="text-gray-500">
                NFT Collections: {personaData.wallet.nft_collections_diversity}
              </p>
            </div>
          ) : null}
          <Button className="mt-4 rounded-4xl" variant="purple">
            Details
          </Button>
        </section>

        <section className="w-[40%] border border-gray-200 rounded-lg p-6 my-6">
          <h1 className="text-xl font-bold text-gray-700">Persona Scores</h1>
          <RadarChart personaData={dummyPersonaData} />
        </section>
      </div>
    </div>
  );
}
