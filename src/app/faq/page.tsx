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
        "We provide a full range of accounting, tax, and financial management solutions tailored to support businesses and individuals with accuracy and reliability. Our services include: Bookkeeping (monthly, quarterly, annual), Corporate tax filing, Personal tax filing, Payroll management, Financial reporting & analysis, Business advisory, Virtual CFO services, Dedicated accounting teams (outsourced finance department), CRA, corporate, payroll & HST audit support, and Business incorporation & compliance.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing is customized based on your unique needs to ensure fairness, transparency, and value. Fees depend on: The type and complexity of service, Size and structure of your business, Transaction volume and reporting frequency, Additional services requested (payroll, advisory, CFO), and Dedicated accounting team requirements. Customized quotes are provided after a consultation.",
    },
    {
      question: "How long does onboarding take and what is the process?",
      answer:
        "We follow a structured onboarding process to ensure a smooth transition and accurate setup of your financial systems. The typical steps include: Needs assessment and initial review, Document collection, Cleanup or migration of prior records, Software and workflow setup, Assigning a dedicated team, and Establishing reporting schedule.",
    },
    {
      question: "Do you work with clients outside the GTA?",
      answer:
        "Yes — our fully digital and paperless workflow allows us to work seamlessly with clients regardless of location. We support: Clients across Ontario, Clients across multiple Canadian provinces, and Fully remote operations through secure cloud-based systems.",
    },
    {
      question: "Do you handle CRA or other audits?",
      answer:
        "We provide professional representation and support during a wide range of audits to ensure compliance and reduce stress. Our audit assistance includes: CRA audits, Corporate tax audits, Payroll audits, HST/GST audits, Third-party and industry-required financial audits, and Support with communication, documentation, and compliance.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We work with clients across diverse sectors, giving us insight into industry-specific requirements and challenges. We serve: Construction & contracting, Education & private schools (including Montessori), Healthcare professionals, Hospitality & restaurants, IT & consultants, Legal practices & law firms, Manufacturing & small-scale production, Mortgage & real estate professionals, Non-profit organizations, Professional services & contractors, Trading & small commerce, and Transportation, logistics & trucking.",
    },
    {
      question: "How secure is my financial data?",
      answer:
        "We maintain strict security protocols to protect your information at every step. Our security practices include: Encrypted data transmission, Secure cloud storage, Strict access controls, Regular backups, Confidentiality protocols, and Compliant accounting platforms.",
    },
    {
      question: "Do you work with individuals as well as corporate clients?",
      answer:
        "Yes — we support a wide range of clients with tailored solutions to fit different financial needs and complexities. Our clients include: Individuals, Sole proprietors, Professionals, Small and medium-sized businesses, Corporations, Non-profits, and Owner-managed businesses.",
    },
    {
      question: "Can you assist with business incorporation and compliance?",
      answer:
        "We guide new and growing businesses through the setup and compliance process to ensure everything is structured correctly from day one. Our support includes: Incorporation setup, Federal and provincial registrations, Share structure setup, Business number and tax account setup, Initial filings, and Ongoing compliance.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy — simply reach out and we'll guide you through the next steps. Here's how to begin: Fill out our consultation request form, Share a brief overview of your needs, Book a discovery call with our team, and Receive a customized service plan and quote. Most inquiries receive a response within 1–2 business days.",
    },
    {
      question: "Do you offer virtual or remote services?",
      answer:
        "Yes — our firm operates on a modern, paperless, cloud-based model that supports fully virtual delivery. We use: 100% paperless workflow, Secure online portals for document sharing, Remote meetings and consultations, and Accessibility for clients across Canada.",
    },
    {
      question: "Are my financial records safe with you?",
      answer:
        "Absolutely — protecting your financial information is a top priority. Our safeguards include: Encrypted data storage and transfers, Strict access permissions, Secure cloud-based accounting systems, Routine data backups, and Compliance with industry privacy standards.",
    },
    {
      question: "How can I contact your team?",
      answer:
        "You can reach us through multiple convenient channels: Submit a request through our website contact form, Email our support team directly, Call us for immediate assistance. Expect replies within 1–2 business days.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#232061] p-3 min-h-screen rounded-bl-[60px] rounded-br-[60px]">
      <main
        className="w-full min-h-screen relative rounded-tl-[60px] rounded-tr-[60px] overflow-hidden"
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <Navbar />
        <section
          className="w-full bg-white pb-[50px]"
          style={{ width: "100%" }}
        >
          <div className="relative z-[10] max-lg:z-[1] max-w-7xl mx-auto px-14 max-sm:px-4 pt-52 max-lg:!pt-0 max-sm:mt-0 max-sm:!pt-3">
            <div className="mb-12">
              <nav className="text-[#232061] text-xs font-flex max-sm:text-xs">
                <Link href="/" className="font-normal">
                  Home
                </Link>{" "}
                <span className="font-black mx-5">&gt;</span>
                <span className="font-normal">FAQ</span>
              </nav>
            </div>

            <div className="mb-[129px] max-sm:mb-[65px]">
              <AnimateOnScroll delay={0}>
                <h1 className="text-[#232061] font-semibold mb-9 text-[60px] max-sm:text-[30px] max-lg:text-[40px]">
                  Frequently Asked Questions <br className="max-sm:hidden" />{" "}
                  <span className="font-light">by our Clients</span>
                </h1>
              </AnimateOnScroll>
              <p className="text-[#232061] text-xl font-flex max-w-4xl max-sm:text-xs">
                We understand that choosing the right accounting partner can be
                confusing. That&apos;s why we&apos;ve answered some of the most common
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
                      width="25"
                      height="13"
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
                        strokeWidth="2"
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