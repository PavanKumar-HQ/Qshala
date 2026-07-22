'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QTMascot from '../mascot/QTMascot';
import { Sparkles, HelpCircle, BookOpen, Lightbulb, Puzzle, Compass, Rocket } from 'lucide-react';

const CURIOSITY_PROMPTS = [
  "Why is the sky blue?",
  "What causes a rainbow?",
  "How do octopuses breathe?",
  "Why do we dream?",
  "What makes stars shine?",
  "Growth through Curiosity..."
];

const ORBIT_ICONS = [
  { icon: Sparkles, color: 'text-[#FDB913]' },
  { icon: BookOpen, color: 'text-[#30B2E7]' },
  { icon: Lightbulb, color: 'text-[#FDB913]' },
  { icon: Puzzle, color: 'text-[#75B543]' },
  { icon: Compass, color: 'text-[#30B2E7]' },
  { icon: Rocket, color: 'text-[#75B543]' },
];

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [promptIdx, setPromptIdx] = useState(0);
  const [scene, setScene] = useState<1 | 2 | 3 | 4 | 5>(1);

  useEffect(() => {
    // Timeline orchestration (2.8s total sequence)
    const t1 = setTimeout(() => setScene(2), 400);  // Question stroke
    const t2 = setTimeout(() => setScene(3), 1000); // QT Cat appears
    const t3 = setTimeout(() => setScene(4), 1700); // Orbiting icons
    const t4 = setTimeout(() => setScene(5), 2400); // Reveal morph
    const tEnd = setTimeout(() => setLoading(false), 2900);

    const promptInterval = setInterval(() => {
      setPromptIdx(prev => (prev + 1) % CURIOSITY_PROMPTS.length);
    }, 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(tEnd);
      clearInterval(promptInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="curiosity-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFFDF5] text-black overflow-hidden select-none"
        >
          {/* Parallax Background Drifting Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#30B2E7]/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FDB913]/15 rounded-full blur-3xl animate-blob-delayed" />
            
            {['?', '?', '?', '?'].map((q, idx) => (
              <motion.span
                key={idx}
                className="absolute text-slate-300 font-mono font-black text-3xl"
                initial={{ x: (idx * 220) % 600 - 300, y: 500, opacity: 0 }}
                animate={{ y: -100, opacity: [0, 0.3, 0], rotate: [0, 20, -20, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: idx * 0.7, ease: 'linear' }}
              >
                {q}
              </motion.span>
            ))}
          </div>

          {/* Central Stage */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
            
            {/* SCENE 1: Bouncing Blue Dot */}
            {scene === 1 && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], y: [0, -12, 0] }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-8 h-8 rounded-full bg-[#30B2E7] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              />
            )}

            {/* SCENE 2: The Hand-Drawn Question Mark Stroke */}
            {scene === 2 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.1, opacity: 0 }}
                className="relative flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="w-32 h-32 overflow-visible">
                  <motion.path
                    d="M 30 35 C 30 15, 70 15, 70 35 C 70 50, 50 45, 50 65 L 50 72"
                    fill="none"
                    stroke="#FDB913"
                    strokeWidth="10"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    cx="50"
                    cy="88"
                    r="6"
                    fill="#30B2E7"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.2 }}
                  />
                </svg>

                {[0, 60, 120, 180, 240, 300].map((deg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: Math.cos((deg * Math.PI) / 180) * 48,
                      y: Math.sin((deg * Math.PI) / 180) * 48
                    }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className="absolute w-3 h-3 rounded-full bg-[#75B543] border border-black"
                  />
                ))}
              </motion.div>
            )}

            {/* SCENE 3, 4 & 5: QT Cat Mascot & Orbiting Vector Icons */}
            {(scene === 3 || scene === 4 || scene === 5) && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative flex items-center justify-center"
              >
                {/* Orbiting Lucide Vector Icons */}
                {scene >= 4 && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {ORBIT_ICONS.map((item, idx) => {
                      const IconComp = item.icon;
                      const angle = (idx / ORBIT_ICONS.length) * 2 * Math.PI;
                      const radius = 110;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: scene === 5 ? 0 : 1,
                            scale: scene === 5 ? 1.8 : 1,
                            x: Math.cos(angle) * (scene === 5 ? radius * 2.2 : radius),
                            y: Math.sin(angle) * (scene === 5 ? radius * 2.2 : radius),
                          }}
                          transition={{ duration: 0.5, delay: idx * 0.04 }}
                          className={`absolute p-2.5 rounded-2xl bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${item.color}`}
                        >
                          <IconComp className="w-5 h-5 stroke-[2.5]" />
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                {/* QT Mascot */}
                <motion.div
                  animate={
                    scene === 5
                      ? { y: -120, scale: 0.6, opacity: 0 }
                      : { y: [0, -6, 0], rotate: [0, -2, 2, 0] }
                  }
                  transition={{ duration: 0.5 }}
                >
                  <QTMascot size="lg" badgeText={scene === 3 ? "Curiosity Awakens..." : "Ready to Explore!"} />
                </motion.div>
              </motion.div>
            )}

          </div>

          {/* Rotating Curiosity Prompts */}
          <div className="mt-8 h-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={promptIdx}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="text-base font-black text-slate-900 font-causten-black tracking-tight"
              >
                {CURIOSITY_PROMPTS[promptIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="w-48 h-2.5 bg-white rounded-full border-2 border-black overflow-hidden mt-4 relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 2.8, ease: 'easeInOut' }}
              className="h-full bg-[#30B2E7] rounded-full"
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
