"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactSection({
  hideHeading = true,
}: {
  hideHeading?: boolean;
}) {
  const [selectedService, setSelectedService] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { value: "accounting", label: "Accounting" },
    { value: "tax", label: "Tax Services" },
    { value: "payroll", label: "Payroll Services" },
    { value: "audit", label: "Audit & Compliance Support" },
    { value: "cfo", label: "CFO Services" },
    { value: "advisory", label: "Business Advisory" },
    { value: "admin", label: "Business Administration" },
  ];

  const handleServiceSelect = (service: { value: string; label: string }) => {
    setSelectedService(service.value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-white py-20 px-4 max-sm:px-10 max-xl:py-16 max-lg:py-14 max-md:py-12 max-sm:py-10 rounded-bl-[60px] rounded-br-[60px] max-sm:pb-16">
      <div className="max-w-7xl mx-auto">
        {hideHeading && (
          <div className="text-center mb-[35px] max-sm:!mb-[81px]">
            <h2 className="text-[70px] font-normal text-[#232061] leading-[70px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:text-[36px] max-sm:!text-xl max-sm:!leading-[20px] max-sm:!text-center">
              Curious about what we <br />
              can do for you?
            </h2>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-lg:gap-10 max-sm:!gap-[96px]">
          <div>
            <div className="pb-[51px]">
              <h3 className="text-4xl font-semibold text-[#232061] max-sm:text-2xl">
                Let&apos;s Connect!
              </h3>
              <p className="text-xl text-[#232061] font-roboto max-sm:!text-xs">
                We are here to help.
              </p>
            </div>

            <form>
              <div className="relative mb-[22px]">
                <div className="relative" ref={dropdownRef}>
                  <div
                    className="border-2 border-[#232061] rounded-full py-3 px-8 cursor-pointer hover:border-opacity-80 transition-colors max-sm:px-6"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-roboto font-semibold text-xl text-[#232061] max-sm:!text-xs ${
                          selectedService ? "" : "text-opacity-40"
                        }`}
                      >
                        {selectedService
                          ? services.find((s) => s.value === selectedService)
                              ?.label
                          : "Select your Service"}
                      </span>
                      <svg
                        width="27"
                        height="17"
                        viewBox="0 0 27 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-6 h-6 text-[#232061] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M0.746094 0.666016L13.2461 14.666L25.7461 0.666016"
                          stroke="#232061"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#232061] rounded-2xl shadow-lg z-50 max-h-60 overflow-y-auto">
                      {services.map((service) => (
                        <div
                          key={service.value}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer first:rounded-t-2xl last:rounded-b-2xl transition-colors"
                          onClick={() => handleServiceSelect(service)}
                        >
                          <span className="text-xl text-[#232061] max-sm:text-base">
                            {service.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="relative mb-[22px]">
                <label className="absolute -top-3 left-8 bg-white px-2 text-xl text-[#232061] z-10 font-roboto max-sm:!text-xs max-sm:!left-4 max-sm:!-top-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name here"
                  className="w-full border-2 border-[#232061] rounded-full px-8 py-4 text-xl text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-xs"
                />
              </div>

              <div className="relative mb-[22px]">
                <label className="absolute -top-3 left-8 bg-white px-2 text-xl text-[#232061] z-10 font-roboto max-sm:!text-xs max-sm:!left-4 max-sm:!-top-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email address here"
                  className="w-full border-2 border-[#232061] rounded-full px-8 py-4 text-xl text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-xs"
                />
              </div>

              <div className="relative mb-[22px]">
                <label className="absolute -top-3 left-8 bg-white px-2 text-xl text-[#232061] z-10 font-roboto max-sm:!text-xs max-sm:!left-4 max-sm:!-top-2">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone number here"
                  className="w-full border-2 border-[#232061] rounded-full px-8 py-4 text-xl text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none bg-white max-sm:px-6 max-sm:py-3 max-sm:!text-xs"
                />
              </div>

              <div className="relative">
                <label className="absolute -top-3 left-8 bg-white px-2 text-xl text-[#232061] z-10 font-roboto max-sm:!text-xs max-sm:!left-4 max-sm:!-top-2">
                  Message
                </label>
                <textarea
                  placeholder="Type your brief message here"
                  rows={6}
                  className="w-full border-2 border-[#232061] rounded-3xl px-8 py-6 text-xl text-[#232061] placeholder-[rgba(35,32,97,0.4)] outline-none resize-none bg-white max-sm:px-6 max-sm:py-4 max-sm:!text-xs"
                />
              </div>

              <div className="flex justify-end pt-10 max-sm:pt-6 max-sm:!justify-center">
                <button
                  type="submit"
                  className="bg-[#232061] text-white text-[25px] font-semibold px-12 py-4 rounded-full hover:bg-opacity-90 transition-colors cursor-pointer max-sm:px-8 max-sm:py-3 max-sm:!text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8 pt-[106px] max-lg:pt-10 max-sm:!pt-0">
            <div className="border-2 border-[#232061] rounded-3xl p-10 max-sm:p-6">
              <h3 className="text-4xl font-bold text-[#232061] mb-2 text-center max-sm:text-2xl">
                What Happens Next?
              </h3>
              <p className="text-3xl text-[#232061] text-center mb-8 font-light italic max-sm:text-xl max-sm:mb-5">
                In 3 easy steps
              </p>

              <div className="space-y-8 relative">
                <div className="flex items-start space-x-4 mb-22 max-sm:mb-10 max-sm:!space-x-6">
                  <div className="w-5 h-5 bg-[#003B6633] rounded-full flex-shrink-0 flex max-sm:!mt-[0.5] items-center justify-center">
                    <div className="h-2 w-2 bg-[#232061] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#232061] mb-3 font-roboto max-sm:text-base">
                      Step 1: Review & Response
                    </h4>
                    <p className="text-base text-[#232061] leading-[20px] font-roboto max-sm:text-sm max-sm:leading-5">
                      We will review your form and contact you within 1–2
                      business days to confirm your details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-22 max-sm:mb-10 max-sm:!space-x-6">
                  <div className="w-5 h-5 bg-[#003B6633] rounded-full flex-shrink-0 flex max-sm:!mt-[0.5] items-center justify-center">
                    <div className="h-2 w-2 bg-[#232061] rounded-full"></div>
                  </div>

                  <div className="flex flex-col gap-5 absolute top-10 left-2">
                    <div className="h-[3px] w-[3px] bg-[#232061]"></div>
                    <div className="h-[3px] w-[3px] bg-[#232061]"></div>
                    <div className="h-[3px] w-[3px] bg-[#232061]"></div>
                    <div className="h-[3px] w-[3px] bg-[#232061] max-sm:!hidden"></div>
                    <div className="h-[3px] w-[3px] bg-[#232061] max-sm:!hidden"></div>
                    <div className="h-[3px] w-[3px] bg-[#232061] max-sm:!hidden"></div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#232061] mb-3 font-roboto max-sm:text-base">
                      Step 2: Consultation
                    </h4>
                    <p className="text-base text-[#232061] leading-[20px] font-roboto max-sm:text-sm max-sm:leading-5">
                      We&apos;ll schedule a short call to understand your needs
                      and recommend the right accounting solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 max-sm:!space-x-6 max-sm:!mb-10">
                  <div className="w-5 h-5 bg-[#003B6633] rounded-full flex-shrink-0 flex max-sm:!mt-[0.5] items-center justify-center">
                    <div className="h-2 w-2 bg-[#232061] rounded-full"></div>
                  </div>

                  <div className="flex flex-col gap-5 absolute top-[205px] left-2">
                    <div className="h-[3px] w-[3px] bg-[#232061]"></div>
                    <div className="h-[3px] w-[3px] bg-[#232061]"></div>
                    <div className="h-[3px] w-[3px] bg-[#232061]"></div>
                    <div className="h-[3px] w-[3px] bg-[#232061] max-sm:!hidden"></div>
                    <div className="h-[3px] w-[3px] bg-[#232061] max-sm:!hidden"></div>
                    <div className="h-[3px] w-[3px] bg-[#232061] max-sm:!hidden"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#232061] mb-3 font-roboto max-sm:text-base">
                      Step 3: Proposal & Onboarding
                    </h4>
                    <p className="text-base text-[#232061] leading-[20px] font-roboto max-sm:text-sm max-sm:leading-5">
                      You&apos;ll receive a customized service proposal, and
                      once approved, we&apos;ll begin your onboarding process
                      right away.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
