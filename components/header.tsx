"use client";

import Link from "next/link";
import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { AlertTriangle } from "lucide-react";
import EmailModal from "@/components/email-modal";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
interface UserData {
  _id: string;
  address: string;
  email: string;
  telegram: string;
  createdAt: string;
  __v: number;
}
export default function Header() {
  const pathname = usePathname();
  const isTransparent = pathname === "/";
  const { primaryWallet } = useDynamicContext();
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      if (!primaryWallet?.address) return;

      try {
        setIsLoading(true);
        // Check if user exists
        const response = await fetch(`/api/user/${primaryWallet.address}`);
        const data = await response.json();

        if (data.success) {
          setUserData(data.data);
        } else {
          // If user doesn't exist, open email modal for signup
          handleSignup(primaryWallet.address);
        }
      } catch (error) {
        console.error("Error checking user:", error);
        toast.error("Error checking user status");
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();
  }, [primaryWallet?.address]);

  const handleSignup = async (walletAddress: string) => {
    if (walletAddress) {
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            walletAddress: walletAddress,
          }),
        });

        const data = await response.json();
        console.log("Login successful:", data);
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  return (
    <header
      className={cn(
        "font-semibold mt-4 text-white w-[1200px] mx-auto rounded-lg px-8 font-[family-name:var(--font-poppins)]",
        isTransparent
          ? "bg-transparent"
          : "bg-indigo-500 shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
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

            {userData?.address && (
              <div className="flex gap-4 items-center font-light text-gray-800">
                <Link
                  href="/dashboard"
                  className={cn(
                    "py-4 w-[110px] text-center relative",
                    isTransparent ? "text-gray-800" : "text-white",
                    {
                      "text-indigo-500":
                        pathname === "/dashboard" && isTransparent,
                    }
                  )}
                >
                  Dashboard
                  {pathname === "/dashboard" && !isTransparent && (
                    <span className="absolute bottom-0 left-0 w-[110px] h-[10px] bg-white"></span>
                  )}
                </Link>
                <Link
                  href="/persona"
                  className={cn(
                    "py-4 w-[90px] text-center relative",
                    isTransparent ? "text-gray-800" : "text-white",
                    {
                      "text-indigo-500":
                        pathname === "/persona" && isTransparent,
                    }
                  )}
                >
                  Persona
                  {pathname === "/persona" && !isTransparent && (
                    <span className="absolute bottom-0 left-0 w-[90px] h-[10px] bg-white"></span>
                  )}
                </Link>
                <Link
                  href="/recommendations"
                  className={cn(
                    "py-4 w-[132px] relative",
                    isTransparent ? "text-gray-800" : "text-white",
                    {
                      "text-indigo-500":
                        pathname === "/recommendations" && isTransparent,
                    }
                  )}
                >
                  Recommended
                  {pathname === "/recommendations" && !isTransparent && (
                    <span className="absolute bottom-0 left-0 w-[132px] h-[10px] bg-white"></span>
                  )}
                </Link>
                <Link
                  href="/automation"
                  className={cn(
                    "py-4 w-[110px] text-center relative",
                    isTransparent ? "text-gray-800" : "text-white",
                    {
                      "text-indigo-500":
                        pathname === "/automation" && isTransparent,
                    }
                  )}
                >
                  Automation
                  {pathname === "/automation" && !isTransparent && (
                    <span className="absolute bottom-0 left-0 w-[110px] h-[10px] bg-white"></span>
                  )}
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            {userData?.address && !userData?.email && (
              <div className="relative group">
                <AlertTriangle className="text-yellow-300 w-5 h-5 cursor-pointer" />
                <div className="absolute flex flex-col items-center top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                  ✉️ Please connect your email <br />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="text-indigo-600 underline mt-1 text-center hover:cursor-pointer"
                        onClick={() => setIsEmailModalOpen(true)}
                        disabled={isLoading}
                      >
                        Connect now
                      </Button>
                    </DialogTrigger>
                    <EmailModal
                      open={isEmailModalOpen}
                      onOpenChange={setIsEmailModalOpen}
                    />
                  </Dialog>
                </div>
              </div>
            )}
            <DynamicWidget innerButtonComponent={<>Log in</>} />
          </div>
        </div>
      </nav>
    </header>
  );
}
