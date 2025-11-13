"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface ServiceCard {
  id: number;
  title: string;
  badges: string[];
  image: string;
  url: string;
}

export default function ExpertiseSection() {
  const expertiseCards: ServiceCard[] = useMemo(
    () => [
      {
        id: 1,
        title: "Accounting",
        badges: [
          "Virtual Bookkeeping",
          "Financial Reporting & Analysis",
          "Dedicated Accounting Teams",
        ],
        image: "/expertise-1.jpg",
        url: "/services#accounting",
      },
      {
        id: 2,
        title: "Tax Services",
        badges: [
          "Personal Tax Preparation",
          "GST/HST Returns & Filing",
          "Tax Planning & Strategy",
        ],
        image: "/expertise-2.jpg",
        url: "/services#tax",
      },
      {
        id: 3,
        title: "Payroll Services",
        badges: ["Payroll Management", "Payroll Processing Guidance"],
        image: "/expertise-3.jpg",
        url: "/services#payroll",
      },
      {
        id: 4,
        title: "Audit & Compliance Support",
        badges: ["Audit Support", ],
        image: "/expertise-3.jpg",
        url: "/services#compliance",
      },
      {
        id: 5,
        title: "CFO Services",
        badges: ["3 Years Experience", "Virtual Bookkeeping", "On-Site"],
        image: "/expertise-3.jpg",
        url: "/services#cfo-services",
      },
      {
        id: 6,
        title: "Business Advisory",
        badges: ["3 Years Experience", "Virtual Bookkeeping"],
        image: "/expertise-3.jpg",
        url: "/services#advisory",
      },
      {
        id: 7,
        title: "Business Administration",
        badges: ["3 Years Experience", "Virtual Bookkeeping"],
        image: "/expertise-3.jpg",
        url: "/services#administration",
      },
    ],
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(currentSection);

    return () => {
      observer.unobserve(currentSection);
    };
  }, []);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollLeft(emblaApi.canScrollPrev());
    setCanScrollRight(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollButtons();
    emblaApi.on("select", updateScrollButtons);
    emblaApi.on("reInit", updateScrollButtons);

    return () => {
      emblaApi.off("select", updateScrollButtons);
      emblaApi.off("reInit", updateScrollButtons);
    };
  }, [emblaApi, updateScrollButtons]);

  const scroll = (direction: "left" | "right") => {
    if (!emblaApi) return;
    if (direction === "left") {
      emblaApi.scrollPrev();
    } else {
      emblaApi.scrollNext();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 max-xl:py-16 max-lg:py-14 max-md:py-12 max-sm:py-10 rounded-tl-[60px] rounded-tr-[60px] -mt-14 relative z-[15]"
      style={{ width: "100%" }}
    >
      <div className="max-w-7xl mx-auto px-14 max-sm:px-4">
        <div className="flex items-start justify-end mb-10 gap-8">
          <div className="flex flex-row items-center gap-4 max-sm:gap-2">
            <span className="hidden text-[#232061] text-sm pr-6 max-sm:block">
              Click the arrow to scroll next
            </span>

            <motion.button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              whileHover={canScrollLeft ? { scale: 1.1 } : {}}
              whileTap={canScrollLeft ? { scale: 0.95 } : {}}
              className={`w-12 h-12 max-sm:w-8 max-sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                canScrollLeft
                  ? "cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
              style={
                canScrollLeft
                  ? { backgroundColor: "#232061" }
                  : { backgroundColor: "#ccc" }
              }
            >
              <ArrowLeft size={24} className="text-white" />
            </motion.button>

            <span className="text-[#232061] text-sm px-6 max-sm:hidden">
              Click the arrow to scroll next
            </span>

            <motion.button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              whileHover={canScrollRight ? { scale: 1.1 } : {}}
              whileTap={canScrollRight ? { scale: 0.95 } : {}}
              className={`w-12 h-12 max-sm:w-8 max-sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                canScrollRight
                  ? "cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
              style={
                canScrollRight
                  ? { backgroundColor: "#232061" }
                  : { backgroundColor: "#ccc" }
              }
            >
              <ArrowRight size={24} className="text-white" />
            </motion.button>
          </div>
        </div>

        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-[30px] max-sm:gap-4 max-[500px]:gap-4 py-8 cursor-grab active:cursor-grabbing">
            {expertiseCards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-[#027C990D] rounded-[50px] pt-6 flex flex-col relative flex-shrink-0 w-full max-w-[400px] min-w-[400px] max-[500px]:min-w-0 max-[500px]:w-[calc(100vw-56px)] max-[500px]:max-w-none transition-all duration-300 ease-in-out h-[600px] max-sm:h-[540px]"
                style={{
                  scrollSnapAlign: "start",
                  transform:
                    hoveredCard === card.id ? "scale(1.05)" : "scale(1)",
                  zIndex: hoveredCard === card.id ? 10 : 1,
                }}
              >
                <AnimateOnScroll delay={0}>
                  <h3 className="text-[#232061] text-[40px] font-semibold mb-4 px-10 max-sm:px-6 text-2xl">
                    {card.title}
                  </h3>
                </AnimateOnScroll>

                <div className="flex flex-col gap-3 px-10 max-sm:px-6 mb-3 max-sm:mb-2">
                  {card.badges.map((badge) => (
                    <span
                      key={badge}
                      className="w-max bg-[#E1EDF2] p-3 text-[#232061] font-medium text-[15px] rounded-[50px] max-sm:text-xs max-sm:p-2"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="px-10 mt-3 max-sm:mt-2 max-sm:px-6">
                  <span className="w-max bg-[#E1EDF2] p-3 text-[#232061] font-semibold text-sm rounded-[50px] max-sm:text-xs max-sm:p-2">
                    ...
                  </span>
                </div>

                <div className="w-full h-[280px] max-sm:h-[250px] mt-7 rounded-[50px] bg-[#7f6244d8] overflow-hidden absolute bottom-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-[50px] opacity-30"
                  />
                </div>

                <Link
                  href={card.url}
                  className="cursor-pointer z-[60] text-[#232061] flex items-center gap-3 bg-[#FFFFFFCC] px-4 py-3 rounded-[50px] text-[24px] font-semibold absolute bottom-8 left-8 max-sm:text-[15px] max-sm:py-2"
                >
                  Read More
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-sm:h-6 max-sm:w-6"
                  >
                    <path
                      d="M17.9311 24.7035L24.7035 17.9311M24.7035 17.9311L17.9311 11.1586M24.7035 17.9311H11.1586M34.8621 17.9311C34.8621 27.2818 27.2818 34.8621 17.9311 34.8621C8.58029 34.8621 1 27.2818 1 17.9311C1 8.58029 8.58029 1 17.9311 1C27.2818 1 34.8621 8.58029 34.8621 17.9311Z"
                      stroke="#1E1E1E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>

                <div
                  className="h-56 w-full absolute bottom-0 left-0 rounded-br-[50px] rounded-bl-[50px] z-50"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(35, 32, 97, 0) 0%, #232061 100%)",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6">
          <Link
            href={"/faq"}
            className="cursor-pointer z-[60] text-white flex items-center gap-3 bg-[#232061] px-4 py-2.5 rounded-[50px] text-[25px] font-semibold max-sm:text-[15px] max-sm:py-1"
          >
            Frequently Asked Questions
          </Link>

          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5001 23.3333L23.3334 17.5M23.3334 17.5L17.5001 11.6666M23.3334 17.5H11.6667M32.0834 17.5C32.0834 25.5541 25.5542 32.0833 17.5001 32.0833C9.44593 32.0833 2.91675 25.5541 2.91675 17.5C2.91675 9.44581 9.44593 2.91663 17.5001 2.91663C25.5542 2.91663 32.0834 9.44581 32.0834 17.5Z"
              stroke="#8BB7C5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
