import AboutHero from "@/components/about/AboutHero";
import ContactSection from "@/components/about/ContactSection";
import MeetFounder from "@/components/about/MeetFounder";
import MeetTeam from "@/components/about/MeetTeam";
import OurFocus from "@/components/about/OurFocus";
import OurPromise from "@/components/about/OurPromise";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="bg-white min-h-screen relative rounded-bl-[60px] rounded-br-[60px]">
      <div className="relative z-10">
        <Navbar />
        <AboutHero />
        <OurFocus />
        <OurPromise />
        <MeetFounder />
        <MeetTeam />
        <ContactSection />
      </div>
    </main>
  );
}
