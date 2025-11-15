import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const Cookie = () => {
  return (
    <div className="w-full bg-[#232061] p-3 min-h-screen rounded-bl-[60px] rounded-br-[60px]">
      <main
        className="w-full min-h-screen relative rounded-tl-[60px] rounded-tr-[60px] overflow-hidden"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <Navbar />
        <section
          className="w-full bg-white pb-[198px] max-xl:pb-40 max-lg:pb-20 max-md:pb-32 rounded-bl-[60px] rounded-br-[60px] max-sm:pb-14"
          style={{ width: "100%" }}
        >
          <div className="relative z-[10] max-lg:z-[1] max-w-7xl mx-auto px-14 max-sm:px-4 pt-52 max-lg:!pt-0 max-sm:mt-0 max-sm:!pt-3">
            <div className="mb-14">
              <nav className="text-[#232061] text-xs font-flex max-sm:text-xs">
                <Link href="/" className="font-normal">
                  Home
                </Link>
                <span className="font-black mx-5">&gt;</span>
                <Link href="/cookies" className="font-normal">
                  Cookie Settings
                </Link>
                <span className="font-black mx-5">&gt;</span>
                <span className="font-normal underline">
                  Veritas Accounting & Tax Consultants
                </span>
              </nav>
            </div>

            <div className="font-flex text-[#232061] text-xl mb-12 max-sm:text-sm max-sm:mb-6">
              <h1 className="text-[30px] font-semibold mb-12 max-sm:mb-6 max-sm:text-xl">
                Cookie Settings
              </h1>
              <p>
                At Veritas Accounting & Tax Consultants, we use cookies to
                improve your browsing experience and to help us understand how
                our website is being used. Cookies are small text files stored
                on your device that allow us to remember your preferences and
                provide a more personalized experience.
              </p>
              <p>You can choose which types of cookies you allow below:</p>
            </div>

            <div className="font-flex flex flex-col gap-12 max-sm:gap-6 text-[#232061] text-xl max-sm:text-sm">
              <div>
                <h3 className="font-bold">1. Necessary Cookies</h3>
                <p>
                  These cookies are essential for the website to function
                  properly. They enable core features such as security, network
                  management, and accessibility. You cannot disable these
                  cookies.
                </p>
              </div>

              <div>
                <h3 className="font-bold">2. Performance Cookies</h3>
                <p>
                  These help us understand how visitors interact with our site
                  by collecting anonymous information about traffic and usage
                  patterns.
                </p>
              </div>

              <div>
                <h3 className="font-bold">3. Functional Cookies</h3>
                <p>
                  These cookies remember your preferences such as language,
                  location, or login details, to improve your browsing
                  experience.
                </p>
              </div>

              <div>
                <h3 className="font-bold">4. Marketing Cookies</h3>
                <p>
                  We use these to deliver relevant ads and measure the
                  effectiveness of our marketing campaigns.
                </p>
              </div>

              <div>
                <h3 className="font-bold">Your Choice:</h3>
                <p>
                  You can manage or disable cookies through your browser
                  settings at any time. Please note that disabling certain
                  cookies may affect website functionality.
                </p>
              </div>

              <div className="italic">
                For more information, please review our{" "}
                <Link href="privacy-policy" className="underline ">
                  Privacy Policy.
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cookie;
