"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from 'next/link';

interface ServiceCard {
  id: number;
  title: string;
  badges: string[];
  image: string;
  url: string;
}

export default function ExpertiseSection() {
  const expertiseCards: ServiceCard[] = [
    {
      id: 1,
      title: "Accounting",
      badges: ["Virtual Bookkeeping", "Financial Reporting & Analysis", "Dedicated Accounting Teams"],
      image: "/expertise-1.jpg",
      url: "/accounting",
    },
    {
      id: 2,
      title: "Tax Services",
      badges: ["Personal Tax Preparation", "GST/HST Returns & Filing", "Tax Planning & Strategy"],
      image: "/expertise-2.jpg",
      url: "/tax-services",
    },
    {
      id: 3,
      title: "Payroll Services",
      badges: ["Payroll Management", "Payroll Processing Guidance"],
      image: "/expertise-3.jpg",
      url: "/payroll-services",
    },
    {
      id: 4,
      title: "Audit & Compliance Support",
      badges: ["3 Years Experience", "Virtual Bookkeeping", "On-Site"],
      image: "/expertise-3.jpg",
      url: "/audit-and-compliance-support",
    },
    {
      id: 5,
      title: "CFO Services",
      badges: ["3 Years Experience", "Virtual Bookkeeping", "On-Site"],
      image: "/expertise-3.jpg",
      url: "/cfo-services",
    },
    {
      id: 6,
      title: "Business Advisory",
      badges: ["3 Years Experience", "Virtual Bookkeeping", "On-Site"],
      image: "/expertise-3.jpg",
      url: "/business-advisory",
    },
    {
      id: 7,
      title: "Business Administration",
      badges: ["3 Years Experience", "Virtual Bookkeeping", "On-Site"],
      image: "/expertise-3.jpg",
      url: "/business-administration",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      container?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.children[0]?.clientWidth || 400;
      const gap = 30;
      const scrollAmount = cardWidth + gap;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest("button") ||
      target.closest("a") ||
      target.closest("[role='button']")
    ) {
      return;
    }
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest("button") ||
      target.closest("a") ||
      target.closest("[role='button']")
    ) {
      return;
    }
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 px-4 max-xl:py-16 max-lg:py-14 max-md:py-12 max-sm:py-10 rounded-tl-[60px] rounded-tr-[60px] -mt-14 relative z-10 max-sm:px-10"
    >
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-end mb-10 gap-8">
          <div className="flex flex-row items-center gap-4 max-sm:gap-2 max-sm:mr-6">
            <span className="hidden text-[#232061] text-sm pr-6 max-sm:block">
              Click the arrow to scroll next
            </span>

            <motion.button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              whileHover={canScrollLeft ? { scale: 1.1 } : {}}
              whileTap={canScrollLeft ? { scale: 0.95 } : {}}
              className={`w-12 h-12 max-sm:w-8 max-sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${canScrollLeft
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
              className={`w-12 h-12 max-sm:w-8 max-sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${canScrollRight
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

        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex overflow-x-auto overflow-y-visible gap-[30px] max-sm:gap-4 py-8 hide-scrollbar scroll-smooth cursor-grab active:cursor-grabbing px-4 md:px-8"
          style={{
            scrollSnapType: "x proximity",
            scrollPaddingLeft: "2rem",
            scrollPaddingRight: "2rem",
          }}
        >
          {expertiseCards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-[#027C990D] rounded-[50px] pt-6 h-max flex flex-col relative flex-shrink-0 w-full max-w-[380px] min-w-[360px] transition-all duration-300 ease-in-out"
              style={{
                scrollSnapAlign: "start",
                transform: hoveredCard === card.id ? "scale(1.05)" : "scale(1)",
                zIndex: hoveredCard === card.id ? 10 : 1,
              }}
            >
              <AnimateOnScroll delay={0}>
                <h3 className="text-[#232061] font-bold text-[50px] mb-10 px-10 max-sm:px-6 max-sm:text-[30px] max-sm:mb-7">
                  {card.title}
                </h3>
              </AnimateOnScroll>

              <div className="flex flex-col gap-3 px-10 max-sm:px-6 mb-3 max-sm:mb-2">
                {card.badges.map((badge) => (
                  <span
                    key={badge}
                    className="w-max bg-[#E1EDF2] p-4 text-[#232061] font-semibold text-xl rounded-[50px] max-sm:text-xs max-sm:p-2"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="px-10 mt-3 max-sm:mt-2 max-sm:px-6">
                <span className="w-max bg-[#E1EDF2] p-4 text-[#232061] font-semibold text-xl rounded-[50px] max-sm:text-xs max-sm:p-2">
                  ...
                </span>
              </div>

              <div className="w-full h-[397px] max-sm:h-[313px] mt-7 rounded-[50px] bg-[#7f6244d8]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-[50px] opacity-30"
                />
              </div>

              <Link href={card.url} className="cursor-pointer z-[60] text-[#232061] flex items-center gap-3 bg-[#FFFFFFCC] px-4 py-3 rounded-[50px] text-2xl font-semibold absolute bottom-8 left-8 max-sm:text-[15px] max-sm:py-2">
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

        <div className="flex items-center justify-center gap-3 mt-6">
          <Link href={'/faq'} className="cursor-pointer z-[60] text-white flex items-center gap-3 bg-[#232061] px-4 py-2.5 rounded-[50px] text-2xl font-semibold max-sm:text-[15px] max-sm:py-1">
            Talk to an Expert
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