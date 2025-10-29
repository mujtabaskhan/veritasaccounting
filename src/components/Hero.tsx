'use client'

function ModernHero() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Roboto Serif', serif" }}>
      {/* Hero Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1920&h=1080&fit=crop")',
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 50%, transparent 100%)' }} />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex items-center h-full px-12 md:px-20 lg:px-32">
          {/* Text Content Section */}
          <div className="w-full max-w-3xl">
            {/* Welcome Text */}
            <p className="text-lg md:text-xl mb-3" style={{ color: '#003B66', fontWeight: 400 }}>
              Welcome to
            </p>
            
            {/* Company Name */}
            <h1
              className="text-6xl md:text-7xl lg:text-8xl leading-tight mb-10"
              style={{ color: '#003B66', fontFamily: "'Roboto Serif', serif", fontWeight: 700 }}
            >
              Veritas<br />
              Accounting
            </h1>

            {/* Tagline with Parentheses Design */}
            <div className="flex items-center gap-8 mb-12">
              <div className="flex items-center">
                <span className="text-7xl md:text-8xl" style={{ color: '#027C99', fontWeight: 300 }}>(</span>
                <div className="mx-4">
                  <p className="text-2xl md:text-3xl leading-tight" style={{ color: '#003B66', fontWeight: 600 }}>
                    Simplifying
                  </p>
                  <p className="text-2xl md:text-3xl leading-tight" style={{ color: '#003B66', fontWeight: 400 }}>
                    Numbers
                  </p>
                </div>
                <span className="text-7xl md:text-8xl" style={{ color: '#027C99', fontWeight: 300 }}>)</span>
              </div>
              
              <div className="text-2xl md:text-3xl leading-tight">
                <p style={{ color: '#027C99', fontWeight: 600 }}>Maximizing</p>
                <p style={{ color: '#027C99', fontWeight: 400 }}>Results</p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                className="px-10 py-4 rounded-full font-bold text-white transition-all inline-flex items-center gap-3 hover:opacity-90 text-lg"
                style={{
                  backgroundColor: '#003B66',
                }}
              >
                Talk to an Expert
                <span className="text-2xl">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Curved Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 80 Q360 0 720 0 T1440 80 L1440 80 L0 80 Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Google Fonts - Roboto Serif */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');
      `}</style>
    </div>
  )
}

export default ModernHero