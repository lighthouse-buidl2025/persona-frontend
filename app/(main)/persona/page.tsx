"use client";
import { Progress } from "@/components/ui/progress";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Line, LineChart, CartesianGrid } from "recharts";
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

export default function Persona() {
  const { primaryWallet } = useDynamicContext();
  const address = primaryWallet?.address;

  return (
    <div>
      <h1 className="text-2xl font-bold p-6 text-gray-700">Persona Analysis</h1>
      <p className="text-gray-500 px-6 mb-4">
        지갑{" "}
        {address
          ? `${address.slice(0, 4)}...${address.slice(-4)}`
          : "연결되지 않음"}
        의 온체인 행동 패턴 분석 결과
      </p>
      <div className="">
        <section className="px-6">
          <div className="rounded-lg flex justify-around bg-slate-100 border border-gray-200 p-4">
            {theme.map((el) => (
              <Card type={el.type} color={el.color} key={el.type} />
            ))}
          </div>
        </section>
      </div>
      <div className="flex">
        <section className="w-1/2 border border-gray-200 rounded-lg m-6 p-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Persona Detailed Index
          </h2>
          {theme.map((el) => (
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
                <Progress
                  value={87}
                  indicatorClassName={cn({
                    "bg-blue-500": el.color === "blue",
                    "bg-yellow-500": el.color === "yellow",
                    "bg-green-500": el.color === "green",
                    "bg-pink-500": el.color === "pink",
                  })}
                />
                <div className="flex flex-col gap-1 mt-2 text-sm">
                  <p>사용 체인 수: 6개 (상위 10%)</p>
                  <p>사용한 프로토콜 수: 12개 (상위 8%)</p>
                  <p>새로운 프로토콜 탐색 빈도: 매우 높음</p>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="h-fit w-1/2 border border-gray-200 rounded-lg m-6 p-6">
          <h2 className="text-xl font-bold text-gray-700">
            On-chain Activity Analysis
          </h2>
          <ChartContainer config={chartConfig} className="w-full">
            <LineChart data={chartData}>
              <CartesianGrid vertical={false} />
              <Line
                dataKey="desktop"
                stroke="var(--color-desktop)"
                radius={4}
              />
              <Line dataKey="mobile" stroke="var(--color-mobile)" radius={4} />
            </LineChart>
          </ChartContainer>
        </section>
      </div>
    </div>
  );
}

const theme: {
  type: "Explorer" | "Smart" | "Whale" | "Degen";
  color: string;
}[] = [
  { type: "Explorer", color: "blue" },
  { type: "Smart", color: "green" },
  { type: "Whale", color: "yellow" },
  { type: "Degen", color: "pink" },
];

import { cn } from "@/lib/utils";
import MainTemplates from "@/components/main-templates";

function Card({
  type,
  color,
}: {
  type: "Explorer" | "Smart" | "Whale" | "Degen";
  color: string;
}) {
  return (
    <div
      className={cn("rounded-lg w-[180px] h-[90px]", {
        "bg-blue-100": color === "blue",
        "bg-green-100": color === "green",
        "bg-yellow-100": color === "yellow",
        "bg-pink-100": color === "pink",
      })}
    >
      <div
        className={cn("flex flex-col items-center justify-center h-full", {
          "text-blue-500": color === "blue",
          "text-green-500": color === "green",
          "text-yellow-500": color === "yellow",
          "text-pink-500": color === "pink",
        })}
      >
        <div className="text-lg font-semibold">{type}</div>
        <div>8.7 / 10</div>
      </div>
    </div>
  );
}
