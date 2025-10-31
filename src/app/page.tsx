"use client";

import Difference from "@/components/Difference";
import FAQ from "@/components/FAQ";
import ModernHero from "@/components/Hero";
import CPAHero from "@/components/About";
import ContactSection from "@/components/about/ContactSection";
import GoogleMap from "@/components/GoogleMap";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <ModernHero />
      <CPAHero />
      <Difference />
      <FAQ />
      <GoogleMap />
      <ContactSection hideHeading={false} />
    </main>
  );
}
