import { dummyAgents } from "@/utils/dummyData";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useAgents() {
  return useQuery({
    queryKey: ["agents"],
    queryFn: async () => {
      //   const response = await fetch("/api/eliza-agent/agents");
      //   const json = await response.json();
      //   return json.data.agents;
      return dummyAgents.agents;
    },
    staleTime: 1000 * 60 * 5, // 5분 캐싱
  });
}
