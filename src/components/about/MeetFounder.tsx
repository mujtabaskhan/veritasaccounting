import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function MeetFounder() {
  return (
    <section
      className="w-full bg-white pb-[220px] max-xl:pb-44 max-lg:pb-36 max-md:pb-28 max-sm:!pb-20"
      style={{ width: "100%" }}
    >
      <div className="max-w-7xl mx-auto px-14 max-sm:px-4">
        <div className="flex justify-center items-center gap-14 max-xl:gap-10 max-sm:!gap-6 max-sm:flex-col max-sm:text-center">
          <Image
            src="/Omair.webp"
            alt="Founder"
            width={500}
            height={800}
            className="w-[500px] h-[800px] object-cover max-xl:w-[440px] max-xl:h-[440px] max-lg:w-80 max-lg:h-80 max-sm:!w-[204px] max-sm:!h-[246px]"
          />

          <div className="flex flex-col gap-[61px] max-xl:gap-12 max-lg:gap-10 max-sm:gap-6 max-sm:items-center">
            <div>
              <AnimateOnScroll delay={0}>
                <h2 className="text-[70px] font-normal text-[#232061] leading-[70px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:text-[36px]  max-sm:!text-xl max-sm:!leading-[20px] max-sm:text-center">
                  Meet our{" "}
                  <span
                    className="font-semibold italic max-sm:block max-sm:!not-italic text-transparent"
                    style={{
                      background:
                        "linear-gradient(90deg, #232061 0%, #1F89A3 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                    }}
                  >
                    Founder
                  </span>
                </h2>
              </AnimateOnScroll>
            </div>

            <div>
              <h3 className="text-[50px] text-[#232061] leading-[50px] max-xl:text-[44px] max-xl:leading-[48px] max-lg:text-[38px] max-lg:leading-[42px] max-md:text-[32px] max-md:leading-9 max-sm:text-[28px] max-sm:!text-xl max-sm:!leading-[20px]">
                Omair Ahsan{" "}
                <span className="text-xl italic font-semibold max-sm:!text-base max-sm:block">
                  CEO/Founder
                </span>
              </h3>
              <p className="text-xl text-[#232061] italic max-sm:text-base max-sm:text-center">
                CPA, CGA
              </p>
            </div>

            <p className="text-xl text-[#232061] leading-[30px] font-flex max-w-2xl max-lg:mx-auto max-sm:leading-6 max-sm:!text-xs max-sm:text-center">
              As the founder and CEO of Veritas Accounting, Omair leads with a
              vision to simplify finance and empower businesses through trusted
              guidance. With years of experience in accounting and financial
              management, he is dedicated to delivering excellence, integrity,
              and value in every client relationship. Omair believes that
              success begins with transparency, the core principle behind
              Veritas, meaning &quot;truth.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
