'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Search, X, ArrowUpRight, Users } from 'lucide-react';
import Link from 'next/link';

export interface EventMarker {
  id: string;
  title: string;
  year: number;
  category: 'School' | 'Corporate' | 'College' | 'Community' | 'Finance Festival' | 'Law Quiz' | 'Wedding Quiz' | 'Pub Quiz';
  city: string;
  country: string;
  participants: string;
  highlights: string[];
  xPercent: number; // SVG Map X %
  yPercent: number; // SVG Map Y %
  imageColor: string;
  caseStudyUrl?: string;
}

const PAST_EVENTS: EventMarker[] = [
  {
    id: 'e1',
    title: 'Inter-School National Curiosity League',
    year: 2026,
    category: 'School',
    city: 'Bengaluru',
    country: 'India',
    participants: '4,200+ Students',
    highlights: ['Weekly current affairs track', '120 participating schools', 'Live auditorium final'],
    xPercent: 71,
    yPercent: 54,
    imageColor: 'bg-gradient-to-br from-[#30B2E7] to-blue-600',
    caseStudyUrl: '/case-studies'
  },
  {
    id: 'e2',
    title: 'Flipkart Pan-India Corporate Championship',
    year: 2025,
    category: 'Corporate',
    city: 'Mumbai',
    country: 'India',
    participants: '1,800+ Employees',
    highlights: ['12 city hybrid teams', 'Cross-departmental trivia', '94% live engagement'],
    xPercent: 68,
    yPercent: 50,
    imageColor: 'bg-gradient-to-br from-[#FDB913] to-amber-500',
    caseStudyUrl: '/case-studies'
  },
  {
    id: 'e3',
    title: 'Singapore International Youth Trivia Fest',
    year: 2025,
    category: 'School',
    city: 'Singapore',
    country: 'Singapore',
    participants: '950 Students',
    highlights: ['Global science & space module', 'Inter-country quiz finals'],
    xPercent: 79,
    yPercent: 59,
    imageColor: 'bg-gradient-to-br from-[#75B543] to-green-600'
  },
  {
    id: 'e4',
    title: 'Dubai Future Minds Knowledge Fest',
    year: 2024,
    category: 'Finance Festival',
    city: 'Dubai',
    country: 'UAE',
    participants: '1,200 Participants',
    highlights: ['Junior money games', 'Design thinking workshops'],
    xPercent: 62,
    yPercent: 44,
    imageColor: 'bg-gradient-to-br from-purple-400 to-indigo-600'
  },
  {
    id: 'e5',
    title: 'London Campus Inter-College Trivia League',
    year: 2023,
    category: 'College',
    city: 'London',
    country: 'UK',
    participants: '850 Students',
    highlights: ['Real-world case study simulations', 'High-energy pub trivia format'],
    xPercent: 47,
    yPercent: 28,
    imageColor: 'bg-gradient-to-br from-[#30B2E7] to-blue-700'
  },
  {
    id: 'e6',
    title: 'National Law School Legal Trivia Battle',
    year: 2024,
    category: 'Law Quiz',
    city: 'Delhi',
    country: 'India',
    participants: '600 Scholars',
    highlights: ['Constitutional history puzzles', 'Fast-paced buzzer rounds'],
    xPercent: 70,
    yPercent: 44,
    imageColor: 'bg-gradient-to-br from-[#75B543] to-emerald-700'
  }
];

const YEARS = [2022, 2023, 2024, 2025, 2026];
const CATEGORIES = ['All', 'School', 'Corporate', 'College', 'Community', 'Finance Festival', 'Law Quiz'];

