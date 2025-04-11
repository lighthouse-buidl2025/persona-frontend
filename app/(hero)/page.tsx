import Header from "@/components/header";
import Provider from "@/components/provider";
import { Button } from "@/components/ui/button";

// const data = [
//   {
//     title: "Personal Analysis",
//     description:
//       "Discover your unique Web3 personality type based on your on-chain activities and transactions.",
//   },
//   {
//     title: "Smart Insights",
//     description:
//       "Get personalized investment recommendations and strategies based on your persona type.",
//   },

//   ,
//   {
//     title: "Community Network",
//     description:
//       "Connect with like-minded Web3 enthusiasts and discover new opportunities through our community network.",
//   },
// ];

export default function Hero() {
  return (
    <div>
      <div className="flex w-[1200px] mx-auto py-8">
        <div className="w-full h-full">
          {" "}
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">
              The Best Web3 Persona Built on Blockchain
            </h1>
            <h2>
              Trade, earn, and win with crypto on the most popular decentralized
              persona analysis platform in the Web3 galaxy.
            </h2>
            <Button>Analyze now</Button>
            <div className="flex flex-col gap-4">
              <div className="">
                <span className="rounded-full bg-indigo-200"></span>
                <h3>Persona Analysis</h3>
                <p className="text-sm text-gray-500"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
