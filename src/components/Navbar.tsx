"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white relative">
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
  );
};

export default Navbar;
