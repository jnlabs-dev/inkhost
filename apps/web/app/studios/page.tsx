import { Shell } from "@/components/layout/shell";
import { HeroSection } from "@/components/landing/hero-section";
import { JoinInkHostSection } from "@/components/landing/join-inkhost-section";
import { InteractiveMap } from "@/components/ui/interactive-map.client";

export default function ExploreStudiosPage() {
  return (
    <Shell>
      <InteractiveMap />
    </Shell>
  );
}