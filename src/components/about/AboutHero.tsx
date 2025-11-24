import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="w-full bg-white pb-[198px] max-xl:pb-40 max-lg:pb-20 max-md:pb-16">
      <div className="relative z-10 flex flex-col h-full px-8 max-sm:px-10 max-w-7xl mx-auto pt-52 max-lg:!pt-0 max-lg:-mt-4 max-sm:mt-0 max-sm:!pt-3">
        <div className="mb-12">
          <nav className="text-[#232061] text-xs font-flex max-sm:text-xs">
            <Link href="/" className="font-normal">
              Home
            </Link>
            <span className="font-black mx-5">&gt;</span>
            <span className="font-normal">About</span>
          </nav>
        </div>

        <div className="text-center mb-11 max-sm:!mb-0">
          <h1 className="text-[70px] font-semibold text-[#232061] leading-[70px] mb-[45px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:!text-[30px] max-sm:!leading-[36px] max-sm:!mb-7">
            Who We Are
          </h1>

          <div className="max-w-6xl mx-auto">
            <p className="text-xl text-[#232061] leading-[30px] font-flex max-sm:leading-6 max-sm:!text-xs">
              At{" "}
              <span className="underline">
                Veritas Accounting & Tax Consultants
              </span>
              , we provide more than just numbers{" "}
              <span className="text-2xl font-bold max-sm:!text-xs max-sm:!font-extrabold">
                we deliver clarity
              </span>
            </p>
            <p className="text-xl text-[#232061] leading-[30px] font-flex max-sm:text-xs max-sm:leading-6">
              confidence, and strategies to help your business grow. Whether
              you&apos;re a small business owner, entrepreneur, or corporate
              client, our dedicated team offers tailored services designed to
              simplify your finances and maximize results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
