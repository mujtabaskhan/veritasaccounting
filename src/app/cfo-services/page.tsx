import ContactSection from "@/components/about/ContactSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Services1 = () => {
  const servicesData = [
    {
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
  return (
    <>
      <Navbar />
      <section className="w-full bg-white pt-40 max-lg:pt-20 px-4 pb-[198px] max-xl:pb-40 max-lg:pb-20 max-md:pb-32 rounded-bl-[60px] rounded-br-[60px]" style={{ width: "100%" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-[225px] max-sm:gap-[87px] pb-[100px] max-sm:pb-[87px]">
            {servicesData.map((service, index) => (
              <div key={index}>
                <div className="flex items-center justify-between max-sm:flex-col flex-wrap gap-3">
                  <div className="flex flex-col gap-3 max-w-3xl">
                    <AnimateOnScroll delay={0}>
                      <h1 className="text-[90px] font-semibold text-[#232061] mb-6 max-lg:text-[70px] max-md:text-[50px] max-sm:text-[30px] whitespace-nowrap">
                        {service.title}
                      </h1>
                    </AnimateOnScroll>
                    <p className="text-[#232061] text-xl max-sm:text-xs max-lg:text-base max-md:text-sm">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href={"/contact"}
                    className="flex items-center gap-3 bg-[#232061] text-white px-4 py-2 rounded-full max-sm:text-sm ml-auto"
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="bg-[#F2F8FA] px-14 py-10 max-sm:px-6 max-sm:py-8 rounded-[50px] mt-[81px] max-sm:mt-[38px] grid grid-cols-2 gap-8 max-md:grid-cols-1 max-sm:gap-4">
                  {service.services.map((service, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="py-1 px-4 max-sm:px-2 text-xl max-sm:text-xs bg-[#E1EDF2] font-semibold rounded-[50px] mb-6 w-max text-[#232061]">
                        <span>{service.title}</span>
                      </div>
                      <p className="font-flex text-[#232061] text-xl max-sm:text-xs">
                        {service.description}
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

export default Services1;
