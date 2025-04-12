import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "../ui/table";
export default function AutomationActivityLog() {
  const invoices = [
    {
      invoice: "AUTO001",
      paymentStatus: "Executed",
      totalAmount: "1 wETH",
      paymentMethod: "Transfer to 0x3aCf3...",
    },
    {
      invoice: "AUTO002",
      paymentStatus: "Timeout",
      totalAmount: "0.5 wETH",
      paymentMethod: "Transfer to 0x5bF12...",
    },
    {
      invoice: "AUTO003",
      paymentStatus: "Failed",
      totalAmount: "1.2 wETH",
      paymentMethod: "Transfer to 0x3aCf3...",
    },
    {
      invoice: "AUTO004",
      paymentStatus: "Executed",
      totalAmount: "0.8 wETH",
      paymentMethod: "Transfer to 0xc02aa...83c756cc2",
    },
  ];

  return (
    <section className="bg-white shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] h-fit rounded-lg p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-700 font-[family-name:var(--font-poppins)]">
        Automation Activity Log
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="text-bold  font-[family-name:var(--font-poppins)]">
            <TableHead className="w-[100px]">Date and Time</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Automation Rule</TableHead>
            <TableHead>Result</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
