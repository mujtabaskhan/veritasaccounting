import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function MeetFounderHome() {
  return (
    <section
      className="w-full bg-white py-[160px] max-xl:py-44 max-lg:py-36 max-md:py-28 max-sm:!py-20 relative z-[6]"
      style={{ width: "100%" }}
    >
      <div className="max-w-7xl mx-auto px-14 max-sm:px-4">
        <div className="flex justify-center items-center gap-14 max-xl:gap-10 max-sm:!gap-6 max-sm:flex-col max-sm:text-center max-lg:flex-col">
          <Image
            src="/founder-1.png"
            alt="Founder"
            width={500}
            height={800}
            className="w-[282] h-[400px] object-cover max-lg:w-80 max-lg:h-80 max-sm:!w-[204px] max-sm:!h-[246px]"
          />

          <div className="flex flex-col gap-[32px] max-sm:gap-6 max-sm:items-center w-full">
            <div>
              <AnimateOnScroll delay={0}>
                <h2 className="text-[70px] font-extralight text-[#232061] leading-[70px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:text-[36px]  max-sm:!text-xl max-sm:!leading-[15px] max-sm:text-serif">
                  <span
                    className="font-semibold italic max-sm:block max-sm:!not-italic text-transparent font-serif"
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
                  from the founder
                </h2>
              </AnimateOnScroll>
            </div>

            <p className="text-xl text-[#232061] leading-[35px] font-flex max-sm:leading-6 max-sm:!text-xs max-sm:text-center">
              When I founded Veritas Accounting, I did so with a single
              conviction: that financial clarity is the heartbeat of every
              successful business.
              <br /> The name <b>Veritas</b>—meaning &apos;truth&apos;—is more
              than just a title for us; it is our operating philosophy. I
              believe that as a business owner, you deserve more than just a
              list of numbers at the end of the month. You deserve a partner who
              values transparency as much as you do. Our mission is to simplify
              the complexities of finance so you can focus on what you do best:
              growing your vision. At Veritas, we are dedicated to excellence
              and integrity, ensuring that every piece of advice we give is
              rooted in truth and designed to deliver lasting value. We
              don&apos;t just manage your accounts; we empower your future.
            </p>

            <div>
              <h3 className="text-[32px] text-[#232061] leading-[50px] max-xl:text-[44px] max-xl:leading-[48px] max-lg:text-[38px] max-lg:leading-[42px] max-md:text-[32px] max-md:leading-9 max-sm:text-[28px] max-sm:!text-xl max-sm:!leading-[20px]">
                Omair Ahsan{" "}
              </h3>
              <p className="font-semibold text-xl text-[#232061] italic max-sm:text-base max-sm:text-center">
                CEO/Founder
              </p>
              <p className="text-xl text-[#232061] italic max-sm:text-base max-sm:text-center">
                CPA, CGA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
