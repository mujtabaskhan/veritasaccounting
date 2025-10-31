"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ModernHero() {
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
          src="/hero-bg.png"
          alt="hero-hero"
          width={1440}
          height={100}
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />

        <div className="relative z-10 flex items-center h-full px-4 max-sm:px-10 max-w-7xl mx-auto">
          <div className="w-full max-w-3xl text-[#232061] font-semibold">
            <p className="text-[32px] max-sm:text-xl mb-2">Welcome to</p>

            <h1 className="text-[96px] max-sm:text-[48px] leading-[65px] mb-[61px] max-sm:mb-[124px]">
              Veritas Accounting
            </h1>

            <div className="flex items-center gap-8 mb-12">
              <div className="flex items-center">
                <span
                  className="text-7xl md:text-8xl"
                  style={{ color: "#027C99", fontWeight: 300 }}
                >
                  (
                </span>
                <div className="mx-4 font-semibold">
                  <p className="text-[40px] max-sm:text-base leading-tight">
                    Simplifying
                  </p>
                  <p className="text-[40px] max-sm:text-base leading-tight">
                    Numbers
                  </p>
                </div>
                <span
                  className="text-7xl md:text-8xl"
                  style={{ color: "#027C99", fontWeight: 300 }}
                >
                  )
                </span>
              </div>

              <div className="text-[40px] max-sm:text-base leading-tight">
                <p style={{ color: "#027C99", fontWeight: 600 }}>Maximizing</p>
                <p style={{ color: "#027C99", fontWeight: 400 }}>Results</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="px-10 py-4 rounded-full font-bold text-white transition-all inline-flex items-center gap-3 hover:opacity-90 text-lg"
                style={{
                  backgroundColor: "#232061",
                }}
              >
                Talk to an Expert
              </Link>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 23.3334L23.3333 17.5M23.3333 17.5L17.5 11.6667M23.3333 17.5H11.6667M32.0833 17.5C32.0833 25.5542 25.5541 32.0834 17.5 32.0834C9.44584 32.0834 2.91666 25.5542 2.91666 17.5C2.91666 9.44587 9.44584 2.91669 17.5 2.91669C25.5541 2.91669 32.0833 9.44587 32.0833 17.5Z"
                  stroke="#96B3BF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModernHero;
