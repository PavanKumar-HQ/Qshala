'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GlobePoint {
  id: string;
  city: string;
  country: string;
  title: string;
  category: string;
  xPercent: number; // 0-100% position on globe sphere
  yPercent: number;
  color: string;
}

const GLOBE_POINTS: GlobePoint[] = [
  { id: 'gp1', city: 'Bengaluru', country: 'India', title: 'National Curiosity League', category: 'Schools & K-12', xPercent: 55, yPercent: 48, color: '#30B2E7' },
  { id: 'gp2', city: 'Dubai', country: 'UAE', title: 'Future Minds Knowledge Fest', category: 'Finance Festival', xPercent: 45, yPercent: 40, color: '#FDB913' },
  { id: 'gp3', city: 'London', country: 'UK', title: 'Inter-College Trivia League', category: 'Colleges & Fests', xPercent: 35, yPercent: 30, color: '#75B543' },
  { id: 'gp4', city: 'Singapore', country: 'Singapore', title: 'International Youth Trivia', category: 'Youth Science', xPercent: 65, yPercent: 55, color: '#30B2E7' },
  { id: 'gp5', city: 'New York', country: 'USA', title: 'Global Curiosity League', category: 'Corporate Offsites', xPercent: 20, yPercent: 35, color: '#FDB913' },
  { id: 'gp6', city: 'Nairobi', country: 'Kenya', title: 'Neighborhood Curiosity Fest', category: 'Community Trivia', xPercent: 42, yPercent: 62, color: '#75B543' },
];

export default function CuriosityGlobe() {
  const [activePoint, setActivePoint] = useState<GlobePoint | null>(GLOBE_POINTS[0]);
  const [rotationOffset, setRotationOffset] = useState(0);

  // Auto slow rotation motion
  useEffect(() => {
    const interval = setInterval(() => {
      setRotationOffset((prev) => (prev + 0.3) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center flex-col select-none overflow-hidden">
      {/* Soft Brand Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#30B2E7]/15 via-[#FDB913]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* High-Performance 2D Canvas SVG Dotted Earth Globe Sphere */}
      <div className="relative w-[340px] h-[340px] md:w-[440px] md:h-[440px] bg-black rounded-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
        
        {/* Dotted Grid Texture SVG */}
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-80">
          <defs>
            <pattern id="dotPattern" x={rotationOffset} y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.8" fill="#FFFFFF" opacity="0.6" />
            </pattern>
          </defs>
          <circle cx="200" cy="200" r="195" fill="url(#dotPattern)" />
        </svg>

        {/* Concentric Animated Yellow Waves */}
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.circle
            cx="220"
            cy="190"
            r="40"
            fill="none"
            stroke="#FDB913"
            strokeWidth="2"
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
          />
          <motion.circle
            cx="220"
            cy="190"
            r="40"
            fill="none"
            stroke="#30B2E7"
            strokeWidth="2"
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.8, ease: 'easeOut' }}
          />
        </svg>

        {/* Dynamic Nodes Overlay */}
        <div className="absolute inset-0 z-10">
          {GLOBE_POINTS.map((pt) => {
            const adjustedX = (pt.xPercent + rotationOffset) % 100;
            // Hide node if it rotates behind the 3D horizon
            if (adjustedX < 10 || adjustedX > 90) return null;

            const isSelected = activePoint?.id === pt.id;

            return (
              <motion.div
                key={pt.id}
                style={{ left: `${adjustedX}%`, top: `${pt.yPercent}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                onClick={() => setActivePoint(pt)}
                whileHover={{ scale: 1.3 }}
              >
                {/* Node Center */}
                <div
                  className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center shadow-lg transition-transform"
                  style={{ backgroundColor: pt.color }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </div>

                {/* City Tag */}
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 rounded-full bg-black text-[#FDB913] text-[9px] font-black border border-[#FDB913] whitespace-nowrap shadow font-causten-black">
                  🐱 {pt.city}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Info Card Overlay for Selected City */}
        <AnimatePresence mode="wait">
          {activePoint && (
            <motion.div
              key={activePoint.id}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-3 border-2 border-black shadow-xl z-20"
            >
              <div className="flex items-center justify-between">
                <span
                  className="px-2 py-0.5 rounded-full text-[9px] font-black text-black uppercase font-causten-black"
                  style={{ backgroundColor: activePoint.color }}
                >
                  {activePoint.category}
                </span>
                <span className="text-[10px] font-extrabold text-slate-500">{activePoint.city}, {activePoint.country}</span>
              </div>
              <h4 className="text-xs font-black font-causten-black text-slate-900 mt-1">{activePoint.title}</h4>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <div className="text-center mt-3 z-10">
        <span className="text-xs font-black text-slate-700 font-causten-body">
          Interactive Curiosity Globe — Active Quizzes across the World 🌍
        </span>
      </div>
    </div>
  );
}
