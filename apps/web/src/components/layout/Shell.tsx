
import { ReactNode } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Separator } from "@/components/ui/base/Separator";
import { cn } from "@/lib/utils";


export function Shell({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className={cn("flex-1", className)}>
        {children}
      </main>

      <Separator />
      <footer className="px-6 py-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} InkHost
      </footer>
    </div>
  );
}
