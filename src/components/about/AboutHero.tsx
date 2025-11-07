import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="w-full bg-white pt-40 max-lg:pt-20 px-4 pb-[198px] max-xl:pb-40 max-lg:pb-20 max-md:pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-sm:mb-20">
          <nav className="text-[#232061] text-xl font-flex max-sm:text-xs">
            <Link href="/" className="font-normal">
              Home
            </Link>
            <span className="font-black mx-5">&gt;</span>
            <span className="font-normal">About</span>
          </nav>
        </div>

        <div className="text-center mb-11 max-sm:!mb-7">
          <h1 className="text-[70px] font-semibold text-[#232061] leading-[70px] mb-[45px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:!text-[30px] max-sm:!leading-[36px] max-sm:!mb-7">
            Who We Are
          </h1>

          <div className="max-w-6xl mx-auto">
            <p className="text-xl text-[#232061] leading-[30px] font-flex max-sm:leading-6 max-sm:!text-xs">
              At{" "}
              <span className="underline">
                Veritas Accounting & Tax Consultants
              </span>
              , numbers are our language, but{" "}
              <span className="text-2xl font-bold max-sm:!text-xs max-sm:!font-extrabold">
                people are our purpose.
              </span>
            </p>
            <p className="text-xl text-[#232061] leading-[30px] font-flex max-sm:text-base max-sm:leading-6">
              We&apos;re a team of dedicated accountants, advisors, and
              problem-solvers helping Canadian businesses stay compliant,
              confident, and financially strong.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
