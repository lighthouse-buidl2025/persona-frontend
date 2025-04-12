"use client";

import Link from "next/link";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const isTransparent = true;

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "font-semibold mt-4 text-white w-[1200px] mx-auto rounded-lg py-4 px-8 font-[family-name:var(--font-poppins)]",
        {
          "bg-transparent": isTransparent,
          "bg-indigo-500": !isTransparent,
        }
      )}
    >
      <nav>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className={cn("text-2xl font-medium mr-8", {
                "text-indigo-500": isTransparent,
              })}
            >
              PersonaChain AI
            </Link>

            <div className="flex gap-4 items-center font-light text-gray-800">
              <Link
                href="/dashboard"
                className={cn({
                  "font-semibold text-indigo-500": pathname === "/dashboard",
                })}
              >
                Dashboard
              </Link>
              <Link
                href="/persona"
                className={cn({
                  "font-semibold text-indigo-500": pathname === "/persona",
                })}
              >
                Persona
              </Link>
              <Link
                href="/recommendations"
                className={cn({
                  "font-semibold text-indigo-500":
                    pathname === "/recommendations",
                })}
              >
                Recommendations
              </Link>
              <Link
                href="/automation"
                className={cn({
                  "font-semibold text-indigo-500": pathname === "/automation",
                })}
              >
                Automation
              </Link>
            </div>
          </div>{" "}
          <DynamicWidget innerButtonComponent={<>Log in</>} />
        </div>
      </nav>
    </header>
  );
}
