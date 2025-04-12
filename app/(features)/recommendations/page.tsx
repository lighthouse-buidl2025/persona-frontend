"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import AIAssistant from "@/components/ai-assistant";
import RecommendationHistory from "@/components/recommendation-history";
const theme: {
  color: string;
}[] = [{ color: "blue" }, { color: "green" }, { color: "pink" }];

export default function Recommended() {
  const { primaryWallet } = useDynamicContext();
  const address = primaryWallet?.address;
  return (
    <div>
      <h1 className="font-[family-name:var(--font-poppins)] text-2xl font-bold p-6 text-gray-700">
        Personalized Investment Recommendations
      </h1>
      <p className="text-gray-500 px-6 mb-4 font-[family-name:var(--font-poppins)]">
        We recommend optimal investment opportunities that match your Explorer
        persona type.
      </p>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <section className="px-6 bg-white  shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] rounded-lg">
            <div className="py-4">
              <div className="flex justify-between mb-4">
                <h1 className="text-xl font-bold text-gray-700 font-[family-name:var(--font-poppins)]">
                  Popular Protocols for Explorer Type
                </h1>
                <span className="text-gray-500 text-sm">Last 7 days</span>
              </div>
              {theme.map((el) => (
                <div
                  key={el.color}
                  className="w-full flex gap-y-4 gap-x-2 items-center mt-2 text-sm rounded-xl p-4 border border-gray-200 hover:bg-blue-100"
                >
                  <div className="flex justify-between w-full">
                    <div className="flex gap-x-2">
                      <div>
                        <div
                          className={cn(
                            "bg-purple-200 w-[50px] h-[50px] rounded font-semibold flex justify-center items-center",
                            {
                              "bg-blue-200 text-blue-500": el.color === "blue",
                              "bg-green-200 text-green-500":
                                el.color === "green",
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
                    </div>
                    <Button
                      className="mt-4 font-[family-name:var(--font-poppins)]"
                      variant="purple"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <AIAssistant className="row-span-2 col-start-2" />
          <section className="px-6 bg-white  shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)]  rounded-lg">
            <div className="py-4">
              <div className="flex justify-between mb-4">
                <h1 className="text-xl font-bold text-gray-700 font-[family-name:var(--font-poppins)]">
                  {`${address?.slice(0, 4)} Personalized Recommendations`}
                </h1>
                <span className="text-gray-500 text-sm">Last 7 days</span>
              </div>
              {theme.map((el) => (
                <div
                  key={el.color}
                  className="w-full flex gap-y-4 gap-x-2 items-center mt-2 text-sm rounded-xl p-4 border border-gray-200 hover:bg-blue-100"
                >
                  <div className="flex justify-between w-full">
                    <div className="flex gap-x-2">
                      <div>
                        <div
                          className={cn(
                            "bg-purple-200 w-[50px] h-[50px] rounded font-semibold flex justify-center items-center",
                            {
                              "bg-blue-200 text-blue-500": el.color === "blue",
                              "bg-green-200 text-green-500":
                                el.color === "green",
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
                    </div>
                    <Button
                      className="mt-4 font-[family-name:var(--font-poppins)]"
                      variant="purple"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <RecommendationHistory />
      </div>
    </div>
  );
}
