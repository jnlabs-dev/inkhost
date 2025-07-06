import { Shell } from "@/components/layout/Shell";
import { HeroSection } from "@/components/Landing/HeroSection";
import { FlowOverviewSection } from "@/components/Landing/FlowOverviewSection";
import { TrustedBySection } from "@/components/Landing/TrustedBySection";
import { PlatformBenefitsSection } from "@/components/Landing/PlatformBenefitsSection";
import { GetStartedSection } from "@/components/Landing/GetStartedSection";

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