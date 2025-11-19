import HeroSection from "@/components/HeroSection";
import ValuePropSection from "@/components/ValuePropSection";
import AutomationSuiteSection from "@/components/AutomationSuiteSection";
import ComparisonSection from "@/components/ComparisonSection";
import StepsSection from "@/components/StepsSection";
import BenefitsSection from "@/components/BenefitsSection";
import PartnershipSection from "@/components/PartnershipSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-zinc-100">
      <HeroSection />
      <ValuePropSection />
      <AutomationSuiteSection />
      <ComparisonSection />
      <StepsSection />
      <BenefitsSection />
      <PartnershipSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
