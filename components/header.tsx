"use client";

import Link from "next/link";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
// import { TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
// import { Tooltip } from "@radix-ui/react-tooltip";
// import { TooltipContent } from "@radix-ui/react-tooltip";
// import { AlertTriangle } from "lucide-react";

export default function Header() {
  return (
    <header className="font-semibold mt-4 text-white w-[1200px] mx-auto bg-indigo-500 rounded-lg py-4 px-8">
      <nav>
        <div className="flex justify-between items-center">
          <div>
            <Link href="/dashboard" className="text-2xl">
              Persona Chain AI
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/persona">Persona</Link>
            <Link href="/recommendations">Recommended</Link>
            <Link href="/">Automation</Link>
            <Link href="/">Community</Link>
            {/* <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AlertTriangle className="text-orange-400 w-5 h-5 cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="bg-white text-black text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                    ✉️ 이메일이 아직 연동되지 않았어요. <br />
                    <button className="text-indigo-600 underline mt-1">
                      지금 연동하기
                    </button>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider> */}
            <DynamicWidget innerButtonComponent={<>Sign in</>} />
          </div>
        </div>
      </nav>
    </header>
  );
}
