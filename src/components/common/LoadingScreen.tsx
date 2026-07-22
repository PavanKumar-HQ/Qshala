'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { triggerConfetti } from '@/lib/utils';
import QTMascot from '../mascot/QTMascot';

const PARTICLE_POSITIONS = [
  { x: '10%', y: '15%', symbol: '✨' },
  { x: '85%', y: '20%', symbol: '📚' },
  { x: '25%', y: '75%', symbol: '🧩' },
  { x: '75%', y: '80%', symbol: '❓' },
  { x: '50%', y: '10%', symbol: '✨' },
  { x: '90%', y: '60%', symbol: '📚' },
  { x: '15%', y: '50%', symbol: '🧩' },
  { x: '60%', y: '85%', symbol: '❓' },
];

export default function LoadingScreen() {
  const [scene, setScene] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Timeline sequence (3.8s total max)
    const t1 = setTimeout(() => setScene(2), 800);   // Scene 2: Card & Options grow
    const t2 = setTimeout(() => setScene(3), 1800);  // Scene 3: QT taps Curiosity & Confetti
    const t3 = setTimeout(() => setScene(4), 2800);  // Scene 4: Particles morph into Logo Q
    const t4 = setTimeout(() => setScene(5), 3600);  // Final Transition
    const t5 = setTimeout(() => setIsVisible(false), 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {scene < 5 && (
        <motion.div
          key="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Floating Background Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {PARTICLE_POSITIONS.map((p, i) => (
              <motion.div
                key={i}
                style={{ left: p.x, top: p.y }}
                className="absolute text-slate-300 font-mono text-sm"
                initial={{ scale: 0.6, opacity: 0.4 }}
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {p.symbol}
              </motion.div>
            ))}
          </div>

          {/* SCENE 1: Tiny Blue Dot -> Bounces -> Question Mark & Story Text */}
          {scene === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center px-6"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: 'easeOut' }}
                className="w-12 h-12 rounded-full bg-[#30B2E7] border-2 border-black flex items-center justify-center text-white font-black text-2xl font-causten-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                ?
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-lg font-black text-slate-900 font-causten-black tracking-tight"
              >
                Every great journey begins with a question.
              </motion.p>
            </motion.div>
          )}

          {/* SCENE 2: Quiz Card Grows & QT Walks onto Card */}
          {scene === 2 && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative bg-[#FFFDF5] rounded-3xl p-6 md:p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md w-full mx-4"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: -45, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute -top-6 right-8 z-20"
              >
                <QTMascot variant="curious" size="sm" badgeText="What changes the world?" />
              </motion.div>

              <h3 className="text-xl font-black text-black mb-4 font-causten-black">What changes the world?</h3>

              <div className="grid grid-cols-2 gap-3">
                {['Money', 'Luck', 'Curiosity', 'Technology'].map((opt, idx) => (
                  <motion.div
                    key={opt}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className={`p-3 rounded-2xl border-2 text-xs font-black text-center ${
                      opt === 'Curiosity'
                        ? 'border-black bg-[#FDB913] text-black shadow-md scale-105 font-causten-black'
                        : 'border-slate-200 bg-white text-slate-500'
                    }`}
                  >
                    {opt === 'Curiosity' ? '✔ Curiosity' : opt}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* SCENE 3: Success Glow & Confetti Explosion */}
          {scene === 3 && (
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: [0.95, 1.05, 1] }}
              onAnimationStart={() => triggerConfetti()}
              className="relative bg-[#75B543] text-white rounded-3xl p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md w-full mx-4 text-center"
            >
              <div className="flex justify-center mb-2">
                <QTMascot variant="happy" size="md" />
              </div>
              <h3 className="text-2xl font-black font-causten-black mb-1">Curiosity Unlocked!</h3>
              <p className="text-xs font-bold font-causten-body opacity-90">Questions turn into superpowers.</p>
            </motion.div>
          )}

          {/* SCENE 4: Particles Morph into Official QShala Logo */}
          {scene === 4 && (
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="relative w-48 h-16 flex items-center justify-center">
                <Image
                  src="/assets/logos/QShala Logo 1.svg"
                  alt="QShala Logo"
                  width={200}
                  height={60}
                  className="object-contain"
                  priority
                />
              </div>

              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4"
              >
                <QTMascot variant="idea" size="md" badgeText="Welcome to QShala!" />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
