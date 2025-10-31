"use client";

import Image from "next/image";
import Link from "next/link";

function ModernHero() {
  return (
    <div className="min-h-screen">
      <div className="relative w-full h-screen overflow-hidden pt-10">
        <Image
          src="/hero-bg.png"
          alt="hero-hero"
          width={1440}
          height={100}
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />

        <div className="relative z-10 flex items-center h-full px-12 md:px-20 lg:px-32">
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
                  <p className="text-[40px] max-sm:text-2xl leading-tight">
                    Simplifying
                  </p>
                  <p className="text-[40px] max-sm:text-2xl leading-tight">
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

              <div className="text-[40px] max-sm:text-2xl leading-tight">
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
