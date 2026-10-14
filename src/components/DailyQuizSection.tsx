import React, { useState, useEffect } from 'react';
import { QUESTION_BANK, type QuizCardData } from '../lib/data';
import InteractiveQuizCard from './InteractiveQuizCard';
import { RefreshCw } from 'lucide-react';

export default function DailyQuizSection({ initialQuizzes }: { initialQuizzes?: QuizCardData[] }) {
  const [quizzes, setQuizzes] = useState<QuizCardData[]>(() => {
    if (initialQuizzes && initialQuizzes.length === 3) return initialQuizzes;
    const difficultPool = QUESTION_BANK.filter((q) => q.difficulty === 'Difficult');
    const mediumPool = QUESTION_BANK.filter((q) => q.difficulty === 'Medium');
    const easyPool = QUESTION_BANK.filter((q) => q.difficulty === 'Easy');
    return [
      difficultPool[0] || QUESTION_BANK[0],
      mediumPool[0] || QUESTION_BANK[17],
      easyPool[0] || QUESTION_BANK[34],
    ];
  });

  const pickRandomQuizzes = () => {
    const difficultPool = QUESTION_BANK.filter((q) => q.difficulty === 'Difficult');
    const mediumPool = QUESTION_BANK.filter((q) => q.difficulty === 'Medium');
    const easyPool = QUESTION_BANK.filter((q) => q.difficulty === 'Easy');

    const randomDifficult = difficultPool[Math.floor(Math.random() * difficultPool.length)];
    const randomMedium = mediumPool[Math.floor(Math.random() * mediumPool.length)];
    const randomEasy = easyPool[Math.floor(Math.random() * easyPool.length)];

    setQuizzes([randomDifficult, randomMedium, randomEasy]);
  };

  const shuffleCard = (index: number) => {
    const difficulties: ('Difficult' | 'Medium' | 'Easy')[] = ['Difficult', 'Medium', 'Easy'];
    const diff = difficulties[index] || quizzes[index]?.difficulty || 'Medium';
    const currentId = quizzes[index]?.id;
    const pool = QUESTION_BANK.filter((q) => q.difficulty === diff && q.id !== currentId);
    if (pool.length > 0) {
      const nextQuiz = pool[Math.floor(Math.random() * pool.length)];
      setQuizzes((prev) => {
        const copy = [...prev];
        copy[index] = nextQuiz;
        return copy;
      });
    }
  };

  useEffect(() => {
    // Pick fresh random questions on every visit/refresh
    pickRandomQuizzes();
  }, []);

  return (
    <div className="space-y-6">
      {/* Top Quick Action Bar (Directly accessible on mobile without scrolling past cards) */}
      <div className="flex items-center justify-between gap-3 flex-wrap bg-white/70 backdrop-blur-xs p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#75B543] animate-pulse"></span>
          <span className="text-xs font-black uppercase text-slate-800 font-heading">
            Daily 3-Question Quest
          </span>
          <span className="text-[11px] font-bold text-slate-500 hidden sm:inline">
            (Difficult • Medium • Easy)
          </span>
        </div>

        <button
          onClick={pickRandomQuizzes}
          type="button"
          aria-label="Shuffle all 3 questions"
          className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-black text-xs sm:text-sm border border-slate-200 shadow-xs hover:shadow-sm active:scale-95 transition-all font-heading cursor-pointer min-h-[40px]"
        >
          <RefreshCw className="w-3.5 h-3.5 text-[#30B2E7]" />
          <span>Shuffle All 3</span>
        </button>
      </div>

      {/* 3 Interactive Quiz Cards (Difficult, Medium, Easy) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {quizzes.map((quiz, index) => (
          <InteractiveQuizCard 
            key={`${quiz.id}-${index}`} 
            quiz={quiz} 
            onShuffle={() => shuffleCard(index)}
          />
        ))}
      </div>

      {/* Bottom Rotation Control Button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={pickRandomQuizzes}
          type="button"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-black text-xs sm:text-sm border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all font-heading cursor-pointer min-h-[44px]"
        >
          <RefreshCw className="w-4 h-4 text-[#30B2E7]" />
          <span>Shuffle All Questions</span>
        </button>
      </div>
    </div>
  );
}
