import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function AutomationRuleCard() {
  return (
    <div className="border border-blue-300 rounded-lg p-4 shadow-md bg-white relative">
      <div className="absolute top-2 right-2">
        
      </div>
      <div className="flex items-center gap-2 mb-2">
        <CheckCircle className="text-green-500" />
        <div className="font-semibold text-md text-gray-700">
          Transaction Automation
        </div>
      </div>
      <p className="text-xs text-gray-500 mb-4">Interval:120 | TimeOut:20 | Loop : 10</p>

      <div className="grid grid-cols-3 text-sm text-gray-700 bg-blue-50 p-3 rounded-md mb-4">
        <div>
          <div className="font-medium mb-1 text-gray-500">Method(Params...)</div>
          <div>Transfer(1 weth, 0xa3Cf3...)</div>
        </div>
        <div>
          <div className="font-medium mb-1 text-gray-500">Target Contract Address</div>
          <div>wETH(0xc02aa....83c756cc2)</div>
        </div>
        <div>
          <div className="font-medium mb-1 text-gray-500">Max Gasfee</div>
          <div>25 Gwei</div>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm">Edit</Button>
        <Button variant="destructive" size="sm">Stop</Button>
      </div>
    </div>
  );
}
