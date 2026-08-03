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
        className={`w-full min-h-screen h-screen overflow-hidden pb-[200px] sticky top-0 z-[5] max-xs:!h-[90vh] ${
          isScrolled ? "rounded-bl-[60px] rounded-br-[60px]" : ""
        }`}
        style={{
          width: "100%",
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          willChange: "transform",
        }}
      >
        <Image
          src="/expertise-hero.png"
          alt="expertise-hero"
          width={1440}
          height={100}
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />

        <div
          className="absolute top-0 left-0 w-full h-full z-[1]"
          style={{
            background:
              "linear-gradient(90deg, rgba(217, 217, 217, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)",
          }}
        ></div>

        <div
          className="absolute top-0 left-0 9w-1/3 h-full z-[1]"
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
          <div className="w-full">
            <h1 className="font-roboto text-[64px] max-md:text-[40px] max-sm:text-[30px] leading-[70px] text-[#232061] mb-15 max-xl:mb-3 max-sm:leading-[50px] font-light">
              Our <br />{" "}
              <span className="font-serif font-semibold">Expertise</span>
            </h1>

            <p className="text-[#232061] text-[20px] leading-[32px] max-w-4xl max-sm:text-xs mt-5 font-normal font-roboto cloudy-text max-sm:leading-normal">
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
              className="px-9 py-4 rounded-full font-medium text-white transition-all flex justify-center items-center gap-3 hover:opacity-90 text-xl leading-[10px] max-sm:text-xs max-sm:py-3 max-sm:px-6 max-sm:leading-[20px] cursor-pointer font-serif"
              style={{
                backgroundColor: "#232061",
              }}
            >
              Learn More
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22L22 12M22 12L12 2M22 12L2 12"
                  stroke="white"
                  stroke-width="1.42857"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
