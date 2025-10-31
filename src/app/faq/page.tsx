"use client";

import ContactSection from "@/components/about/ContactSection";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What services do you offer?",
      answer:
        "We provide bookkeeping, corporate and personal tax filing, payroll management, financial reporting, business advisory, and virtual CFO services.",
    },
    {
      question: "Who do you work with?",
      answer:
        "We primarily serve small to medium-sized businesses, startups, and self-employed professionals across Canada.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply fill out our online form or contact us directly. Our team will review your needs and schedule a quick consultation.",
    },
    {
      question: "Do you offer virtual or remote services?",
      answer:
        "Yes, we offer comprehensive virtual and remote services to clients across Canada. All our services can be delivered remotely, including bookkeeping, tax preparation, payroll management, and financial advisory services.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <section className="bg-white py-20 px-4 max-sm:px-10 max-xl:py-16 max-lg:py-14 max-md:py-12 max-sm:py-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 max-sm:mb-20">
            <nav className="text-[#232061] text-xl font-flex max-sm:text-xs">
              <span className="font-normal">Home</span>
              <span className="font-black mx-5">&gt;</span>
              <span className="font-normal">FAQ</span>
            </nav>
          </div>

          <div className="mb-[129px] max-sm:mb-[95px]">
            <h1 className="text-[#232061] font-semibold mb-9 text-[70px] max-sm:text-[30px] max-lg:text-[50px]">
              Frequently Asked Questions <br className="max-sm:hidden" />{" "}
              <span className="font-light">by our Clients</span>
            </h1>
            <p className="text-[#232061] text-xl font-flex max-w-4xl max-sm:text-xs">
              We understand that choosing the right accounting partner can be
              confusing. That’s why we’ve answered some of the most common
              questions our clients ask, to help you make informed, confident
              decisions about your business and finances.
            </p>
          </div>

          <div className="space-y-8 max-sm:space-y-4">
            {faqItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-3 rounded-[50px] border relative flex items-center justify-start"
                  style={{
                    borderColor: openIndex === index ? "#232061" : "#232061",
                    backgroundColor:
                      openIndex === index ? "transparent" : "transparent",
                  }}
                >
                  <span className="text-left text-[30px] text-[#232061] font-roboto max-sm:text-xs">
                    {item.question}
                  </span>
                  <svg
                    width="37"
                    height="21"
                    viewBox="0 0 37 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute right-8 transition-transform duration-300 max-sm:w-3 max-sm:h-2 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M1.06055 1.06055L18.0605 18.0605L35.0605 1.06055"
                      stroke="#232061"
                      stroke-width="3"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div className="px-12 py-6 mt-3 max-sm:px-8 max-sm:py-2">
                    <p className="text-xl text-[#232061] font-roboto max-sm:text-xs">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection hideHeading={false} />
    </>
  );
};

export default FAQ;
