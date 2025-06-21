import Link from "next/link";
import { Shell } from "@/components/layout/shell";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Shell>
      <div className="space-y-6 max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Guest at Studios. Book Artists. Anywhere.
        </h1>
        <p className="text-muted-foreground text-lg">
          InkHost connects traveling tattoo artists with studios around the world.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/explore">
            <Button size="lg">Explore Studios</Button>
          </Link>
          <Button variant="outline" size="lg">Sign In</Button>
        </div>
      </div>
    </Shell>
  );
}