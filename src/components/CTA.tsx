"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-3xl mx-auto text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Ready to Simplify Your Numbers?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg mb-8 text-blue-100"
        >
          Partner with us for strategic financial guidance and peace of mind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors">
            Get Started Today
          </button>
          <button className="px-8 py-3 border-2 border-white hover:bg-white/10 rounded-lg font-semibold transition-colors text-white">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
