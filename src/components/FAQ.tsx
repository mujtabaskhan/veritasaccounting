import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";

export default function FAQ() {
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
    <section
      className="w-full bg-white pt-20 px-4 max-lg:pt-16 max-md:pt-12 max-md:pb-20 max-sm:pt-10 max-sm:!pb-0 relative z-10"
      style={{ width: "100%" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-[74px] max-sm:mb-[59px]">
          <AnimateOnScroll delay={0}>
            <h2 className="block max-sm:hidden text-[#232061] font-semibold mb-2 text-[40px] max-md:text-[30px] max-sm:text-[25px] leading-[80px]">
              Frequently Asked Questions
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0}>
            <h2 className="hidden max-sm:block text-[#232061] font-semibold mb-2 text-[40px] max-md:text-[30px] max-sm:text-[25px] leading-[25px]">
              FAQ
            </h2>
          </AnimateOnScroll>
          <p className="text-[#232061] text-[20px] font-flex max-sm:text-[15px] leading-[30px] font-normal">
            Have questions about our bookkeeping services or bookkeeping
            accounting services? We&apos;ve compiled answers to the most common
            queries to help you better understand how Veritas Accounting can
            streamline your financial processes.
          </p>
        </div>

        <div className="space-y-4 max-sm:space-y-3">
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
                <span className="text-left text-[30px] font-normal leading-[80px] text-[#232061] font-roboto max-sm:text-xs">
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
                  <p className="text-[20px] leading-[30px] font-normal text-[#232061] font-roboto max-sm:text-xs">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-[74px] max-sm:mt-[38px] pb-[100px] max-sm:pb-[86px]">
          <Link
            href={"/faq"}
            className="px-5 py-1 rounded-full text-[25px] max-sm:text-[15px] max-sm:px-3 leading-[10px] font-semibold inline-flex items-center gap-2 bg-[#232061] text-white"
          >
            Learn More
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 23.3333L23.3333 17.5M23.3333 17.5L17.5 11.6666M23.3333 17.5H11.6667M32.0833 17.5C32.0833 25.5541 25.5542 32.0833 17.5 32.0833C9.44585 32.0833 2.91667 25.5541 2.91667 17.5C2.91667 9.44581 9.44585 2.91663 17.5 2.91663C25.5542 2.91663 32.0833 9.44581 32.0833 17.5Z"
                stroke="#F3F3F3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
