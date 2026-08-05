import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  isDecimal?: boolean;
  label: string;
  bgColor: string;
  textColor: string;
}

const STATS: StatItem[] = [
  {
    id: 'schools',
    target: 250,
    suffix: '+',
    label: 'SCHOOLS PARTNERED',
    bgColor: 'bg-[#E8F6FD]',
    textColor: 'text-[#30B2E7]'
  },
  {
    id: 'corporates',
    target: 100,
    suffix: '+',
    label: 'CORPORATE CLIENTS',
    bgColor: 'bg-[#FFF8E1]',
    textColor: 'text-[#FDB913]'
  },
  {
    id: 'rating',
    target: 4.9,
    suffix: '★',
    isDecimal: true,
    label: 'AVERAGE RATING',
    bgColor: 'bg-[#EDF7E5]',
    textColor: 'text-[#75B543]'
  },
  {
    id: 'cities',
    target: 18,
    suffix: '+',
    label: 'CITIES COVERED',
    bgColor: 'bg-[#E8F6FD]',
    textColor: 'text-[#30B2E7]'
  }
];

function RollingCounter({ item, inView }: { item: StatItem; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000; // 2 seconds rolling duration
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Ease-out cubic formula for smooth rolling slowdown
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOutProgress * item.target;

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(item.target);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, item.target]);

  const formattedValue = item.isDecimal
    ? count.toFixed(1)
    : Math.floor(count).toString();

  return (
    <div className={`rounded-3xl p-6 md:p-8 border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] ${item.bgColor} text-center space-y-2 hover:-translate-y-1 transition-transform`}>
      <div className={`text-4xl md:text-5xl font-black font-heading ${item.textColor} flex items-center justify-center gap-1`}>
        <span>{formattedValue}</span>
        <span>{item.suffix}</span>
      </div>
      <div className="text-xs md:text-sm font-black uppercase text-slate-800 tracking-wider font-heading">
        {item.label}
      </div>
    </div>
  );
}

export default function RollingStatCounters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((item) => (
          <RollingCounter key={item.id} item={item} inView={isInView} />
        ))}
      </div>
    </div>
  );
}
