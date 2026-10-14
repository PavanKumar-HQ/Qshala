import React, { useState, useEffect } from 'react';
import { QUESTION_BANK, type QuizCardData } from '../lib/data';
import InteractiveQuizCard from './InteractiveQuizCard';
import { RefreshCw } from 'lucide-react';

export default function DailyQuizSection({ initialQuizzes }: { initialQuizzes?: QuizCardData[] }) {
  const [activeTab, setActiveTab] = useState<'all' | 'Difficult' | 'Medium' | 'Easy'>('all');
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

  const visibleQuizzes = activeTab === 'all' 
    ? quizzes 
    : quizzes.filter(q => q.difficulty === activeTab);

  return (
    <div className="space-y-6">
      {/* Top Quick Action Bar (Directly accessible on mobile without scrolling past cards) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/80 backdrop-blur-xs p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 shadow-xs">
        
        {/* Mobile Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
          {(['all', 'Difficult', 'Medium', 'Easy'] as const).map((tab) => {
            const isActive = activeTab === tab;
            const label = tab === 'all' ? 'All 3 Quests' : tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-full font-black text-xs font-heading transition-all cursor-pointer whitespace-nowrap min-h-[36px] ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <button
          onClick={pickRandomQuizzes}
          type="button"
          aria-label="Shuffle all 3 questions"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-black text-xs sm:text-sm border border-slate-200 shadow-xs hover:shadow-sm active:scale-95 transition-all font-heading cursor-pointer min-h-[40px] shrink-0 self-end sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5 text-[#30B2E7]" />
          <span>Shuffle All 3</span>
        </button>
      </div>

      {/* 3 Interactive Quiz Cards (Difficult, Medium, Easy) */}
      <div className={`grid gap-6 items-stretch ${activeTab === 'all' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 max-w-xl mx-auto'}`}>
        {visibleQuizzes.map((quiz) => {
          const originalIdx = quizzes.findIndex(q => q.id === quiz.id);
          return (
            <InteractiveQuizCard 
              key={quiz.id} 
              quiz={quiz} 
              onShuffle={() => shuffleCard(originalIdx >= 0 ? originalIdx : 0)}
            />
          );
        })}
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
