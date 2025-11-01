"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleExpertiseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setIsExpertiseOpen(true);
  };

  const handleExpertiseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setIsExpertiseOpen(false);
    }, 200);
  };

  const expertiseItems = [
    { label: "Web Development", href: "/expertise/web" },
    { label: "Mobile Apps", href: "/expertise/mobile" },
    { label: "Cloud Solutions", href: "/expertise/cloud" },
    { label: "AI & Machine Learning", href: "/expertise/ai" },
  ];

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
          <Link
            href="/"
            className="nav-link relative group inline-block h-max overflow-hidden hover:bg-[#232061] hover:text-white hover:px-3 hover:py-1 hover:rounded-full"
          >
            <span className="relative inline-block">
              <span className="inline-block transition-all duration-400 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                Home
              </span>
              <span className="absolute inset-0 inline-block transition-all duration-400 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                Home
              </span>
            </span>
          </Link>

          <div
            className="relative"
            onMouseEnter={handleExpertiseEnter}
            onMouseLeave={handleExpertiseLeave}
          >
            <Link
              href="/expertise"
              className="nav-link relative group inline-block h-max overflow-hidden hover:bg-[#232061] hover:text-white hover:px-3 hover:py-1 hover:rounded-full pt-1.5"
            >
              <span className="relative inline-block">
                <span className="inline-block transition-all duration-400 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                  Expertise
                </span>
                <span className="absolute inset-0 inline-block transition-all duration-400 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                  Expertise
                </span>
              </span>
            </Link>
          </div>

          <Link
            href="/careers"
            className="nav-link relative group inline-block h-max overflow-hidden hover:bg-[#232061] hover:text-white hover:px-3 hover:py-1 hover:rounded-full"
          >
            <span className="relative inline-block">
              <span className="inline-block transition-all duration-400 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                Careers
              </span>
              <span className="absolute inset-0 inline-block transition-all duration-400 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                Careers
              </span>
            </span>
          </Link>

          <Link
            href="/faq"
            className="nav-link relative group inline-block h-max overflow-hidden hover:bg-[#232061] hover:text-white hover:px-3 hover:py-1 hover:rounded-full"
          >
            <span className="relative inline-block">
              <span className="inline-block transition-all duration-400 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                FAQ
              </span>
              <span className="absolute inset-0 inline-block transition-all duration-400 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                FAQ
              </span>
            </span>
          </Link>

          <Link
            href="/contact"
            className="nav-link relative group inline-block h-max overflow-hidden hover:bg-[#232061] hover:text-white hover:px-3 hover:py-1 hover:rounded-full"
          >
            <span className="relative inline-block">
              <span className="inline-block transition-all duration-400 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                Contact
              </span>
              <span className="absolute inset-0 inline-block transition-all duration-400 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                Contact
              </span>
            </span>
          </Link>
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

      <div
        className={`absolute left-0 right-0 w-full overflow-hidden bg-white border-t border-[#E0E0E0] dropdown-container ${
          isExpertiseOpen ? "dropdown-open" : "dropdown-closed"
        }`}
        onMouseEnter={handleExpertiseEnter}
        onMouseLeave={handleExpertiseLeave}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 py-12">
            {expertiseItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group/item dropdown-item"
                data-index={index}
              >
                <div className="relative overflow-hidden h-12 flex items-center">
                  <span className="inline-block transition-all group-hover/item:text-[#232061]">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm text-[#666] mt-2 transition-colors duration-300 group-hover/item:text-[#232061]">
                  Explore our {item.label.toLowerCase()} services
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .dropdown-container {
          top: 100%;
          z-index: 1000;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          backdrop-filter: blur(20px);
          transform-origin: top center;
          transform: scaleY(0.96) translateY(-8px);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.4s ease, backdrop-filter 0.4s ease;
        }
        .dropdown-open {
          opacity: 1;
          pointer-events: auto;
          transform: scaleY(1) translateY(0);
        }
        .dropdown-closed {
          opacity: 0;
          pointer-events: none;
          transform: scaleY(0.96) translateY(-8px);
        }

        .dropdown-item {
          opacity: 0;
        }
        .dropdown-open .dropdown-item {
          opacity: 1;
        }

        .dropdown-item > div {
          opacity: 0;
          transform: translateY(10px);
          will-change: opacity, transform;
        }
        .dropdown-open .dropdown-item[data-index="0"] > div {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.15s,
            transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;
        }
        .dropdown-open .dropdown-item[data-index="1"] > div {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s,
            transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }
        .dropdown-open .dropdown-item[data-index="2"] > div {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.25s,
            transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.25s;
        }
        .dropdown-open .dropdown-item[data-index="3"] > div {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s,
            transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }

        .dropdown-item p {
          opacity: 0;
          transform: translateY(10px);
          will-change: opacity, transform;
        }
        .dropdown-open .dropdown-item[data-index="0"] p {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s,
            transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }
        .dropdown-open .dropdown-item[data-index="1"] p {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.25s,
            transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.25s;
        }
        .dropdown-open .dropdown-item[data-index="2"] p {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s,
            transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
        }
        .dropdown-open .dropdown-item[data-index="3"] p {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.35s,
            transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.35s;
        }

        .dropdown-closed .dropdown-item > div,
        .dropdown-closed .dropdown-item p {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.2s ease-out, transform 0.2s ease-out;
        }

        .nav-link {
          transition: color 0.25s ease-in-out,
            background-color 0.25s ease-in-out, transform 0.25s ease-in-out;
          will-change: transform, background-color, color;
        }

        .nav-link:hover {
          background-color: #232061;
          color: white;
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
};

export default Navbar;
