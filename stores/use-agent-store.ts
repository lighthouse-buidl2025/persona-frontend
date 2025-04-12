// stores/useAgentStore.ts
import { create } from "zustand";

type AgentStore = {
  selectedAgentId: string | null;
  setAgentId: (id: string) => void;
};

export const useAgentStore = create<AgentStore>((set) => ({
  selectedAgentId: null,
  setAgentId: (id) => set({ selectedAgentId: id }),
}));
