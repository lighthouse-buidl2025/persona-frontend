"use client";
import { Button } from "@/components/ui/button";
import { dummyPersonaData } from "@/utils/dummyData";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import AIAssistant from "@/components/ai-assistant";
import PersonaScores from "@/components/persona-scores";

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
          <h1 className="text-xl font-bold text-gray-700">
            Curation for Explorer Type
          </h1>
          <p className="text-gray-500">
            Perfect Opportunities for Your Persona
          </p>{" "}
          <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200 w-fit">
            <div>
              <div className="bg-purple-200 w-[50px] h-[50px] rounded text-purple-500 font-semibold flex justify-center items-center">
                DEX
              </div>
            </div>
            <div className="px-2">
              <h3 className="text-gray-700 font-bold">
                Arbitrum 신규 DEX Protocol
              </h3>{" "}
              <p className="text-gray-500">Explorer 유형 사용자 89% 참여</p>{" "}
              <p className="text-green-500 text-xs font-semibold">
                예상 APY: 12.4%
              </p>
            </div>
            <Button className="mt-4" variant="purple">
              Explore
            </Button>
          </div>
          <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200 w-fit">
            <div>
              <div className="bg-pink-200 w-[50px] h-[50px] rounded text-pink-500 font-semibold flex justify-center items-center">
                NFT
              </div>
            </div>
            <div className="px-2">
              <h3 className="text-gray-700 font-bold">신규 NFT Project X</h3>{" "}
              <p className="text-gray-500">Explorer 유형 사용자 89% 참여</p>{" "}
              <p className="text-green-500 text-xs font-semibold">
                예상 APY: 12.4%
              </p>
            </div>
            <Button className="mt-4" variant="purple">
              Explore
            </Button>
          </div>
        </section>

        <section className="w-[30%] border border-gray-200 rounded-lg p-6 my-6">
          <h1 className="text-xl font-bold text-gray-700">Automation</h1>
          <div>
            <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200 w-fit">
              <div>
                <div className="bg-green-500 w-[20px] h-[20px] rounded-full font-semibold flex justify-center items-center"></div>
              </div>
              <div className="px-2">
                <h3 className="text-gray-700 font-bold">APY 자동 최적화</h3>
                <p className="text-gray-500">
                  8% 이하로 떨어지면 자동으로 재배치
                </p>{" "}
              </div>
              <div>
                <div className="bg-green-500 w-[40px] h-[40px] rounded-full text-white font-semibold flex justify-center items-center">
                  ON
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200 w-fit">
              <div>
                <div className="bg-indigo-500 w-[20px] h-[20px] rounded-full font-semibold flex justify-center items-center"></div>
              </div>
              <div className="px-2">
                <h3 className="text-gray-700 font-bold">
                  NFT Price Notification
                </h3>
                <p className="text-gray-500">컬렉션 X 바닥가 1.2 ETH 이하</p>{" "}
              </div>
              <div>
                <div className="bg-indigo-500 w-[40px] h-[40px] rounded-full text-white font-semibold flex justify-center items-center">
                  ON
                </div>
              </div>
            </div>
          </div>
          <Button className="mt-4" variant="outline">
            + 새 자동화 규칙 추가
          </Button>
        </section>
      </div>
      <div className="flex gap-4 px-6">
        <PersonaScores personaData={dummyPersonaData} />
        <AIAssistant />
        <section className="w-[30%] border border-gray-200 rounded-lg p-6 my-6">
          <h1 className="text-xl font-bold text-gray-700">
            유사 페르소나 커뮤니티
          </h1>
          <p className="text-gray-500 text-sm">당신과 비슷한 성향의 사용자들</p>
          <div>
            <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200">
              <div>
                <div className="bg-indigo-200 text-indigo-600 font-semibold w-[50px] h-[50px] rounded-full flex justify-center items-center">
                  0x4B...
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-gray-700 font-bold">Explorer + Smart</h3>
                <p className="text-gray-500">Similarity: 92%</p>
              </div>
              <div>
                <Button className="rounded-full text-white" variant="purple">
                  +
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200">
              <div>
                <div className="bg-pink-200 text-pink-600 font-semibold w-[50px] h-[50px] rounded-full flex justify-center items-center">
                  0x4B... // 12 13 14,
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-gray-700 font-bold">Explorer + Devotee</h3>
                <p className="text-gray-500">Similarity: 87%</p>
              </div>
              <div>
                <Button className="rounded-full text-white" variant="purple">
                  +
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200">
              <div>
                <div className="bg-green-200 text-green-600 font-semibold w-[50px] h-[50px] rounded-full flex justify-center items-center">
                  0xF4...
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-gray-700 font-bold">Explorer + Whale</h3>
                <p className="text-gray-500">Similarity: 81%</p>
              </div>
              <div>
                <Button className="rounded-full text-white" variant="purple">
                  +
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
