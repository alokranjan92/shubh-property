import { UserButton } from "@clerk/nextjs";
import { hasValidClerkKeys } from "@/lib/auth/clerk";

export function SafeUserButton() {
  if (!hasValidClerkKeys()) {
    return (
      <div className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
        Auth setup pending
      </div>
    );
  }

  return <UserButton afterSignOutUrl="/" />;
}