export default function WorldMapArchive() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeMarker, setActiveMarker] = useState<EventMarker | null>(PAST_EVENTS[0]);

  const filteredEvents = PAST_EVENTS.filter(event => {
    const matchesYear = selectedYear === null || event.year === selectedYear;
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-white border-y-4 border-black relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-4 py-1.5 rounded-full bg-[#30B2E7] text-white font-black text-xs uppercase tracking-wider border border-black font-causten-black">
            🌍 Interactive Past Events & Impact
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-3 font-causten-black">
            QShala Around the World.
          </h2>
          <p className="text-slate-700 text-lg mt-2 font-causten-body font-semibold">
            Explore 3,600+ past quizzes, festivals, and learning events across cities and countries.
          </p>
        </div>

        {/* Timeline Bar */}
        <div className="flex items-center justify-center gap-3 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedYear(null)}
            className={`px-5 py-2 rounded-full font-black text-xs border-2 border-black transition-all ${
              selectedYear === null
                ? 'bg-black text-white shadow-[2px_2px_0px_0px_rgba(48,178,231,1)]'
                : 'bg-[#FFFDF5] text-black hover:bg-slate-100'
            }`}
          >
            All Years (2022-2026)
          </button>
          {YEARS.map(yr => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={`px-5 py-2 rounded-full font-black text-xs border-2 border-black transition-all ${
                selectedYear === yr
                  ? 'bg-[#FDB913] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-[#FFFDF5] text-black hover:bg-amber-100'
              }`}
            >
              {yr}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-[#FFFDF5] p-4 rounded-3xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-bold text-xs border border-black transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#30B2E7] text-white font-black'
                    : 'bg-white text-slate-800 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search city, school or quiz..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full border-2 border-black text-xs font-bold focus:outline-none bg-white"
            />
          </div>
        </div>

        {/* Detailed High-Definition Dotted World Map Base */}
        <div className="relative bg-[#FFFDF5] rounded-3xl border-2 border-black p-6 md:p-10 min-h-[480px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-between">
          
          {/* Detailed SVG World Map Vector Path */}
          <div className="absolute inset-0 opacity-40 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 1000 500" className="w-full h-full fill-[#30B2E7]/20 stroke-slate-400" strokeWidth="1">
              {/* North America */}
              <path d="M 120,80 L 180,60 L 260,70 L 320,110 L 290,180 L 220,230 L 180,180 L 120,150 Z" />
              {/* South America */}
              <path d="M 270,240 L 330,260 L 350,330 L 310,420 L 270,380 L 260,300 Z" />
              {/* Europe */}
              <path d="M 460,70 L 540,60 L 580,110 L 520,150 L 460,130 Z" />
              {/* Africa */}
              <path d="M 450,160 L 550,150 L 600,230 L 560,340 L 490,340 L 440,240 Z" />
              {/* Asia */}
              <path d="M 580,60 L 850,50 L 920,140 L 820,280 L 700,280 L 620,170 Z" />
              {/* Australia */}
              <path d="M 780,320 L 880,310 L 900,390 L 800,400 Z" />
            </svg>
          </div>

          {/* Glowing Animated Dotted Route Paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <motion.path
              d="M 47% 28% Q 54% 36% 62% 44%"
              fill="none"
              stroke="#30B2E7"
              strokeWidth="3"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M 62% 44% Q 66% 48% 71% 54%"
              fill="none"
              stroke="#FDB913"
              strokeWidth="3"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.path
              d="M 71% 54% Q 75% 57% 79% 59%"
              fill="none"
              stroke="#75B543"
              strokeWidth="3"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </svg>

          {/* Markers overlay */}
          <div className="relative w-full h-[360px] z-20">
            {filteredEvents.map((event) => {
              const isSelected = activeMarker?.id === event.id;
              return (
                <motion.div
                  key={event.id}
                  style={{ left: `${event.xPercent}%`, top: `${event.yPercent}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  onClick={() => setActiveMarker(event)}
                  whileHover={{ scale: 1.25 }}
                >
                  <span className="absolute -inset-2 rounded-full bg-[#30B2E7]/40 animate-ping" />
                  
                  <div className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shadow-md transition-all ${
                    isSelected ? 'bg-[#FDB913] scale-125' : 'bg-[#30B2E7] text-white'
                  }`}>
                    <MapPin className="w-4 h-4 text-black" />
                  </div>

                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap bg-black text-white px-2 py-0.5 rounded text-[10px] font-black pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    {event.city} ({event.year})
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Info Card */}
          <AnimatePresence mode="wait">
            {activeMarker && (
              <motion.div
                key={activeMarker.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="relative z-30 bg-white rounded-3xl p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
              >
                <div className={`h-36 rounded-2xl ${activeMarker.imageColor} flex flex-col justify-between p-4 text-white font-black border border-black shadow-inner`}>
                  <span className="px-2.5 py-1 bg-black text-white text-[10px] rounded-full w-max border border-white font-mono">
                    {activeMarker.category}
                  </span>
                  <div className="text-xl font-causten-black">{activeMarker.city}, {activeMarker.country}</div>
                </div>

                <div className="md:col-span-2 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-[#30B2E7]">{activeMarker.year} Event Highlight</span>
                    <button onClick={() => setActiveMarker(null)} className="p-1 rounded-full hover:bg-slate-100">
                      <X className="w-4 h-4 text-slate-700" />
                    </button>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 font-causten-black">{activeMarker.title}</h3>

                  <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-700">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#30B2E7]" /> {activeMarker.city}, {activeMarker.country}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-[#75B543]" /> {activeMarker.participants}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeMarker.highlights.map((h, i) => (
                      <span key={i} className="px-2.5 py-1 bg-[#FFFDF5] text-slate-800 text-xs font-bold rounded-full border border-black">
                        • {h}
                      </span>
                    ))}
                  </div>

                  {activeMarker.caseStudyUrl && (
                    <div className="pt-2">
                      <Link href={activeMarker.caseStudyUrl} className="inline-flex items-center gap-1 px-5 py-2 rounded-full bg-[#FDB913] text-black font-black text-xs border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-amber-400 transition-colors">
                        View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
