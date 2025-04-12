import { MoveUp } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { dummyAgents } from "@/utils/dummyData";
import useAgents from "@/hooks/use-agents";
import { useAgentStore } from "@/stores/use-agent-store";
import { toast } from "sonner";

export default function AIAssistant({ className }: { className?: string }) {
  const [message, setMessage] = useState("");
  const { data: agents, isLoading, error } = useAgents();
  const { selectedAgentId, setAgentId } = useAgentStore();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const submit = async () => {
    if (!selectedAgentId) {
      toast.error("Agent not selected");
      return;
    }

    console.log(message);

    const response = await fetch(
      `/api/eliza-agent/${selectedAgentId}/message`,
      {
        method: "POST",
        body: JSON.stringify({ message }),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <section
      className={cn(
        "bg-white shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] flex flex-col border border-gray-200 rounded-lg p-6",
        className
      )}
    >
      <div className="bg-indigo-500 rounded-lg px-4 py-2">
        <h1 className="text-xl font-bold text-white font-[family-name:var(--font-poppins)]">
          AI Assistant
        </h1>
      </div>

      <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-gray-100 rounded-xl p-4 border border-gray-200 w-fit mr-12">
        <p>
          Hello! Shall we find new DeFi opportunities that match your Explorer
          persona?
        </p>
      </div>
      <div className="flex gap-y-4 gap-x-2 items-center mt-2 text-sm bg-indigo-100 rounded-xl p-4 border border-indigo-200 w-fit ml-12">
        <p>네, 최근에 Arbitrum 체인에서 APY가 높은 프로토콜을 찾고 있어요.</p>
      </div>
      <div className="mt-auto">
        <div className="mt-10 flex items-center gap-2">
          <Input
            className="w-full"
            value={message}
            placeholder="Enter message..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant="purple"
            className="rounded-full w-8 h-8 p-2.5"
            onClick={submit}
          >
            <MoveUp />
          </Button>
        </div>
      </div>
    </section>
  );
}
