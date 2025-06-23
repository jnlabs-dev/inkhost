import { Shell } from "@/components/layout/shell";
import { Hero } from "@/components/home/hero";
import { InteractiveMap } from "@/components/ui/interactive-map.client";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <InteractiveMap />
    </Shell>
  );
}