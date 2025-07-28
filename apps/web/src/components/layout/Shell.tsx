
import { ReactNode } from "react";
import { Navigation } from "@/components/navigation/Navigation";
import { Separator } from "@/components/ui/base/Separator";
import { cn } from "@/lib/utils";


export function Shell({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navigation />

      <main className={"flex-1 overflow-y-auto"}>
        <div className={cn("", className)}>
        {children}
        </div>
      </main>

      <Separator />
      <footer className="shrink-0 px-6 py-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} InkHost
      </footer>
    </div>
  );
}
