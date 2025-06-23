// apps/web/components/layout/navigation.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <Link href="/" className="text-xl font-bold">
        InkHost
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/studios" className="text-sm font-medium hover:underline">
          Explore Studios
        </Link>
        <Link href="/login">
          <Button>Sign In</Button>
        </Link>
        <Link href="/register">
          <Button variant="secondary">Sign Up</Button>
        </Link>
      </div>
    </nav>
  );
}
