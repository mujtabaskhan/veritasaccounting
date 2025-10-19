"use client";

import { CTA } from "@/components/CTA";
import  Difference  from "@/components/Difference";
import  FAQ  from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import ModernHero from "@/components/Hero"
import  CPAHero  from "@/components/About";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <ModernHero />
      <CPAHero />
      <Difference />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
