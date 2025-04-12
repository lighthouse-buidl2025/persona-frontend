import { toast } from "sonner";
import { UsePersonaDataReturn, PersonaData } from "@/types";
import { dummyPersonaData } from "@/utils/dummyData";
import { useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
const updateData = async (address: string) => {
  if (!address) return;

  const response = await fetch(`/api/persona-engine/update/${address}`);
  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || "Failed to fetch persona data");
  }
  return result.data;
};
const fetchData = async (address: string) => {
  if (!address) return;

  const response = await fetch(`/api/persona-engine/wallet/${address}`);
  const result = await response.json();

  if (!result.success) {
    throw new Error(result.error || "Failed to fetch persona data");
  }
  return result.data;
};

export function usePersonaData(
  address: string | undefined
): UsePersonaDataReturn {
  const queryClient = useQueryClient();

  const { data, isLoading, error, refetch } = useQuery<PersonaData, Error>({
    queryKey: ["personaData", address],
    queryFn: () => fetchData(address!),
    enabled: !!address,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 1,
  });

  const { mutateAsync: updateFetch } = useMutation({
    mutationFn: () => updateData(address!),
    onSuccess: (updatedData) => {
      queryClient.setQueryData(["personaData", address], updatedData);
    },
    onError: (err: any) => {
      toast.error(err.message || "Update failed");
    },
  });
  console.log({ dummyPersonaData });
  return {
    data: dummyPersonaData, // TODO: remove dummy data
    isLoading,
    error: error?.message ?? null,
    refetch,
    updateFetch,
  };
}
