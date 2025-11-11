import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function OurPromise() {
  return (
    <section
      className="w-full bg-white pb-[316px] max-xl:pb-64 max-lg:pb-48 max-md:pb-32  max-sm:!pb-[159px]"
      style={{ width: "100%" }}
    >
      <div className="max-w-7xl mx-auto px-14 max-sm:px-4">
        <div className="flex flex-col items-center justify-center">
          <AnimateOnScroll delay={0}>
            <h2 className="text-[70px] font-medium text-[#232061] leading-[70px] mb-[45px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:!text-[30px] max-sm:!leading-[36px] max-sm:!mb-0 text-center">
              Our <br className="max-sm:hidden" />{" "}
              <span className="font-semibold">Promise</span>
            </h2>
          </AnimateOnScroll>

          <p className="text-xl text-[#232061] leading-[40px] font-flex mt-[45px]  max-sm:leading-7 max-sm:mt-6 max-sm:!text-xs">
            Accurate insights. Honest advice. Reliable results.
          </p>
          <p className="text-xl text-[#232061] leading-[40px] font-flex max-sm:leading-7 max-sm:!text-xs">
            That&apos;s the{" "}
            <span className="text-4xl font-semibold font-serif max-sm:!text-base">
              Veritas
            </span>{" "}
            way.
          </p>
        </div>
      </div>
    </section>
  );
}
