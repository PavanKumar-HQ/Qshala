import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Trophy, Star } from 'lucide-react';
import QTMascot, { type QTMascotVariant } from './QTMascot';

interface MascotMood {
  id: QTMascotVariant;
  label: string;
  emoji: string;
  speech: string;
  badgeBg: string;
}

const MOODS: MascotMood[] = [
  {
    id: 'quizzing',
    label: 'Curious QT',
    emoji: '❓',
    speech: 'Did you know an octopus has 3 hearts? Ask me why!',
    badgeBg: 'bg-[#30B2E7]'
  },
  {
    id: 'sherlock',
    label: 'Sherlock QT',
    emoji: '🕵️',
    speech: 'Investigating real-world mysteries everyday!',
    badgeBg: 'bg-[#FDB913]'
  },
  {
    id: 'idea',
    label: 'Eureka QT',
    emoji: '💡',
    speech: 'Aha! That moment when curiosity clicks!',
    badgeBg: 'bg-[#75B543]'
  },
  {
    id: 'reading',
    label: 'Scholar QT',
    emoji: '📚',
    speech: 'Diving deep into stories and history quests.',
    badgeBg: 'bg-purple-600'
  },
  {
    id: 'trophy',
    label: 'Winner QT',
    emoji: '🏆',
    speech: 'Celebrating 400,000+ curiosity champions across India!',
    badgeBg: 'bg-[#FDB913]'
  }
];

export default function AnimatedHeroMascotStage() {
  const [currentMood, setCurrentMood] = useState<QTMascotVariant>('quizzing');

  const mood = MOODS.find((m) => m.id === currentMood) || MOODS[0];

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
      
      {/* Background Glowing Ambient Rings */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#30B2E7]/20 via-[#FDB913]/25 to-[#75B543]/20 rounded-full blur-3xl pointer-events-none scale-110 animate-pulse" />

      {/* Floating Orbiting Icon Badges */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -left-6 z-20 px-3.5 py-1.5 rounded-2xl bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 text-xs font-black font-heading text-slate-900"
      >
        <span className="w-2 h-2 rounded-full bg-[#30B2E7] animate-ping" />
        <span>400k+ Learners</span>
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6], rotate: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -top-4 -right-6 z-20 px-3.5 py-1.5 rounded-2xl bg-[#FFF8E1] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 text-xs font-black font-heading text-slate-900"
      >
        <Trophy className="w-4 h-4 text-[#FDB913]" />
        <span>250+ Partner Schools</span>
      </motion.div>

      {/* Live Interactive Mascot Stage Container */}
      <div className="relative w-full bg-white rounded-3xl p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center space-y-6 overflow-hidden">
        
        {/* Decorative Top Accent Tag */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF5] border border-black/20 text-[11px] font-black uppercase text-slate-700 font-heading">
          <Sparkles className="w-3.5 h-3.5 text-[#FDB913]" />
          <span>Interactive Mascot Guide</span>
        </div>

        {/* Live Dynamic Speech Bubble */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mood.id}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative px-5 py-3 rounded-2xl bg-[#FFFDF5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] max-w-xs"
          >
            <p className="text-xs font-black text-slate-800 leading-snug font-heading">
              &ldquo;{mood.speech}&rdquo;
            </p>
            {/* Speech Bubble Arrow */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFFDF5] border-r-2 border-b-2 border-black rotate-45" />
          </motion.div>
        </AnimatePresence>

        {/* Center Mascot Render with Spring Motion */}
        <motion.div
          key={currentMood}
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          className="py-4 cursor-pointer"
          onClick={() => {
            const nextIdx = (MOODS.findIndex(m => m.id === currentMood) + 1) % MOODS.length;
            setCurrentMood(MOODS[nextIdx].id);
          }}
        >
          <QTMascot variant={currentMood} size="xl" />
        </motion.div>

        {/* Mood Selector Buttons */}
        <div className="w-full space-y-2 pt-2 border-t border-black/10">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 font-heading">
            Click to change QT&apos;s Mood:
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {MOODS.map((m) => {
              const isActive = m.id === currentMood;
              return (
                <button
                  key={m.id}
                  onClick={() => setCurrentMood(m.id)}
                  className={`px-3 py-1.5 rounded-full font-black text-xs font-heading transition-all border-2 border-black flex items-center gap-1.5 ${
                    isActive
                      ? `${m.badgeBg} text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5`
                      : 'bg-[#FFFDF5] text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{m.emoji}</span>
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom Floating Stat Badge */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="mt-4 px-4 py-2 rounded-2xl bg-[#75B543] text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 text-xs font-black font-heading"
      >
        <Star className="w-4 h-4 fill-white" />
        <span>98.4% Parent &amp; Teacher Satisfaction</span>
      </motion.div>

    </div>
  );
}
