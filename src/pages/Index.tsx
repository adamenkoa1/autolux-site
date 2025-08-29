import HeroSection from "@/components/sections/HeroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import MiniCTASection from "@/components/sections/MiniCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProcessSection />
      <MiniCTASection variant="process" />
      <BenefitsSection />
      <MiniCTASection variant="benefits" />
      <TestimonialsSection />
      <MiniCTASection variant="testimonials" />
      <ComparisonSection />
      <MiniCTASection variant="comparison" />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;
