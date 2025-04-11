"use client";
import { Button } from "@/components/ui/button";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Input } from "@/components/ui/input";
import { ArrowUp } from "lucide-react";
const chartData = [
  {
    subject: "IRL User",
    mobile: 120,
    desktop: 110,
    fullMark: 150,
  },
  {
    subject: "Smart",
    mobile: 98,
    desktop: 130,
    fullMark: 150,
  },
  {
    subject: "Explorer",
    mobile: 86,
    desktop: 130,
    fullMark: 150,
  },
  {
    subject: "Whale",
    mobile: 99,
    desktop: 100,
    fullMark: 150,
  },
  {
    subject: "Devotee",
    mobile: 85,
    desktop: 90,
    fullMark: 150,
  },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;
export default function Dashboard() {
  return (
    <div>
      <div className="flex gap-4 px-6">
        <section className="w-[30%] flex flex-col items-center col-span-1 border border-gray-200 rounded-lg p-6 my-6 ">
          <div className="flex justify-center items-center bg-indigo-200 text-indigo-600 font-bold w-[60px] h-[60px] rounded-[9999px] p-10">
            0x7F...
          </div>
          <h1 className="text-xl font-bold text-gray-700">Explorer Type</h1>
          <div className="flex flex-col items-center mt-2 text-sm">
            <p className="text-gray-500">활동 체인: 5개</p>{" "}
            <p className="text-gray-500">활성 프로토콜: 12개</p>{" "}
            <p className="text-gray-500">POAP: 23개</p>
          </div>
          <Button className="mt-4" variant="purple">
            View Persona
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
        <section className="w-[30%] flex flex-col items-center col-span-1 border border-gray-200 rounded-lg p-6 my-6 ">
          <h1 className="text-xl font-bold text-gray-700">Persona Index</h1>
          <ChartContainer config={chartConfig} className="w-full">
            <RadarChart data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                fill="#8884d8"
                fillOpacity={0.6}
                dataKey="desktop"
                radius={4}
              />
            </RadarChart>
          </ChartContainer>
        </section>
        <section className="flex flex-col w-[40%] border border-gray-200 rounded-lg p-6 my-6">
          <div className="bg-indigo-500 rounded-lg px-4 py-2">
            <h1 className="text-xl font-bold text-white">AI Assistant</h1>
          </div>

          <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200 w-fit mr-12">
            <p>
              안녕하세요! 당신의 Explorer 페르소나에 맞는 새로운 DeFi 기회를
              찾아볼까요?
            </p>
          </div>
          <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-indigo-100 rounded-xl p-4 border border-indigo-200 w-fit ml-12">
            <p>
              네, 최근에 Arbitrum 체인에서 APY가 높은 프로토콜을 찾고 있어요.
            </p>
          </div>
          <div className="mt-auto">
            <div className="mt-10 flex items-center">
              <Input className="w-full " placeholder="Ask me anything..." />
              <Button variant="purple">
                <ArrowUp />
              </Button>
            </div>
          </div>
        </section>
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
                  0x4B...
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
