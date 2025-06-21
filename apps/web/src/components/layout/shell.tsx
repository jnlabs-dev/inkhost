// apps/web/components/layout/shell.tsx
import { ReactNode } from "react";
import { Navigation } from "@/components/layout/navigation";
import { Separator } from "@/components/ui/separator";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 px-6 py-8">
        {children}
      </main>

      <Separator />
      <footer className="px-6 py-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} InkHost
      </footer>
    </div>
  );
}
