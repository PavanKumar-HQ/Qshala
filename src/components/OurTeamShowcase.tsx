import React, { useState } from 'react';
import QTMascot, { type QTMascotVariant } from './QTMascot';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'founder' | 'curriculum' | 'tech_growth';
  bio: string;
  favQuestion: string;
  variant: QTMascotVariant;
  color: string;
  bg: string;
  borderColor: string;
  tag: string;
}

const TEAM_DATA: TeamMember[] = [
  {
    id: 'sachin',
    name: 'Sachin Ravi',
    role: 'Co-Founder & Chief Storyteller',
    category: 'founder',
    bio: 'Celebrated quizmaster, TEDx speaker, and co-creator of QShala. Passionate about replacing rote learning with socratic wonder.',
    favQuestion: 'Why do flamingos stand on one leg?',
    variant: 'sherlock',
    color: '#FDB913',
    bg: '#FFF8E1',
    borderColor: '#FDB913',
    tag: 'Founder'
  },
  {
    id: 'raghavan',
    name: 'Raghavan A.',
    role: 'Co-Founder & Chief Executive',
    category: 'founder',
    bio: 'National level quizzer and education strategist building India\'s largest curiosity ecosystem for 250+ schools.',
    favQuestion: 'What is the highest mountain on the Moon?',
    variant: 'quizzing',
    color: '#30B2E7',
    bg: '#E8F6FD',
    borderColor: '#30B2E7',
    tag: 'Founder'
  },
  {
    id: 'preeti',
    name: 'Preeti K.',
    role: 'Head of Curriculum & Socratic Learning',
    category: 'curriculum',
    bio: 'Former educator with 12+ years designing socratic questioning frameworks and 21st-century skill modules.',
    favQuestion: 'How do trees communicate with each other underground?',
    variant: 'reading',
    color: '#75B543',
    bg: '#EDF7E5',
    borderColor: '#75B543',
    tag: 'Curriculum'
  },
  {
    id: 'rohan',
    name: 'Rohan M.',
    role: 'Chief Quizmaster & Content Lead',
    category: 'curriculum',
    bio: 'Has hosted over 500+ live trivia events and written thousands of brain-teasing questions for kids & corporate teams.',
    favQuestion: 'Why is blue the rarest color in living nature?',
    variant: 'idea',
    color: '#A855F7',
    bg: '#F3E8FF',
    borderColor: '#A855F7',
    tag: 'Content'
  },
  {
    id: 'divya',
    name: 'Divya S.',
    role: 'Lead, School Partnerships',
    category: 'tech_growth',
    bio: 'Empowering 250+ principal partners and 10,000+ teachers to integrate weekly curiosity clubs seamlessly into school timetables.',
    favQuestion: 'Why do rain clouds turn dark grey?',
    variant: 'curious',
    color: '#EC4899',
    bg: '#FCE7F3',
    borderColor: '#EC4899',
    tag: 'Partnerships'
  },
  {
    id: 'karthik',
    name: 'Karthik R.',
    role: 'Head of Gamified Tech & Platform',
    category: 'tech_growth',
    bio: 'Architecting interactive buzzers, daily quiz engines, and real-time leaderboards that delight thousands of daily learners.',
    favQuestion: 'How do computers calculate square roots instantly?',
    variant: 'professional',
    color: '#30B2E7',
    bg: '#E8F6FD',
    borderColor: '#30B2E7',
    tag: 'Technology'
  },
  {
    id: 'ananya',
    name: 'Ananya M.',
    role: 'Senior Instructional Designer & QT Artist',
    category: 'curriculum',
    bio: 'Bringing QT mascot to life across activity decks, storybooks, and visual learning journals.',
    favQuestion: 'Why do cats always land on their feet?',
    variant: 'holding_money',
    color: '#FDB913',
    bg: '#FFF8E1',
    borderColor: '#FDB913',
    tag: 'Design'
  },
  {
    id: 'vikram',
    name: 'Vikram P.',
    role: 'Corporate Engagement Lead',
    category: 'tech_growth',
    bio: 'Designing high-octane team offsites, brand trivia leagues, and hybrid culture circles for Fortune 500 companies.',
    favQuestion: 'What makes coffee smell so irresistible in the morning?',
    variant: 'trophy',
    color: '#75B543',
    bg: '#EDF7E5',
    borderColor: '#75B543',
    tag: 'Corporate'
  }
];

export default function OurTeamShowcase() {
  const [activeTab, setActiveTab] = useState<'all' | 'founder' | 'curriculum' | 'tech_growth'>('all');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string | null>(null);

  const filteredMembers = activeTab === 'all'
    ? TEAM_DATA
    : TEAM_DATA.filter(m => m.category === activeTab);

  return (
    <div className="space-y-10">
      
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {[
          { id: 'all', label: 'All Crew (8)' },
          { id: 'founder', label: 'Co-Founders (2)' },
          { id: 'curriculum', label: 'Curriculum & Content (3)' },
          { id: 'tech_growth', label: 'Tech, Growth & Corporate (3)' },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer font-heading ${
                isActive
                  ? 'bg-slate-900 text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-400 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMembers.map((member) => {
          const isQuestionOpen = expandedQuestionId === member.id;
          return (
            <div
              key={member.id}
              className="rounded-3xl p-6 border-2 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1.5 relative overflow-hidden"
              style={{
                backgroundColor: member.bg,
                borderColor: member.borderColor,
              }}
            >
              <div>
                {/* Header: Category Badge & Mascot Circle */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-black uppercase text-white tracking-wider font-heading shadow-xs"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.tag}
                  </span>
                  
                  {/* Mascot Circular Spotlight Stage */}
                  <div className="w-14 h-14 rounded-full bg-white border border-slate-200/80 shadow-sm flex items-center justify-center p-1 transform group-hover:scale-110 transition-transform">
                    <QTMascot variant={member.variant} size="sm" />
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-black text-slate-900 font-heading leading-tight group-hover:text-slate-950">
                  {member.name}
                </h3>
                <div className="text-xs font-bold text-slate-700 mt-1 mb-3">
                  {member.role}
                </div>

                {/* Bio */}
                <p className="text-slate-700 text-xs font-medium leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Interactive Curiosity Question Snippet */}
              <div className="mt-5 pt-3 border-t border-slate-900/10 space-y-2">
                <button
                  onClick={() => setExpandedQuestionId(isQuestionOpen ? null : member.id)}
                  className="w-full flex items-center justify-between text-[11px] font-black text-slate-800 uppercase tracking-wider font-heading hover:opacity-80 cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: member.color }}></span>
                    Fav Curiosity Question
                  </span>
                  <span className="text-xs font-black">{isQuestionOpen ? '−' : '+'}</span>
                </button>

                {isQuestionOpen && (
                  <div className="p-3 rounded-2xl bg-white/80 border border-slate-200 text-xs font-semibold text-slate-900 animate-fadeIn italic leading-snug">
                    &ldquo;{member.favQuestion}&rdquo;
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
