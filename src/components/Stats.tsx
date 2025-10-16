"use client";

import { motion } from "framer-motion";

interface StatProps {
  value: string;
  label: string;
  delay: number;
}

function StatItem({ value, label, delay }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {value}
      </div>
      <p className="text-blue-100 text-lg">{label}</p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StatItem value="100+" label="Satisfied Clients" delay={0} />
          <StatItem value="10+" label="Years of Experience" delay={0.2} />
          <StatItem value="500M+" label="Total Assets Managed" delay={0.4} />
        </div>
      </div>
    </section>
  );
}
