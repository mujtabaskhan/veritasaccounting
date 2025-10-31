"use client";

import Image from "next/image";

function Hero() {
  return (
    <div className="min-h-screen">
      <div className="relative w-full h-screen overflow-hidden pt-10">
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
          <div className="mb-20 max-sm:mb-20">
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
