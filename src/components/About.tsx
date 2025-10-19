import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function CPAHero() {
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleGetStarted = () => {
    console.log('Get Started clicked');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/', '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('.hero-container');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero-container flex items-center justify-center px-6 py-12 overflow-hidden" style={{ backgroundColor: '#fff', minHeight: 'auto' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@100;300;400;500;700&display=swap');
        
        * {
          font-family: 'Roboto Serif', serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotateInSmooth {
          from {
            opacity: 0;
            transform: rotateY(90deg) rotateX(45deg) translateZ(-100px);
          }
          to {
            opacity: 1;
            transform: rotateY(0deg) rotateX(0deg) translateZ(0px);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes smoothFloat {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes gentleGlow {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 15px rgba(2, 124, 153, 0.2));
          }
          50% {
            opacity: 0.98;
            filter: drop-shadow(0 0 30px rgba(2, 124, 153, 0.4));
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .tagline-section {
          animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
          animation-delay: 0s;
        }

        .tagline-section.scroll-visible {
          animation: slideInLeft 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards !important;
          opacity: 1;
        }

        .buttons-section {
          animation: slideInRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
          animation-delay: 0.2s;
        }

        .buttons-section.scroll-visible {
          animation: scaleIn 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards !important;
          opacity: 1;
          animation-delay: 0.3s;
        }

        .heading-section {
          animation: smoothFloat 4s cubic-bezier(0.42, 0, 0.58, 1) infinite, gentleGlow 4s ease-in-out infinite;
          will-change: transform, filter;
        }

        .heading-section.scroll-visible {
          animation: fadeInUp 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards, smoothFloat 4s cubic-bezier(0.42, 0, 0.58, 1) 2.8s infinite, gentleGlow 4s ease-in-out 2.8s infinite !important;
          opacity: 1;
        }

        .bracket-left,
        .heading-main,
        .bracket-right,
        .max-results {
          animation: fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }

        .bracket-left.scroll-visible {
          animation: rotateInSmooth 2.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards !important;
          opacity: 1;
        }

        .heading-main.scroll-visible {
          animation: scaleIn 3.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards !important;
          opacity: 1;
          animation-delay: 0.3s;
        }

        .bracket-right.scroll-visible {
          animation: rotateInSmooth 3.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards !important;
          opacity: 1;
          animation-delay: 0.6s;
        }

        .max-results.scroll-visible {
          animation: rotateInSmooth 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards !important;
          opacity: 1;
          animation-delay: 1s;
        }

        .tagline-hover {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .tagline-hover:hover {
          transform: translateY(-4px);
        }

        .button-primary {
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .button-primary:hover {
          transform: scale(1.08);
          box-shadow: 0 20px 40px rgba(2, 124, 153, 0.3);
        }

        .button-whatsapp {
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .button-whatsapp:hover {
          transform: scale(1.15) rotate(8deg);
          box-shadow: 0 20px 40px rgba(34, 197, 94, 0.4);
        }

        .button-icon {
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .button-whatsapp:hover .button-icon {
          transform: rotate(15deg) scale(1.1);
        }
      `}</style>
      
      <div className="w-full max-w-7xl space-y-12">
        {/* ROW 1: Tagline + Buttons */}
        <div className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 tagline-section ${isVisible ? 'scroll-visible' : ''}`}>
          {/* Tagline */}
          <p 
            className="text-lg leading-relaxed flex-1 tagline-hover"
            style={{ 
              color: '#003B66',
              fontWeight: 400,
              fontSize: '18px',
              maxWidth: '550px',
              letterSpacing: '0.3px'
            }}
          >
            Our goal is simple. We want to make top-tier CPA services accessible to startups and small businesses in Atlantic Canada.
          </p>
          
          {/* Buttons container */}
          <div className={`flex items-center gap-4 buttons-section ${isVisible ? 'scroll-visible' : ''}`}>
            {/* Teal button */}
            <button
              onClick={handleGetStarted}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className="button-primary px-8 py-3 rounded-full text-white font-medium cursor-pointer relative overflow-hidden shadow-lg"
              style={{ 
                backgroundColor: '#027C99',
              }}
            >
              <span className="relative z-10 flex items-center justify-center">Get Started</span>
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                style={{
                  opacity: isButtonHovered ? 0.2 : 0,
                  transform: isButtonHovered ? 'translateX(100%)' : 'translateX(-100%)',
                  transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              />
            </button>
            
            {/* WhatsApp button */}
            <button
              onClick={handleWhatsApp}
              onMouseEnter={() => setIsWhatsAppHovered(true)}
              onMouseLeave={() => setIsWhatsAppHovered(false)}
              className="button-whatsapp flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg cursor-pointer"
              style={{
                backgroundColor: isWhatsAppHovered ? '#22c55e' : '#22c55e',
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <MessageCircle size={24} strokeWidth={2} className="button-icon" />
            </button>
          </div>
        </div>
        
        {/* ROW 2: Centered "Simplifying Numbers" + "Maximizing Results" */}
        <div 
          className={`flex flex-col lg:flex-row items-center justify-center gap-12 heading-section ${isVisible ? 'scroll-visible' : ''}`}
        >
          {/* Simplifying Numbers with brackets */}
          <div className="flex items-center gap-4 justify-center">
            <span 
              className={`bracket-left ${isVisible ? 'scroll-visible' : ''}`}
              style={{ 
                color: '#027C99',
                fontSize: '64px',
                fontWeight: 700,
                lineHeight: '1',
                display: 'flex',
                alignItems: 'center',
                opacity: isVisible ? 1 : 0
              }}
            >
              (
            </span>
            <h2 
              className={`heading-main ${isVisible ? 'scroll-visible' : ''}`}
              style={{ 
                color: '#003B66',
                fontSize: '56px',
                fontWeight: 700,
                lineHeight: '1.2',
                textAlign: 'center',
                minWidth: '280px',
                opacity: isVisible ? 1 : 0
              }}
            >
              Simplifying<br />Numbers
            </h2>
            <span 
              className={`bracket-right ${isVisible ? 'scroll-visible' : ''}`}
              style={{ 
                color: '#027C99',
                fontSize: '64px',
                fontWeight: 700,
                lineHeight: '1',
                display: 'flex',
                alignItems: 'center',
                opacity: isVisible ? 1 : 0
              }}
            >
              )
            </span>
          </div>
          
          {/* Maximizing Results */}
          <h3 
            className={`max-results ${isVisible ? 'scroll-visible' : ''}`}
            style={{ 
              color: '#027C99',
              fontSize: '56px',
              fontWeight: 700,
              lineHeight: '1.2',
              textAlign: 'center',
              minWidth: '280px',
              opacity: isVisible ? 1 : 0
            }}
          >
            Maximizing<br />Results
          </h3>
        </div>
      </div>
    </div>
  );
}