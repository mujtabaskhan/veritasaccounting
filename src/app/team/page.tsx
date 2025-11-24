"use client";

import { useEffect, useState } from "react";
import AboutHero from "@/components/about/AboutHero";
import ContactSection from "@/components/about/ContactSection";
import MeetFounder from "@/components/about/MeetFounder";
import MeetTeam from "@/components/about/MeetTeam";
import OurFocus from "@/components/about/OurFocus";
import OurPromise from "@/components/about/OurPromise";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll position relative to bottom
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Footer height is 950px and it's sticky at bottom
      // When user is within footer height from bottom, hide the logo
      const footerHeight = 950;
      const scrollBottom = scrollTop + windowHeight;
      const distanceFromBottom = documentHeight - scrollBottom;

      // Hide logo when within footer height + small buffer
      setIsFooterVisible(distanceFromBottom <= footerHeight + 100);
    };

    // Check initial state
    handleScroll();

    // Add scroll listener with throttling for better performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-[#232061] p-3 min-h-screen rounded-bl-[60px] rounded-br-[60px]">
      <main
        className="w-full min-h-screen relative rounded-tl-[60px] rounded-tr-[60px] overflow-hidden"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <Navbar />

        <div className="relative z-[10] max-lg:z-[1]">
          <div
            className={`fixed top-[600px] max-sm:top-[300px] bottom-0 z-[90] pointer-events-none h-screen w-full max-w-7xl transition-opacity duration-500 ${
              isFooterVisible ? "opacity-0" : "opacity-100"
            }`}
            style={{
              right: "max(calc((100vw - 1280px) / 2), 0px)",
            }}
          >
            <div className="relative h-full w-full">
              <Image
                src="/bg-logo.svg"
                alt="background logo"
                fill
                className="object-contain object-right origin-right scale-[3] max-lg:scale-[2] max-sm:scale-[1.5] transition-transform duration-500"
                priority
              />
            </div>
          </div>

          <AboutHero />
          <OurFocus />
          <OurPromise />
          <MeetFounder />
          <MeetTeam />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
