import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TabId = 'culture' | 'marketing' | 'schools';

interface TabData {
  id: TabId;
  title: string;
  subtitle: string;
  tagline: string;
  bgColor: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  points: { title: string; desc: string }[];
  ctaLink: string;
  ctaText: string;
  statNumber: string;
  statLabel: string;
}

const TABS: TabData[] = [
  {
    id: 'culture',
    title: 'Workplace Culture',
    subtitle: 'Build bonds that last',
    tagline: 'Fostering Community & Psychological Safety in Remote & Hybrid Teams',
    bgColor: 'bg-[#FFF8E1]',
    accentColor: '#FDB913',
    badgeBg: 'bg-[#FDB913]',
    badgeText: 'text-black',
    points: [
      { title: 'Lower Attrition Rate', desc: 'With QShala\'s Culture Circles and weekly bonding tournaments.' },
      { title: 'Build Cohesion & Team Spirit', desc: 'Custom Culture Calendars & trivia leagues that bring teams together.' },
      { title: 'Mentor Future Leaders', desc: 'Interactive leadership webinars, socratic workshops, and cross-functional games.' }
    ],
    ctaLink: '/companies',
    ctaText: 'Explore Corporate Solutions →',
    statNumber: '10%',
    statLabel: 'Decrease in Employee Turnover'
  },
  {
    id: 'marketing',
    title: 'Marketers & Brands',
    subtitle: 'Drive discovery & engagement',
    tagline: 'Turn Passive Audiences into Active Brand Champions with Gamification',
    bgColor: 'bg-[#E8F6FD]',
    accentColor: '#30B2E7',
    badgeBg: 'bg-[#30B2E7]',
    badgeText: 'text-white',
    points: [
      { title: 'Lead Generation Funnels', desc: 'Boost top-of-funnel conversion with QShala\'s embeddable quiz widgets.' },
      { title: 'Meaningful Interactions', desc: 'Drive high dwell time using brand trivia and Quriosity Tools.' },
      { title: 'High-Impact Brand Recall', desc: 'Gamified contests that turn company history & values into engaging quests.' }
    ],
    ctaLink: '/services',
    ctaText: 'Explore Marketing Solutions →',
    statNumber: '15%',
    statLabel: 'Boost in Lead Generation Dwell Time'
  },
  {
    id: 'schools',
    title: 'K-12 Schools',
    subtitle: 'Inspire learning through wonder',
    tagline: 'Moving Beyond Rote Memorization with Socratic Storytelling',
    bgColor: 'bg-[#EDF7E5]',
    accentColor: '#75B543',
    badgeBg: 'bg-[#75B543]',
    badgeText: 'text-white',
    points: [
      { title: 'Relatable Curriculum', desc: 'Discover Curriculum Programs that connect textbook topics to real-world quriosity.' },
      { title: '21st-Century Skill Building', desc: 'Instilling critical thinking, media literacy, logic, and public speaking.' },
      { title: 'Inter-School Quizzes', desc: 'State and national level quiz championships that celebrate learning.' }
    ],
    ctaLink: '/schools',
    ctaText: 'Explore School Programs →',
    statNumber: '250+',
    statLabel: 'Active Schools Across India'
  }
];

export default function QShalaEffectTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('culture');

  const current = TABS.find((t) => t.id === activeTab)!;

  return (
    <div className={`w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] py-16 md:py-24 px-6 transition-colors duration-500 ${current.bgColor}`}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="px-4 py-1.5 rounded-full bg-[#30B2E7] text-white font-black text-xs uppercase tracking-wider font-heading">
            Measured Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Explore the QShala Effect.
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-black text-sm transition-all font-heading ${
                  isActive
                    ? `${tab.badgeBg} ${tab.badgeText} shadow-md -translate-y-1`
                    : 'bg-white text-slate-600 hover:bg-slate-50 shadow-sm border border-slate-100'
                }`}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Tab Panel Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className={`px-3.5 py-1.5 rounded-full font-black text-xs uppercase font-heading ${current.badgeBg} ${current.badgeText}`}>
                  {current.subtitle}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 font-heading leading-tight">
                  {current.tagline}
                </h3>
              </div>

              <div className="space-y-4">
                {current.points.map((pt, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white/60 p-4 rounded-2xl shadow-sm">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-black text-white text-sm shrink-0 font-heading"
                      style={{ backgroundColor: current.accentColor }}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-base font-heading">{pt.title}</h4>
                      <p className="text-slate-700 text-sm font-semibold mt-0.5">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={current.ctaLink}
                  className="inline-block px-8 py-3.5 rounded-full bg-black text-white font-black text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg font-heading"
                >
                  {current.ctaText}
                </a>
              </div>
            </div>

            {/* Right Metric Spotlight Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between text-center space-y-4 h-full">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-xs font-black uppercase text-slate-500 font-heading">Measured Impact</span>
              </div>
              <div className="py-6">
                <div className="text-5xl md:text-6xl font-black font-heading" style={{ color: current.accentColor }}>
                  {current.statNumber}
                </div>
                <div className="text-slate-900 font-bold text-sm mt-2 max-w-xs mx-auto">
                  {current.statLabel}
                </div>
              </div>
              <div className="text-xs font-bold text-slate-500 italic pt-2 border-t border-slate-100">
                Data verified across 100+ partner implementations
              </div>
            </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
