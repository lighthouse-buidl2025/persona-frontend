"use client";

import Link from "next/link";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

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
            <Link href="/">Recommendations</Link>
            <Link href="/">Automation</Link>
            <Link href="/">Community</Link>
            <DynamicWidget />
          </div>
        </div>
      </nav>
    </header>
  );
}
