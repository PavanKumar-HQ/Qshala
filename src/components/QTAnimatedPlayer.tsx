import React, { useEffect, useState } from 'react';

// Cycle through these playing frames to create a flipbook animation
const PLAY_FRAMES = [
  '/assets/qt/QT playing.svg',
  '/assets/qt/QT playing 2.svg',
  '/assets/qt/QT playing 3.svg',
  '/assets/qt/Qt playing 4.svg',
];

// Walk cycle uses legs + jumping variants
const WALK_FRAMES = [
  '/assets/qt/Qt with legs.svg',
  '/assets/qt/QT jumping.svg',
  '/assets/qt/Qt jumping 2.svg',
  '/assets/qt/Qt with legs.svg',
  '/assets/qt/QT normal.svg',
];

const SIZE_MAP = {
  sm: 64,
  md: 96,
  lg: 144,
  xl: 192,
};

interface QTAnimatedPlayerProps {
  mode?: 'playing' | 'walking';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fps?: number;
  className?: string;
}

export default function QTAnimatedPlayer({
  mode = 'playing',
  size = 'md',
  fps = 6,
  className = '',
}: QTAnimatedPlayerProps) {
  const frames = mode === 'walking' ? WALK_FRAMES : PLAY_FRAMES;
  const [frame, setFrame] = useState(0);
  const dimension = SIZE_MAP[size];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frames.length);
    }, 1000 / fps);
    return () => clearInterval(interval);
  }, [fps, frames.length]);

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: dimension, height: dimension }}
    >
      {frames.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`QT ${mode} frame ${i}`}
          width={dimension}
          height={dimension}
          className="object-contain pointer-events-none drop-shadow-lg absolute inset-0 transition-opacity duration-75"
          style={{ opacity: i === frame ? 1 : 0 }}
          loading="eager"
        />
      ))}
    </div>
  );
}
