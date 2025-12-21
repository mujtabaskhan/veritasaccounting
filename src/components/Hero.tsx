"use client";

import Image from "next/image";

function Hero() {
  return (
    <>
      <div
        className="w-full min-h-screen h-screen overflow-hidden pb-[200px] sticky top-0 z-[5] max-xs:!h-[90vh]"
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
          src="/hero-bg.webp"
          alt="hero-hero"
          width={1440}
          height={100}
          className="w-full h-full object-cover absolute top-0 left-0 z-0 max-xs:!h-[1000px]"
        />

        <div className="relative z-10 flex items-center h-full px-8 max-sm:px-10 max-w-7xl mx-auto pt-52 max-sm:pt-64 max-xs:!pt-0 max-xs:-mt-[20px]">
          <div className="w-full text-[#232061] font-semibold">
            <p className="text-[32px] max-sm:text-xl font-normal leading-[80px] max-xs:!leading-normal">
              Welcome to
            </p>

            <h1 className="text-[70px] max-lg:text-[55px] max-md:text-[50px] max-sm:text-[48px] leading-[45px] mb-6 font-semibold max-xs:!leading-[33px]">
              Veritas <br /> Accounting
            </h1>

            <div className="flex items-center justify-between mt-10 max-xs:mt-16 w-full max-sm:flex-col max-sm:items-start max-sm:gap-6">
              <div className="flex items-center gap-8 max-sm:gap-2">
                <div className="flex items-center">
                  <span
                    className="text-[80px] md:text-8xl leading-[100px] max-sm:text-5xl"
                    style={{ color: "#027C99", fontWeight: 400 }}
                  >
                    (
                  </span>
                  <div className="mx-4  text-[#027C99] font-normal">
                    <p className="text-[30px] max-sm:text-lg leading-[50px] max-sm:leading-normal">
                      Simplifying
                    </p>
                    <p className="text-[30px] max-sm:text-lg leading-[50px] max-sm:leading-normal">
                      Numbers
                    </p>
                  </div>
                  <span
                    className="text-[80px] md:text-8xl leading-[100px] max-sm:text-5xl"
                    style={{ color: "#027C99", fontWeight: 400 }}
                  >
                    )
                  </span>
                </div>

                <div className="text-[30px] max-sm:text-base leading-[50px] max-sm:leading-normal font-extrabold">
                  <p style={{ color: "#232061" }}>Maximizing</p>
                  <p style={{ color: "#232061" }}>Results</p>
                </div>
              </div>

              <div className="flex items-center gap-3 max-xs:hidden">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22L22 12M22 12L12 2M22 12L2 12"
                      stroke="white"
                      stroke-width="1.42857"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden max-xs:flex z-10 items-center gap-3 max-xs:absolute max-xs:bottom-[100px] max-xs:left-1/2 max-xs:-translate-x-1/2 max-xs:w-max">
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact-section");
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22L22 12M22 12L12 2M22 12L2 12"
                stroke="white"
                stroke-width="1.42857"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
