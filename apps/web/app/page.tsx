import { Shell } from "@/components/layout/shell";
import { HeroSection } from "@/components/landing/heroSection";
import { JoinInkHostSection } from "@/components/landing/joinInkhostSection";
import { TrustedBySection } from "@/components/landing/trustedBySection";
import { PlatformBenefitsSection } from "@/components/landing/platformBenefitsSection";

export default function LandingPage() {
  return (
    <Shell>
      <HeroSection />
      <JoinInkHostSection />
      <TrustedBySection />
      <PlatformBenefitsSection />
    </Shell>
  );
}