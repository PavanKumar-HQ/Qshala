'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import QTMascot from '../mascot/QTMascot';
import InteractiveQuizCard from './InteractiveQuizCard';
import { FEATURED_QUIZZES } from '@/lib/sanity.client';
import { ArrowRight, Star } from 'lucide-react';

const WORDS_TO_ROTATE = [
  "Curiosity.",
  "Questions.",
  "Discovery.",
  "Wonder."
];

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const fullWord = WORDS_TO_ROTATE[currentWordIndex];
    const typingSpeed = isDeleting ? 60 : 110;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullWord.slice(0, displayedText.length + 1));
        if (displayedText === fullWord) {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(fullWord.slice(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % WORDS_TO_ROTATE.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FFFDF5] via-white to-[#FFFDF5]">
      
      {/* Soft Decorative Brand Background Blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#30B2E7]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-80 h-80 bg-[#FDB913]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-[#75B543]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF5] border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#30B2E7] animate-ping" />
            <span className="text-xs font-black uppercase text-slate-900 tracking-wider font-causten-black">
              India&apos;s Curiosity Company
            </span>
          </div>

          {/* Headline with Typewriter Effect */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] font-causten-black min-h-[160px] sm:min-h-[180px] md:min-h-[220px]">
            Replacing Rote Learning With{' '}
            <span className="relative inline-block text-[#30B2E7] font-mikado underline decoration-[#FDB913] decoration-wavy decoration-2">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="inline-block w-1 h-10 md:h-14 bg-black ml-1 align-middle"
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl font-semibold text-slate-700 max-w-2xl mx-auto leading-relaxed font-causten-body">
            QShala designs interactive quiz experiences, weekly learning clubs, and corporate offsites that encourage children and adults to ask <span className="text-[#75B543] font-black underline decoration-2">&ldquo;Why?&rdquo;</span>
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-a-quiz"
              className="px-8 py-4 rounded-full bg-[#FDB913] hover:bg-amber-400 text-black font-black text-base border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2 font-causten-black"
            >
              Book a Quiz Experience <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/about"
              className="px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-black text-base border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all font-causten-black"
            >
              Explore Our Mission
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-slate-700 text-sm font-bold font-causten-body">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#FDB913] fill-[#FDB913]" />
              <Star className="w-4 h-4 text-[#FDB913] fill-[#FDB913]" />
              <Star className="w-4 h-4 text-[#FDB913] fill-[#FDB913]" />
              <Star className="w-4 h-4 text-[#FDB913] fill-[#FDB913]" />
              <Star className="w-4 h-4 text-[#FDB913] fill-[#FDB913]" />
              <span className="ml-1 text-slate-900 font-black">4.9/5 Rating</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div>400,000+ Learners Engaged</div>
            <span className="hidden sm:inline">•</span>
            <div>250+ Schools Across India</div>
          </div>
        </motion.div>

        {/* Daily Quiz Playground Section with Interactive Cards */}
        <div className="mt-16 relative">
          <div className="text-center mb-6">
            <span className="px-4 py-1.5 rounded-full bg-[#75B543] text-white font-black text-xs border border-black uppercase font-causten-black">
              Try a Quick Curiosity Quiz
            </span>
            <p className="text-xs font-bold text-slate-700 mt-1 font-causten-body">
              Pick an answer below &amp; trigger the celebration!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {FEATURED_QUIZZES.map((quiz) => (
              <InteractiveQuizCard key={quiz.id} quiz={quiz} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
