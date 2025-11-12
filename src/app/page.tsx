"use client";

import Difference from "@/components/Difference";
import FAQ from "@/components/FAQ";
import ModernHero from "@/components/Hero";
import CPAHero from "@/components/About";
import ContactSection from "@/components/about/ContactSection";
import GoogleMap from "@/components/GoogleMap";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-[#232061] p-3 min-h-screen rounded-bl-[60px] rounded-br-[60px]">
        <ModernHero />
        <CPAHero />
        <Difference />
        <FAQ />
        <GoogleMap />
        <ContactSection hideHeading={false} />
      </div>
    </>
  );
}
