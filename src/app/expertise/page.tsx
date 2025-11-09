import ContactSection from "@/components/about/ContactSection";
import ExpertiseSection from "@/components/expertise/Expertise";
import Hero from "@/components/expertise/Hero";

export const metadata = {
  title: "Expertise - Tennis Training",
  description: "Comprehensive tennis training programs for everyone",
};

export default function ExpertisePage() {
  return (
    <div className="w-full bg-[#232061] p-3 min-h-screen rounded-bl-[60px] rounded-br-[60px]">
      <main
        className="w-full min-h-screen relative rounded-tl-[60px] rounded-tr-[60px] overflow-hidden"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <Hero />
        <ExpertiseSection />
        <ContactSection hideHeading={false} />
      </main>
    </div>
  );
}
