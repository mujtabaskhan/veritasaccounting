'use client'

import { useState } from 'react'

function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const servicesRow1 = ['Accounting', 'Tax', 'Payroll', 'Compliance']
  const servicesRow2 = ['Advisory', 'CFO Services', 'Learn More']

  return (
    <div className="bg-white py-16 px-8" style={{ fontFamily: "'Roboto Serif', serif" }}>
      <div className="max-w-6xl mx-auto">
        {/* Services Tags - Row 1 */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {servicesRow1.map((service) => (
            <button
              key={service}
              onMouseEnter={() => setHoveredService(service)}
              onMouseLeave={() => setHoveredService(null)}
              className="px-6 py-3 rounded-full text-base font-bold transition-all duration-300"
              style={{
                backgroundColor: hoveredService === service ? '#003B66' : '#E8F4F8',
                color: hoveredService === service ? 'white' : '#003B66',
              }}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Services Tags - Row 2 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {servicesRow2.map((service) => (
            <button
              key={service}
              onMouseEnter={() => setHoveredService(service)}
              onMouseLeave={() => setHoveredService(null)}
              className="px-6 py-3 rounded-full text-base font-bold transition-all duration-300 inline-flex items-center gap-2"
              style={{
                backgroundColor: service === 'Learn More' ? '#003B66' : (hoveredService === service ? '#003B66' : '#E8F4F8'),
                color: service === 'Learn More' ? 'white' : (hoveredService === service ? 'white' : '#003B66'),
              }}
            >
              {service}
              {service === 'Learn More' && <span className="text-lg">→</span>}
            </button>
          ))}
        </div>

        {/* Tagline */}
        <p 
          className="text-center text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal"
          style={{ color: '#003B66' }}
        >
          Helping businesses grow with integrity, clarity, precision, and proactive
          financial guidance.
        </p>
      </div>

      {/* Google Fonts - Roboto Serif */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');
      `}</style>
    </div>
  )
}

export default ServicesSection