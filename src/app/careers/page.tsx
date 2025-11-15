import ApplyNow from "@/components/careers/ApplyNow";
import Hero from "@/components/careers/Hero";
import OpenPositions from "@/components/careers/OpenPositions";
import Navbar from "@/components/Navbar";

const Career = () => {
  return (
    <>
      <div className="w-full bg-[#232061] p-3 min-h-screen rounded-bl-[60px] rounded-br-[60px]">
        <main
          className="w-full min-h-screen relative rounded-tl-[60px] rounded-tr-[60px] overflow-hidden"
          style={{ width: "100%", minHeight: "100vh" }}
        >
          <Navbar />
          <div className="relative z-[10] max-lg:z-[1]">
            <Hero />
            <OpenPositions />
            <ApplyNow />
          </div>
        </main>
      </div>
    </>
  );
};

export default Career;
