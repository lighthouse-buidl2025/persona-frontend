import { CommunityContract } from "@/types";
import { SquareArrowOutUpRight } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
export default function SimilarPersonaCommunity({
  sortedUserType,
}: {
  sortedUserType: string[];
}) {
  const [similarCommunity, setSimilarCommunity] = useState<CommunityContract[]>(
    [
      {
        contract_address: "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
        frequency: 245,
      },
      {
        contract_address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
        frequency: 189,
      },
      {
        contract_address: "0x6b175474e89094c44da98b954eedeac495271d0f",
        frequency: 156,
      },
      {
        contract_address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        frequency: 132,
      },
      {
        contract_address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        frequency: 98,
      },
    ]
  );
  const getTopGroupCombos = () => {
    const sorted = sortedUserType; // ["Explorer", "Diamond", "Whale", "Degen"]

    if (sorted.length < 4) return [];

    return [
      `${sorted[0]}_${sorted[1]}`,
      `${sorted[0]}_${sorted[2]}`,
      `${sorted[0]}_${sorted[3]}`,
    ];
  };
  const comboString = useMemo(() => {
    const c = getTopGroupCombos();
    return c.join(",");
  }, [sortedUserType]);

  useEffect(() => {
    if (!comboString) return;
    console.log({ comboString });

    //   const fetchSimilarPersona = async () => {
    //     const response = await fetch(
    //       `/api/persona-engine/category/${comboString}`
    //     );
    //     const { contracts } = await response.json();
    //     setSimilarCommunity(contracts);
    //   };
    //   fetchSimilarPersona();
  }, [comboString]);

  return (
    <section className="bg-white shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] w-[30%] border border-gray-200 rounded-lg p-6 my-6">
      <h1 className="text-xl font-bold text-gray-700 font-[family-name:var(--font-poppins)]">
        Community Picks
      </h1>
      <p className="text-gray-500 text-sm font-[family-name:var(--font-poppins)]">
        Users with similar traits to you
      </p>
      <div>
        <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200">
          <div>
            <div className="bg-indigo-200 text-xs text-indigo-600 font-semibold w-[50px] h-[50px] rounded-full flex justify-center items-center">
              {`${similarCommunity[0].contract_address.slice(0, 4)}`}
            </div>
          </div>
          <div className="px-2">
            <h3 className="text-gray-700 font-bold font-italic">{`${sortedUserType[0]} + ${sortedUserType[1]}`}</h3>
            <p className="text-gray-500 text-xs">Similarity: 92%</p>
          </div>
          <div>
            <a href="https://t.me/PersonaChainAI/7" target="_blank">
              <SquareArrowOutUpRight size={20} color="#5F27FF" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200">
          <div>
            <div className="bg-pink-200 text-xs text-pink-600 font-semibold w-[50px] h-[50px] rounded-full flex justify-center items-center">
              {`${similarCommunity[1].contract_address.slice(0, 4)}`}
            </div>
          </div>
          <div className="px-2">
            <h3 className="text-gray-700 font-bold font-italic">{`${sortedUserType[0]} + ${sortedUserType[2]}`}</h3>
            <p className="text-gray-500 text-xs">Similarity: 87%</p>
          </div>
          <div>
            <a href="https://t.me/PersonaChainAI/2" target="_blank">
              <SquareArrowOutUpRight size={20} color="#5F27FF" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200">
          <div>
            <div className="bg-green-200 text-xs text-green-600 font-semibold w-[50px] h-[50px] rounded-full flex justify-center items-center">
              {`${similarCommunity[2].contract_address.slice(0, 4)}`}
            </div>
          </div>
          <div className="px-2">
            <h3 className="text-gray-700 font-bold font-italic">{`${sortedUserType[0]} + ${sortedUserType[3]}`}</h3>
            <p className="text-gray-500 text-xs">Similarity: 81%</p>
          </div>
          <div>
            <a href="https://t.me/PersonaChainAI/9" target="_blank">
              <SquareArrowOutUpRight size={20} color="#5F27FF" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
