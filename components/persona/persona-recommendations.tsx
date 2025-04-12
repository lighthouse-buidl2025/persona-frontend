import { ContractItem } from "@/types";
import Protocols from "../common/protocols";

export default function PersonaRecommendations({
  groupData,
}: {
  groupData: ContractItem[] | undefined;
}) {
  return (
    <section className="bg-white shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] w-[40%] border border-gray-200 rounded-lg p-6">
      <h1 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-gray-700">
        Recommendations
      </h1>
      <p className="text-gray-500 font-[family-name:var(--font-poppins)] text-sm">
        Optimal profit opportunities that match your persona
      </p>{" "}
      <div className="max-h-[342px] overflow-y-auto">
        {groupData ? <Protocols groupData={groupData} /> : null}
      </div>
    </section>
  );
}
