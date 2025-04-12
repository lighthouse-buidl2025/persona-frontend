"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import AIAssistant from "@/components/ai-assistant";
import RecommendationHistory from "@/components/recommendation-history";
import Protocols from "@/components/common/protocols";
import usePersonaGroup from "@/hooks/use-persona-group";
import { getSortedUserType } from "@/utils";
import { usePersonaData } from "@/hooks/usePersonaData";
import { useMemo } from "react";
import { Category } from "@/types";

const category = Category.DEXS;
export default function Recommended() {
  const { primaryWallet } = useDynamicContext();
  const address = primaryWallet?.address;
  const { data } = usePersonaData(address);
  const sorted = useMemo(() => getSortedUserType(data), []);
  const { data: groupData } = usePersonaGroup({
    address,
    group: sorted.slice(0, 2).join("_"),
  });
  return (
    <div>
      <h1 className="font-[family-name:var(--font-poppins)] text-2xl font-bold px-6 text-gray-700">
        Personalized Investment Recommendations
      </h1>
      <p className="text-gray-500 px-6 my-2 font-[family-name:var(--font-poppins)]">
        We recommend optimal investment opportunities that match your Explorer
        persona type.
      </p>
      <div className="flex flex-col gap-4 p-6">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <section className="px-6 bg-white  shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] rounded-lg">
            <div className="py-4">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold text-gray-700 font-[family-name:var(--font-poppins)]">
                  Popular Protocols for Explorer Type
                </h1>
                <span className="text-gray-500 text-xs font-[family-name:var(--font-poppins)]">
                  Based on Last 7 days
                </span>
              </div>
              <div className="max-h-[342px] overflow-y-auto">
                {groupData ? (
                  <Protocols
                    groupData={groupData.slice(0, 1).concat(groupData.slice(3))}
                  />
                ) : null}
              </div>
            </div>
          </section>
          <AIAssistant className="row-span-2 col-start-2" />
          <section className="px-6 bg-white  shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)]  rounded-lg">
            <div className="py-4">
              <div className="flex justify-betweenmb-4">
                <h1 className="mb-4 text-xl font-bold text-gray-700 font-[family-name:var(--font-poppins)]">
                  {`${address?.slice(0, 4)} Personalized Recommendations`}
                </h1>
              </div>
              <div className="flex flex-col gap-4 bg-blue-100 h-[300px] rounded-lg p-4">
                <h1 className="text-gray-700 font-bold font-[family-name:var(--font-poppins)]">
                  Portfolio Balance Advice
                </h1>
                <p className="text-gray-500 text-xs font-[family-name:var(--font-poppins)]">
                  Your DeFi exposure is 15% lower than typical Explorer types.
                  Balance through the following protocols.
                </p>
                <div className="flex justify-between gap-y-4 gap-x-2 items-center mt-4 text-sm bg-white rounded-xl p-4 border border-gray-200 w-full">
                  <div className="w-[70%] flex gap-x-2 items-center">
                    <div>
                      <div
                        className={cn(
                          " w-[50px] h-[50px] text-xs rounded font-semibold flex justify-center items-center",
                          category === Category.DEXS &&
                            "bg-purple-200 text-purple-500"
                          // category === Category.NFT &&
                          //   "bg-pink-200 text-pink-500",
                          // category === Category.LENDING &&
                          //   "bg-blue-200 text-blue-500",
                          // category === Category.RESTAKING &&
                          //   "bg-green-200 text-green-500",
                          // category === Category.BRIDGING &&
                          //   "bg-yellow-200 text-yellow-500",
                          // category === Category.unknown &&
                          //   "bg-gray-200 text-gray-500"
                        )}
                      >
                        {category === Category.DEXS && "DEX"}
                        {/* {category === Category.NFT && "NFT"}
                        {category === Category.LENDING && "Lending"}
                        {category === Category.RESTAKING && "Restaking"}
                        {category === Category.BRIDGING && "Bridging"}
                        {category === Category.unknown && "N/A"} */}
                      </div>
                    </div>
                    <div className="w-[80%] px-2 font-[family-name:var(--font-noto-sans)]">
                      <h3 className="text-gray-700 font-bold font-[family-name:var(--font-noto-sans)]">
                        ETHENA
                      </h3>{" "}
                      <p className="w-[200px] text-gray-500 truncate font-[family-name:var(--font-noto-sans)]">
                        Explorer type compatibility: 92%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <RecommendationHistory groupData={groupData} />
      </div>
    </div>
  );
}
