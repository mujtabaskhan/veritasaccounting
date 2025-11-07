"use client";
import Link from "next/link";

function ServicesSection() {
  const servicesRow1 = [
    { name: "Accounting", href: "/services#accounting" },
    { name: "Taxation", href: "/services#tax" },
    { name: "Payroll", href: "/services#payroll" },
    { name: "Compliance", href: "/services#compliance" },
  ];
  const servicesRow2 = [
    { name: "Advisory", href: "/services#advisory" },
    { name: "CFO Services", href: "/services#cfo-services" },
    { name: "Learn More", href: "/expertise" },
  ];

  return (
    <section
      className="w-full bg-white py-40 px-4 max-xl:py-16 max-lg:py-14 max-md:py-12 max-sm:py-20 rounded-tl-[60px] rounded-tr-[60px] -mt-14 relative z-10 max-sm:px-10"
      style={{ width: "100%" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {servicesRow1.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="px-5 py-2 rounded-full text-[30px] max-sm:text-xs max-sm:px-3 font-semibold bg-[#E1EDF2] text-[#232061] hover:bg-[#D0E3EA] transition-colors cursor-pointer"
            >
              {service.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-[119px] max-sm:mb-[94px]">
          {servicesRow2.map((service) => (
            <Link
              href={service.href}
              key={service.name}
              className="px-5 py-1 rounded-full text-[30px] max-sm:text-xs max-sm:px-3 font-semibold inline-flex items-center gap-2 bg-[#E1EDF2] text-[#232061] hover:bg-[#D0E3EA] transition-colors"
              style={
                service.name === "Learn More"
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
              {service.name}
              {service.name === "Learn More" && (
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

          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-sm:w-8 max-sm:h-8"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                fill="#25D366"
              />
            </svg>
          </a>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <p className="text-center text-2xl max-sm:text-[15px] leading-relaxed font-normal text-[#232061]">
            Helping businesses grow with integrity, clarity, precision, and
            proactive financial guidance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
