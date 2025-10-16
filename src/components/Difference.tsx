"use client";

import { motion } from "framer-motion";

export function Difference() {
  const differences = [
    {
      title: "Precision You Can Count On",
      description:
        "Our meticulous approach ensures accuracy in every number we process.",
    },
    {
      title: "Strategic Insights",
      description:
        "We provide actionable financial advice to support your growth.",
    },
    {
      title: "Trusted Partners",
      description:
        "Decades of experience serving Canadian businesses with integrity.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">The Difference We Make</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differences.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
