import React, { useState } from 'react';

type Role = 'school' | 'corporate' | 'parent' | 'fest';

export default function CuriosityRecommendationWidget() {
  const [role, setRole] = useState<Role>('school');

  const RECOMMENDATIONS: Record<Role, { title: string; desc: string; link: string; tag: string; bg: string }> = {
    school: {
      title: 'Weekly Curiosity Clubs',
      desc: 'Socratic story sessions and current affairs modules integrated directly into your school timetable.',
      link: '/schools',
      tag: 'K-12 Education',
      bg: 'bg-[#E8F6FD]'
    },
    corporate: {
      title: 'Corporate Offsites & Trivia Leagues',
      desc: 'High-octane team-building leagues that reduce attrition and spark cross-team cohesion.',
      link: '/companies',
      tag: 'Workplace Culture',
      bg: 'bg-[#FFF8E1]'
    },
    parent: {
      title: 'Kids Curiosity Decks & Story Kits',
      desc: 'Screen-free weekend trivia decks and socratic dinner table prompts for active families.',
      link: '/learn',
      tag: 'Active Parenting',
      bg: 'bg-[#EDF7E5]'
    },
    fest: {
      title: 'Campus Fest Quiz Championships',
      desc: 'High-energy live stage quizzes with digital buzzers and real-time leaderboards for festivals.',
      link: '/services',
      tag: 'Higher Education',
      bg: 'bg-[#FFFDF5]'
    }
  };

  const rec = RECOMMENDATIONS[role];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-1.5">
        <span className="px-3.5 py-1 rounded-full bg-[#FDB913] text-black font-black text-[11px] uppercase tracking-wider font-heading border border-black/20">
          Curiosity Finder
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">Find Your Tailored Program</h3>
      </div>

      {/* Role Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {[
          { id: 'school', label: 'School Educator' },
          { id: 'corporate', label: 'HR / Corporate' },
          { id: 'parent', label: 'Parent / Family' },
          { id: 'fest', label: 'Fest Organizer' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setRole(item.id as Role)}
            className={`px-5 py-2.5 rounded-full font-black text-xs font-heading transition-all border-2 border-black ${
              role === item.id
                ? 'bg-[#30B2E7] text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5'
                : 'bg-white text-slate-800 hover:bg-slate-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Output Card */}
      <div className={`p-6 md:p-8 rounded-3xl border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] ${rec.bg} flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all`}>
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-slate-900 text-white font-black text-[10px] uppercase font-heading">
            {rec.tag}
          </span>
          <h4 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">{rec.title}</h4>
          <p className="text-slate-700 text-sm font-semibold max-w-xl">{rec.desc}</p>
        </div>

        <a
          href={rec.link}
          className="px-6 py-3 rounded-full bg-[#FDB913] hover:bg-amber-400 text-black font-black text-xs border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap font-heading transition-all shrink-0"
        >
          View Program Details →
        </a>
      </div>
    </div>
  );
}
