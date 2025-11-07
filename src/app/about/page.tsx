"use client";

import AboutHero from "@/components/about/AboutHero";
import ContactSection from "@/components/about/ContactSection";
import MeetFounder from "@/components/about/MeetFounder";
import MeetTeam from "@/components/about/MeetTeam";
import OurFocus from "@/components/about/OurFocus";
import OurPromise from "@/components/about/OurPromise";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <main className="w-full bg-white min-h-screen relative" style={{ width: "100%", minHeight: "100vh" }}>
      <div className="relative z-[100]">
        <div className="fixed top-[300px] right-0 max-lg:-right-[150px] max-sm:right-0 bottom-0 z-[90] pointer-events-none h-screen w-full">
          <Image
            src="/bg-logo.svg"
            alt="background logo"
            fill
            className="opacity-100 object-center scale-[2]"
            priority
          />
        </div>

        <Navbar />
        <AboutHero />
        <OurFocus />
        <OurPromise />
        <MeetFounder />
        <MeetTeam />
        <ContactSection />
      </div>

      <div className="relative z-[120]">
        <Footer />
      </div>
    </main>
  );
}
