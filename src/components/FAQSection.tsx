import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Schools' | 'Corporates';
}

const FAQS: FAQItem[] = [
  {
    category: 'General',
    question: 'What makes QShala different from traditional quiz competitions?',
    answer: 'Traditional quizzes test memorization of static facts. QShala focuses on Socratic storytelling, critical thinking, and "Why?" questions. We turn learning into an active discovery quest rather than a memory test.'
  },
  {
    category: 'General',
    question: 'Are QShala sessions conducted online or in-person?',
    answer: 'Both! We host live in-person workshops, auditoriums, and stage championships, as well as hybrid and fully remote sessions with digital buzzers and real-time leaderboards.'
  },
  {
    category: 'Schools',
    question: 'How do QShala Quriosity Clubs fit into a school timetable?',
    answer: 'QShala Quriosity Clubs are designed as 40 to 60-minute weekly modules that easily replace or complement standard General Knowledge, Library, or Life Skills periods for Grades 1 through 12.'
  },
  {
    category: 'Schools',
    question: 'What age groups are QShala programs designed for?',
    answer: 'We have age-tailored programs for Primary (Grades 1-4: Quriosity Builders), Middle School (Grades 5-8: Quriosity Explorers), and High School (Grades 9-12: Quriosity Thinkers).'
  },
  {
    category: 'Corporates',
    question: 'How do QShala corporate trivia sessions help reduce attrition?',
    answer: 'Shared play builds psychological safety and cross-team camaraderie. Our corporate sessions create low-pressure, high-fun environments where colleagues connect beyond daily work tasks.'
  },
  {
    category: 'Corporates',
    question: 'Can QShala customize trivia around our company history and products?',
    answer: 'Yes! We frequently design custom brand trivia, company milestone quizzes, and onboarding challenges tailored specifically to your corporate culture.'
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-4 w-full">
      {FAQS.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="bg-white rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-black font-heading text-slate-900 hover:bg-slate-50 transition-colors"
            >
              <span className="text-base sm:text-lg">{faq.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 rounded-full bg-[#FFFDF5] border border-black flex items-center justify-center shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-slate-800" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-5 pb-5 pt-0 text-slate-700 text-sm font-semibold leading-relaxed border-t border-slate-100"
                >
                  <p className="pt-3">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
