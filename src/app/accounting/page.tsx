'use client';

import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Calculator, Users, FileText, ArrowRight, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [scrollY, setScrollY] = useState(0);
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            if (window.innerWidth < 1024) {
                const viewportCenter = window.innerHeight / 2 + window.scrollY;
                let closestCard = null;
                let closestDistance = Infinity;

                cardRefs.current.forEach((card, idx) => {
                    if (card) {
                        const rect = card.getBoundingClientRect();
                        const cardCenter = rect.top + window.scrollY + rect.height / 2;
                        const distance = Math.abs(viewportCenter - cardCenter);

                        if (distance < closestDistance) {
                            closestDistance = distance;
                            closestCard = idx;
                        }
                    }
                });

                if (closestDistance < 300) {
                    setActiveCard(closestCard);
                } else {
                    setActiveCard(null);
                }
            } else {
                setActiveCard(null);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const services = [
        {
            icon: Calculator,
            title: 'Tax Planning',
            desc: 'Strategic tax solutions designed to optimize your financial position and ensure compliance with evolving regulations',
            features: ['Tax Optimization', 'Compliance', 'Advisory']
        },
        {
            icon: FileText,
            title: 'Financial Auditing',
            desc: 'Comprehensive audit services that provide transparency, accuracy, and confidence in your financial statements',
            features: ['Internal Audit', 'External Audit', 'Risk Assessment']
        },
        {
            icon: TrendingUp,
            title: 'Business Advisory',
            desc: 'Expert guidance to drive growth, improve efficiency, and navigate complex business challenges with confidence',
            features: ['Strategy', 'Growth Planning', 'Analysis']
        },
        {
            icon: Users,
            title: 'Payroll Management',
            desc: 'Streamlined payroll processing that ensures accuracy, compliance, and timely compensation for your team',
            features: ['Processing', 'Compliance', 'Reporting']
        }
    ];

    const benefits = [
        'Certified Public Accountants',
        '25+ Years Experience',
        'Industry-Leading Accuracy',
        'Personalized Service'
    ];

    const scrollProgress = scrollY / 100;
    const parallaxSlow = scrollY * 0.3;
    const parallaxMedium = scrollY * 0.5;

    return (
        <div
            ref={containerRef}
            className="min-h-screen relative overflow-hidden"
            style={{
                fontFamily: '"Roboto Serif", serif',
                background: 'radial-gradient(ellipse at top, #FFFBF0 0%, #FFF8E7 50%, #F5E6D3 100%)'
            }}
        >
            {/* Animated Hexagon Pattern Background */}
            <div className="fixed inset-0 opacity-8">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse"
                            patternTransform={`rotate(${scrollY * 0.05})`}>
                            <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
                                fill="none"
                                stroke="#027C99"
                                strokeWidth="1"
                                opacity="0.15" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexagons)" />
                </svg>
            </div>

            {/* Animated Wave Lines */}
            <div className="fixed inset-0 opacity-10 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#027C99] to-transparent"
                        style={{
                            top: `${20 + i * 20}%`,
                            animation: `wave ${8 + i * 2}s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`,
                            transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 50}px)`
                        }}
                    />
                ))}
            </div>

            {/* Floating Energy Orbs */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: `${20 + i * 10}px`,
                            height: `${20 + i * 10}px`,
                            left: `${(i * 27) % 100}%`,
                            top: `${(i * 13) % 100}%`,
                            background: i % 2 === 0
                                ? 'radial-gradient(circle, #027C99 0%, transparent 70%)'
                                : 'radial-gradient(circle, #003B66 0%, transparent 70%)',
                            animation: `floatOrb ${10 + i * 0.5}s ease-in-out infinite`,
                            animationDelay: `${i * 0.3}s`,
                            opacity: 0.12,
                            filter: 'blur(3px)',
                            transform: `translateY(${-scrollY * (0.15 + i * 0.01)}px) translateX(${Math.sin(scrollY * 0.005 + i) * 50}px)`
                        }}
                    />
                ))}
            </div>

            {/* Geometric Shapes with Parallax */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30 md:opacity-100">
                <div
                    className="absolute top-20 right-20 w-32 h-32 md:w-64 md:h-64 border-4 border-[#027C99]/10 hidden md:block"
                    style={{
                        animation: 'rotate3d 20s linear infinite',
                        transform: `translateY(${parallaxSlow}px) rotate(${scrollY * 0.1}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.2})`
                    }}
                />
                <div
                    className="absolute bottom-40 left-20 w-48 h-48 md:w-96 md:h-96 border-4 border-[#003B66]/10 rounded-full hidden md:block"
                    style={{
                        animation: 'rotate3d 25s linear infinite reverse',
                        transform: `translateY(${-parallaxMedium}px) rotate(${-scrollY * 0.1}deg) scale(${1 + Math.cos(scrollY * 0.01) * 0.2})`
                    }}
                />
            </div>

            {/* Scroll Progress */}
            <div className="fixed left-0 top-0 w-full h-2 bg-white/50 z-50">
                <div
                    className="h-full bg-gradient-to-r from-[#027C99] to-[#003B66]"
                    style={{
                        width: `${Math.min(100, scrollProgress * 10)}%`,
                        boxShadow: '0 0 20px rgba(2, 124, 153, 0.6)',
                        transition: 'width 0.3s ease-out'
                    }}
                />
            </div>

            {/* Hero Section */}
            <div className="relative z-10 container mx-auto px-4 pt-32 pb-24">
                <div
                    className="text-center mb-20"
                    style={{
                        transform: `translateY(${scrollY * 0.4}px) scale(${Math.max(0.9, 1 - scrollY * 0.0005)})`,
                        opacity: Math.max(0.3, 1 - scrollY * 0.0015),
                        transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
                    }}
                >
                    <div className="relative inline-block">
                        <h1
                            className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black mb-6 md:mb-8 tracking-tighter relative"
                            style={{
                                background: 'linear-gradient(135deg, #027C99 0%, #003B66 50%, #027C99 100%)',
                                backgroundSize: '200% 200%',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'gradientShift 5s ease infinite, float 6s ease-in-out infinite',
                                filter: 'drop-shadow(0 0 40px rgba(2, 124, 153, 0.3))'
                            }}
                        >
                            Accounting
                        </h1>

                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute inset-0 border-2 rounded-full hidden md:block"
                                style={{
                                    borderColor: i % 2 === 0 ? '#027C99' : '#003B66',
                                    opacity: 0.2,
                                    animation: `rotateRing ${12 + i * 3}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                                    transform: `scale(${1.3 + i * 0.3})`
                                }}
                            />
                        ))}
                    </div>


                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#003B66] font-bold max-w-3xl mx-auto leading-relaxed mt-6 md:mt-8 px-4"
                        style={{
                            animation: 'fadeInUp 1s ease-out 0.3s backwards'
                        }}>
                        Professional accounting solutions tailored to your business needs
                    </p>

                    {/* Benefits Bar */}
                    <div
                        className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-6 px-4"
                        style={{
                            transform: `translateY(${parallaxSlow * 0.5}px)`,
                            opacity: Math.max(0.5, 1 - scrollY * 0.001)
                        }}
                    >
                        {benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur rounded-full border-2 border-[#027C99]/30"
                                style={{
                                    animation: `fadeInUp 0.8s ease-out ${i * 0.1}s backwards`,
                                    boxShadow: '0 10px 30px rgba(2, 124, 153, 0.15)'
                                }}
                            >
                                <CheckCircle size={18} className="text-[#027C99] flex-shrink-0" />
                                <span className="text-[#003B66] font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-10 relative z-20 max-w-6xl mx-auto mb-32">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        const isHovered = hoveredCard === idx;
                        const isActive = activeCard === idx;
                        const rotateIntensity = Math.sin(scrollY * 0.002 + idx) * 5;
                        const floatY = Math.sin(scrollY * 0.005 + idx * 1.2) * 15;
                        const finalScale = isActive ? 1.08 : (isHovered ? 1.03 : 1);

                        return (
                            <div
                                key={idx}
                                ref={(el) => { cardRefs.current[idx] = el; }}
                                className="relative group cursor-pointer"
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    transform: `
                    translateY(${floatY}px) 
                    rotateX(${rotateIntensity}deg) 
                    rotateY(${rotateIntensity}deg)
                    scale(${finalScale})
                  `,
                                    transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    transformStyle: 'preserve-3d',
                                    animation: `fadeInUp 1.8s cubic-bezier(0.19, 1, 0.22, 1) ${idx * 0.3}s backwards`,
                                    zIndex: isActive ? 30 : 10,
                                    willChange: 'transform'
                                }}
                            >
                                {/* Enhanced Glow */}
                                <div
                                    className="absolute inset-0 rounded-3xl blur-3xl"
                                    style={{
                                        background: 'radial-gradient(circle, #027C99, #003B66)',
                                        transform: 'translateZ(-30px)',
                                        opacity: isActive ? 0.4 : (isHovered ? 0.25 : 0.15),
                                        animation: 'pulse 3s ease-in-out infinite',
                                        transition: 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                    }}
                                />

                                {/* Main Card */}
                                <div
                                    className="relative bg-white rounded-3xl p-8 lg:p-10 border-2 overflow-hidden h-full"
                                    style={{
                                        borderColor: isActive ? '#027C99' : (isHovered ? '#027C99' : '#003B66'),
                                        borderWidth: isActive ? '3px' : '2px',
                                        boxShadow: isActive
                                            ? '0 40px 80px -12px rgba(2, 124, 153, 0.4), 0 0 50px rgba(2, 124, 153, 0.25)'
                                            : isHovered
                                                ? '0 30px 60px -12px rgba(2, 124, 153, 0.3), 0 0 30px rgba(2, 124, 153, 0.15)'
                                                : '0 20px 50px -12px rgba(0, 59, 102, 0.2), 0 0 20px rgba(0, 59, 102, 0.1)',
                                        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        willChange: 'box-shadow, border-color, border-width'
                                    }}
                                >
                                    {/* Animated Border Gradient */}
                                    <div
                                        className="absolute inset-0 rounded-3xl"
                                        style={{
                                            background: `linear-gradient(${scrollY + idx * 60}deg, transparent 20%, ${isActive ? '#027C99' : '#003B66'} 50%, transparent 80%)`,
                                            backgroundSize: '200% 200%',
                                            opacity: isActive ? 0.15 : (isHovered ? 0.1 : 0.05),
                                            animation: 'borderRotate 4s linear infinite',
                                            mixBlendMode: 'multiply',
                                            transition: 'opacity 1.5s ease'
                                        }}
                                    />

                                    {/* Corner Accents */}
                                    <div
                                        className="absolute top-0 right-0 w-40 h-40 bg-[#027C99] rounded-bl-full"
                                        style={{
                                            opacity: isActive ? 0.12 : 0.06,
                                            transform: `scale(${isActive ? 1.8 : (isHovered ? 1.4 : 1)}) rotate(${scrollY * 0.1}deg)`,
                                            animation: 'pulse 2s ease-in-out infinite',
                                            transition: 'all 2s cubic-bezier(0.19, 1, 0.22, 1)'
                                        }}
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 w-40 h-40 bg-[#003B66] rounded-tr-full"
                                        style={{
                                            opacity: isActive ? 0.1 : 0.05,
                                            transform: `scale(${isActive ? 1.8 : (isHovered ? 1.4 : 1)}) rotate(${-scrollY * 0.1}deg)`,
                                            animation: 'pulse 2s ease-in-out infinite 1s',
                                            transition: 'all 2s cubic-bezier(0.19, 1, 0.22, 1)'
                                        }}
                                    />

                                    <div className="relative z-10">
                                        <div
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative"
                                            style={{
                                                background: isActive
                                                    ? 'linear-gradient(135deg, #027C99 0%, #003B66 100%)'
                                                    : 'linear-gradient(135deg, rgba(2, 124, 153, 0.1) 0%, rgba(0, 59, 102, 0.1) 100%)',
                                                border: `3px solid ${isActive ? '#027C99' : '#003B66'}`,
                                                boxShadow: isActive
                                                    ? '0 20px 40px rgba(2, 124, 153, 0.35)'
                                                    : '0 15px 30px rgba(2, 124, 153, 0.2)',
                                                transform: `scale(${isActive ? 1.15 : 1})`,
                                                transition: 'all 2s cubic-bezier(0.19, 1, 0.22, 1)',
                                                animation: 'float 3s ease-in-out infinite',
                                                willChange: 'transform'
                                            }}
                                        >
                                            <Icon
                                                size={40}
                                                style={{
                                                    color: isActive ? '#FFFFFF' : '#027C99',
                                                    filter: `drop-shadow(0 0 10px ${isActive ? 'rgba(255, 255, 255, 0.5)' : 'rgba(2, 124, 153, 0.3)'})`,
                                                    transition: 'color 1.5s ease',
                                                    strokeWidth: 2.5
                                                }}
                                            />
                                        </div>

                                        <h3 className="text-2xl lg:text-3xl font-black mb-4"
                                            style={{
                                                color: isActive ? '#027C99' : '#003B66',
                                                textShadow: isActive ? '0 0 20px rgba(2, 124, 153, 0.2)' : 'none',
                                                transform: `scale(${isActive ? 1.05 : 1})`,
                                                transition: 'all 2s cubic-bezier(0.19, 1, 0.22, 1)',
                                                willChange: 'transform, color'
                                            }}>
                                            {service.title}
                                        </h3>

                                        <p className="text-[#003B66] mb-6 leading-relaxed text-base lg:text-lg font-medium opacity-80">
                                            {service.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-3 mb-6">
                                            {service.features.map((feat, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-2 text-white text-sm font-bold rounded-full border-2"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${i % 2 === 0 ? '#027C99' : '#003B66'}, ${i % 2 === 0 ? '#003B66' : '#027C99'})`,
                                                        borderColor: isActive ? '#027C99' : '#003B66',
                                                        animation: `slideInRight 0.8s ease-out ${i * 0.25}s backwards`,
                                                        boxShadow: isActive ? '0 8px 20px rgba(2, 124, 153, 0.3)' : '0 5px 15px rgba(2, 124, 153, 0.2)',
                                                        transform: isActive ? `scale(1.05)` : 'scale(1)',
                                                        transition: 'all 1.5s cubic-bezier(0.19, 1, 0.22, 1)'
                                                    }}
                                                >
                                                    {feat}
                                                </span>
                                            ))}
                                        </div>

                                        <div
                                            className="flex items-center font-black text-base lg:text-lg"
                                            style={{
                                                color: isActive ? '#027C99' : '#003B66',
                                                gap: isActive ? '1rem' : '0.75rem',
                                                transition: 'all 2s cubic-bezier(0.19, 1, 0.22, 1)'
                                            }}
                                        >
                                            <span>Learn More</span>
                                            <ArrowRight
                                                size={20}
                                                style={{
                                                    animation: 'arrowBounce 1s ease-in-out infinite'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Banner with Parallax */}
                {/* <div 
          className="relative max-w-6xl mx-auto mb-32 overflow-hidden px-4"
          style={{
            transform: `translateY(${parallaxMedium * 0.5}px)`,
            opacity: Math.min(1, Math.max(0.5, 1 - Math.abs(scrollY - 1200) / 1000))
          }}
        >
          <div className="bg-gradient-to-r from-[#027C99] to-[#003B66] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
               style={{
                 boxShadow: '0 30px 80px rgba(2, 124, 153, 0.4)'
               }}>
            
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white/10 rounded-full"
                  style={{
                    width: `${10 + i * 5}px`,
                    height: `${10 + i * 5}px`,
                    left: `${(i * 11) % 100}%`,
                    top: `${(i * 17) % 100}%`,
                    animation: `floatOrb ${8 + i * 0.3}s ease-in-out infinite ${i * 0.2}s`
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
              {[
                { number: '500+', label: 'Clients Served' },
                { number: '$50M+', label: 'Managed Assets' },
                { number: '15K+', label: 'Tax Returns Filed' },
                { number: '99%', label: 'Client Retention' }
              ].map((stat, idx) => (
                <div key={idx} className="text-white">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2"
                       style={{
                         animation: `fadeInUp 1s ease-out ${idx * 0.15}s backwards`
                       }}>
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold opacity-90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

                {/* CTA Section */}
                <div
                    className="relative max-w-6xl mx-auto mb-20 px-4"
                    style={{
                        transform: `translateY(${Math.max(0, (scrollY - 1400) * 0.2)}px)`,
                        opacity: Math.min(1, Math.max(0, (scrollY - 1200) / 400))
                    }}
                >
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6"
                            style={{
                                background: 'linear-gradient(135deg, #027C99 0%, #003B66 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'float 4s ease-in-out infinite'
                            }}>
                            Why Choose Us?
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#003B66] font-semibold max-w-3xl mx-auto">
                            Professional excellence meets personalized service
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
                        {[
                            {
                                title: 'Expert Team',
                                desc: 'Certified professionals with 25+ years combined experience',
                                icon: Users,
                                stat: '25+',
                                statLabel: 'Years'
                            },
                            {
                                title: 'Client Success',
                                desc: 'Proven track record of helping businesses thrive',
                                icon: TrendingUp,
                                stat: '98%',
                                statLabel: 'Satisfaction'
                            },
                            {
                                title: 'Compliance',
                                desc: 'Stay ahead of regulations with our proactive approach',
                                icon: CheckCircle,
                                stat: '100%',
                                statLabel: 'Accuracy'
                            },
                            {
                                title: 'Support',
                                desc: 'Dedicated assistance whenever you need it',
                                icon: Phone,
                                stat: '24/7',
                                statLabel: 'Available'
                            }
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="relative bg-white rounded-2xl p-6 md:p-8 border-2 border-[#027C99]/30 hover:border-[#027C99] group cursor-pointer overflow-hidden"
                                    style={{
                                        animation: `fadeInUp 1s ease-out ${idx * 0.15}s backwards`,
                                        boxShadow: '0 10px 30px rgba(2, 124, 153, 0.1)',
                                        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        transform: `translateY(${Math.sin(scrollY * 0.005 + idx) * 5}px)`
                                    }}
                                >
                                    {/* Background Gradient */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-[#027C99]/5 to-[#003B66]/5 opacity-0 group-hover:opacity-100"
                                        style={{ transition: 'opacity 0.5s ease' }}
                                    />

                                    <div className="relative z-10">
                                        <div
                                            className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#027C99] to-[#003B66] flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110"
                                            style={{
                                                transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                boxShadow: '0 10px 25px rgba(2, 124, 153, 0.3)'
                                            }}
                                        >
                                            <Icon className="text-white w-6 h-6 md:w-8 md:h-8" />
                                        </div>

                                        <div className="text-3xl md:text-4xl font-black text-[#027C99] mb-1 md:mb-2">
                                            {item.stat}
                                        </div>
                                        <div className="text-xs md:text-sm font-bold text-[#003B66]/60 mb-3 md:mb-4 uppercase tracking-wide">
                                            {item.statLabel}
                                        </div>

                                        <h3 className="text-lg md:text-xl font-black text-[#003B66] mb-2 md:mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#003B66]/80 text-xs md:text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Contact CTA */}
                    <div className="bg-gradient-to-br from-white to-[#FFF8E7] rounded-3xl p-8 md:p-10 lg:p-16 border-3 border-[#027C99] relative overflow-hidden"
                        style={{
                            boxShadow: '0 30px 80px rgba(2, 124, 153, 0.25), 0 0 60px rgba(2, 124, 153, 0.1)'
                        }}>

                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="ctaPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                        <circle cx="30" cy="30" r="2" fill="#027C99" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#ctaPattern)" />
                            </svg>
                        </div>

                        {/* Animated circles */}
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute rounded-full border-2 border-[#027C99]/20 hidden md:block"
                                style={{
                                    width: `${200 + i * 100}px`,
                                    height: `${200 + i * 100}px`,
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    animation: `pulse ${3 + i}s ease-in-out infinite ${i * 0.5}s`
                                }}
                            />
                        ))}

                        <div className="relative z-10 text-center">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 px-4"
                                style={{
                                    background: 'linear-gradient(135deg, #027C99 0%, #003B66 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                Ready to Get Started?
                            </h2>

                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#003B66] font-semibold mb-8 md:mb-12 max-w-3xl mx-auto px-4">
                                Let our expert team handle your accounting needs while you focus on growing your business
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
                                <button className="relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-[#027C99] to-[#003B66] text-white font-black text-base md:text-xl rounded-full overflow-hidden group w-full sm:w-auto"
                                    style={{
                                        boxShadow: '0 20px 50px rgba(2, 124, 153, 0.4)',
                                        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                    }}>
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Schedule Consultation
                                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </button>

                                <button className="relative px-8 md:px-12 py-4 md:py-6 bg-white border-3 border-[#027C99] text-[#003B66] font-black text-base md:text-xl rounded-full overflow-hidden group w-full sm:w-auto"
                                    style={{
                                        boxShadow: '0 20px 50px rgba(2, 124, 153, 0.2)',
                                        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                    }}>
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">View Our Work</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#027C99] to-[#003B66] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </button>
                            </div>

                            {/* Contact Info Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                                <div className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 bg-white/60 backdrop-blur rounded-2xl border-2 border-[#027C99]/30 hover:border-[#027C99] hover:shadow-lg transition-all duration-300">
                                    <Phone className="w-6 h-6 md:w-7 md:h-7 text-[#027C99]" />
                                    <span className="text-[#003B66] font-bold text-sm md:text-lg">+1 (555) 123-4567</span>
                                </div>

                                <div className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 bg-white/60 backdrop-blur rounded-2xl border-2 border-[#027C99]/30 hover:border-[#027C99] hover:shadow-lg transition-all duration-300">
                                    <Mail className="w-6 h-6 md:w-7 md:h-7 text-[#027C99]" />
                                    <span className="text-[#003B66] font-bold text-sm md:text-lg break-all">info@accounting.com</span>
                                </div>

                                <div className="flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 bg-white/60 backdrop-blur rounded-2xl border-2 border-[#027C99]/30 hover:border-[#027C99] hover:shadow-lg transition-all duration-300">
                                    <MapPin className="w-6 h-6 md:w-7 md:h-7 text-[#027C99]" />
                                    <span className="text-[#003B66] font-bold text-sm md:text-lg">123 Business Ave</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@400;700;900&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          33% { transform: translateY(-50px) translateX(30px) scale(1.2); }
          66% { transform: translateY(-100px) translateX(-30px) scale(0.8); }
        }

        @keyframes wave {
          0%, 100% { transform: translateX(0%); }
          50% { transform: translateX(100%); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes rotate3d {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes rotateRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes arrowBounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        @keyframes borderRotate {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
        </div>
    );
}