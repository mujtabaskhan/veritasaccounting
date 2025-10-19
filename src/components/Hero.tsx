'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

function ModernHero() {
  const [hoveredTag, setHoveredTag] = useState<number | null>(null)

  const tags = ['Accounting', 'Tax', 'Payroll', 'Compliance', 'Advisory', 'CFO Services']

  const getFloatAnimation = (i: number) => {
    const isLeftColumn = i % 2 === 0
    
    if (isLeftColumn) {
      return { y: [0, 20, 0], duration: 5 }
    } else {
      return { y: [0, -20, 0], duration: 5 }
    }
  }

  const financialSymbols = ['$', '€', '¥', '£', '%', '∑']

  return (
    <div className="min-h-screen flex items-start justify-center pt-2.5 px-2.5 bg-gray-100" style={{ fontFamily: "'Roboto Serif', serif" }}>
      {/* Hero Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
        style={{ height: 'calc(100vh - 20px)' }}
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=600&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#003B66]/80 via-[#003B66]/60 to-transparent" />
        </div>

        {/* 3D Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, 40, 0],
              rotate: [0, 360],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' } as const}
            className="absolute -top-20 -right-20 w-48 h-48 bg-[#027C99] rounded-full mix-blend-screen filter blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, -60, 0],
              rotate: [360, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' } as const}
            className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#027C99] rounded-full mix-blend-screen filter blur-3xl opacity-15"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex items-center h-full px-6 md:px-12 py-12 md:py-0">
          {/* Text Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 text-white z-20"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
              style={{ color: '#003B66', fontFamily: "'Roboto Serif', serif", fontWeight: 400 }}
            >
              Your<br />
              <span style={{ fontWeight: 700 }}>Canadian</span><br />
              Partner for
            </motion.h1>

            {/* Tags Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-2 mb-8 w-fit"
            >
              {tags.map((tag, i) => {
                const floatConfig = getFloatAnimation(i)
                
                return (
                  <motion.button
                    key={tag}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ 
                      opacity: 1, 
                      y: floatConfig.y
                    }}
                    transition={{
                      y: {
                        duration: floatConfig.duration,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      },
                      opacity: {
                        duration: 0.8,
                        delay: 0.4 + i * 0.05
                      }
                    }}
                    onHoverStart={() => setHoveredTag(i)}
                    onHoverEnd={() => setHoveredTag(null)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-full text-xs md:text-sm font-semibold border-2 transition-colors duration-300"
                    style={{
                      backgroundColor: hoveredTag === i ? '#027C99' : 'rgba(255, 255, 255, 0.2)',
                      borderColor: '#fff',
                      color: hoveredTag === i ? 'white' : '#003B66',
                    }}
                  >
                    {tag}
                  </motion.button>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full font-bold text-white transition-all shadow-lg inline-flex items-center gap-2"
                style={{
                  backgroundColor: '#027C99',
                }}
              >
                Click here to<span style={{ fontWeight: 700 }}>Learn More</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side Visual Element - Accounting Theme */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex w-1/2 items-center justify-center relative"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Orbiting financial symbols */}
              {financialSymbols.map((symbol, i) => {
                const angle = (i * Math.PI * 2) / financialSymbols.length
                const radius = 150
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius

                return (
                  <motion.div
                    key={symbol}
                    animate={{
                      x: [x, -x, x],
                      y: [y, -y, y],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    } as const}
                    className="absolute"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold text-white"
                      style={{
                        backgroundColor: i % 2 === 0 ? '#027C99' : '#003B66',
                      }}
                    >
                      {symbol}
                    </div>
                  </motion.div>
                )
              })}

              {/* Center rotating circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' } as const}
                className="absolute w-32 h-32"
                style={{
                  border: '3px solid rgba(2, 124, 153, 0.5)',
                  borderRadius: '50%',
                }}
              />

              {/* Inner pulsing element */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' } as const}
                className="absolute w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold"
                style={{
                  backgroundColor: 'rgba(2, 124, 153, 0.2)',
                  color: '#027C99',
                }}
              >
                💼
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* CPA Logo - Bottom Right */}
        <div className="absolute bottom-8 right-8 z-30 w-48 h-48">
          <img 
            src="/cpa.png" 
            alt="CPA Logo" 
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-center"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Google Fonts - Roboto Serif */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');
        * {
          font-family: 'Roboto Serif', serif;
        }
      `}</style>
    </div>
  )
}

export default ModernHero