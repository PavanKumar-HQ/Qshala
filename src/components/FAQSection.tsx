import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'What makes QShala different from traditional quiz competitions?',
    answer: 'Traditional quizzes test memorization of static facts. QShala focuses on Socratic storytelling, critical thinking, and "Why?" questions. We turn learning into an active discovery quest rather than a memory test.',
    mascot: '/assets/qt/QT Idea.svg',
  },
  {
    question: 'Are QShala sessions conducted online or in-person?',
    answer: 'Both! We host live in-person workshops, auditoriums, and stage championships, as well as hybrid and fully remote sessions with digital buzzers and real-time leaderboards.',
    mascot: '/assets/qt/QT quizzing.svg',
  },
  {
    question: 'How do QShala Quriosity Clubs fit into a school timetable?',
    answer: 'QShala Quriosity Clubs are designed as 40 to 60-minute weekly modules that easily replace or complement standard General Knowledge, Library, or Life Skills periods for Grades 1 through 12.',
    mascot: '/assets/qt/QT reading.svg',
  },
  {
    question: 'What age groups are QShala programs designed for?',
    answer: 'We have age-tailored programs for Primary (Grades 1-4: Quriosity Builders), Middle School (Grades 5-8: Quriosity Explorers), and High School (Grades 9-12: Quriosity Thinkers).',
    mascot: '/assets/qt/QT happy.svg',
  },
  {
    question: 'How do QShala corporate trivia sessions help reduce attrition?',
    answer: 'Shared play builds psychological safety and cross-team camaraderie. Our corporate sessions create low-pressure, high-fun environments where colleagues connect beyond daily work tasks.',
    mascot: '/assets/qt/QT professional.svg',
  },
  {
    question: 'Can QShala customize trivia around our company history and products?',
    answer: 'Yes! We frequently design custom brand trivia, company milestone quizzes, and onboarding challenges tailored specifically to your corporate culture.',
    mascot: '/assets/qt/QT sherlock.svg',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-4 w-full">
      {FAQS.map((faq, idx) => {
        const isOpen = openIdx === idx;

        return (
          <div
            key={idx}
            className="bg-white rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            {/* Question Row */}
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-black font-heading text-slate-900 hover:bg-slate-50 rounded-t-2xl transition-colors"
            >
              <span className="text-base sm:text-lg leading-snug">{faq.question}</span>
              <div
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                  backgroundColor: isOpen ? '#fef3c7' : '#FFFDF5',
                }}
                className="w-8 h-8 rounded-full border border-black flex items-center justify-center shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-slate-800" />
              </div>
            </button>

            {/* Answer Panel — only in DOM when open */}
            {isOpen && (
              <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <p className="flex-1 text-slate-700 text-sm font-semibold leading-relaxed">
                    {faq.answer}
                  </p>
                  <div className="shrink-0 self-center bg-[#FFFDF5] p-2.5 rounded-2xl border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <img
                      src={faq.mascot}
                      alt="QT Mascot"
                      width={64}
                      height={64}
                      className="object-contain pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
