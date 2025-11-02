import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function MeetTeam() {
  const teamMembers = [
    {
      name: "Syed Kausar Abbas",
      title: "Senior Accountant",
      quote:
        "Numbers tell a story, my job is to make sure it's one of growth, stability, and opportunity.",
    },
    {
      name: "Neharika Ghimire",
      title: "Senior Tax Consultant",
      quote:
        "Good tax planning isn't just about saving money, it's about creating confidence and clarity for the future.",
    },
    {
      name: "Sam Davids",
      title: "Senior Business Advisor",
      quote:
        "Every business has potential. My role is to uncover it and turn insights into lasting success.",
    },
  ];

  return (
    <section className="bg-white pb-[122px] px-4 max-xl:pb-24 max-lg:pb-20 max-md:pb-16 max-sm:!pb-[105px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-[90px] max-sm:!mb-9">
          <AnimateOnScroll delay={0}>
            <h2 className="text-[70px] font-normal text-[#232061] leading-[70px] max-xl:text-[60px] max-xl:leading-[64px] max-lg:text-[52px] max-lg:leading-[56px] max-md:text-[44px] max-md:leading-[48px] max-sm:text-[36px] max-sm:leading-[40px] max-sm:!text-xl">
              Meet our <br className="max-sm:hidden" />
              <span className="font-semibold">Team</span>
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-8 max-lg:gap-6 max-md:gap-5 max-sm:!gap-[59px]">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <blockquote
                className={`${
                  index === 1 ? "text-center" : "text-left max-lg:text-center"
                } text-[25px] text-[#232061] italic leading-[40px] min-h-[160px] max-lg:min-h-[40px] mb-[43px] max-lg:mb-5 max-sm:leading-7 max-sm:min-h-0  max-sm:!text-xs max-sm:!mb-[14px] max-sm:!w-[244px] max-sm:!mx-auto`}
              >
                &quot;{member.quote}&quot;
              </blockquote>

              <h3
                className={`${
                  index === 1 ? "text-center" : "text-left max-lg:text-center"
                } text-[30px] text-[#232061] leading-[50px] max-sm:text-[22px] max-sm:leading-8 max-sm:!text-base`}
              >
                {member.name}
              </h3>
              <p
                className={`${
                  index === 1 ? "text-center" : "text-left max-lg:text-center"
                } text-[20px] text-[#232061] max-sm:!text-xs`}
              >
                {member.title}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[114px] max-md:gap-6 max-lg:mt-6 max-sm:!gap-0 max-sm:!mt-[59px]">
          <div></div>
          <div>
            {" "}
            <blockquote className="text-center text-[25px] text-[#232061] italic leading-[40px] min-h-[160px] max-lg:min-h-[40px] mb-[43px] max-lg:mb-5 max-sm:leading-7 max-sm:min-h-0 max-sm:!text-xs max-sm:!mb-[14px] max-sm:!w-[265px] max-sm:!mx-auto">
              &quot;Strong relationships are built on trust and communication,
              that’s the foundation of every great client experience.&quot;
            </blockquote>
            <h3 className="text-center text-[30px] text-[#232061] leading-[50px] max-sm:text-[22px] max-sm:leading-8 max-sm:!text-base">
              Ahmad Malik
            </h3>
            <p className="text-center text-[20px] text-[#232061] max-sm:!text-xs">
              Client Relationship Manager
            </p>
          </div>
        </div>
        <div></div>
      </div>

      <p className="text-center text-[20px] text-[#232061] leading-[30px] font-flex max-w-4xl mx-auto mt-[131px] max-sm:leading-6 max-sm:!mt-[122px] max-sm:!text-xs">
        Together, We Build Financial Clarity <br /> At Veritas Accounting, our
        mission is simple, to bring honesty, precision, and insight to every
        financial decision. With a team driven by expertise and integrity, we’re
        here to guide your business toward lasting growth and peace of mind.
        Your success is our purpose, and together, we create the clarity that
        drives it.
      </p>
    </section>
  );
}
