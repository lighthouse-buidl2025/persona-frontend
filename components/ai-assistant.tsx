import { MoveUp } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, KeyboardEvent } from "react";
import useAgents, { Agent } from "@/hooks/use-agents";
import { useAgentStore } from "@/stores/use-agent-store";
import { toast } from "sonner";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

interface Message {
  action: string;
  text: string;
  user: string;
}

export default function AIAssistant({ className }: { className?: string }) {
  const [message, setMessage] = useState("");
  const { agents, filteredAgents, isLoading, error, selectAgent } = useAgents();
  const { selectedAgentId, setAgentId } = useAgentStore();

  const { primaryWallet } = useDynamicContext();
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 에이전트가 로드되면 첫 번째 에이전트를 자동 선택
    if (agents && agents.length > 0 && !selectedAgentId) {
      const firstAgentId = agents[0].id;
      console.log(firstAgentId);
      setAgentId(firstAgentId);
      selectAgent(firstAgentId);
    }
  }, [agents, selectedAgentId, setAgentId, selectAgent]);

  // const [messages, setMessages] = useState<Message[]>([]);

  const [messages, setMessages] = useState<Message[]>([]);

  // 새 메시지가 추가될 때 스크롤을 아래로 내립니다
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // 컴포넌트가 마운트되면 input에 포커스를 줍니다
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const selectedAgent = agents?.find(
    (agent: any) => agent.id === selectedAgentId
  );

  const handleAgentChange = (id: string) => {
    setAgentId(id);
    selectAgent(id);
    toast.success(
      `에이전트가 변경되었습니다: ${
        agents?.find((agent: any) => agent.id === id)?.name
      }`
    );
  };

  const submit = async () => {
    if (!selectedAgentId) {
      toast.error("Agent not selected");
      return;
    }

    if (!message.trim()) {
      return; // 빈 메시지는 전송하지 않습니다
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { action: "send", text: message, user: "user" },
    ]);

    // 메시지 전송 후 입력창을 비웁니다
    setMessage("");

    try {
      const response = await fetch(
        `/api/eliza-agent/${selectedAgentId}/message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            roomId: primaryWallet?.address || "demo-room",
            text: message,
            source: "next",
          }),
        }
      );

      const data = await response.json();

      // 로딩 메시지를 실제 응답으로 교체
      if (data.data && data.data[0]) {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages, data.data[0]];
          return updatedMessages;
        });
      } else {
        // 응답 형식이 예상과 다른 경우
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          return updatedMessages;
        });
      }
    } catch (error) {
      console.error("Message sending error:", error);

      // 에러 발생 시 로딩 메시지를 에러 메시지로 교체
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        return updatedMessages;
      });

      toast.error("메시지 전송에 실패했습니다.");
    }

    // 메시지 전송 후 스크롤을 아래로 내립니다
    setTimeout(() => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop =
          messagesContainerRef.current.scrollHeight;
      }
      // 입력창에 다시 포커스를 줍니다
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  // 엔터 키 처리 함수
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // 기본 엔터 동작을 방지합니다
      submit();
    }
  };

  return (
    <section
      className={cn(
        "bg-white shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] flex flex-col border border-gray-200 rounded-lg p-6",
        className
      )}
      style={{ height: "750px", width: "100%" }}
    >
      {/* 전체 컨테이너를 일정한 최대 너비로 제한 */}
      <div
        className="w-full mx-auto flex flex-col h-full"
        style={{ maxWidth: "500px" }}
      >
        {/* 헤더 섹션 */}
        <div className="bg-indigo-500 rounded-lg px-4 py-2 flex justify-between items-center mb-3 w-full">
          <h1 className="text-xl font-bold text-white font-[family-name:var(--font-poppins)]">
            AI Assistant
          </h1>
          <div className="relative">
            <select
              className="bg-indigo-600 text-white rounded px-2 py-1 text-sm"
              value={selectedAgentId || ""}
              onChange={(e) => handleAgentChange(e.target.value)}
            >
              {agents?.map((agent: any) => (
                <option key={agent.id} value={agent.id}>
                  {agent.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 에이전트 정보 섹션 */}
        {selectedAgent && (
          <div className="flex items-center gap-2 mb-3 px-2 w-full">
            {selectedAgent.avatarUrl && (
              <img
                src={selectedAgent.avatarUrl}
                alt={selectedAgent.name}
                className="w-8 h-8 rounded-full"
              />
            )}
            <div>
              <p className="text-sm font-semibold">{selectedAgent.name}</p>
              <p className="text-xs text-gray-500">
                {selectedAgent.description}
              </p>
            </div>
          </div>
        )}

        {/* 스크롤 가능한 메시지 컨테이너 - 고정 높이 설정 */}
        <div
          ref={messagesContainerRef}
          className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pr-2 w-full flex-1"
          style={{ flexShrink: 1, flexGrow: 1 }}
        >
          <div className="flex flex-col w-full">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.user === "user" ? "justify-end" : "justify-start"
                } mb-2`}
              >
                <div
                  className={`rounded-xl px-4 py-3 max-w-[80%] ${
                    msg.user === "user"
                      ? "bg-indigo-100 border border-indigo-200"
                      : "bg-gray-100 border border-gray-200"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 입력 영역 */}
        <div className="pt-4 w-full">
          <div className="flex items-center gap-2">
            <Input
              ref={inputRef}
              className="w-full"
              value={message}
              placeholder="Enter message..."
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
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
      </div>
    </section>
  );
}
