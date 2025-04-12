import { Category, ContractItem } from "@/types";
import { formatDate } from "@/utils/dateFormat";
import { TableBody, TableCell } from "./ui/table";
import { Table, TableHead, TableHeader, TableRow } from "./ui/table";

export default function RecommendationHistory({
  groupData,
}: {
  groupData: ContractItem[];
}) {
  return (
    <section className="bg-white shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] h-fit rounded-lg p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-700 font-[family-name:var(--font-poppins)]">
        Recommendation History
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="text-bold  font-[family-name:var(--font-poppins)]">
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Recommended Item</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Compatibility</TableHead>
            <TableHead>PnL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {groupData.slice(0, 1).map((data, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {formatDate(data.created_at)}
              </TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>
                {data.category === Category.unknown ? "N/A" : "NFT"}
              </TableCell>
              <TableCell>87%</TableCell>
              <TableCell className="text-green-500">+ 12.4 %</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
