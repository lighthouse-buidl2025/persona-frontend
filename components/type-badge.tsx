import { getSortedUserType } from "@/utils";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { Button } from "./ui/button";
import Link from "next/link";
import { PersonaData } from "@/types";

export default function TypeBadge({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data: PersonaData | null;
}) {
  const { primaryWallet } = useDynamicContext();

  return (
    <section className="bg-white shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] w-[30%] flex flex-col items-center col-span-1 border border-gray-200 rounded-lg p-6">
      <div className="flex justify-center items-center bg-indigo-200 text-indigo-600 font-bold w-[60px] h-[60px] rounded-[9999px] p-10">
        {primaryWallet?.address.slice(0, 4)}...
      </div>
      <h1 className="text-xl font-bold text-gray-700 mt-2 font-[family-name:var(--font-poppins)]">
        {getSortedUserType(data)[0]} Type
      </h1>
      {isLoading ? (
        <div className="flex flex-col items-center mt-2 text-sm">
          <p className="text-gray-500">Loading...</p>
        </div>
      ) : data ? (
        <div className="flex flex-col items-center mt-2 text-sm">
          <p className="text-gray-500">
            Active Chains: {data.wallet.distinct_contract_count}
          </p>
          <p className="text-gray-500">
            DEX Platforms: {data.wallet.dex_platform_diversity}
          </p>
        </div>
      ) : null}
      <Link href={`/persona`}>
        <Button
          className="mt-4 rounded-4xl font-[family-name:var(--font-poppins)]"
          variant="purple"
        >
          View Detailed Persona
        </Button>
      </Link>
    </section>
  );
}
