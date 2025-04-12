import { useQuery } from "@tanstack/react-query";
import { ContractItem } from "@/types";
import { dummyPersonaGroup } from "@/utils/dummyData";
type Props = {
  address?: string;
  group: string;
};

const fetchPersonaGroup = async ({
  address,
  group,
}: Props): Promise<ContractItem[]> => {
  if (!address) return [];

  const response = await fetch(
    `/api/persona-engine/category/${group}?address=${address}`
  );
  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || "Failed to fetch persona group data");
  }

  return result.data.contracts;
};

export default function usePersonaGroup({ address, group }: Props) {
  const { data, isLoading, error, refetch } = useQuery<ContractItem[], Error>({
    queryKey: ["personaGroup", address, group],
    queryFn: () => fetchPersonaGroup({ address, group }),
    enabled: !!address && !!group,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10, // 10분 캐시
  });

  return { data: dummyPersonaGroup, isLoading, error, refetch };
}
