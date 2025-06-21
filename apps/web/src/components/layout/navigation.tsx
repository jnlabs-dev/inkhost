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
        <Link href="/explore" className="text-sm font-medium hover:underline">
          Explore Studios
        </Link>
        <Button variant="outline">Sign In</Button> {/* Placeholder for now */}
      </div>
    </nav>
  );
}
