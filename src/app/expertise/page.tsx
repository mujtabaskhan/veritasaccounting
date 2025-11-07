import ContactSection from "@/components/about/ContactSection";
import ExpertiseSection from "@/components/expertise/Expertise";
import Hero from "@/components/expertise/Hero";

export const metadata = {
  title: "Expertise - Tennis Training",
  description: "Comprehensive tennis training programs for everyone",
};

export default function ExpertisePage() {
  return (
    <div className="w-full bg-[#232061] p-3 pb-0 min-h-screen rounded-bl-[90px] rounded-br-[90px]">
      <main
        className="w-full min-h-screen relative rounded-tl-[60px] rounded-tr-[60px]"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <Hero />
        <ExpertiseSection />
        <ContactSection hideHeading={false} />
      </main>
    </div>
  );
}
