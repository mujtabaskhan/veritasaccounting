"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="h-max">
      <div className="relative w-full h-screen overflow-hidden pb-[200px]">
        <div className="sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 max-sm:px-10">
            <Image
              src="/logo.png"
              alt="logo"
              width={1000}
              height={1000}
              className="w-[300px] h-max max-md:w-[200px] max-lg:w-[240px]"
            />

            <div
              className="max-[960px]:hidden flex items-center gap-12 bg-[#FFFFFF4D] px-6 py-3 rounded-[50px] text-[15px] text-[#232061]"
              style={{
                border: "1px solid #232061",
              }}
            >
              <Link href="/">Home</Link>
              <Link href="/expertise">Expertise</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className="max-[960px]:hidden flex gap-10 items-center">
              <Image
                src="x.svg"
                alt="x"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                src="linkedin.svg"
                alt="linkedin"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                src="instagram.svg"
                alt="instagram"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>

            <div className="max-[960px]:block hidden relative">
              <button
                onClick={toggleMenu}
                className="flex flex-col gap-1 py-2 px-4 z-50 relative border border-[#A6C9E2] rounded-[50px] bg-[#FFFFFF4D] cursor-pointer"
                aria-label="Toggle menu"
              >
                <span
                  className={`w-5 h-0.5 bg-[#232061] transition-all duration-300 origin-center ${
                    isMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-[#232061] transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-[#232061] transition-all duration-300 origin-center ${
                    isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute right-0 top-full mt-2 bg-white rounded-3xl p-6 w-[280px] shadow-2xl z-50 transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="flex flex-col gap-4 mb-10">
                  <Link
                    href="/"
                    onClick={closeMenu}
                    className="text-center text-[#232061] font-normal py-3 px-4 rounded-[35px] bg-[#F6F6F6] text-base"
                  >
                    Home
                  </Link>
                  <Link
                    href="/expertise"
                    onClick={closeMenu}
                    className="text-center text-[#232061] font-normal py-3 px-4 rounded-[35px] bg-[#F6F6F6] text-base"
                  >
                    Expertise
                  </Link>
                  <Link
                    href="/careers"
                    onClick={closeMenu}
                    className="text-center text-[#232061] font-normal py-3 px-4 rounded-[35px] bg-[#F6F6F6] text-base"
                  >
                    Careers
                  </Link>
                  <Link
                    href="/faq"
                    onClick={closeMenu}
                    className="text-center text-[#232061] font-normal py-3 px-4 rounded-[35px] bg-[#F6F6F6] text-base"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="text-center text-[#232061] font-normal py-3 px-4 rounded-[35px] bg-[#F6F6F6] text-base"
                  >
                    Contact
                  </Link>
                </div>

                <div className="flex gap-6 items-center justify-center">
                  <Image
                    src="x.svg"
                    alt="x"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                  <Image
                    src="linkedin.svg"
                    alt="linkedin"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                  <Image
                    src="instagram.svg"
                    alt="instagram"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/expertise-bg.png"
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
          className="absolute top-0 left-0 w-1/3 h-full z-[1]"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
          }}
        ></div>

        <div className="max-w-7xl max-autorelative z-20 relative flex flex-col h-full px-10 md:px-20 lg:px-32">
          <div className="mb-20 max-sm:mb-20 mt-10">
            <nav className="text-[#232061] text-xl font-flex max-sm:text-xs">
              <span className="font-normal">Home</span>
              <span className="font-black mx-5">&gt;</span>
              <span className="font-normal">Expertise</span>
            </nav>
          </div>
          <div className="w-full">
            <p className="text-[70px] max-sm:text-[50px] text-[#232061] mb-14">
              Our <br /> <span className="font-semibold">Expertise</span>
            </p>

            <p className="text-white text-xl max-w-5xl max-sm:text-[15px] max-sm:text-center">
              At Veritas Accounting and Tax Consultants, we provide more than
              just numbers, we deliver clarity, confidence, and strategies to
              help your business grow. Whether you’re a small business owner,
              entrepreneur, or corporate client, our dedicated team offers
              tailored services designed to simplify your finances and maximize
              results. Explore our full range of services below:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
