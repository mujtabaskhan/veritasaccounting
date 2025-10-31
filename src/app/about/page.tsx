import AboutHero from "@/components/about/AboutHero";
import ContactSection from "@/components/about/ContactSection";
import MeetFounder from "@/components/about/MeetFounder";
import MeetTeam from "@/components/about/MeetTeam";
import OurFocus from "@/components/about/OurFocus";
import OurPromise from "@/components/about/OurPromise";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <AboutHero />
      <OurFocus />
      <OurPromise />
      <MeetFounder />
      <MeetTeam />
      <ContactSection />
    </main>
  );
}
