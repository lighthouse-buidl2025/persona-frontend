import { Category } from "@/types";
import { TooltipContent } from "../ui/tooltip";

import { ContractItem } from "@/types";
import { Tooltip } from "../ui/tooltip";

import { TooltipProvider } from "../ui/tooltip";

import { TooltipTrigger } from "../ui/tooltip";
import ExploreBtn from "./explore-btn";
import { cn } from "@/lib/utils";

export default function Protocols({
  groupData,
}: {
  groupData: ContractItem[];
}) {
  return groupData.map((el) => (
    <div
      key={el.contract_address}
      className="flex justify-between gap-y-4 gap-x-2 items-center mt-4 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200 w-full"
    >
      <div className="w-[70%] flex gap-x-2 items-center">
        <div>
          <div
            className={cn(
              " w-[50px] h-[50px] text-xs rounded font-semibold flex justify-center items-center",
              el.category === Category.DEXS && "bg-purple-200 text-purple-500",
              el.category === Category.NFT && "bg-pink-200 text-pink-500",
              el.category === Category.LENDING && "bg-blue-200 text-blue-500",
              el.category === Category.RESTAKING &&
                "bg-green-200 text-green-500",
              el.category === Category.BRIDGING &&
                "bg-yellow-200 text-yellow-500",
              el.category === Category.unknown && "bg-gray-200 text-gray-500"
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
            Expected APY: {el.subdescription}
          </p>
        </div>
      </div>
      <ExploreBtn
        href={`https://etherscan.io/address/${el.contract_address}`}
      />
    </div>
  ));
}
