'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuizCardData } from '@/lib/sanity.client';
import { triggerConfetti } from '@/lib/utils';
import { CheckCircle2, XCircle, Sparkles, HelpCircle } from 'lucide-react';

interface InteractiveQuizCardProps {
  quiz: QuizCardData;
}

export default function InteractiveQuizCard({ quiz }: InteractiveQuizCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

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
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all border-2 border-black relative overflow-hidden flex flex-col justify-between"
    >
      {/* Top Header Badge */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#30B2E7] text-white font-black text-xs uppercase tracking-wider flex items-center gap-1.5 border border-black">
            <HelpCircle className="w-3.5 h-3.5" /> {quiz.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-[#FDB913] text-black text-xs font-black border border-black">
            ⚡ {quiz.difficulty}
          </span>
        </div>

        {/* Question */}
        <h3 className="text-xl md:text-2xl font-black text-black leading-snug mb-6 font-mono">
          {quiz.question}
        </h3>

        {/* Options List */}
        <div className="space-y-3 mb-6">
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
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all font-bold text-base flex items-center justify-between ${btnStyle}`}
              >
                <span>{option}</span>
                {selectedOption !== null && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                )}
                {selectedOption !== null && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-white shrink-0" />
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
            className="rounded-2xl bg-[#FDB913] border-2 border-black p-4 text-black text-sm font-bold leading-relaxed shadow-sm"
          >
            <div className="font-black text-black mb-1 flex items-center gap-1.5 uppercase tracking-wider text-xs">
              QT&apos;s Curiosity Flash:
            </div>
            {quiz.explanation}
          </motion.div>
        )}
      </AnimatePresence>

      {!showExplanation && (
        <div className="text-xs text-center font-black text-slate-500 mt-2 uppercase tracking-wider">
          Click an option to test your curiosity! 🎉
        </div>
      )}
    </motion.div>
  );
}
