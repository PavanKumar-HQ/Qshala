import React, { useState } from 'react';
import QTMascot from './QTMascot';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Leadership' | 'Learning & Content' | 'Tech & Experience';
  bio: string;
  variant: 'sherlock' | 'quizzing' | 'reading' | 'idea' | 'curious' | 'professional' | 'holding_money' | 'trophy';
  color: string;
  bg: string;
  tag: string;
}

const TEAM_DATA: TeamMember[] = [
  {
    id: "sachin",
    name: "Sachin Ravi",
    role: "Co-Founder & Chief Storyteller",
    category: "Leadership",
    bio: "Celebrated quizmaster, TEDx speaker, and co-creator of QShala. Dedicated to replacing rote learning with socratic wonder across Indian schools.",
    variant: "sherlock",
    color: "#FDB913",
    bg: "#FFF8E1",
    tag: "Founder"
  },
  {
    id: "raghavan",
    name: "Raghavan A.",
    role: "Co-Founder & Chief Executive",
    category: "Leadership",
    bio: "National level quizzer and education strategist building India's largest curiosity ecosystem for 250+ premier educational institutions.",
    variant: "quizzing",
    color: "#30B2E7",
    bg: "#E8F6FD",
    tag: "Founder"
  },
  {
    id: "preeti",
    name: "Preeti K.",
    role: "Head of Curriculum & Socratic Learning",
    category: "Learning & Content",
    bio: "Former educator with 12+ years designing socratic questioning frameworks, current affairs storytelling, and 21st-century skill modules.",
    variant: "reading",
    color: "#75B543",
    bg: "#EDF7E5",
    tag: "Curriculum"
  },
  {
    id: "rohan",
    name: "Rohan M.",
    role: "Chief Quizmaster & Content Lead",
    category: "Learning & Content",
    bio: "Hosted 500+ live trivia tournaments and written thousands of brain-teasing questions for K-12 students & corporate leadership offsites.",
    variant: "idea",
    color: "#9333EA",
    bg: "#F3E8FF",
    tag: "Content"
  },
  {
    id: "divya",
    name: "Divya S.",
    role: "Lead, School Partnerships",
    category: "Learning & Content",
    bio: "Empowering 250+ principal partners and 10,000+ teachers to integrate weekly curiosity clubs seamlessly into school timetables.",
    variant: "curious",
    color: "#EC4899",
    bg: "#FCE7F3",
    tag: "Partnerships"
  },
  {
    id: "karthik",
    name: "Karthik R.",
    role: "Head of Gamified Tech & Platform",
    category: "Tech & Experience",
    bio: "Architecting interactive buzzers, daily quiz engines, and real-time leaderboards that delight thousands of daily learners.",
    variant: "professional",
    color: "#30B2E7",
    bg: "#E8F6FD",
    tag: "Technology"
  },
  {
    id: "ananya",
    name: "Ananya M.",
    role: "Senior Instructional Designer & QT Artist",
    category: "Tech & Experience",
    bio: "Bringing QT mascot to life across activity decks, storybooks, and visual learning journals.",
    variant: "holding_money",
    color: "#FDB913",
    bg: "#FFF8E1",
    tag: "Design"
  },
  {
    id: "vikram",
    name: "Vikram P.",
    role: "Corporate Engagement Lead",
    category: "Tech & Experience",
    bio: "Designing high-octane team offsites, brand trivia leagues, and hybrid culture circles for Fortune 500 companies.",
    variant: "trophy",
    color: "#75B543",
    bg: "#EDF7E5",
    tag: "Corporate"
  }
];

export default function InteractiveTeamShowcase() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Leadership' | 'Learning & Content' | 'Tech & Experience'>('All');

  const categories = [
    { label: 'All Crew (8)', value: 'All' },
    { label: 'Founders (2)', value: 'Leadership' },
    { label: 'Curriculum & Content (3)', value: 'Learning & Content' },
    { label: 'Tech & Engagement (3)', value: 'Tech & Experience' }
  ] as const;

  const filteredMembers = activeCategory === 'All' 
    ? TEAM_DATA 
    : TEAM_DATA.filter(m => m.category === activeCategory);

  const founders = TEAM_DATA.filter(m => m.category === 'Leadership');

  return (
    <div className="space-y-12">

      {/* 1. FEATURED LEADERSHIP SPOTLIGHT */}
      {activeCategory === 'All' && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FDB913] animate-ping"></span>
            <span className="text-xs font-black uppercase text-slate-800 tracking-wider font-heading">
              Founding Leadership
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <div 
                key={founder.id}
                className="relative rounded-3xl p-8 border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between transition-all hover:-translate-y-1"
                style={{ backgroundColor: founder.bg }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-black uppercase text-white font-heading border border-black"
                      style={{ backgroundColor: founder.color }}
                    >
                      {founder.tag}
                    </span>
                    <QTMascot variant={founder.variant} size="md" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900 font-heading">{founder.name}</h3>
                    <div className="text-xs font-bold text-slate-700 mt-0.5">{founder.role}</div>
                  </div>

                  <p className="text-slate-800 text-sm font-medium leading-relaxed">
                    {founder.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900/10 flex items-center justify-between text-xs font-black text-slate-900 font-heading">
                  <span>Co-Founder, QShala</span>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: founder.color }}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. FILTER TABS FOR CREW */}
      <div className="space-y-8 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
          <div>
            <h3 className="text-2xl font-black text-slate-900 font-heading">The Curiosity Crew</h3>
            <p className="text-xs font-semibold text-slate-600">Select a category to meet our educators, quizmasters &amp; designers.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value as any)}
                className={`px-4 py-2 rounded-full font-black text-xs font-heading transition-all ${
                  activeCategory === cat.value
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-black hover:text-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. COLORFUL COMPACT CREW GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-3xl p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              style={{ backgroundColor: member.bg }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase text-white font-heading border border-black"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.tag}
                  </span>
                  <div className="scale-85 origin-top-right transition-transform group-hover:scale-100">
                    <QTMascot variant={member.variant} size="sm" />
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-black text-slate-900 font-heading leading-tight">{member.name}</h4>
                  <div className="text-xs font-bold text-slate-700 mt-0.5">{member.role}</div>
                </div>

                <p className="text-slate-800 text-xs font-medium leading-relaxed pt-1">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-900/10 flex items-center justify-between text-[10px] font-black text-slate-900 font-heading">
                <span>QShala Team</span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: member.color }}></span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
