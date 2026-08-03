import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function MeetFounderHome() {
  return (
    <section
      className="w-full bg-white py-[160px] max-xl:py-44 max-lg:py-36 max-md:py-28 max-sm:!py-20 relative z-[6]"
      style={{ width: "100%" }}
    >
      <div className="max-w-7xl mx-auto px-14 max-sm:px-4">
        <div className="flex justify-center items-center max-lg:items-start gap-14 max-xl:gap-10 max-sm:!gap-6 max-sm:flex-col max-sm:text-center max-lg:flex-col">
          <div className="max-lg:block hidden">
            <AnimateOnScroll delay={0}>
              <h2 className="!font-roboto text-[64px] !font-extralight text-[#232061] leading-[70px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:!text-[64px] max-sm:!leading-[50px] overflow-visible text-left h-max">
                <span
                  className="font-semibold italic max-sm:block text-transparent font-serif pr-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #232061 0%, #1F89A3 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  Letter
                </span>
                <br />
              </h2>

              <h2 className="max-sm:-mt-10 font-extralight text-[64px] max-sm:text-[56px] text-[#232061] max-sm:text-left max-sm:leading-[60px]">
                {" "}
                from the Founder
              </h2>
            </AnimateOnScroll>
          </div>

          <Image
            src="/Omair.webp"
            alt="Founder"
            width={500}
            height={800}
            className="w-[400px] h-[600px] object-cover max-sm:!w-[369px] max-sm:!h-full"
          />

          <div className="flex flex-col gap-[32px] max-sm:gap-6 max-sm:items-center w-full">
            <div className="max-lg:hidden block">
              <AnimateOnScroll delay={0}>
                <h2 className="!font-roboto text-[64px] !font-extralight text-[#232061] leading-[70px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:text-[36px] max-sm:!text-xl max-sm:!leading-[15px] overflow-visible">
                  <span
                    className="font-semibold italic max-sm:block max-sm:!not-italic text-transparent font-serif pr-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #232061 0%, #1F89A3 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                    }}
                  >
                    Letter
                  </span>
                  <br />
                </h2>

                <h2 className="font-extralight text-[64px] text-[#232061] max-sm:text-base max-sm:text-center">
                  {" "}
                  from the Founder
                </h2>
              </AnimateOnScroll>
            </div>

            <p className="text-lg text-[#232061] leading-[35px] font-flex max-sm:leading-6 max-sm:text-left">
              When I founded Veritas Accounting, I did so with a single
              conviction: that financial clarity is the heartbeat of every
              successful business.
              <br /> The name <span className="!font-black">Veritas</span>
              —meaning &apos;truth&apos;—is more than just a title for us; it is
              our operating philosophy. I believe that as a business owner, you
              deserve more than just a list of numbers at the end of the month.
              You deserve a partner who values transparency as much as you do.
              Our mission is to simplify the complexities of finance so you can
              focus on what you do best: growing your vision. At Veritas, we are
              dedicated to excellence and integrity, ensuring that every piece
              of advice we give is rooted in truth and designed to deliver
              lasting value. We don&apos;t just manage your accounts; we empower
              your future.
            </p>

            <div className="max-sm:flex max-sm:flex-col max-sm:items-start max-sm:text-left w-full">
              <h3 className="text-[32px] text-[#232061] leading-[50px] max-xl:text-[44px] max-xl:leading-[48px] max-lg:text-[38px] max-lg:leading-[42px] max-md:text-[32px] max-md:leading-9 max-sm:!text-[32px] max-sm:!leading-[20px] font-roboto max-sm:text-left">
                Omair Ahsan{" "}
              </h3>
              <p className="font-semibold text-lg text-[#232061] italic max-sm:text-let font-serif">
                CEO/Founder
              </p>
              <p className="text-lg text-[#232061] italic max-sm:text-let font-serif">
                CPA, CGA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
