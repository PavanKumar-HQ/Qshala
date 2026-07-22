'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizCardData } from '@/lib/sanity.client';
import { triggerConfetti } from '@/lib/utils';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import QTMascot, { QTMascotVariant } from '../mascot/QTMascot';

interface InteractiveQuizCardProps {
  quiz: QuizCardData;
}

const MASCOT_VARIANTS: QTMascotVariant[] = ['curious', 'sherlock', 'idea', 'quizzing'];

export default function InteractiveQuizCard({ quiz }: InteractiveQuizCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Pick mascot based on quiz category/id
  const mascotVariant: QTMascotVariant =
    quiz.category.toLowerCase().includes('science')
      ? 'sherlock'
      : quiz.category.toLowerCase().includes('physics')
      ? 'curious'
      : quiz.category.toLowerCase().includes('money')
      ? 'holding_money'
      : 'idea';

  const handleSelectOption = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    setShowExplanation(true);

    if (index === quiz.correctAnswer) {
      triggerConfetti();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all border-2 border-black relative overflow-hidden flex flex-col justify-between h-full min-h-[460px]"
    >
      {/* Top Header Badge */}
      <div>
        <div className="flex items-center justify-between mb-3 gap-2">
          <span className="px-3 py-1 rounded-full bg-[#30B2E7] text-white font-black text-[11px] uppercase tracking-wider flex items-center gap-1 border border-black shrink-0 font-causten-black">
            <HelpCircle className="w-3.5 h-3.5" /> {quiz.category}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#FDB913] text-black text-[11px] font-black border border-black shrink-0 font-causten-black">
            ⚡ {quiz.difficulty}
          </span>
        </div>

        {/* Question Header */}
        <div className="min-h-[56px] flex items-center mb-4">
          <h3 className="text-lg md:text-xl font-black text-black leading-snug font-causten-black line-clamp-2">
            {quiz.question}
          </h3>
        </div>

        {/* Options List */}
        <div className="space-y-2.5 mb-4">
          {quiz.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === quiz.correctAnswer;
            let btnStyle = "border-black bg-[#FFFDF5] hover:bg-[#FDB913]/20 text-black";

            if (selectedOption !== null) {
              if (isCorrect) {
                btnStyle = "border-black bg-[#75B543] text-white font-black shadow-md";
              } else if (isSelected) {
                btnStyle = "border-black bg-rose-500 text-white font-black";
              } else {
                btnStyle = "border-slate-200 bg-slate-100 text-slate-400 opacity-60";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={selectedOption !== null}
                className={`w-full text-left px-3.5 py-2.5 rounded-2xl border-2 transition-all font-bold text-xs md:text-sm flex items-center justify-between min-h-[46px] leading-tight ${btnStyle}`}
              >
                <span className="line-clamp-2">{option}</span>
                {selectedOption !== null && isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 ml-2" />
                )}
                {selectedOption !== null && isSelected && !isCorrect && (
                  <XCircle className="w-4 h-4 text-white shrink-0 ml-2" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation Box */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="rounded-2xl bg-[#FDB913] border-2 border-black p-3 text-black text-xs font-bold leading-relaxed shadow-sm mb-2"
          >
            <div className="font-black text-black mb-1 flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
              QT&apos;s Curiosity Flash:
            </div>
            {quiz.explanation}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lower Right Mascot Placement */}
      <div className="pt-2 flex items-center justify-between border-t border-slate-100">
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider">
          Click an option to test your curiosity!
        </span>

        <div className="shrink-0 -mb-2 -mr-2 scale-75 origin-bottom-right">
          <QTMascot variant={mascotVariant} size="sm" />
        </div>
      </div>
    </motion.div>
  );
}
