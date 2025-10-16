"use client";

import { CTA } from "@/components/CTA";
import { Difference } from "@/components/Difference";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero3D } from "@/components/Hero3D";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero3D />
      <Services />
      <Stats />
      <Difference />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
