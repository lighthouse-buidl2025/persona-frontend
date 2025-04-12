import { Button } from "./ui/button";

export default function PersonaRecommendations() {
  return (
    <section className="bg-white shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] w-[40%] border border-gray-200 rounded-lg p-6 my-6">
      <h1 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-gray-700">
        Recommendations
      </h1>
      <p className="text-gray-500 font-[family-name:var(--font-poppins)] text-sm">
        Perfect Opportunities for Your Persona
      </p>{" "}
      <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200 w-full">
        <div>
          <div className="bg-purple-200 w-[50px] h-[50px] rounded text-purple-500 font-semibold flex justify-center items-center">
            DEX
          </div>
        </div>
        <div className="px-2 font-[family-name:var(--font-noto-sans)]">
          <h3 className="text-gray-700 font-bold font-[family-name:var(--font-noto-sans)]">
            Arbitrum 신규 DEX Protocol
          </h3>{" "}
          <p className="text-gray-500 font-[family-name:var(--font-noto-sans)]">
            Explorer 유형 사용자 89% participating
          </p>{" "}
          <p className="text-green-500 text-xs font-semibold">
            예상 APY: 12.4%
          </p>
        </div>
        <Button
          className="mt-4 font-[family-name:var(--font-poppins)]"
          variant="purple"
        >
          Explore
        </Button>
      </div>
      <div className="font-[family-name:var(--font-noto-sans)] w-full flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200">
        <div>
          <div className="bg-pink-200 w-[50px] h-[50px] rounded text-pink-500 font-semibold flex justify-center items-center">
            NFT
          </div>
        </div>
        <div className="px-2">
          <h3 className="text-gray-700 font-bold">신규 NFT Project X</h3>{" "}
          <p className="text-gray-500">
            Explorer 유형 사용자 89% Participating
          </p>{" "}
          <p className="text-green-500 text-xs font-semibold">
            예상 APY: 12.4%
          </p>
        </div>
        <Button
          className="mt-4 font-[family-name:var(--font-poppins)]"
          variant="purple"
        >
          Explore
        </Button>
      </div>
    </section>
  );
}
