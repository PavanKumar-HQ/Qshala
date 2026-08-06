import React, { useState } from 'react';
import QTMascot from './QTMascot';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Leadership' | 'Curriculum' | 'Quizmaster' | 'Partnerships' | 'Tech' | 'Design' | 'Corporate';
  bio: string;
  quote: string;
  variant: 'sherlock' | 'quizzing' | 'reading' | 'idea' | 'curious' | 'professional' | 'holding_money' | 'trophy';
  color: string;
  bg: string;
  tag: string;
  initials: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "sachin",
    name: "Sachin Ravi",
    role: "Co-Founder & Chief Storyteller",
    category: "Leadership",
    bio: "Celebrated quizmaster, TEDx speaker, and co-creator of QShala. Dedicated to replacing rote learning with socratic wonder across Indian schools.",
    quote: "Curiosity isn't just about asking questions—it's about learning to see the world with endless wonder.",
    variant: "sherlock",
    color: "#FDB913",
    bg: "#FFF8E1",
    tag: "Co-Founder",
    initials: "SR"
  },
  {
    id: "raghavan",
    name: "Raghavan A.",
    role: "Co-Founder & Chief Executive",
    category: "Leadership",
    bio: "National level quizzer and education strategist building India's largest curiosity ecosystem for 250+ premier educational institutions.",
    quote: "When children ask 'Why?', they take the first step toward becoming critical thinkers and leaders.",
    variant: "quizzing",
    color: "#30B2E7",
    bg: "#E8F6FD",
    tag: "Co-Founder",
    initials: "RA"
  },
  {
    id: "preeti",
    name: "Preeti K.",
    role: "Head of Curriculum & Socratic Learning",
    category: "Curriculum",
    bio: "Former educator with 12+ years designing socratic questioning frameworks, current affairs storytelling, and 21st-century skill modules.",
    quote: "We don't teach answers; we craft inquiries that inspire children to discover answers themselves.",
    variant: "reading",
    color: "#75B543",
    bg: "#EDF7E5",
    tag: "Curriculum Lead",
    initials: "PK"
  },
  {
    id: "rohan",
    name: "Rohan M.",
    role: "Chief Quizmaster & Content Lead",
    category: "Quizmaster",
    bio: "Hosted 500+ live trivia tournaments and written thousands of brain-teasing questions for K-12 students & corporate leadership offsites.",
    quote: "The best trivia questions make you smile, think, and instantly share what you just discovered.",
    variant: "idea",
    color: "#9333EA",
    bg: "#F3E8FF",
    tag: "Chief Quizmaster",
    initials: "RM"
  },
  {
    id: "divya",
    name: "Divya S.",
    role: "Lead, School Partnerships",
    category: "Partnerships",
    bio: "Empowering 250+ principal partners and 10,000+ teachers to integrate weekly curiosity clubs seamlessly into school timetables.",
    quote: "Bringing QShala to a school transforms standard GK into the happiest hour of the week.",
    variant: "curious",
    color: "#EC4899",
    bg: "#FCE7F3",
    tag: "School Relations",
    initials: "DS"
  },
  {
    id: "karthik",
    name: "Karthik R.",
    role: "Head of Gamified Tech & Platform",
    category: "Tech",
    bio: "Architecting interactive buzzers, daily quiz engines, and real-time leaderboards that delight thousands of daily learners.",
    quote: "Great technology gets out of the way and lets pure curiosity take center stage.",
    variant: "professional",
    color: "#30B2E7",
    bg: "#E8F6FD",
    tag: "Platform Lead",
    initials: "KR"
  },
  {
    id: "ananya",
    name: "Ananya M.",
    role: "Senior Instructional Designer & QT Artist",
    category: "Design",
    bio: "Bringing QT mascot to life across activity decks, storybooks, and visual learning journals.",
    quote: "Visual storytelling turns complex science and history into delightful visual adventures.",
    variant: "holding_money",
    color: "#FDB913",
    bg: "#FFF8E1",
    tag: "QT Artist",
    initials: "AM"
  },
  {
    id: "vikram",
    name: "Vikram P.",
    role: "Corporate Engagement Lead",
    category: "Corporate",
    bio: "Designing high-octane team offsites, brand trivia leagues, and hybrid culture circles for Fortune 500 companies.",
    quote: "Trivia breaks down departmental silos faster than any conventional icebreaker.",
    variant: "trophy",
    color: "#75B543",
    bg: "#EDF7E5",
    tag: "Corporate Lead",
    initials: "VP"
  }
];

