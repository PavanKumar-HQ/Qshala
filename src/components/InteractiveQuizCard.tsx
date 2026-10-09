import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { QuizCardData } from '../lib/data';
import { triggerConfetti } from '../lib/utils';

interface InteractiveQuizCardProps {
  quiz: QuizCardData;
}

const MASCOT_MAP: Record<string, string> = {
  'science': '/assets/qt/QT sherlock.svg',
  'physics': '/assets/qt/Qt curious.svg',
  'money': '/assets/qt/QT holding money.svg',
};

function getMascot(category: string): string {
  const cat = category.toLowerCase();
  for (const key of Object.keys(MASCOT_MAP)) {
    if (cat.includes(key)) return MASCOT_MAP[key];
  }
  return '/assets/qt/QT Idea.svg';
}

export default function InteractiveQuizCard({ quiz }: InteractiveQuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const mascotSrc = getMascot(quiz.category);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === quiz.correctAnswer) {
      triggerConfetti();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        boxShadow: '0 20px 30px -10px rgba(0, 0, 0, 0.08)',
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className="group bg-white rounded-3xl p-6 border border-slate-100/90 shadow-sm flex flex-col h-full min-h-[440px] relative overflow-hidden transition-all"
    >
      {/* Top Badges */}
      <div className="flex items-center justify-between mb-4 gap-2">
        <span className="px-3.5 py-1 rounded-full bg-[#30B2E7] text-white font-black text-[11px] uppercase tracking-wider shrink-0 shadow-sm">
          {quiz.category}
        </span>
        <span className="px-3.5 py-1 rounded-full bg-[#FDB913] text-slate-950 text-[11px] font-black shrink-0 shadow-sm">
          {quiz.difficulty}
        </span>
      </div>

      {/* Question */}
      <h3 className="text-lg font-black text-slate-900 leading-snug mb-4 flex-none group-hover:text-[#30B2E7] transition-colors" style={{ fontFamily: 'Causten Round Black, sans-serif' }}>
        {quiz.question}
      </h3>

      {/* Options (Clean borderless answer bubbles) */}
      <div className="flex flex-col gap-2.5 flex-1">
        {quiz.options.map((option, idx) => {
          const isCorrect = idx === quiz.correctAnswer;
          const isSelected = selected === idx;

          let bg = 'bg-slate-50 hover:bg-[#FDB913]/25 hover:text-slate-950 text-slate-800 border border-slate-100 hover:border-amber-200';
          if (selected !== null) {
            if (isCorrect) bg = 'bg-[#75B543] text-white font-black shadow-sm border-transparent';
            else if (isSelected) bg = 'bg-rose-500 text-white font-black shadow-sm border-transparent';
            else bg = 'bg-slate-50 text-slate-400 opacity-40 border-transparent';
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(idx)}
              disabled={selected !== null}
              className={`w-full text-left px-4 py-3.5 rounded-2xl font-bold text-xs md:text-sm flex items-center justify-between min-h-[48px] leading-snug transition-all cursor-pointer ${bg}`}
            >
              <span>{option}</span>
              {selected !== null && isCorrect && <span className="ml-2 shrink-0 font-black text-sm">✓</span>}
              {selected !== null && isSelected && !isCorrect && <span className="ml-2 shrink-0 font-black text-sm">✕</span>}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 rounded-2xl bg-[#FFF8E1] border border-amber-200/80 p-3.5 text-slate-900 text-xs font-semibold leading-relaxed shadow-sm"
          >
            <div className="font-black uppercase tracking-wider text-[10px] text-amber-700 mb-1 font-heading">QT's Quriosity Flash:</div>
            {quiz.explanation}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer: Mascot */}
      <div className="mt-4 pt-3 flex items-center justify-end border-t border-slate-100">
        <img
          src={mascotSrc}
          alt="QT Mascot"
          width="44"
          height="44"
          className="object-contain drop-shadow-sm group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300"
          loading="eager"
        />
      </div>
    </motion.div>
  );
}
