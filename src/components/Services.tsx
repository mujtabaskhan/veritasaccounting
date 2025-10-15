'use client'

import { motion } from 'framer-motion'
import { FileText, TrendingUp, Shield } from 'lucide-react'

interface ServiceProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function ServiceCard({ icon, title, description, delay }: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform duration-300"
    >
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export function Services() {
  const services = [
    {
      icon: <FileText size={32} />,
      title: 'Payroll & Compliance',
      description: 'Full payroll processing and tax compliance services for your business.',
      delay: 0,
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Strategic Insights',
      description: 'Data-driven financial strategies to optimize your business growth.',
      delay: 0.2,
    },
    {
      icon: <Shield size={32} />,
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services and financial assurance.',
      delay: 0.4,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Comprehensive CPA services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
