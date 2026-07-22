import React, { useState, useEffect, useRef } from 'react';
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
}: QTMascotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageSrc = VARIANT_MAP[variant] || VARIANT_MAP.normal;
  const dimension = SIZE_MAP[size];

  const [clickCount, setClickCount] = useState(0);
  const [pupilShift, setPupilShift] = useState({ x: 0, y: 0, rotate: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mascotCenterX = rect.left + rect.width / 2;
      const mascotCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - mascotCenterX;
      const deltaY = e.clientY - mascotCenterY;
      const distance = Math.hypot(deltaX, deltaY);

      const maxShift = 10;
      const factor = Math.min(distance / 400, 1);
      const angle = Math.atan2(deltaY, deltaX);

      const shiftX = Math.cos(angle) * maxShift * factor;
      const shiftY = Math.sin(angle) * maxShift * factor;
      const tiltAngle = (deltaX / window.innerWidth) * 12;

      setPupilShift({ x: shiftX, y: shiftY, rotate: tiltAngle });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setClickCount((prev) => prev + 1);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className={`relative inline-flex flex-col items-center justify-center cursor-pointer select-none ${className}`}
    >
      {badgeText && (
        <motion.span
          className="absolute -top-6 px-3 py-1 bg-[#FDB913] text-black text-xs font-black rounded-full shadow-md z-10 border-2 border-black whitespace-nowrap font-heading"
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          {badgeText}
        </motion.span>
      )}

      <motion.div
        className="relative flex items-center justify-center drop-shadow-md"
        animate={
          clickCount > 0
            ? {
                y: [0, -25, 0],
                rotate: [0, -15, 15, 0],
                scale: [1, 1.2, 1],
              }
            : {
                x: pupilShift.x,
                y: pupilShift.y,
                rotate: pupilShift.rotate,
              }
        }
        transition={
          clickCount > 0
            ? { duration: 0.4, ease: 'easeOut' }
            : { type: 'spring', stiffness: 250, damping: 20 }
        }
      >
        <img
          src={imageSrc}
          alt={`QT Mascot ${variant}`}
          width={dimension}
          height={dimension}
          className="object-contain pointer-events-none"
          loading="lazy"
        />

        <AnimatePresence>
          {clickCount > 0 && (
            <motion.span
              key={clickCount}
              initial={{ opacity: 0, y: 0, scale: 0.5 }}
              animate={{ opacity: [0, 1, 0], y: -45, scale: 1.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute -top-8 text-2xl font-black text-[#FDB913] font-mono pointer-events-none drop-shadow-md"
            >
              ?
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
