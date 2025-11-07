"use client";

import ContactSection from "@/components/about/ContactSection";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";

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
        "Yes, we offer fully remote accounting and tax services, allowing you to collaborate with us from anywhere in Canada.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Pricing depends on the scope and complexity of your needs. We provide customized quotes after your consultation.",
    },
    {
      question: "Are my financial records secure with you?",
      answer:
        "Absolutely. We use encrypted systems and secure portals to ensure your data and documents remain fully protected here with us at Veritas Accounting.",
    },
    {
      question: "Do you handle CRA audits or correspondence?",
      answer:
        "Yes, we can assist with CRA communication, audit support, and tax compliance to ensure your business stays on track.",
    },
    {
      question: "Can you help with business incorporation or registration?",
      answer:
        "Yes, we assist clients with business setup, incorporation, and choosing the right structure for tax efficiency.",
    },
    {
      question: "What's the turnaround time for tax filings?",
      answer:
        "Turnaround time varies by complexity, but most returns are completed within 1-2 weeks once all documents are received.",
    },
    {
      question: "How can I contact your team?",
      answer:
        "You can reach us via our website contact form, email, or by phone during business hours.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#232061] p-3 pb-0 min-h-screen rounded-bl-[90px] rounded-br-[90px]">
      <main
        className="w-full min-h-screen relative rounded-tl-[60px] rounded-tr-[60px] overflow-hidden"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <Navbar />
        <section
          className="w-full bg-white pt-40 max-lg:pt-20 px-4 pb-[198px] max-xl:pb-40 max-lg:pb-20 max-md:pb-32 max-sm:pb-14"
          style={{ width: "100%" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 max-sm:mb-20">
              <nav className="text-[#232061] text-xl font-flex max-sm:text-xs">
                <Link href="/" className="font-normal">
                  Home
                </Link>{" "}
                <span className="font-black mx-5">&gt;</span>
                <span className="font-normal">FAQ</span>
              </nav>
            </div>

            <div className="mb-[129px] max-sm:mb-[95px]">
              <AnimateOnScroll delay={0}>
                <h1 className="text-[#232061] font-semibold mb-9 text-[70px] max-sm:text-[30px] max-lg:text-[50px]">
                  Frequently Asked Questions <br className="max-sm:hidden" />{" "}
                  <span className="font-light">by our Clients</span>
                </h1>
              </AnimateOnScroll>
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
                    <span className="text-left text-[22px] text-[#232061] font-roboto max-sm:text-xs">
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
      </main>
    </div>
  );
};

export default FAQ;
