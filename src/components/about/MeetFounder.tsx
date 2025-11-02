import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function MeetFounder() {
  return (
    <section className="bg-white pb-[220px] px-4 max-xl:pb-44 max-lg:pb-36 max-md:pb-28 max-sm:!pb-[127px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-14 max-xl:gap-10 max-lg:text-center  max-sm:!gap-6 max-[420px]:flex-col max-[420px]:!items-center">
          <Image
            src="/omair.jpeg"
            alt="Founder"
            width={500}
            height={500}
            className="w-[500px] h-[500px] object-cover max-xl:w-[440px] max-xl:h-[440px] max-lg:w-80 max-lg:h-80 max-sm:!w-[204px] max-sm:!h-[246px]"
          />

          <div className="flex flex-col gap-[61px] max-xl:gap-12 max-lg:gap-10 max-sm:gap-6 max-sm:items-center">
            <div>
              <AnimateOnScroll delay={0}>
                <h2 className="text-[70px] font-normal text-[#232061] leading-[70px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:text-[36px]  max-sm:!text-xl max-sm:!text-left max-sm:!leading-[20px]">
                  Meet our{" "}
                  <span className="font-semibold italic max-sm:block max-sm:!not-italic">
                    Founder
                  </span>
                </h2>
              </AnimateOnScroll>
            </div>

            <div>
              <h3 className="text-[50px] text-[#232061] leading-[50px] max-xl:text-[44px] max-xl:leading-[48px] max-lg:text-[38px] max-lg:leading-[42px] max-md:text-[32px] max-md:leading-9 max-sm:text-[28px] max-sm:!text-left max-sm:!text-xl max-sm:!leading-[20px] max-[420px]:!text-center">
                Omair Ahsan{" "}
                <span className="text-xl italic font-semibold max-sm:!text-base max-[420px]:!block">
                  CEO/Founder
                </span>
              </h3>
              <p className="text-xl text-[#232061] italic max-sm:text-base max-sm:!text-left max-[420px]:!text-center">
                CPA, CGA
              </p>
            </div>

            <p className="text-xl text-[#232061] leading-[30px] font-flex max-w-2xl max-lg:mx-auto max-sm:leading-6 max-sm:!text-xs max-sm:!text-left max-[420px]:!text-center">
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
