import HeroSection from "@/components/HeroSection";
import ValuePropSection from "@/components/ValuePropSection";
import AutomationSuiteSection from "@/components/AutomationSuiteSection";
import BenefitsSection from "@/components/BenefitsSection";
import PartnershipSection from "@/components/PartnershipSection";
import DividerSection from "@/components/DividerSection";
import StepsSection from "@/components/StepsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-zinc-100">
      <HeroSection />
      <ValuePropSection />
      <AutomationSuiteSection />
      <BenefitsSection />
      <PartnershipSection />
      <DividerSection />
      <StepsSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
