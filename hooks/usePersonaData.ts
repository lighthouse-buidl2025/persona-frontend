import { useState, useEffect } from "react";
import { toast } from "sonner";
import { UsePersonaDataReturn, PersonaData } from "@/types";

export function usePersonaData(
  address: string | undefined
): UsePersonaDataReturn {
  const [data, setData] = useState<PersonaData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateData = async () => {
    if (!address) return;

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`/api/persona-engine/update/${address}`);
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
  const fetchData = async () => {
    if (!address) return;

    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`/api/persona-engine/wallet/${address}`);
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

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
    updateFetch: updateData,
  };
}
