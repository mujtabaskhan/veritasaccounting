import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function TheDifference() {
  return (
    <div
      className="bg-white px-6 py-20"
      style={{ fontFamily: "Roboto Serif, serif", minHeight: "auto" }}
    >
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll delay={0}>
          <h3
            className="text-center text-[80px] max-sm:text-[40px] max-lg:text-[50px] font-normal mb-[133px] max-sm:mb-[91px]"
            style={{
              background: "linear-gradient(90deg, #232061 0%, #1F89A3 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            The <span className="font-semibold italic">Difference</span>
            <br /> We Deliver
          </h3>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-sm:gap-8">
          <div className="flex flex-col gap-[42px] max-sm:gap-[27px]">
            <AnimateOnScroll delay={100}>
              <h3 className="text-[40px] max-lg:text-[30px] max-sm:text-[25px] text-[#232061] font-bold leading-10">
                Precision You Can Count On
              </h3>
            </AnimateOnScroll>
            <p className="text-xl max-lg:text-base max-sm:text-[15px] text-[#232061]">
              Every number tells a story, we make sure yours is accurate,
              compliant, and clear. Our meticulous attention to detail ensures
              your books, taxes, and audits are done right every time.
            </p>
          </div>
          <div className="flex flex-col gap-[42px] max-sm:gap-[27px]">
            <AnimateOnScroll delay={200}>
              <h3 className="text-[40px] max-lg:text-[30px] max-sm:text-[25px] text-[#232061] font-bold leading-10">
                Strategic Insight, Not Just Numbers
              </h3>
            </AnimateOnScroll>
            <p className="text-xl max-lg:text-base max-sm:text-[15px] text-[#232061]">
              We go beyond bookkeeping. Our team translates financial data into actionable strategies that help you make confident business decisions, improve cash flow, and plan for sustainable growth.
            </p>
          </div>
          <div className="flex flex-col gap-[42px] max-sm:gap-[27px]">
            <AnimateOnScroll delay={300}>
              <h3 className="text-[40px] max-lg:text-[30px] max-sm:text-[25px] text-[#232061] font-bold leading-10">
                Trusted Partners for Your Success
              </h3>
            </AnimateOnScroll>
            <p className="text-xl max-lg:text-base max-sm:text-[15px] text-[#232061]">
              From startups to established enterprises, businesses across Canada trust us for dependable, transparent, and personalized service. We treat your business like our own, with honesty, clarity, and accountability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
