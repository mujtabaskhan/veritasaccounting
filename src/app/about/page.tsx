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
import { useEffect, useRef, useState } from "react";

export default function About() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    let ticking = false;

    const checkFooterPosition = () => {
      const rect = footer.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're near the bottom of the page or if footer is in viewport
      // Since footer is sticky, check distance from bottom of document
      const distanceFromBottom = documentHeight - (scrollY + windowHeight);
      const shouldHide =
        distanceFromBottom < 600 || rect.top < windowHeight + 300;

      setIsFooterVisible(shouldHide);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkFooterPosition);
        ticking = true;
      }
    };

    // Check immediately
    checkFooterPosition();

    // Check on scroll and resize
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="bg-white min-h-screen relative">
      {!isFooterVisible && (
        <div className="fixed top-[300px] -right-[300px] max-lg:-right-[150px] max-sm:right-0 bottom-0 z-[110] pointer-events-none h-screen w-screen">
          <Image
            src="/bg-logo.svg"
            alt="background logo"
            fill
            className="opacity-100 object-center scale-[2]"
            priority
          />
        </div>
      )}

      <div className="relative z-[100]">
        <Navbar />
        <AboutHero />
        <OurFocus />
        <OurPromise />
        <MeetFounder />
        <MeetTeam />
        <ContactSection />
      </div>
      <div ref={footerRef} className="relative z-[120]">
        <Footer />
      </div>
    </main>
  );
}
