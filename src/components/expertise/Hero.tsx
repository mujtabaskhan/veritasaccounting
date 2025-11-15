"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
          src="/expertise-bg.png"
          alt="expertise-hero"
          width={1440}
          height={100}
          className={`w-full h-full object-cover absolute top-0 left-0 z-0 ${
            isScrolled ? "rounded-bl-[60px] rounded-br-[60px]" : ""
          }`}
        />

        <div
          className={`absolute top-0 left-0 w-full h-full z-[1] ${
            isScrolled ? "rounded-bl-[60px] rounded-br-[60px]" : ""
          }`}
          style={{
            background:
              "linear-gradient(90deg, rgba(217, 217, 217, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)",
          }}
        ></div>

        <div
          className={`absolute top-0 left-0 9w-1/3 h-full z-[1] ${
            isScrolled ? "rounded-bl-[60px] rounded-br-[60px]" : ""
          }`}
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
          }}
        ></div>

        <div className="relative z-10 flex flex-col h-full px-8 max-sm:px-10 max-w-7xl mx-auto pt-52 max-lg:pt-36">
          <div className="mb-12">
            <nav className="text-[#232061] text-xs font-flex max-sm:text-xs">
              <Link href="/" className="font-normal">
                Home
              </Link>
              <span className="font-black mx-5">&gt;</span>
              <span className="font-normal">Expertise</span>
            </nav>
          </div>
          <div className="w-full">
            <h1 className="text-[70px] max-md:text-[40px] max-sm:text-[30px] leading-[70px] text-[#232061] mb-15 max-xl:mb-3 max-sm:leading-[50px] font-normal">
              Our <br /> <span className="font-semibold">Expertise</span>
            </h1>

            <p className="text-white text-[18px] leading-[20px] max-w-4xl max-sm:text-xs mt-5 font-normal font-flex">
              At Veritas Accounting and Tax Consultants, we provide more than
              just numbers, we deliver clarity, confidence, and strategies to
              help your business grow. Whether you’re a small business owner,
              entrepreneur, or corporate client, our dedicated team offers
              tailored services designed to simplify your finances and maximize
              results. Explore our full range of services below:
            </p>
          </div>

          <div className="flex items-center gap-3 mt-10">
            <Link
              href="/services"
              onClick={() => {
                const faqSection = document.getElementById("faq-section");
                if (faqSection) {
                  faqSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="px-10 py-4 rounded-full font-semibold text-white transition-all inline-flex items-center gap-3 hover:opacity-90 text-[25px] leading-[10px] max-sm:text-xs max-sm:py-3 max-sm:px-6 max-sm:leading-[20px] cursor-pointer"
              style={{
                backgroundColor: "#232061",
              }}
            >
              Learn More
            </Link>
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
    </>
  );
}

export default Hero;
