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
      {/* 3 Interactive Quiz Cards (Difficult, Medium, Easy) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {quizzes.map((quiz, idx) => (
          <InteractiveQuizCard 
            key={quiz.id} 
            quiz={quiz} 
            onShuffle={() => shuffleCard(idx)}
          />
        ))}
      </div>

      {/* Bottom Rotation Control Button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={pickRandomQuizzes}
          type="button"
          aria-label="Shuffle all 3 questions"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-black text-xs sm:text-sm border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all font-heading cursor-pointer min-h-[44px]"
        >
          <RefreshCw className="w-4 h-4 text-[#30B2E7]" />
          <span>Shuffle All Questions</span>
        </button>
      </div>
    </div>
  );
}
