import { dummyAgents } from "@/utils/dummyData";
import { useQuery } from "@tanstack/react-query";
import { useState, useCallback, useMemo } from "react";

export type Agent = {
  id: string;
  name: string;
  description: string;
  avatarUrl: string;
  status: "active" | "inactive";
  category: string;
};

export default function useAgents() {
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const agentsQuery = useQuery({
    queryKey: ["agents"],
    queryFn: async () => {
      // TODO: API 구현 후 주석 해제
      const response = await fetch("/api/eliza-agent/agents");
      const json = await response.json();
      console.log(json);
      return json.data.agents;
      // return dummyAgents.agents;
    },
  });

  const filteredAgents = useMemo(() => {
    const agents = agentsQuery.data || [];

    return agents.filter((agent: any) => {
      const matchesSearch =
        filter === "" ||
        agent.name?.toLowerCase().includes(filter.toLowerCase()) ||
        agent.description?.toLowerCase().includes(filter.toLowerCase());

      const matchesCategory =
        categoryFilter === "all" || agent.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [agentsQuery.data, filter, categoryFilter]);

  const selectedAgent = useMemo(() => {
    if (!selectedAgentId || !agentsQuery.data) return null;
    return (
      agentsQuery.data.find((agent: any) => agent.id === selectedAgentId) ||
      null
    );
  }, [agentsQuery.data, selectedAgentId]);

  const selectAgent = useCallback((id: string) => {
    setSelectedAgentId(id);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedAgentId(null);
  }, []);

  return {
    agents: agentsQuery.data,
    filteredAgents,
    isLoading: agentsQuery.isLoading,
    isError: agentsQuery.isError,
    error: agentsQuery.error,
    selectedAgent,
    selectedAgentId,
    selectAgent,
    clearSelection,
    filter,
    setFilter,
    categoryFilter,
    setCategoryFilter,
  };
}
