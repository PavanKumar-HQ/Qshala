import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ArrowUpRight } from 'lucide-react';
import QTMascot from './QTMascot';
import type { CaseStudyItem } from '../lib/data';

interface Props {
  caseStudies: CaseStudyItem[];
}

const CASE_STUDY_IMAGES: Record<string, string> = {
  'dps-bangalore-quriosity-league': 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
  'flipkart-corporate-trivia-league': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  'wipro-onboarding-gamification': 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
  'nps-socratic-science-storytelling': 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop',
  'inventure-academy-critical-thinking': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
  'tcs-cross-hub-workplace-engagement': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
  'iit-bombay-techfest-championship': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
  'iim-bangalore-business-simulations': 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop',
  'sobha-city-family-game-nights': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop',
  'wework-community-networking-nights': 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
};

export default function InteractiveCaseStudiesShowcase({ caseStudies }: Props) {
  // Curated items for homepage rotation
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
  const currentImage = CASE_STUDY_IMAGES[cs.slug] || 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop';

  return (
    <div className="space-y-6">
      {/* Simplified Case Study Card: Photo, School Name & One Clean Text Box */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={cs.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden flex flex-col justify-between h-full w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Photo Column */}
              <div className="lg:col-span-5 relative">
                <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 shadow-sm">
                  <img
                    src={currentImage}
                    alt={cs.clientName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -top-3 -right-3 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
                  <QTMascot variant={mascot} size="sm" />
                </div>
              </div>

              {/* School Name & Single Text Box */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[#30B2E7]/15 text-[#30B2E7] font-black text-xs uppercase font-heading">
                    {cs.clientType}
                  </span>
                  <span className="text-slate-900 font-black text-sm uppercase tracking-wider font-heading">
                    {cs.clientName}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading leading-tight">
                  {cs.title}
                </h3>

                {/* Single Consolidated Text Box */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100/90 text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                  {cs.summary}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSelectedModalCase(cs)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#30B2E7] hover:bg-sky-500 text-white font-black text-xs uppercase tracking-wider font-heading shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <span>Read Full Story</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Pagination Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-6 border-t border-slate-100">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {displayStudies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to case study ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-[#30B2E7]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-black text-slate-400 font-heading">
                  {currentIndex + 1} / {displayStudies.length}
                </span>
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold transition-all hover:scale-105 cursor-pointer shadow-sm"
                  title="Previous Story"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-[#FDB913] hover:bg-amber-400 text-slate-950 font-bold transition-all hover:scale-105 cursor-pointer shadow-sm"
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
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto border border-slate-100"
            >
              <button
                onClick={() => setSelectedModalCase(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="px-3.5 py-1 rounded-full bg-[#30B2E7] text-white font-black text-xs uppercase font-heading shadow-sm">
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

              <blockquote className="border-l-4 border-[#FDB913] pl-4 py-3 bg-[#FFFDF5] rounded-r-2xl border border-amber-100">
                <p className="text-slate-800 text-sm font-semibold italic">&ldquo;{selectedModalCase.quote.text}&rdquo;</p>
                <footer className="text-slate-900 font-black text-xs not-italic mt-1 font-heading">
                  — {selectedModalCase.quote.author}, {selectedModalCase.quote.role}
                </footer>
              </blockquote>

              <div className="pt-4 flex justify-end">
                <a
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-[#75B543] hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-wider font-heading shadow-sm hover:shadow-md transition-all"
                >
                  Schedule an Experience &rarr;
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
