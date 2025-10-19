import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What accounting services do you offer?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "How do you ensure financial accuracy?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      question: "What is your pricing structure?",
      answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      question: "How can I get started with your services?",
      answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-70 bg-white px-6 py-20" style={{ fontFamily: 'Roboto Serif, serif' }}>
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

        @keyframes expandHeight {
          from {
            max-height: 0;
            opacity: 0;
            margin-top: 0;
          }
          to {
            max-height: 1000px;
            opacity: 1;
            margin-top: 12px;
          }
        }

        @keyframes collapseHeight {
          from {
            max-height: 1000px;
            opacity: 1;
            margin-top: 12px;
          }
          to {
            max-height: 0;
            opacity: 0;
            margin-top: 0;
          }
        }

        .header-section {
          animation: slideInUp 0.8s ease-out;
        }

        .faq-container {
          animation: slideInUp 0.8s ease-out 0.2s both;
        }

        .faq-item {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: slideInUp 0.8s ease-out forwards;
        }

        .faq-item:nth-child(1) {
          animation-delay: 0.3s;
        }

        .faq-item:nth-child(2) {
          animation-delay: 0.4s;
        }

        .faq-item:nth-child(3) {
          animation-delay: 0.5s;
        }

        .faq-item:nth-child(4) {
          animation-delay: 0.6s;
        }

        .faq-button {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .faq-button:hover {
          background-color: rgba(2, 124, 153, 0.05);
        }

        .faq-button.active {
          border-color: #027C99;
          background-color: rgba(2, 124, 153, 0.08);
        }

        .chevron-icon {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .chevron-icon.open {
          transform: rotate(180deg);
        }

        .faq-answer {
          overflow: hidden;
          animation: expandHeight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .faq-answer.closing {
          animation: collapseHeight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="header-section mb-16">
          <h1 
            style={{
              color: '#003B66',
              fontSize: '36px',
              fontWeight: 700,
              marginBottom: '12px'
            }}
          >
            Frequently Asked Questions
          </h1>
          <p 
            style={{
              color: '#003B66',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '1.7',
              opacity: 0.8
            }}
          >
            Have questions about our bookkeeping services or bookkeeping accounting services? We've compiled answers to the most common queries to help you better understand how Veritas Accounting can streamline your financial processes.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="faq-container space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-button w-full px-8 py-5 rounded-full border-2 border-gray-300 text-left flex items-center justify-between"
                style={{
                  borderColor: openIndex === index ? '#027C99' : '#d1d5db',
                  backgroundColor: openIndex === index ? 'rgba(2, 124, 153, 0.08)' : 'transparent'
                }}
              >
                <span 
                  style={{
                    color: '#003B66',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '1.5'
                  }}
                >
                  {item.question}
                </span>
                <ChevronDown 
                  className={`chevron-icon ${openIndex === index ? 'open' : ''}`}
                  size={20}
                  style={{ color: '#027C99', flexShrink: 0, marginLeft: '16px' }}
                />
              </button>

              {/* Answer Section */}
              {openIndex === index && (
                <div 
                  className="faq-answer px-8 py-5 bg-gray-50 rounded-2xl mt-2"
                >
                  <p 
                    style={{
                      color: '#003B66',
                      fontSize: '15px',
                      fontWeight: 400,
                      lineHeight: '1.7',
                      opacity: 0.85
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}