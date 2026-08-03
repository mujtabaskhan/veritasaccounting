"use client";

import Image from "next/image";
import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const OpenPositions = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const openPositions = [
    {
      id: 1,
      title: "Junior Accountant",
      badges: ["3 Years Experience", "Full-Time", "On-Site"],
      about:
        "We're seeking a detail-oriented Junior Accountant to assist with bookkeeping, reconciliations, and tax preparation. You'll support our senior accountants in managing client accounts and ensuring accurate, timely financial reporting",
      responsibilities: [
        "Record daily financial transactions and reconcile accounts",
        "Assist with corporate and personal tax filings",
        "Support payroll processing and financial reporting",
        "Maintain organized client documentation and records",
      ],
      qualifications: [
        "Diploma or degree in Accounting, Finance, or related field",
        "1-2 years of experience or internship in accounting/bookkeeping",
        "Proficiency in QuickBooks, Xero, or similar software",
        "Excellent attention to detail and organizational skills",
      ],
      benefits: [
        "Competitive salary and performance-based incentives",
        "Flexible work options (hybrid or remote)",
        "Paid time off and statutory holidays",
        "Professional development and CPA support",
        "Collaborative, inclusive, and growth-focused work culture",
        "Access to modern accounting tools and secure digital workflows",
      ],
    },
    {
      id: 2,
      title: "Senior Tax Consultant",
      badges: ["5+ Years Experience", "Part-Time/ Contract", "Remote"],
      about:
        "We're looking for a Senior Tax Consultant with strong experience in corporate and personal taxation. You'll provide expert advisory services, ensure compliance, and assist clients with complex tax matters.",
      responsibilities: [
        "Prepare and review corporate and personal tax returns",
        "Develop tax-efficient strategies and advise clients",
        "Manage CRA correspondence and audit support",
        "Stay updated with current tax laws and compliance standards",
      ],
      qualifications: [
        "CPA designation (or in progress) preferred",
        "3-5 years of experience in public accounting or tax advisory",
        "In-depth knowledge of Canadian tax regulations",
        "Strong communication and analytical skills",
      ],
      benefits: [
        "Competitive salary and performance-based incentives",
        "Flexible work options (hybrid or remote)",
        "Paid time off and statutory holidays",
        "Professional development and CPA support",
        "Collaborative, inclusive, and growth-focused work culture",
        "Access to modern accounting tools and secure digital workflows",
      ],
    },
    {
      id: 3,
      title: "Client Success Coordinator",
      badges: ["2-3 Years Experience", "Part-Time/ Contract", "Remote"],
      about:
        "We're seeking a proactive Client Success Coordinator to ensure a smooth and positive experience for our clients. You'll manage onboarding, coordinate communication, and maintain client relationships throughout their engagement with Veritas.",
      responsibilities: [
        "Coordinate client onboarding and document collection",
        "Schedule meetings and track service progress",
        "Maintain CRM records and ensure timely communication",
        "Support client satisfaction initiatives and identify improvements",
      ],
      qualifications: [
        "1-3 years of experience in client relations, administration, or accounting support",
        "Diploma or degree in Business Administration, Accounting, or related field",
        "Strong interpersonal and organizational skills",
        "Experience using CRM or project management tools",
        "Customer-focused, solution-oriented attitude",
      ],
      benefits: [
        "Competitive salary and performance-based incentives",
        "Flexible work options (hybrid or remote)",
        "Paid time off and statutory holidays",
        "Professional development and CPA support",
        "Collaborative, inclusive, and growth-focused work culture",
        "Access to modern accounting tools and secure digital workflows",
      ],
    },
  ];

  return (
    <section
      className="w-full bg-white pb-[104px] max-xl:pb-40 max-lg:pb-28 max-md:pb-20 max-sm:!pb-[81px]"
      style={{ width: "100%" }}
    >
      <div className="max-w-7xl mx-auto px-14 max-sm:px-4">
        <AnimateOnScroll delay={0}>
          <h3 className="text-[#232061] font-bold text-[30px] max-sm:!text-xl text-center mb-[47px]">
            Open Positions
          </h3>
        </AnimateOnScroll>

        <div className="flex flex-col gap-[98px] max-sm:!gap-12">
          {openPositions.map((position, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                expandedId === position.id ? "gap-10 max-sm:!gap-5" : "gap-0"
              }`}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex flex-col gap-[19px] max-sm:!gap-1.5">
                  <h2 className="text-[30px] max-sm:!text-xl text-[#232061] font-bold leading-[50px]">
                    {position.title}
                  </h2>
                  <div className="flex gap-[22px] max-lg:gap-4 max-sm:!gap-2">
                    {position.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="bg-[#E1EDF2] rounded-[50px] px-6 py-3 text-[#232061] text-base font-medium max-sm:!text-[10px] max-sm:!px-3 max-lg:text-base max-md:text-sm max-md:p-3"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => toggleExpand(position.id)}
                  className="flex items-center justify-center gap-4 text-white text-2xl rounded-[50px] bg-[#232061] py-1 px-5 transition-all hover:opacity-90 max-sm:!text-[10px] max-sm:!px-2 max-sm:!py-1.5 max-lg:text-xl max-md:text-base ml-auto"
                >
                  {expandedId === position.id ? "Hide details" : "View details"}
                  <Image
                    src="/arrow.svg"
                    alt="arrow"
                    width={35}
                    height={35}
                    className={`transition-transform duration-300 max-md:h-5 max-md:w-5 max-sm:h-3 max-sm:w-3 ${
                      expandedId === position.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expandedId === position.id
                    ? "max-h-[2000px] opacity-100 mt-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-[#F2F8FA] py-10 px-20 rounded-[50px] flex flex-col gap-8 max-sm:!p-8 max-sm:!gap-4">
                  <div className="text-xl text-[#232061] font-flex max-w-4xl max-sm:!text-sm">
                    <h5 className="font-bold">About the Role</h5>
                    <p>{position.about}</p>
                  </div>

                  <div className="text-xl text-[#232061] font-flex max-w-4xl max-sm:!text-sm">
                    <h5 className="font-bold">Responsibilities</h5>
                    <ul className="pl-2">
                      {position.responsibilities.map(
                        (responsibility, resIndex) => (
                          <li key={resIndex} className="list-disc ml-5">
                            {responsibility}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div className="text-xl text-[#232061] font-flex max-w-4xl max-sm:!text-sm">
                    <h5 className="font-bold">Qualifications</h5>
                    <ul className="pl-2">
                      {position.qualifications.map(
                        (qualification, resIndex) => (
                          <li key={resIndex} className="list-disc ml-5">
                            {qualification}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div className="text-xl text-[#232061] font-flex max-w-4xl max-sm:!text-sm">
                    <h5 className="font-bold">Employee Benefits</h5>
                    <p>
                      At Veritas Accounting & Tax Consultants, we value our
                      people as much as our clients. Our team enjoys:
                    </p>
                    <ul className="pl-2">
                      {position.benefits.map((benefit, resIndex) => (
                        <li key={resIndex} className="list-disc ml-5">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
