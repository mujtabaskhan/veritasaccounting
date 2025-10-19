import React, { useState, useEffect } from 'react';

export default function TheDifference() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.difference-container');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        setIsVisible(isInView);

        // Calculate scroll progress for rotation
        const elementCenter = rect.top + rect.height / 2;
        const windowCenter = window.innerHeight / 2;
        const progress = (windowCenter - elementCenter) / window.innerHeight;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="difference-container bg-white px-6 py-20" style={{ fontFamily: 'Roboto Serif, serif', minHeight: 'auto' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@100;300;400;500;700&display=swap');
        
        * {
          font-family: 'Roboto Serif', serif;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes smoothColorFlow {
          0% {
            background: linear-gradient(90deg, #003B66 0%, #027C99 50%, #003B66 100%);
            background-position: 0% 50%;
          }
          50% {
            background: linear-gradient(90deg, #027C99 0%, #003B66 50%, #027C99 100%);
            background-position: 100% 50%;
          }
          100% {
            background: linear-gradient(90deg, #003B66 0%, #027C99 50%, #003B66 100%);
            background-position: 0% 50%;
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

        @keyframes shimmerBorder {
          0% {
            border-color: rgba(2, 124, 153, 0.3);
            box-shadow: inset 0 0 20px rgba(2, 124, 153, 0.1), 0 0 15px rgba(2, 124, 153, 0.2);
          }
          50% {
            border-color: rgba(2, 124, 153, 0.7);
            box-shadow: inset 0 0 20px rgba(2, 124, 153, 0.3), 0 0 30px rgba(2, 124, 153, 0.5);
          }
          100% {
            border-color: rgba(2, 124, 153, 0.3);
            box-shadow: inset 0 0 20px rgba(2, 124, 153, 0.1), 0 0 15px rgba(2, 124, 153, 0.2);
          }
        }

        @keyframes floatingCard {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotateInView {
          from {
            opacity: 0;
            transform: rotateY(80deg) translateZ(-50px);
          }
          to {
            opacity: 1;
            transform: rotateY(0deg) translateZ(0px);
          }
        }

        .header-banner {
          animation: slideInUp 0.8s ease-out, smoothColorFlow 8s ease-in-out infinite;
          background: linear-gradient(90deg, #003B66 0%, #027C99 50%, #003B66 100%);
          background-size: 200% 200%;
          perspective: 1000px;
        }

        .header-banner.scroll-visible {
          animation: slideInUp 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards, smoothColorFlow 8s ease-in-out 2s infinite !important;
        }

        .header-text {
          animation: fadeInText 2s ease-in-out forwards;
          opacity: 1;
        }

        .header-banner.scroll-visible .header-text {
          animation: fadeInText 2s ease-in-out forwards !important;
          opacity: 1 !important;
        }

        .card-container {
          animation: slideInUp 0.8s ease-out 0.2s both;
          perspective: 1200px;
        }

        .card-container.scroll-visible {
          animation: slideInUp 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both !important;
        }

        .card {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 24px;
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .card.scroll-visible {
          opacity: 1;
        }

        .card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(2, 124, 153, 0.1) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.6s ease-out;
        }

        .card:hover::before {
          opacity: 1;
        }

        .card:nth-child(1) {
          animation: rotateInView 2s cubic-bezier(0.16, 1, 0.3, 1) forwards, floatingCard 5s ease-in-out 1s infinite, shimmerBorder 4s ease-in-out infinite;
        }

        .card:nth-child(1).scroll-visible {
          animation: rotateInView 2s cubic-bezier(0.16, 1, 0.3, 1) forwards, floatingCard 5s ease-in-out 1s infinite, shimmerBorder 4s ease-in-out infinite !important;
        }

        .card:nth-child(2) {
          animation: rotateInView 4s cubic-bezier(0.16, 1, 0.3, 1) 1s both, floatingCard 5s ease-in-out 2s infinite, shimmerBorder 4s ease-in-out 1s infinite;
        }

        .card:nth-child(2).scroll-visible {
          animation: rotateInView 4s cubic-bezier(0.16, 1, 0.3, 1) 1s both, floatingCard 5s ease-in-out 2s infinite, shimmerBorder 4s ease-in-out 1s infinite !important;
        }

        .card:nth-child(3) {
          animation: rotateInView 6s cubic-bezier(0.16, 1, 0.3, 1) 2s both, floatingCard 5s ease-in-out 3s infinite, shimmerBorder 4s ease-in-out 2s infinite;
        }

        .card:nth-child(3).scroll-visible {
          animation: rotateInView 6s cubic-bezier(0.16, 1, 0.3, 1) 2s both, floatingCard 5s ease-in-out 3s infinite, shimmerBorder 4s ease-in-out 2s infinite !important;
        }

        .card:hover {
          transform: translateY(-12px) rotateX(-5deg) rotateY(2deg);
          border-color: rgba(2, 124, 153, 0.8);
          box-shadow: 0 20px 50px rgba(2, 124, 153, 0.2);
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div 
          className={`header-banner mb-16 text-center rounded-3xl px-12 py-16 ${isVisible ? 'scroll-visible' : ''}`}
          style={{
            background: 'linear-gradient(135deg, #003B66 0%, #027C99 100%)'
          }}
        >
          <p 
            className="header-text"
            style={{
              color: '#ffffff',
              fontSize: '32px',
              fontWeight: 300,
              letterSpacing: '0.5px',
              marginBottom: '8px'
            }}
          >
            The <span style={{ fontWeight: 700, fontSize: '64px', fontStyle: 'italic' }}>Difference</span>
          </p>
          <p 
            className="header-text"
            style={{
              color: '#ffffff',
              fontSize: '36px',
              fontWeight: 300,
              letterSpacing: '0.5px'
            }}
          >
            We Deliver
          </p>
        </div>

        {/* Cards Container */}
        <div className={`card-container grid grid-cols-1 md:grid-cols-3 gap-12 ${isVisible ? 'scroll-visible' : ''}`}>
          {/* Card 1 */}
          <div className={`card ${isVisible ? 'scroll-visible' : ''}`}>
            <h3 
              style={{
                color: '#003B66',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '1.3',
                marginBottom: '12px',
                position: 'relative',
                zIndex: 1
              }}
            >
              Precision You Can<br />Count On
            </h3>
            <p 
              style={{
                color: '#003B66',
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '1.7',
                opacity: 0.8,
                position: 'relative',
                zIndex: 1
              }}
            >
              Every number tells a story, we make sure yours is accurate, compliant, and clear. Our meticulous attention to detail ensures your books, taxes, and audits are done right every time.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`card ${isVisible ? 'scroll-visible' : ''}`}>
            <h3 
              style={{
                color: '#003B66',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '1.3',
                marginBottom: '12px',
                position: 'relative',
                zIndex: 1
              }}
            >
              Strategic Insight,<br />Not Just Numbers
            </h3>
            <p 
              style={{
                color: '#003B66',
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '1.7',
                opacity: 0.8,
                position: 'relative',
                zIndex: 1
              }}
            >
              We go beyond bookkeeping. Our team translates financial data into actionable strategies that help you make confident business decisions, improve cash flow, and plan for growth.
            </p>
          </div>

          {/* Card 3 */}
          <div className={`card ${isVisible ? 'scroll-visible' : ''}`}>
            <h3 
              style={{
                color: '#003B66',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '1.3',
                marginBottom: '12px',
                position: 'relative',
                zIndex: 1
              }}
            >
              Trusted Partners<br />for Your Success
            </h3>
            <p 
              style={{
                color: '#003B66',
                fontSize: '15px',
                fontWeight: 400,
                lineHeight: '1.7',
                opacity: 0.8,
                position: 'relative',
                zIndex: 1
              }}
            >
              From startups to established enterprises, businesses across Canada trust us for dependable, transparent, and caring service. We treat your business like our own, with honesty, expertise, and accountability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}