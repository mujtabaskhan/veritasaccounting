import ContactSection from "@/components/about/ContactSection";
import ExpertiseSection from "@/components/expertise/Expertise";
import Hero from "@/components/expertise/Hero";

export const metadata = {
  title: "Expertise - Tennis Training",
  description: "Comprehensive tennis training programs for everyone",
};

export default function ExpertisePage() {
  return (
    <>
      <Hero />
      <ExpertiseSection />
      <ContactSection hideHeading={false} />
    </>
  );
}
