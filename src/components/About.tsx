"use client";
import Link from 'next/link';

function ServicesSection() {
  const servicesRow1 = ["Accounting", "Tax", "Payroll", "Compliance"];
  const servicesRow2 = ["Advisory", "CFO Services", "Learn More"];


  return (
    <div className="bg-white py-20 px-4 max-xl:py-16 max-lg:py-14 max-md:py-12 max-sm:py-10 rounded-tl-[60px] rounded-tr-[60px] -mt-14 relative z-10 max-sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {servicesRow1.map((service) => (
            <button
              key={service}
              className="px-5 py-2 rounded-full text-[30px] max-sm:text-xs max-sm:px-3 font-semibold bg-[#E1EDF2] text-[#232061]"
            >
              {service}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-[119px] max-sm:mb-[94px]">
          {servicesRow2.map((service) => (
            <Link
              href={"/expertise"}
              key={service}
              className="px-5 py-1 rounded-full text-[30px] max-sm:text-xs max-sm:px-3 font-semibold inline-flex items-center gap-2 bg-[#E1EDF2] text-[#232061]"
              style={
                service === "Learn More"
                  ? {
                    backgroundColor: "#232061",
                    color: "white",
                  }
                  : {
                    backgroundColor: "#E1EDF2",
                    color: "#232061",
                  }
              }
            >
              {service}
              {service === "Learn More" && (
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-sm:w-4 max-sm:h-4"
                >
                  <path
                    d="M17.5 23.3333L23.3333 17.5M23.3333 17.5L17.5 11.6666M23.3333 17.5H11.6667M32.0833 17.5C32.0833 25.5541 25.5542 32.0833 17.5 32.0833C9.44585 32.0833 2.91667 25.5541 2.91667 17.5C2.91667 9.44581 9.44585 2.91663 17.5 2.91663C25.5542 2.91663 32.0833 9.44581 32.0833 17.5Z"
                    stroke="#F3F3F3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>

        <p className="text-center text-2xl max-sm:text-[15px] leading-relaxed max-w-3xl mx-auto font-normal text-[#232061]">
          Helping businesses grow with integrity, clarity, precision, and
          proactive financial guidance.
        </p>
      </div>
    </div>
  );
}

export default ServicesSection;
