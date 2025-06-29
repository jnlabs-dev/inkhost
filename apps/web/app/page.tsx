import { Shell } from "@/components/layout/shell";
import { HeroSection } from "@/components/landing/heroSection";
import { FlowOverviewSection } from "@/components/landing/flowOverviewSection";
import { TrustedBySection } from "@/components/landing/trustedBySection";
import { PlatformBenefitsSection } from "@/components/landing/platformBenefitsSection";
import { GetStartedSection } from "@/components/landing/getStartedSection";

export default function LandingPage() {
  return (
    <Shell>
      <HeroSection />
      <FlowOverviewSection />
      <TrustedBySection />
      <PlatformBenefitsSection />
      <GetStartedSection />
    </Shell>
  );
}