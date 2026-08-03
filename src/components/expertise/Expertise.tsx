"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface ServiceCard {
  id: number;
  title: string;
  subServices: string[];
  image: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: "Service Heading",
    subServices: ["Sub-service 01", "Sub-service 02", "Sub-service 03"],
    image: "/expertise-2.webp",
  },
  {
    id: 2,
    title: "Service Heading",
    subServices: ["Sub-service 01", "Sub-service 02", "Sub-service 03"],
    image: "/expertise-2.webp",
  },
  {
    id: 3,
    title: "Service Heading",
    subServices: ["Sub-service 01", "Sub-service 02", "Sub-service 03"],
    image: "/expertise-2.webp",
  },
  {
    id: 4,
    title: "Service Heading",
    subServices: ["Sub-service 01", "Sub-service 02", "Sub-service 03"],
    image: "/expertise-2.webp",
  },
  {
    id: 5,
    title: "Service Heading",
    subServices: ["Sub-service 01", "Sub-service 02", "Sub-service 03"],
    image: "/expertise-2.webp",
  },
  {
    id: 6,
    title: "Service Heading",
    subServices: ["Sub-service 01", "Sub-service 02", "Sub-service 03"],
    image: "/expertise-2.webp",
  },
  {
    id: 7,
    title: "Service Heading",
    subServices: ["Sub-service 01", "Sub-service 02", "Sub-service 03"],
    image: "/expertise-2.webp",
  },
];

export default function ExpertiseSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollLeft(emblaApi.canScrollPrev());
    setCanScrollRight(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden z-10">
      {/* Decorative Wing Top Left */}
      <div className="absolute top-12 left-12 lg:left-24 opacity-30 pointer-events-none">
        <Image
          src="/Veritias.png"
          alt="Decorative wing logo"
          width={180}
          height={120}
          className="grayscale brightness-110"
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className="text-[56px] md:text-[56px] leading-[1.1] font-light tracking-tight"
            style={{
              background:
                "linear-gradient(90deg, #232061 32.21%, #1F89A3 70.19%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Full{" "}
            <span className="text-[80px] italic font-serif font-bold italic-spectrum">
              Spectrum
            </span>
            <br />
            <span className="block mt-2">of our Services</span>
          </h2>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollLeft}
              className="rounded-full border border-[#232061] border-opacity-30 w-11 h-11 transition-all hover:bg-[#232061] hover:text-white inline-flex items-center justify-center disabled:opacity-20 disabled:pointer-events-none"
            >
              <ArrowLeft className="h-5 w-5 text-[#232061]" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollRight}
              className="rounded-full border border-[#232061] border-opacity-30 w-11 h-11 transition-all hover:bg-[#232061] hover:text-white inline-flex items-center justify-center disabled:opacity-20 disabled:pointer-events-none"
            >
              <ArrowRight className="h-5 w-5 text-[#232061]" />
            </button>
          </div>
        </div>

        {/* Carousel / Grid Section */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex -ml-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-8 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-[2.5rem] overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-2 border border-black/5">
                  {/* Grayscale Illustration Section */}
                  <div className="relative h-64 w-full bg-[#f2f2f2] overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Corner Line Decor */}
                    <div className="absolute top-6 right-6 text-black/20">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4L20 12L12 20M20 12H4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-12 flex flex-col flex-1">
                    <h3 className="text-[26px] font-bold text-[#232061] mb-6">
                      {service.title}
                    </h3>
                    <ul className="space-y-5 mb-12 flex-1">
                      {service.subServices.map((sub, i) => (
                        <li
                          key={i}
                          className="text-[#6c757d] text-[17px] font-medium leading-relaxed"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>

                    {/* Pill Button */}
                    <button className="w-full rounded-full border border-[#232061] text-[#232061] hover:bg-[#232061] hover:text-white py-6 text-sm font-bold tracking-wide transition-all flex justify-center items-center gap-3 bg-transparent">
                      Learn More
                      <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Wing Bottom Right */}
      <div className="absolute -bottom-12 -right-12 opacity-15 pointer-events-none hidden md:block">
        <Image
          src="/Veritias.png"
          alt="Large decorative wing"
          width={450}
          height={350}
          className="grayscale"
        />
      </div>

      <style jsx global>{`
        .italic-spectrum {
          font-family: serif;
          font-style: italic;
          color: #0d3b66;
        }
      `}</style>
    </section>
  );
}
