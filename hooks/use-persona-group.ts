import { ContractItem } from "@/types";
import { dummyPersonaGroup } from "@/utils/dummyData";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function usePersonaGroup({
  address,
  group,
}: {
  address?: string;
  group: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ContractItem[] | null>([]);

  const fetchData = async () => {
    if (!address) return;

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        `/api/persona-engine/category/${group}?address=${address}`
      );
      const result = await response.json();

      if (result.success) {
        setData(result.data);
      } else {
        setError(result.error || "Failed to fetch persona data");
        toast.error(result.error || "Failed to fetch persona data");
      }
    } catch (err) {
      const errorMessage = "Error fetching persona data";
      setError(errorMessage);
      toast.error(errorMessage);
      console.error(errorMessage, err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [address]);

  return { data: dummyPersonaGroup, isLoading, error }; // TODO: remove dummy data
}
