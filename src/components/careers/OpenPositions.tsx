"use client";

import Image from "next/image";
import { useState } from "react";

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
        "We’re seeking a detail-oriented Junior Accountant to assist with bookkeeping, reconciliations, and tax preparation. You’ll support our senior accountants in managing client accounts and ensuring accurate, timely financial reporting",
      responsibilities: [
        "Assist in preparing financial statements and reports",
        "Maintain accurate financial records and ledgers",
        "Perform bank reconciliations and manage accounts payable/receivable",
        "Support tax preparation and filing processes",
      ],
      qualifications: [
        "Bachelor’s degree in Accounting or Finance",
        "1-3 years of relevant experience",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health, dental, and vision insurance",
      ],
    },
    {
      id: 2,
      title: "Junior Accountant",
      badges: ["3 Years Experience", "Full-Time", "On-Site"],
      about:
        "We’re seeking a detail-oriented Junior Accountant to assist with bookkeeping, reconciliations, and tax preparation. You’ll support our senior accountants in managing client accounts and ensuring accurate, timely financial reporting",
      responsibilities: [
        "Assist in preparing financial statements and reports",
        "Maintain accurate financial records and ledgers",
        "Perform bank reconciliations and manage accounts payable/receivable",
        "Support tax preparation and filing processes",
      ],
      qualifications: [
        "Bachelor’s degree in Accounting or Finance",
        "1-3 years of relevant experience",
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health, dental, and vision insurance",
      ],
    },
  ];

  return (
    <section className="bg-white px-4 pb-[104px] max-xl:pb-40 max-lg:pb-28 max-md:pb-20 max-sm:!pb-[81px]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-[#232061] font-bold text-[30px] max-sm:!text-xl text-center mb-[47px] max-sm:!mb-[110px]">
          Open Positions
        </h3>

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
                  <h2 className="text-[#232061] text-[40px] max-lg:text-[30px] font-bold max-sm:!text-xl">
                    {position.title}
                  </h2>
                  <div className="flex gap-[22px] max-lg:gap-4 max-sm:!gap-2">
                    {position.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="bg-[#E1EDF2] rounded-[50px] px-6 py-3 text-[#232061] text-xl font-medium max-sm:!text-[10px] max-sm:!px-3 max-lg:text-base max-md:text-sm max-md:p-3"
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
