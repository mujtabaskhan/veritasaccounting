export default function OurFocus() {
  return (
    <section className="bg-white px-4 pb-[266px] max-xl:pb-56 max-lg:pb-44 max-md:pb-28 max-sm:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-lg:gap-10 max-sm:!gap-5">
          <div className="text-right max-lg:text-center">
            <h2 className="text-[70px] font-medium text-[#232061] leading-[70px] mb-[45px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:!text-[30px] max-sm:!leading-[36px] max-sm:!mb-0">
              Our <br className="max-sm:hidden" />{" "}
              <span className="font-semibold">Focus</span>
            </h2>
          </div>

          <div className="space-y-4 -mb-40 font-light max-xl:-mb-28 max-lg:-mb-16 max-md:mb-0 max-sm:!space-y-0">
            <p className="text-xl text-[#232061] leading-[30px] font-flex max-sm:leading-6 max-lg:text-center max-sm:!text-xs">
              We simplify accounting through clarity, transparency, and
              integrity
            </p>
            <p className="text-xl text-[#232061] leading-[30px] font-flex max-sm:leading-6 max-lg:text-center max-sm:!text-xs">
              giving you time to focus on what matters most:
            </p>
            <p className="text-[40px] text-[#232061] leading-[50px] font-flex max-lg:text-[32px] max-lg:leading-[42px] max-lg:text-center max-sm:text-[28px] max-sm:leading-8 max-sm:!text-xl max-sm:!mt-4">
              growing your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
