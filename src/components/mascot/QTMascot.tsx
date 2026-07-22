'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface QTMascotProps {
  variant?: 'normal' | 'curious' | 'idea' | 'quizzing' | 'reading' | 'sherlock' | 'sleeping' | 'happy' | 'trophy' | 'jumping';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  badgeText?: string;
}

const VARIANT_MAP: Record<string, string> = {
  normal: '/assets/qt/QT normal.svg',
  curious: '/assets/qt/Qt curious.svg',
  idea: '/assets/qt/QT Idea.svg',
  quizzing: '/assets/qt/QT quizzing.svg',
  reading: '/assets/qt/QT reading.svg',
  sherlock: '/assets/qt/QT sherlock.svg',
  sleeping: '/assets/qt/QT Sleeping.svg',
  happy: '/assets/qt/QT happy.svg',
  trophy: '/assets/qt/QT with trophy.svg',
  jumping: '/assets/qt/QT jumping.svg',
};

const SIZE_MAP = {
  sm: 64,
  md: 96,
  lg: 144,
  xl: 192,
};

export default function QTMascot({
  variant = 'normal',
  size = 'md',
  className = '',
  badgeText
}: QTMascotProps) {
  const imageSrc = VARIANT_MAP[variant] || VARIANT_MAP.normal;
  const dimension = SIZE_MAP[size];

  return (
    <motion.div
      className={`relative inline-flex flex-col items-center justify-center cursor-pointer group select-none ${className}`}
      whileHover={{ scale: 1.08, rotate: [0, -4, 4, 0] }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      {badgeText && (
        <motion.span
          className="absolute -top-6 px-3 py-1 bg-[#FDB913] text-black text-xs font-black rounded-full shadow-md z-10 border-2 border-black whitespace-nowrap font-causten-black"
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          {badgeText}
        </motion.span>
      )}

      <div className="relative flex items-center justify-center drop-shadow-md">
        <Image
          src={imageSrc}
          alt={`QT Mascot ${variant}`}
          width={dimension}
          height={dimension}
          className="object-contain"
          priority={size === 'xl' || size === 'lg'}
        />
      </div>
    </motion.div>
  );
}
