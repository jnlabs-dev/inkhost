import { Shell } from "@/components/layout/shell";
import { HeroSection } from "@/components/landing/hero-section";
import { JoinInkHostSection } from "@/components/landing/join-inkhost-section";


export default function LandingPage() {
  return (
    <Shell>
      <HeroSection />
      <JoinInkHostSection />
    </Shell>
  );
}