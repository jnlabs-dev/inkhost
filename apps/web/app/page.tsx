import { Shell } from "@/components/layout/shell";
import { HeroSection } from "@/components/landing/heroSection";
import { JoinInkHostSection } from "@/components/landing/joinInkhostSection";
import { TrustedBySection } from "@/components/landing/trustedBySection";


export default function LandingPage() {
  return (
    <Shell>
      <HeroSection />
      <JoinInkHostSection />
      <TrustedBySection />
    </Shell>
  );
}