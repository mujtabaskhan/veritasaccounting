import React from 'react';

export default function TheDifference() {
  return (
    <div className="difference-container bg-white px-6 py-20" style={{ fontFamily: 'Roboto Serif, serif', minHeight: 'auto' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@100;300;400;500;700&display=swap');
        
        * {
          font-family: 'Roboto Serif', serif;
        }

        .card {
          transition: all 0.3s ease;
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 24px;
          position: relative;
          overflow: hidden;
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
          transition: opacity 0.3s ease;
        }

        .card:hover::before {
          opacity: 1;
        }

        .card:hover {
          transform: translateY(-12px);
          border-color: rgba(2, 124, 153, 0.8);
          box-shadow: 0 20px 50px rgba(2, 124, 153, 0.2);
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div 
          className="header-banner mb-16 text-center rounded-3xl px-12 py-16"
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
        <div className="card-container grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="card">
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
          <div className="card">
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
          <div className="card">
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
