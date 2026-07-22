'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface QTMascotProps {
  variant?: 'floating' | 'peek' | 'thinking' | 'waving';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  badgeText?: string;
}

export default function QTMascot({
  variant = 'floating',
  size = 'md',
  className = '',
  badgeText = 'Curious QT'
}: QTMascotProps) {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    xl: 'w-48 h-48'
  };

  return (
    <motion.div
      className={`relative inline-flex flex-col items-center justify-center cursor-pointer group select-none ${className}`}
      whileHover={{ scale: 1.08, rotate: [0, -4, 4, 0] }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {/* Floating Sparkle / Badge */}
      {badgeText && (
        <motion.span
          className="absolute -top-6 px-3 py-1 bg-[#FDB913] text-slate-900 text-xs font-black rounded-full shadow-md z-10 flex items-center gap-1 border-2 border-white whitespace-nowrap"
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          {badgeText}
        </motion.span>
      )}

      {/* QT Black Kitty SVG from Official Brand Guidelines */}
      <div className={`relative ${sizeMap[size]} flex items-center justify-center`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-lg overflow-visible"
        >
          {/* Tail curving into Q shape */}
          <path
            d="M 120 150 C 170 160 190 120 170 90 C 155 65 135 80 145 105 C 150 120 135 135 110 130 Z"
            fill="#000000"
          />

          {/* Round Black Body / Head */}
          <circle cx="95" cy="115" r="55" fill="#000000" />

          {/* Ears */}
          <polygon points="50,70 65,30 85,65" fill="#000000" />
          <polygon points="105,65 125,30 140,70" fill="#000000" />

          {/* Eyes (White circles with black pupils looking curious) */}
          <circle cx="75" cy="105" r="12" fill="#FFFFFF" />
          <circle cx="77" cy="105" r="6" fill="#000000" />

          <circle cx="115" cy="105" r="12" fill="#FFFFFF" />
          <circle cx="117" cy="105" r="6" fill="#000000" />

          {/* Cute Nose and Whisker Lines */}
          <polygon points="92,118 98,118 95,122" fill="#FFFFFF" />
          <path d="M 88 124 Q 95 130 102 124" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

          {/* Yellow Tie Accent from Brand Cover */}
          <polygon points="95,130 100,145 95,160 90,145" fill="#FDB913" />

          {/* Question mark floating above */}
          <g className="animate-bounce">
            <circle cx="95" cy="20" r="12" fill="#FDB913" stroke="#FFFFFF" strokeWidth="2" />
            <text x="95" y="25" fontSize="14" fontWeight="900" textAnchor="middle" fill="#000000" fontFamily="sans-serif">?</text>
          </g>
        </svg>
      </div>
    </motion.div>
  );
}
