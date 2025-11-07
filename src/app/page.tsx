"use client";

import Difference from "@/components/Difference";
import FAQ from "@/components/FAQ";
import ModernHero from "@/components/Hero";
import CPAHero from "@/components/About";
import ContactSection from "@/components/about/ContactSection";
import GoogleMap from "@/components/GoogleMap";

export default function Home() {
  return (
    <main className="w-full bg-[#232061] px-3 pb-0 rounded-bl-[90px] rounded-br-[90px] overflow-x-hidden">
      <ModernHero />
      <CPAHero />
      <Difference />
      <FAQ />
      <GoogleMap />
      <ContactSection hideHeading={false} />
    </main>
  );
}
