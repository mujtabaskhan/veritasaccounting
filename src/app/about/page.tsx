"use client";

import AboutHero from "@/components/about/AboutHero";
import ContactSection from "@/components/about/ContactSection";
import MeetFounder from "@/components/about/MeetFounder";
import MeetTeam from "@/components/about/MeetTeam";
import OurFocus from "@/components/about/OurFocus";
import OurPromise from "@/components/about/OurPromise";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <>
      <div className="w-full bg-[#232061] p-3 min-h-screen rounded-bl-[60px] rounded-br-[60px]">
        <main
          className="w-full min-h-screen relative rounded-tl-[60px] rounded-tr-[60px] overflow-hidden"
          style={{ width: "100%", minHeight: "100vh" }}
        >
          <div className="relative z-[100]">
            <div
              className={`fixed top-[300px] right-0 max-lg:-right-[150px] max-sm:right-0 bottom-0 z-[90] pointer-events-none h-screen w-full transition-opacity duration-500 ${
                isFooterVisible ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src="/bg-logo.svg"
                alt="background logo"
                fill
                className="object-center scale-[2]"
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
        </main>
      </div>
    </>
  );
}
