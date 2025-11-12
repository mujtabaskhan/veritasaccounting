"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="w-full min-h-screen h-screen overflow-hidden pb-[200px] sticky top-0 z-[5] rounded-tl-[60px] rounded-tr-[60px]"
        style={{
          width: "100%",
          minHeight: "100vh",
          height: "100vh",
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          willChange: "transform",
        }}
      >
        <Image
          src="/hero-bg.webp"
          alt="hero-hero"
          width={1440}
          height={100}
          className="w-full h-full object-cover absolute top-0 left-0 z-0 rounded-bl-[60px] rounded-br-[60px]"
        />

        <div className="relative z-10 flex items-center h-full px-8 max-sm:px-10 max-w-7xl mx-auto pt-52 max-lg:pt-24">
          <div className="w-full max-w-3xl text-[#232061] font-semibold">
            <p className="text-[32px] max-sm:text-xl font-normal leading-[80px]">
              Welcome to
            </p>

            <h1 className="text-[70px] max-lg:text-[55px] max-md:text-[50px] max-sm:text-[48px] leading-[45px] mb-6 font-semibold">
              Veritas <br />
              Accounting
            </h1>

            <div className="flex items-center gap-8 mb-6 max-sm:gap-4">
              <div className="flex items-center">
                <span
                  className="text-[100px] md:text-8xl leading-[100px] max-sm:text-5xl"
                  style={{ color: "#027C99", fontWeight: 400 }}
                >
                  (
                </span>
                <div className="mx-4 font-medium">
                  <p className="text-[30px] max-sm:text-base leading-[30px] max-sm:leading-normal">
                    Simplifying
                  </p>
                  <p className="text-[30px] max-sm:text-base leading-[30px] max-sm:leading-normal">
                    Numbers
                  </p>
                </div>
                <span
                  className="text-[80px] md:text-8xl leading-[80px] max-sm:text-5xl"
                  style={{ color: "#027C99", fontWeight: 400 }}
                >
                  )
                </span>
              </div>

              <div className="text-[30px] max-sm:text-base leading-[30px] max-sm:leading-normal">
                <p style={{ color: "#027C99", fontWeight: 500 }}>Maximizing</p>
                <p style={{ color: "#027C99", fontWeight: 500 }}>Results</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const contactSection =
                    document.getElementById("contact-section");
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="px-10 py-4 rounded-full font-semibold text-white transition-all inline-flex items-center gap-3 hover:opacity-90 text-base leading-[10px] max-sm:text-xs max-sm:py-3 max-sm:px-6 max-sm:leading-[20px] cursor-pointer"
                style={{
                  backgroundColor: "#232061",
                }}
              >
                Talk to an Expert
              </button>
              <svg
                width="28"
                height="28"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 23.3334L23.3333 17.5M23.3333 17.5L17.5 11.6667M23.3333 17.5H11.6667M32.0833 17.5C32.0833 25.5542 25.5541 32.0834 17.5 32.0834C9.44584 32.0834 2.91666 25.5542 2.91666 17.5C2.91666 9.44587 9.44584 2.91669 17.5 2.91669C25.5541 2.91669 32.0833 9.44587 32.0833 17.5Z"
                  stroke="#96B3BF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
