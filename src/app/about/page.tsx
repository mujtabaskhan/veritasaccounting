import AboutHero from "@/components/about/AboutHero";
import ContactSection from "@/components/about/ContactSection";
import MeetFounder from "@/components/about/MeetFounder";
import MeetTeam from "@/components/about/MeetTeam";
import OurFocus from "@/components/about/OurFocus";
import OurPromise from "@/components/about/OurPromise";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-white min-h-screen relative">
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 pointer-events-none">
        <Image
          src="/bg-logo.png"
          alt="background logo"
          fill
          className="object-contain object-center opacity-20 h-screen w-screen"
          priority
        />
      </div>

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
