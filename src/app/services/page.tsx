"use client";

import React, { useEffect } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";
import ContactSection from "@/components/about/ContactSection";
import Navbar from "@/components/Navbar";

const Services = () => {
  const servicesData = [
    {
      id: "accounting",
      title: "Accounting",
      description:
        "From bookkeeping to financial statements, our accounting services ensure your business remains compliant, organized, and positioned for sustainable growth. Here's some of our Accounting services listed below.",
      services: [
        {
          title: "Virtual Bookkeeping",
          description:
            "Stay organized with accurate, real-time bookkeeping that's paperless, efficient, and fully managed online, so you can focus on running your business.",
        },
        {
          title: "Financial Reporting & Analysis",
          description:
            "Timely, customized reports designed for business owners and managers to understand performance, track key metrics, and make informed, growth-focused decisions.",
        },
        {
          title: "Year-End Financials & Compliance",
          description:
            "Complete preparation of year-end accounts for tax filings, banking requirements, and regulatory compliance, giving you clarity, accuracy, and peace of mind.",
        },
        {
          title: "Dedicated Accounting Teams",
          description:
            "A professional team that knows your business inside out, offering ongoing back-office support and ensuring consistency, efficiency, and cost savings.",
        },
      ],
    },
    {
      id: "tax",
      title: "Tax Services",
      description:
        "At Veritas Accounting and Tax Consultants, we provide more than just numbers — we deliver clarity, confidence, and strategies to help your business grow. Whether you're a small business owner, entrepreneur, or corporate client, our dedicated team offers tailored services designed to simplify your finances and maximize results. Explore our full range of services below:",
      services: [
        {
          title: "Corporate Tax Preparation & Filing",
          description:
            "Ensure your corporation remains compliant while maximizing available deductions and credits.",
        },
        {
          title: "GST/HST Returns & Filing",
          description:
            "Preparation and filing of monthly, quarterly, and annual GST/HST returns, ensuring your business stays compliant and penalty-free.",
        },
        {
          title: "Personal Tax Preparation",
          description:
            "Accurate, stress-free filing for individuals and families, designed to minimize liabilities and maximize refunds.",
        },
        {
          title: "Tax Planning & Strategy",
          description:
            "Proactive, year-round planning to reduce tax burdens, create long-term savings, and support financial growth.",
        },
      ],
    },
    {
      id: "payroll",
      title: "Payroll Services",
      description:
        "Managing payroll can be time-consuming and complex — we make it simple. At Veritas Accounting, we handle every aspect of payroll processing with accuracy and compliance, ensuring your employees are paid on time and your business meets all government regulations. Here's some of our payroll services mentioned below:",
      services: [
        {
          title: "Payroll Management",
          description:
            "Complete payroll administration including salary and wage calculations, paystub generation, and year-end slips (T4s, T5s, etc.), ensuring accuracy and compliance.",
        },
        {
          title: "WSIB & Employer Obligations",
          description:
            "Assistance with Workplace Safety and Insurance Board (WSIB) reporting and compliance, helping you meet statutory requirements with confidence.",
        },
        {
          title: "Payroll Processing Guidance",
          description:
            "Advisory support to help you determine the most efficient payroll system or service for your business, streamlining operations while staying compliant.",
        },
      ],
    },
    {
      id: "compliance",
      title: "Audit & Compliance Support",
      description:
        "Staying compliant is essential to maintaining trust and transparency. At Veritas Accounting, we provide expert audit and compliance support to ensure your financial records meet all regulatory standards with accuracy and professionalism. Our team works closely with you to identify risks, strengthen internal controls, and prepare for audits with confidence. Here's some of our audit and compliance services mentioned below:",
      services: [
        {
          title: "CRA Audit Representation",
          description:
            "Professional representation to communicate directly with the CRA on your behalf, ensuring compliance while protecting your business interests.",
        },
        {
          title: "Insurance & Premium Audits",
          description:
            "Assistance with insurance premium audits, reviewing payroll classifications and exposure reporting to ensure accuracy and prevent overcharges.",
        },
        {
          title: "Regulatory & Industry Audits",
          description:
            "Support for audits across multiple sectors, including law firm spot audits, trucking and transportation compliance reviews (DOT/MTO/NSC), construction contract audits, and restaurant or hospitality licensing inspections.",
        },
        {
          title: "Financial Reviews & External Audits",
          description:
            "Preparation and representation for clients in industries such as Montessori schools, private education, non-profits, and other businesses that require independent financial audits or reviews by licensed audit firms.",
        },
        {
          title: "Audit Preparation & Advisory",
          description:
            "Proactive support to organize financial records, identify risks, and strengthen internal controls, so your business is always audit-ready.",
        },
      ],
    },
    {
      id: "advisory",
      title: "Business Advisory",
      description:
        "At Veritas Accounting, we go beyond numbers to help you make strategic business decisions that drive growth and sustainability. Our advisory services provide the insights, planning, and guidance you need to navigate challenges, seize opportunities, and strengthen your financial performance. Here's some of our business advisory services mentioned below:",
      services: [
        {
          title: "Business Consulting & Advisory",
          description:
            "Strategic guidance to improve operations, control costs, and scale sustainably, tailored to your unique business challenges.",
        },
        {
          title: "Cash Flow Management",
          description:
            "Clear insights into cash inflows and outflows, helping you maintain liquidity and keep your operations running smoothly.",
        },
        {
          title: "Budgeting & Forecasting",
          description:
            "Practical tools and forward-looking strategies to plan ahead, manage expenses, and set realistic growth targets.",
        },
        {
          title: "Succession & Exit Planning",
          description:
            "Customized strategies to transition ownership or exit your business successfully, protecting your legacy and financial future.",
        },
      ],
    },
    {
      id: "cfo-services",
      title: "CFO Services",
      description:
        "Our CFO services are designed to bring strategic financial leadership to your business, without the full-time cost. At Veritas Accounting, we provide expert financial insight, planning, and management to help you make informed decisions, improve cash flow, and drive sustainable growth. Here's some of our CFO services mentioned below:",
      services: [
        {
          title: "Virtual CFO Support",
          description:
            "Executive-level financial leadership tailored to your business needs. We act as your outsourced CFO, providing strategic insights, financial planning, and decision support without the cost of a full-time executive.",
        },
        {
          title: "Growth & Funding Strategy",
          description:
            "Guidance on capital planning, financing, and scaling strategies, ensuring your business has the resources and structure to grow sustainably.",
        },
        {
          title: "Performance Monitoring & Reporting",
          description:
            "Ongoing analysis of key financial metrics to help you track progress, identify risks, and make data-driven decisions.",
        },
        {
          title: "Long-Term Financial Planning",
          description:
            "Big-picture financial oversight, including corporate tax planning, cash flow forecasting, and risk management, to secure your company's future.",
        },
      ],
    },
  ];

  useEffect(() => {
    // Handle smooth scroll on mount if hash is present
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-white pt-40 px-4 pb-[198px] max-xl:pb-40 max-lg:pt-16 max-lg:pb-28 max-md:pt-12 max-md:pb-20 max-sm:pt-10 max-sm:!pb-0 rounded-bl-[60px] rounded-br-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 max-sm:mb-20">
            <nav className="text-[#232061] text-xl font-flex max-sm:text-xs">
              <Link href="/" className="font-normal">
                Home
              </Link>{" "}
              <span className="font-black mx-5">&gt;</span>
              <Link href="/expertise" className="font-normal">
                Expertise
              </Link>{" "}
              <span className="font-black mx-5">&gt;</span>
              <span className="font-normal">Our Services</span>
            </nav>
          </div>
          <div className="flex flex-col gap-[225px] max-sm:gap-[87px] pb-[225px] max-sm:pb-[87px]">
            {servicesData.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-32">
                <div className="flex items-center justify-between max-sm:flex-col flex-wrap gap-3">
                  <div className="flex flex-col gap-3 max-w-3xl">
                    <AnimateOnScroll delay={0}>
                      <h2 className="text-[90px] font-semibold text-[#232061] mb-6 max-lg:text-[70px] max-md:text-[50px] max-sm:text-[30px]">
                        {service.title === "Audit & Compliance Support" ? (
                          <>
                            <span className="whitespace-nowrap">
                              Audit & Compliance
                            </span>
                            <br />
                            Support
                          </>
                        ) : (
                          service.title
                        )}
                      </h2>
                    </AnimateOnScroll>
                    <p className="text-[#232061] text-xl max-sm:text-xs max-lg:text-base max-md:text-sm">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href="#contact-section"
                    onClick={(e) => {
                      e.preventDefault();
                      const element =
                        document.getElementById("contact-section");
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    className="flex items-center gap-3 bg-[#232061] text-white px-4 py-2 rounded-full max-sm:text-sm ml-auto hover:bg-opacity-90 transition-colors cursor-pointer"
                  >
                    Let&apos;s Talk
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="max-sm:w-4 max-sm:h-4"
                    >
                      <path
                        d="M15.5833 21.4167L21.4167 15.5833M21.4167 15.5833L15.5833 9.75M21.4167 15.5833H9.75M30.1667 15.5833C30.1667 23.6375 23.6375 30.1667 15.5833 30.1667C7.52918 30.1667 1 23.6375 1 15.5833C1 7.52918 7.52918 1 15.5833 1C23.6375 1 30.1667 7.52918 30.1667 15.5833Z"
                        stroke="#F3F3F3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="bg-[#F2F8FA] px-14 py-10 max-sm:px-6 max-sm:py-8 rounded-[50px] mt-[81px] max-sm:mt-[38px] grid grid-cols-2 gap-8 max-md:grid-cols-1 max-sm:gap-4">
                  {service.services.map((serviceItem, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="py-1 px-4 max-sm:px-2 text-xl max-sm:text-xs bg-[#E1EDF2] font-semibold rounded-[50px] mb-6 w-max text-[#232061]">
                        <span>{serviceItem.title}</span>
                      </div>
                      <p className="font-flex text-[#232061] text-xl max-sm:text-xs">
                        {serviceItem.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <ContactSection hideHeading={false} />
        </div>
      </section>
    </>
  );
};

export default Services;
