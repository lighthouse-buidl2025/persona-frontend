"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

const theme: {
  color: string;
}[] = [{ color: "blue" }, { color: "green" }, { color: "pink" }];

export default function Recommended() {
  const { primaryWallet } = useDynamicContext();
  const address = primaryWallet?.address;
  return (
    <div>
      <h1 className="text-2xl font-bold p-6 text-gray-700">
        Recommend Picks for You
      </h1>
      <p className="text-gray-500 px-6 mb-4">
        We recommend picks that match your behavior pattern.
      </p>
      <div className="grid grid-cols-2">
        <section className="px-6 col-span-1">
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold text-gray-700">
                Popular Protocols for Explorer Type
              </h1>
              <span className="text-gray-500 text-sm">Last 7 days</span>
            </div>
            {theme.map((el) => (
              <div
                key={el.color}
                className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm rounded-xl p-4 border border-gray-200 w-fit hover:bg-blue-100"
              >
                <div>
                  <div
                    className={cn(
                      "bg-purple-200 w-[50px] h-[50px] rounded font-semibold flex justify-center items-center",
                      {
                        "bg-blue-200 text-blue-500": el.color === "blue",
                        "bg-green-200 text-green-500": el.color === "green",
                        "bg-pink-200 text-pink-500": el.color === "pink",
                      }
                    )}
                  >
                    DEX
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-gray-700 font-bold">
                    New Arbitrum DEX Protocol
                  </h3>
                  <p className="text-green-500 text-xs font-semibold">
                    Expected APY: 12.4%
                  </p>
                </div>

                <Button className="mt-4" variant="purple">
                  Explore
                </Button>
              </div>
            ))}
          </div>
        </section>
        <section className="col-span-1">
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold text-gray-700">
                Personalized Recommendations for{" "}
                {address ? `${address.slice(0, 4)}...` : "0x0000"}
              </h1>
              <span className="text-blue-500 text-sm">
                View more recommendations
              </span>
            </div>
            {theme.map((el) => (
              <div
                key={el.color}
                className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm rounded-xl p-4 border border-gray-200 w-fit hover:bg-blue-100"
              >
                <div>
                  <div
                    className={cn(
                      "bg-purple-200 w-[50px] h-[50px] rounded font-semibold flex justify-center items-center",
                      {
                        "bg-blue-200 text-blue-500": el.color === "blue",
                        "bg-green-200 text-green-500": el.color === "green",
                        "bg-pink-200 text-pink-500": el.color === "pink",
                      }
                    )}
                  >
                    DEX
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-gray-700 font-bold">
                    New Arbitrum DEX Protocol
                  </h3>
                  <p className="text-green-500 text-xs font-semibold">
                    Expected APY: 12.4%
                  </p>
                </div>

                <Button className="mt-4" variant="purple">
                  Explore
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="flex">
        <section className="w-1/2 border border-gray-200 rounded-lg m-6 p-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Persona Detailed Index
          </h2>
          {/* {theme.map((el) => (
            <div key={el.type} className="flex flex-col">
              <div>
                <h4
                  className={cn("text-lg font-bold mt-4 mb-3", {
                    "text-blue-500": el.color === "blue",
                    "text-yellow-500": el.color === "yellow",
                    "text-green-500": el.color === "green",
                    "text-pink-500": el.color === "pink",
                  })}
                >
                  {el.type} (8.7 / 10)
                </h4>

                <div className="flex flex-col gap-1 mt-2 text-sm">
                  <p>사용 체인 수: 6개 (상위 10%)</p>
                  <p>사용한 프로토콜 수: 12개 (상위 8%)</p>
                  <p>새로운 프로토콜 탐색 빈도: 매우 높음</p>
                </div>
              </div>
            </div>
          ))} */}
        </section>
        <section className="h-fit w-1/2 border border-gray-200 rounded-lg m-6 p-6">
          <h2 className="text-xl font-bold text-gray-700">
            On-chain Activity Analysis
          </h2>
        </section>
      </div>
    </div>
  );
}
