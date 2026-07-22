'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import QTMascot from '../mascot/QTMascot';
import InteractiveQuizCard from './InteractiveQuizCard';
import CuriosityGlobe from './CuriosityGlobe';
import { FEATURED_QUIZZES } from '@/lib/sanity.client';
import { ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Scroll 0-20% parallax transformations
  const headlineScale = useTransform(scrollY, [0, 300], [1, 0.92]);
  const mascotY = useTransform(scrollY, [0, 300], [0, -40]);
  const blob1Y = useTransform(scrollY, [0, 400], [0, 80]);
  const blob2Y = useTransform(scrollY, [0, 400], [0, -60]);

  const splitWords = "Curiosity Changes Everything.".split(" ");

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Parallax Background Soft Glow Blobs */}
      <motion.div
        style={{ y: blob1Y }}
        className="absolute top-10 left-10 w-96 h-96 bg-[#30B2E7]/15 rounded-full blur-3xl animate-blob pointer-events-none"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="absolute top-20 right-10 w-96 h-96 bg-[#FDB913]/20 rounded-full blur-3xl animate-blob-delayed pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FDB913] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs font-black">
            <span className="flex h-2.5 w-2.5 rounded-full bg-black animate-ping" />
            <span>India&apos;s #1 Curiosity Company • 3,600+ Events Hosted</span>
          </div>
        </motion.div>

        {/* Pattern C: Split Word Reveal + Scroll scale transform */}
        <motion.div style={{ scale: headlineScale }} className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] font-causten-black flex flex-wrap justify-center gap-x-3 gap-y-1">
            {splitWords.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={idx === 1 ? 'text-[#30B2E7]' : idx === 2 ? 'text-[#75B543]' : ''}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg sm:text-xl text-slate-700 font-causten-body font-semibold max-w-2xl mx-auto leading-relaxed"
          >
            We replace rote learning with awe, wonder, and high-energy quiz experiences for schools, companies, and communities.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/book-a-quiz"
              className="px-8 py-3.5 bg-[#30B2E7] hover:bg-[#1C8CBF] text-white font-black rounded-full text-base border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2"
            >
              Book a Quiz Experience
            </Link>

            <Link
              href="/learn"
              className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-black rounded-full text-base border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2"
            >
              Explore Kids Corner <ArrowRight className="w-5 h-5 text-[#30B2E7]" />
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex items-center justify-center gap-4 text-xs font-bold text-slate-600"
          >
            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-[#FDB913] fill-[#FDB913]" /> 4.9/5 Rated by 250+ Schools</span>
            <span>•</span>
            <span>150+ Corporate Partners</span>
          </motion.div>
        </motion.div>

        {/* 3D Interactive Curiosity Globe Engine */}
        <div className="mt-8 relative">
          <div className="text-center mb-2">
            <span className="px-3 py-1 rounded-full bg-[#FDB913] text-black font-black text-xs border border-black uppercase font-causten-black">
              🌍 Interactive Curiosity Engine
            </span>
          </div>

          <CuriosityGlobe />
        </div>

        {/* Daily Quiz Playground Section with Floating QT Mascot Parallax */}
        <div className="mt-12 relative">
          
          <motion.div style={{ y: mascotY }} className="absolute -top-14 right-4 lg:right-10 z-20 hidden sm:block">
            <QTMascot size="lg" badgeText="Try a Quiz!" />
          </motion.div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-slate-900 flex items-center justify-center gap-2 font-causten-black">
              Daily Curiosity Nibbles
            </h2>
            <p className="text-sm text-slate-600 font-medium">Pick an answer below & trigger the celebration!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_QUIZZES.map((quiz, idx) => (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <InteractiveQuizCard quiz={quiz} />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
