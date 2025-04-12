import { ContractItem } from "@/types";
import ExploreBtn from "../common/explore-btn";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { TooltipProvider } from "../ui/tooltip";
import { cn } from "@/lib/utils";

enum Category {
  DEXS = "dexs",
  NFT = "nft",
  LENDING = "lending",
  RESTAKING = "restaking",
  BRIDGING = "bridging",
  unknown = "unknown",
}

export default function PersonaRecommendations({
  groupData,
}: {
  groupData: ContractItem[];
}) {
  return (
    <section className="bg-white shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] w-[40%] border border-gray-200 rounded-lg p-6">
      <h1 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-gray-700">
        Recommendations
      </h1>
      <p className="text-gray-500 font-[family-name:var(--font-poppins)] text-sm">
        Optimal profit opportunities that match your persona
      </p>{" "}
      <div className="max-h-[342px] overflow-y-auto">
        {groupData.map((el) =>
          el.category ? (
            <div
              key={el.contract_address}
              className="flex justify-between gap-y-4 gap-x-2 items-center mt-4 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200 w-full"
            >
              <div className="w-[70%] flex gap-x-2 items-center">
                <div>
                  <div
                    className={cn(
                      " w-[50px] h-[50px] text-xs rounded font-semibold flex justify-center items-center",
                      el.category === Category.DEXS &&
                        "bg-purple-200 text-purple-500",
                      el.category === Category.NFT &&
                        "bg-pink-200 text-pink-500",
                      el.category === Category.LENDING &&
                        "bg-blue-200 text-blue-500",
                      el.category === Category.RESTAKING &&
                        "bg-green-200 text-green-500",
                      el.category === Category.BRIDGING &&
                        "bg-yellow-200 text-yellow-500",
                      el.category === Category.unknown &&
                        "bg-gray-200 text-gray-500"
                    )}
                  >
                    {el.category === Category.DEXS && "DEX"}
                    {el.category === Category.NFT && "NFT"}
                    {el.category === Category.LENDING && "Lending"}
                    {el.category === Category.RESTAKING && "Restaking"}
                    {el.category === Category.BRIDGING && "Bridging"}
                    {el.category === Category.unknown && "N/A"}
                  </div>
                </div>
                <div className="w-[80%] px-2 font-[family-name:var(--font-noto-sans)]">
                  <h3 className="text-gray-700 font-bold font-[family-name:var(--font-noto-sans)]">
                    {el.name}
                  </h3>{" "}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <p className="w-[200px] text-gray-500 truncate font-[family-name:var(--font-noto-sans)]">
                          {el.description}
                        </p>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-[300px]">{el.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <p className="text-green-500 text-xs font-semibold">
                    예상 APY: 12.4%
                  </p>
                </div>
              </div>
              <ExploreBtn
                href={`https://etherscan.io/address/${el.contract_address}`}
              />
            </div>
          ) : null
        )}
      </div>
    </section>
  );
}
