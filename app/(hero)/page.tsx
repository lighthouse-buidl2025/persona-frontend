import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="mb-12">
      <div className="flex justify-center items-center flex-col font-[family-name:var(--font-poppins)]">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-8 mt-20 text-center leading-snug">
          The Best <span className="text-[#5F27FF]">Web3 Persona</span>
          <br />
          Built on Blockchain
        </h1>
        <p className="text-center text-gray-700">
          Trade, earn, and win with crypto on the most popular decentralized
          persona analysis
          <br /> platform in the Web3 galaxy.
        </p>

        <Button className="mt-10 bg-gradient-to-b from-[#5F27FF] to-[rgba(95,39,255,0.6)] text-white rounded-full">
          Analyze Now
        </Button>

        <div className="mt-10 flex flex-col gap-8">
          <div className="rounded-[16px] h-[300px] w-[1000px] bg-white/50 shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] p-10">
            <div className="flex flex-col justify-center items-center gap-4">
              <span className="rounded-full w-[64px] h-[64px] bg-indigo-100 bg-[url('/chart.svg')] bg-no-repeat bg-center  bg-[length:30px_30px]" />
              <h2 className="text-xl font-semibold mb-8">Persona Analysis</h2>
            </div>
            <p className="text-center text-gray-700">
              Discover your unique Web3 personality type based on your on-chain
              activities and transactions.
            </p>
          </div>
          <div className="rounded-[16px] h-[300px] w-[1000px] bg-white/50 shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] p-10">
            <div className="flex flex-col justify-center items-center gap-4">
              <span className="rounded-full w-[64px] h-[64px] bg-purple-100 bg-[url('/stock.svg')] bg-no-repeat bg-center  bg-[length:30px_30px]" />
              <h2 className="text-xl font-semibold mb-8">Smart Insights</h2>
            </div>
            <p className="text-center text-gray-700">
              Get personalized investment recommendations and strategies based
              on your persona type.
            </p>
          </div>
          <div className="rounded-[16px] h-[300px] w-[1000px] bg-white/50 shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] p-10">
            <div className="flex flex-col justify-center items-center gap-4">
              <span className="rounded-full w-[64px] h-[64px] bg-blue-100 bg-[url('/community.svg')] bg-no-repeat bg-center  bg-[length:30px_30px]" />
              <h2 className="text-xl font-semibold mb-8">
                Commununity Network
              </h2>
            </div>
            <p className="text-center text-gray-700">
              Connect with like-minded personas and build your Web3 network
              based on personality compatibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
