import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Quote } from 'lucide-react';
import QTMascot from './QTMascot';
import type { CaseStudyItem } from '../lib/data';

interface Props {
  caseStudies: CaseStudyItem[];
}

export default function InteractiveCaseStudiesShowcase({ caseStudies }: Props) {
  // Limit to 5 curated case studies
  const displayStudies = caseStudies.slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedModalCase, setSelectedModalCase] = useState<CaseStudyItem | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayStudies.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + displayStudies.length) % displayStudies.length);
  };

  const cs = displayStudies[currentIndex % displayStudies.length];
  const mascotVariants = ['sherlock', 'quizzing', 'idea', 'reading', 'professional'] as const;
  const mascot = mascotVariants[currentIndex % mascotVariants.length];

  return (
    <div className="space-y-6">
      {/* Featured Single Card Showcase */}
      <div className="relative min-h-[440px] sm:min-h-[420px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={cs.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col justify-between h-full w-full space-y-6"
          >
            <div className="space-y-6">
              {/* Header Row: Institution Name Label + Mascot */}
              <div className="flex items-center justify-between gap-4">
                <span className="px-4 py-1.5 rounded-full bg-slate-900 text-white font-black text-xs uppercase font-heading border border-black shadow-sm">
                  {cs.clientType} • {cs.clientName}
                </span>

                <QTMascot variant={mascot} size="sm" />
              </div>

              {/* Title */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-heading leading-tight max-w-4xl">
                  {cs.title}
                </h3>
              </div>

              {/* Space for Testimonial (Enlarged & Prominent) */}
              <blockquote className="border-l-4 border-[#FDB913] pl-5 py-4 bg-[#FFFDF5] rounded-r-2xl border-y border-r border-slate-200/60 flex items-start gap-3.5 shadow-sm">
                <Quote className="w-6 h-6 text-[#FDB913] shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <p className="text-slate-900 text-base sm:text-lg font-bold leading-relaxed italic">
                    &ldquo;{cs.quote.text}&rdquo;
                  </p>
                  <footer className="text-slate-900 font-black text-xs not-italic pt-1 font-heading">
                    — {cs.quote.author}, <span className="text-slate-600 font-semibold">{cs.quote.role}</span>
                  </footer>
                </div>
              </blockquote>
            </div>

            {/* Action Bar & Pagination Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <button
                onClick={() => setSelectedModalCase(cs)}
                className="px-7 py-3 rounded-full bg-[#FDB913] hover:bg-amber-400 text-black font-black text-xs border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] font-heading transition-all"
              >
                Read Full Story →
              </button>

              {/* 5 Dots Pagination */}
              <div className="flex items-center gap-2">
                {displayStudies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to case study ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-[#30B2E7]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows & Counter */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-black text-slate-400 font-heading">
                  {currentIndex + 1}/{displayStudies.length}
                </span>
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-white hover:bg-slate-100 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold transition-all active:translate-y-0.5"
                  title="Previous Story"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-[#FDB913] hover:bg-amber-400 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold transition-all active:translate-y-0.5"
                  title="Next Story"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DETAILED CASE STUDY MODAL */}
      <AnimatePresence>
        {selectedModalCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#FFFDF5] rounded-3xl p-8 max-w-2xl w-full border-2 border-black shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedModalCase(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 border-2 border-black font-black"
              >
                <X className="w-5 h-5 text-black" />
              </button>

              <div className="space-y-2">
                <span className="px-3.5 py-1 rounded-full bg-[#30B2E7] text-white font-black text-xs uppercase font-heading">
                  {selectedModalCase.clientType} • {selectedModalCase.clientName}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading leading-tight pt-2">
                  {selectedModalCase.title}
                </h3>
              </div>

              <div className="space-y-4 text-slate-700 text-sm font-semibold leading-relaxed">
                <div>
                  <h4 className="text-base font-black text-slate-900 font-heading mb-1">Background &amp; Challenge</h4>
                  <p>{selectedModalCase.summary}</p>
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-900 font-heading mb-1">QShala Execution Strategy</h4>
                  <p>Deployed live socratic quiz masters, custom trivia mechanics, and real-time interactive leaderboards designed to foster critical thinking and genuine engagement.</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-[#FDB913] pl-4 py-3 bg-white rounded-r-2xl border border-black/10">
                <p className="text-slate-800 text-sm font-semibold italic">&ldquo;{selectedModalCase.quote.text}&rdquo;</p>
                <footer className="text-slate-900 font-black text-xs not-italic mt-1 font-heading">
                  — {selectedModalCase.quote.author}, {selectedModalCase.quote.role}
                </footer>
              </blockquote>

              <div className="pt-4 flex justify-end">
                <a
                  href="/book-a-quiz"
                  className="px-6 py-3 rounded-full bg-[#75B543] hover:bg-emerald-500 text-white font-black text-xs border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-heading"
                >
                  Book a Similar Quiz →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
