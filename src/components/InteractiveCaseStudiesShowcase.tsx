import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Grid, LayoutList, X, Quote } from 'lucide-react';
import QTMascot from './QTMascot';
import type { CaseStudyItem } from '../lib/data';

interface Props {
  caseStudies: CaseStudyItem[];
}

export default function InteractiveCaseStudiesShowcase({ caseStudies }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedModalCase, setSelectedModalCase] = useState<CaseStudyItem | null>(null);

  const categories = ['All', 'School', 'Corporate', 'College', 'Community'];

  const filteredData = caseStudies.filter((cs) => {
    if (activeCategory === 'All') return true;
    return cs.clientType === activeCategory;
  });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length);
  };

  return (
    <div className="space-y-8">
      
      {/* Sleek, Open Integrated Header (No Bounding Box Container) */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => {
            const count = cat === 'All' ? caseStudies.length : caseStudies.filter(c => c.clientType === cat).length;
            const isActive = activeCategory === cat;
            const label = cat === 'All' ? `All (${count})` : cat === 'Community' ? `Communities (${count})` : `${cat}s (${count})`;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-4.5 py-2 rounded-full font-black text-xs font-heading transition-all border-2 ${
                  isActive
                    ? 'bg-[#30B2E7] text-white border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-black shadow-sm'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* View Mode Switcher Buttons */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setViewMode('carousel')}
            className={`px-3.5 py-2 rounded-xl text-xs font-black font-heading flex items-center gap-1.5 border-2 transition-all ${
              viewMode === 'carousel'
                ? 'bg-[#FDB913] text-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white text-slate-700 border-slate-200 hover:border-black'
            }`}
          >
            <LayoutList className="w-4 h-4" />
            <span>Featured View</span>
          </button>

          <button
            onClick={() => setViewMode('grid')}
            className={`px-3.5 py-2 rounded-xl text-xs font-black font-heading flex items-center gap-1.5 border-2 transition-all ${
              viewMode === 'grid'
                ? 'bg-[#FDB913] text-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white text-slate-700 border-slate-200 hover:border-black'
            }`}
          >
            <Grid className="w-4 h-4" />
            <span>Grid View</span>
          </button>
        </div>

      </div>

      {/* VIEW MODE 1: CAROUSEL SLIDER VIEW */}
      {viewMode === 'carousel' && filteredData.length > 0 && (
        <div className="space-y-6">
          <div className="relative">
            <AnimatePresence mode="wait">
              {(() => {
                const cs = filteredData[currentIndex % filteredData.length];
                const mascotVariants = ['sherlock', 'quizzing', 'idea', 'reading', 'professional', 'trophy'] as const;
                const mascot = mascotVariants[currentIndex % mascotVariants.length];

                return (
                  <motion.div
                    key={cs.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-md relative overflow-hidden space-y-8"
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3.5 py-1.5 rounded-full bg-slate-900 text-white font-black text-xs uppercase font-heading">
                          {cs.clientType} • {cs.clientName}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {cs.tags.map((t, idx) => (
                            <span key={idx} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px]">
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <QTMascot variant={mascot} size="sm" />
                    </div>

                    {/* Title & Summary */}
                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-4xl font-black text-slate-900 font-heading leading-tight max-w-4xl">
                        {cs.title}
                      </h3>
                      <p className="text-slate-700 text-base font-semibold leading-relaxed max-w-3xl">
                        {cs.summary}
                      </p>
                    </div>

                    {/* Metric Pills (Clean Soft Box) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-[#E8F6FD]/60 border border-[#30B2E7]/20">
                      {cs.impactMetrics.map((m, idx) => (
                        <div key={idx} className="text-center space-y-1">
                          <div className="text-3xl sm:text-4xl font-black text-[#30B2E7] font-heading">{m.value}</div>
                          <div className="text-xs font-black uppercase text-slate-800 font-heading">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <blockquote className="border-l-4 border-[#FDB913] pl-6 py-3 bg-[#FFFDF5] rounded-r-2xl border-y border-r border-slate-200/60 flex items-start gap-4">
                      <Quote className="w-8 h-8 text-[#FDB913] shrink-0 mt-1" />
                      <div>
                        <p className="text-slate-800 text-sm font-semibold italic">
                          &ldquo;{cs.quote.text}&rdquo;
                        </p>
                        <footer className="text-slate-900 font-black text-xs not-italic mt-2 font-heading">
                          — {cs.quote.author}, <span className="text-slate-600 font-semibold">{cs.quote.role}</span>
                        </footer>
                      </div>
                    </blockquote>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
                      <button
                        onClick={() => setSelectedModalCase(cs)}
                        className="px-7 py-3 rounded-full bg-[#FDB913] hover:bg-amber-400 text-black font-black text-xs border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-heading transition-all"
                      >
                        Read Full Story →
                      </button>

                      <div className="text-xs font-black text-slate-500 font-heading">
                        Story {currentIndex + 1} of {filteredData.length}
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              {filteredData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? 'w-8 bg-[#30B2E7]' : 'w-2.5 bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white hover:bg-slate-100 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-[#FDB913] hover:bg-amber-400 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: RESPONSIVE GRID VIEW */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredData.map((cs, idx) => (
            <div
              key={cs.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-black transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full bg-slate-900 text-white font-black text-[10px] uppercase font-heading">
                    {cs.clientType} • {cs.clientName}
                  </span>
                  <QTMascot variant={idx % 2 === 0 ? 'sherlock' : 'quizzing'} size="sm" />
                </div>

                <h3 className="text-2xl font-black text-slate-900 font-heading leading-snug">
                  {cs.title}
                </h3>
                <p className="text-slate-700 text-sm font-semibold leading-relaxed">
                  {cs.summary}
                </p>

                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-[#30B2E7]/10 border border-[#30B2E7]/20 text-center">
                  {cs.impactMetrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-lg font-black text-[#30B2E7] font-heading">{m.value}</div>
                      <div className="text-[9px] font-black uppercase text-slate-700">{m.label}</div>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-4 border-[#FDB913] pl-3 text-xs italic text-slate-800 font-semibold py-1 bg-[#FFFDF5] rounded-r-xl">
                  &ldquo;{cs.quote.text}&rdquo;
                  <footer className="text-slate-900 font-black not-italic mt-1 text-[10px]">— {cs.quote.author}, {cs.quote.role}</footer>
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => setSelectedModalCase(cs)}
                  className="w-full py-2.5 rounded-full bg-[#FDB913] hover:bg-amber-400 text-black font-black text-xs border-2 border-black font-heading shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  Read Full Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

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
                <h3 className="text-3xl font-black text-slate-900 font-heading leading-tight pt-2">
                  {selectedModalCase.title}
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white border-2 border-black text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                {selectedModalCase.impactMetrics.map((m, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-black text-[#30B2E7] font-heading">{m.value}</div>
                    <div className="text-[10px] font-black uppercase text-slate-700">{m.label}</div>
                  </div>
                ))}
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

              <blockquote className="border-l-4 border-[#FDB913] pl-4 py-2 bg-white rounded-r-2xl border border-black/10">
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
