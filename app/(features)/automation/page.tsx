"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import AIAssistant from "@/components/ai-assistant";
import RecommendationHistory from "@/components/recommendation-history";
import TypeBadge from "@/components/type-badge";
import AutomationActivityLog from "@/components/automation/automation-activity-log";
import AutomationRuleCard from "@/components/automation/automation-rule-card";

export default function Automation() {
  const { primaryWallet } = useDynamicContext();
  const address = primaryWallet?.address;
  return (
    <div>
      <h1 className="font-[family-name:var(--font-poppins)] text-2xl font-bold p-6 text-gray-700">
        Automation
      </h1>
      <p className="text-gray-500 px-6 mb-4 font-[family-name:var(--font-poppins)]">
        Set up automated trading strategies and investment services tailored to
        your persona type.
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <TypeBadge isLoading={false} data={null} />
          <section className="w-full bg-white shadow-[0px_4px_8px_2px_rgba(0,0,0,0.25)] flex flex-col border border-gray-200 rounded-lg p-6">
            <h1 className="text-xl font-bold text-gray-700 font-[family-name:var(--font-poppins)]">
              Automation Rules
            </h1>
            <p className="text-gray-500 font-[family-name:var(--font-poppins)]">
              Set up automated trading strategies and investment services
              tailored to your persona type.
            </p>
            <AutomationRuleCard></AutomationRuleCard>
            <Button className="mt-4" variant="outline">
              + Add New Automation Rule
            </Button>
          </section>
        </div>
        <div>
          <AutomationActivityLog />
        </div>
      </div>
    </div>
  );
}