export default function InteractiveTeamShowcase() {
  const [selectedId, setSelectedId] = useState<string>("sachin");

  const selectedMember = TEAM_MEMBERS.find(m => m.id === selectedId) || TEAM_MEMBERS[0];

  return (
    <div className="space-y-12">

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#75B543] text-white font-black text-xs uppercase tracking-wider font-heading shadow-sm">
          Our Team
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-heading">
          Meet the Curiosity Crew.
        </h2>
        <p className="text-slate-600 font-semibold text-base max-w-xl mx-auto leading-relaxed">
          The storytellers, educators, quizmasters &amp; designers sparking curiosity across India. Click any team member to explore their story.
        </p>
      </div>

      {/* Asymmetric Interactive Explorer Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Spotlight Stage */}
        <div className="lg:col-span-7 transition-all duration-300">
          <div 
            className="rounded-3xl p-8 sm:p-10 border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden transition-all duration-300"
            style={{ backgroundColor: selectedMember.bg }}
          >
            {/* Ambient Accent Circle */}
            <div 
              className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full opacity-30 pointer-events-none blur-2xl transition-all"
              style={{ backgroundColor: selectedMember.color }}
            ></div>

            <div className="relative z-10 space-y-6">
              
              {/* Top Badge & Mascot Stage */}
              <div className="flex items-center justify-between">
                <span 
                  className="px-3.5 py-1 rounded-full text-xs font-black uppercase text-white font-heading border border-slate-900 shadow-sm"
                  style={{ backgroundColor: selectedMember.color }}
                >
                  {selectedMember.tag}
                </span>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-black text-slate-600 uppercase tracking-wider font-heading">
                    Profile Spotlight
                  </span>
                  <div className="scale-110 origin-right transition-transform hover:scale-125">
                    <QTMascot variant={selectedMember.variant} size="md" />
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading tracking-tight">
                  {selectedMember.name}
                </h3>
                <div className="text-sm font-bold text-slate-700 mt-1">
                  {selectedMember.role}
                </div>
              </div>

              {/* Quote Callout */}
              <blockquote className="p-4 rounded-2xl bg-white/90 border border-slate-900/15 text-xs sm:text-sm font-semibold text-slate-800 italic leading-relaxed shadow-sm">
                &ldquo;{selectedMember.quote}&rdquo;
              </blockquote>

              {/* Bio Text */}
              <p className="text-slate-800 text-sm font-medium leading-relaxed">
                {selectedMember.bio}
              </p>

              {/* Footer Badge */}
              <div className="pt-4 border-t border-slate-900/15 flex items-center justify-between text-xs font-black text-slate-900 font-heading">
                <span>QShala Core Member &bull; {selectedMember.category}</span>
                <span className="w-3 h-3 rounded-full border border-slate-900" style={{ backgroundColor: selectedMember.color }}></span>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Interactive Crew List Deck */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-black uppercase tracking-wider text-slate-500 font-heading px-2 mb-2 flex items-center justify-between">
            <span>Select Team Member</span>
            <span>{TEAM_MEMBERS.findIndex(m => m.id === selectedId) + 1} of {TEAM_MEMBERS.length}</span>
          </div>

          <div className="space-y-2.5">
            {TEAM_MEMBERS.map((member) => {
              const isSelected = member.id === selectedId;
              return (
                <button
                  key={member.id}
                  onClick={() => setSelectedId(member.id)}
                  className={`w-full text-left p-3.5 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'border-slate-900 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5'
                      : 'border-slate-200/80 bg-white/60 hover:bg-white hover:border-slate-900 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Avatar Initials Badge */}
                    <div 
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs text-white border border-slate-900 flex-shrink-0 font-heading transition-transform ${
                        isSelected ? 'scale-105' : 'group-hover:scale-105'
                      }`}
                      style={{ backgroundColor: member.color }}
                    >
                      {member.initials}
                    </div>

                    {/* Name & Role */}
                    <div className="min-w-0">
                      <div className="font-black text-sm text-slate-900 font-heading truncate">
                        {member.name}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-600 truncate">
                        {member.role.split('&')[0]}
                      </div>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs transition-all ${
                    isSelected ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-900 group-hover:text-white'
                  }`}>
                    &rarr;
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
}
