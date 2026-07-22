'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { numericValue: 10, suffix: '+', label: 'Years of Impact', sub: 'Pioneering curiosity pedagogy' },
  { numericValue: 3600, suffix: '+', label: 'Quizzes Hosted', sub: 'High energy live experiences' },
  { numericValue: 250, suffix: '+', label: 'Schools Partnered', sub: 'K-12 classrooms empowered' },
  { numericValue: 150, suffix: '+', label: 'Corporate Clients', sub: 'Offsites & team engagement' },
  { numericValue: 4, suffix: '', label: 'Countries', sub: 'Global curiosity footprint' },
];

function CounterItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.numericValue;
    const duration = 1500; // 1.5s count up
    const increment = Math.max(1, Math.floor(end / 40));
    const stepTime = duration / (end / increment);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.05 }}
      className="flex flex-col items-center justify-center p-6 rounded-3xl bg-black text-white border-2 border-white shadow-[4px_4px_0px_0px_rgba(253,185,19,1)]"
    >
      <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FDB913] tracking-tight font-causten-black">
        {count.toLocaleString()}{stat.suffix}
      </span>
      <span className="text-base font-black text-white mt-2 font-causten-black">
        {stat.label}
      </span>
      <span className="text-xs font-semibold text-slate-300 mt-1">
        {stat.sub}
      </span>
    </motion.div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-20 bg-[#30B2E7] text-white relative overflow-hidden border-y-4 border-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {stats.map((stat, idx) => (
            <CounterItem key={idx} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
