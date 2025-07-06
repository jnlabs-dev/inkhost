import { Shell } from "@/components/layout/Shell";
import { InteractiveMap } from "@/components/ui/InteractiveMap/InteractiveMap.client";

export default function ExploreStudiosPage() {
  return (
    <Shell className="flex">
      <InteractiveMap className="w-full" />
    </Shell>
  );
}