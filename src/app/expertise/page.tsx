import ContactSection from "@/components/about/ContactSection";
import ExpertiseSection from "@/components/expertise/Expertise";
import Hero from "@/components/expertise/Hero";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Expertise - Tennis Training",
  description: "Comprehensive tennis training programs for everyone",
};

export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen rounded-bl-[60px] rounded-br-[60px]">
        <Hero />
        <ExpertiseSection />
        <ContactSection hideHeading={false} />
      </div>
    </>
  );
}
