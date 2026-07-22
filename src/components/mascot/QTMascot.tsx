'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [clickState, setClickState] = useState(0);
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!interactiveEyes) return;
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate cursor direction relative to window center
      const angle = Math.atan2(
        e.clientY - window.innerHeight / 2,
        e.clientX - window.innerWidth / 2
      );
      const distance = 8;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      setEyePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactiveEyes]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setClickState((prev) => prev + 1);
  };

  return (
    <motion.div
      onClick={handleClick}
      className={`relative inline-flex flex-col items-center justify-center cursor-pointer group select-none ${className}`}
      whileHover={{ scale: 1.12 }}
      animate={
        clickState > 0
          ? {
              y: [0, -25, 0],
              rotate: [0, -15, 15, 0],
              scale: [1, 1.25, 1],
            }
          : {}
      }
      transition={{ duration: 0.4, ease: "easeOut" }}
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

      {/* SVG Image Container with Mouse Eye Tracking Offset */}
      <div className="relative flex items-center justify-center drop-shadow-md">
        <motion.div
          animate={{ x: eyePos.x, y: eyePos.y }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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

        {/* Playful Floating Question Mark on Mascot Click */}
        <AnimatePresence>
          {clickState > 0 && (
            <motion.span
              key={clickState}
              initial={{ opacity: 0, y: 0, scale: 0.5 }}
              animate={{ opacity: [0, 1, 0], y: -45, scale: 1.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute -top-8 text-2xl font-black text-[#FDB913] font-mono pointer-events-none drop-shadow"
            >
              ?
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
