import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { toast } from "sonner";

export default function EmailModal({
  onOpenChange,
}: {
  onOpenChange: (open: boolean) => void;
}) {
  const { primaryWallet } = useDynamicContext();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const updateEmail = async () => {
    if (!primaryWallet?.address) {
      console.error("No wallet address found");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(`/api/user/email/${primaryWallet.address}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Email updated successfully!");
        onOpenChange(false);
      } else {
        toast.error("Failed to update email");
        console.error("Failed to update email:", data.error);
      }
    } catch (error) {
      toast.error("Error updating email");
      console.error("Error updating email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Update your email</DialogTitle>
        <DialogDescription>
          By updating your email, you will receive important notifications from
          PersonaChain AI.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="col-span-3"
            placeholder="Enter your email address"
          />
        </div>
      </div>
      <DialogFooter>
        <Button
          type="submit"
          onClick={updateEmail}
          disabled={isLoading}
          className="bg-indigo-500 text-white"
        >
          {isLoading ? "Saving..." : "Save changes"}
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
