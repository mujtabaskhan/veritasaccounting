'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface ServiceCard {
  id: number;
  titlePart1: string;
  titlePart2: string;
  description: string;
  image: string;
}

const SERVICES: ServiceCard[] = [
  {
    id: 1,
    titlePart1: 'Junior',
    titlePart2: 'Programs',
    description: 'For kids aged 5-12. Focus on fundamentals and fun.',
    image: '/1.jpg',
  },
  {
    id: 2,
    titlePart1: 'Youth',
    titlePart2: 'Programs',
    description: 'For teens aged 13-18. Advanced techniques and competition prep.',
    image: '/1.jpg',
  },
  {
    id: 3,
    titlePart1: 'Adult',
    titlePart2: 'Programs',
    description: 'For players of all levels. From beginner to advanced.',
    image: '/1.jpg',
  },
  {
    id: 4,
    titlePart1: 'Professional',
    titlePart2: 'League',
    description: 'Coaching for aspiring professionals and competitive players.',
    image: '/1.jpg',
  },
  {
    id: 5,
    titlePart1: 'Professional',
    titlePart2: 'League',
    description: 'Coaching for aspiring professionals and competitive players.',
    image: '/1.jpg',
  },
  {
    id: 6,
    titlePart1: 'Professional',
    titlePart2: 'League',
    description: 'Coaching for aspiring professionals and competitive players.',
    image: '/1.jpg',
  },
  {
    id: 7,
    titlePart1: 'Professional',
    titlePart2: 'League',
    description: 'Coaching for aspiring professionals and competitive players.',
    image: '/1.jpg',
  },
];

export default function ExpertiseSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4"
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
        {/* Header with Navigation Buttons */}
        <div className="flex items-start justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1
              className="text-5xl md:text-6xl font-bold mb-2"
              style={{ fontFamily: 'Roboto Serif, serif', color: '#003B66' }}
            >
              Comprehensive Tennis
            </h1>
            <h1
              className="text-5xl md:text-6xl font-bold"
              style={{ fontFamily: 'Roboto Serif, serif', color: '#003B66' }}
            >
              Training for Everyone
            </h1>
          </motion.div>

          {/* Navigation Buttons Top Right */}
          <div className="flex flex-row gap-4">
            {/* Left Button */}
            <motion.button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              whileHover={canScrollLeft ? { scale: 1.1, rotate: -15 } : {}}
              whileTap={canScrollLeft ? { scale: 0.95 } : {}}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                canScrollLeft ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'
              }`}
              style={
                canScrollLeft
                  ? { backgroundColor: '#027C99' }
                  : { backgroundColor: '#ccc' }
              }
            >
              <ChevronLeft size={24} className="text-white" />
            </motion.button>

            {/* Right Button */}
            <motion.button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              whileHover={canScrollRight ? { scale: 1.1, rotate: 15 } : {}}
              whileTap={canScrollRight ? { scale: 0.95 } : {}}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                canScrollRight ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'
              }`}
              style={
                canScrollRight
                  ? { backgroundColor: '#027C99' }
                  : { backgroundColor: '#ccc' }
              }
            >
              <ChevronRight size={24} className="text-white" />
            </motion.button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scrollable Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            ref={scrollContainerRef}
            className="hide-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {SERVICES.map((service, index) => {
              const isFirstCard = service.id === 1;
              const bgColor = isFirstCard ? '#027C99' : (hoveredCard === service.id ? '#027C99' : '#F5F1E8');

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.03 }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="flex-shrink-0 w-72 snap-center"
                >
                  <motion.div
                    className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-auto md:h-[650px] flex flex-col"
                    style={{
                      backgroundColor: bgColor,
                    }}
                    animate={{
                      backgroundColor: bgColor,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Top Section - Text Content */}
                    <div
                      className="p-6 flex-1 flex flex-col justify-between"
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="mb-2"
                          animate={{
                            color: isFirstCard ? '#FFFFFF' : (hoveredCard === service.id ? '#FFFFFF' : '#000000'),
                          }}
                          transition={{ duration: 0.3 }}
                          style={{ fontFamily: "'Roboto Serif', serif" }}
                        >
                          <h3
                            className="text-4xl font-bold leading-tight"
                            style={{
                              fontFamily: "Roboto Serif, serif",
                              color: isFirstCard ? '#FFFFFF' : (hoveredCard === service.id ? '#FFFFFF' : '#000000'),
                            }}
                          >
                            {service.titlePart1}
                          </h3>
                          <h3
                            className="text-4xl font-bold leading-tight"
                            style={{
                              fontFamily: "Roboto Serif, serif",
                              color: isFirstCard ? '#FFFFFF' : (hoveredCard === service.id ? '#FFFFFF' : '#000000'),
                            }}
                          >
                            {service.titlePart2}
                          </h3>
                        </motion.div>

                        <motion.p
                          className="text-sm font-semibold leading-relaxed"
                          style={{ color: isFirstCard ? '#FFFFFF' : (hoveredCard === service.id ? '#FFFFFF' : '#666666') }}
                          animate={{
                            color: isFirstCard ? '#FFFFFF' : (hoveredCard === service.id ? '#FFFFFF' : '#666666'),
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.description}
                        </motion.p>
                      </motion.div>
                    </div>

                    {/* Bottom Section - Image with rounded top corners */}
                    <div className="flex-1 relative overflow-hidden bg-gray-300 rounded-t-3xl group">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                      />

                      {/* Read More Button - Bottom Center */}
                      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-6">
                        <motion.button
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/30 backdrop-blur-md hover:bg-white/50 transition-all duration-300 border border-white/40"
                        >
                          <span className="text-white font-semibold text-sm">Read more</span>
                          <motion.div
                            animate={{ x: 0 }}
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight size={18} className="text-white" />
                          </motion.div>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}