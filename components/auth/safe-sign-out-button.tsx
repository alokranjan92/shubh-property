import { SignOutButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hasValidClerkKeys } from "@/lib/auth/clerk";

export function SafeSignOutButton() {
  if (!hasValidClerkKeys()) {
    return (
      <Button variant="outline" disabled>
        <LogOut className="h-4 w-4" aria-hidden="true" />
        Logout unavailable
      </Button>
    );
  }

  return (
    <SignOutButton redirectUrl="/">
      <Button variant="outline">
        <LogOut className="h-4 w-4" aria-hidden="true" />
        Logout
      </Button>
    </SignOutButton>
  );
}
