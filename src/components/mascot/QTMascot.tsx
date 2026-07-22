'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { triggerConfetti } from '@/lib/utils';

export type QTMascotVariant =
  | 'normal'
  | 'curious'
  | 'idea'
  | 'quizzing'
  | 'reading'
  | 'sherlock'
  | 'sleeping'
  | 'happy'
  | 'trophy'
  | 'jumping'
  | 'holding_money'
  | 'professional';

interface QTMascotProps {
  variant?: QTMascotVariant;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  badgeText?: string;
  interactiveEyes?: boolean;
}

const VARIANT_MAP: Record<QTMascotVariant, string> = {
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
  holding_money: '/assets/qt/QT holding money.svg',
  professional: '/assets/qt/QT professional.svg',
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
  badgeText,
  interactiveEyes = true
}: QTMascotProps) {
  const imageSrc = VARIANT_MAP[variant] || VARIANT_MAP.normal;
  const dimension = SIZE_MAP[size];
  const [clickCount, setClickCount] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!interactiveEyes) return;
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized pupil shift based on screen cursor position
      const xShift = (e.clientX / window.innerWidth - 0.5) * 8;
      const yShift = (e.clientY / window.innerHeight - 0.5) * 6;
      setMousePos({ x: xShift, y: yShift });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactiveEyes]);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    triggerConfetti();
  };

  return (
    <motion.div
      onClick={handleClick}
      className={`relative inline-flex flex-col items-center justify-center cursor-pointer group select-none ${className}`}
      whileHover={{ scale: 1.12, rotate: [0, -6, 6, 0] }}
      whileTap={{ scale: 0.88, rotate: 12 }}
      animate={clickCount > 0 ? { y: [0, -20, 0], scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 0.4 }}
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

      {/* SVG Container with Interactive Eye Pupil Shift Overlay */}
      <div className="relative flex items-center justify-center drop-shadow-md">
        <motion.div
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <Image
            src={imageSrc}
            alt={`QT Mascot ${variant}`}
            width={dimension}
            height={dimension}
            className="object-contain pointer-events-none"
            priority={size === 'xl' || size === 'lg'}
          />
        </motion.div>

        {/* Surprise Question Mark Pop-up on Click */}
        {clickCount > 0 && (
          <motion.span
            initial={{ opacity: 0, y: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0], y: -40, scale: 1.4 }}
            transition={{ duration: 0.8 }}
            className="absolute -top-10 font-mono font-black text-2xl text-[#FDB913] pointer-events-none stroke-black"
          >
            ?
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}
