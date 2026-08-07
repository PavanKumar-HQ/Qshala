import React from 'react';
import QTMascot from './QTMascot';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string;
  bio: string;
  variant: 'sherlock' | 'quizzing' | 'reading' | 'idea' | 'curious' | 'professional' | 'holding_money' | 'trophy';
  color: string;
  bg: string;
  tag: string;
}

const FOUNDERS: TeamMember[] = [
  {
    id: "sachin",
    name: "Sachin Ravi",
    role: "Co-Founder & Chief Storyteller",
    category: "Leadership",
    bio: "Celebrated quizmaster, TEDx speaker, and co-creator of QShala. Dedicated to replacing rote learning with socratic wonder across Indian schools.",
    variant: "sherlock",
    color: "#FDB913",
    bg: "#FFFDF5",
    tag: "Co-Founder"
  },
  {
    id: "raghavan",
    name: "Raghavan A.",
    role: "Co-Founder & Chief Executive",
    category: "Leadership",
    bio: "National level quizzer and education strategist building India's largest curiosity ecosystem for 250+ premier educational institutions.",
    variant: "quizzing",
    color: "#30B2E7",
    bg: "#FFFDF5",
    tag: "Co-Founder"
  }
];

const CREW: TeamMember[] = [
  {
    id: "preeti",
    name: "Preeti K.",
    role: "Head of Curriculum & Socratic Learning",
    category: "Curriculum",
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
    category: "Content",
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
    category: "Partnerships",
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
    category: "Technology",
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
    category: "Design",
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
    category: "Corporate",
    bio: "Designing high-octane team offsites, brand trivia leagues, and hybrid culture circles for Fortune 500 companies.",
    variant: "trophy",
    color: "#75B543",
    bg: "#EDF7E5",
    tag: "Corporate"
  }
];

export default function InteractiveTeamShowcase() {
  return (
    <div className="space-y-16">

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#75B543]/15 text-[#75B543] font-black text-xs uppercase tracking-wider font-heading">
          Our Team
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight font-heading">
          Meet the Curiosity Crew.
        </h2>
        <p className="text-slate-600 font-semibold text-base max-w-xl mx-auto leading-relaxed">
          The storytellers, educators, quizmasters &amp; designers bringing curiosity to life every single day.
        </p>
      </div>

      {/* Founders Section (2 Large Sleek Cards with Soft Shadows) */}
      <div className="space-y-6">
        <div className="text-xs font-black text-slate-400 uppercase tracking-widest font-heading">
          Founding Leadership
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FOUNDERS.map((founder) => (
            <div 
              key={founder.id}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 space-y-5"
            >
              <div className="flex items-center justify-between">
                <span 
                  className="px-3 py-1 rounded-full text-[11px] font-black uppercase text-white font-heading"
                  style={{ backgroundColor: founder.color }}
                >
                  {founder.tag}
                </span>
                <QTMascot variant={founder.variant} size="md" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 font-heading">{founder.name}</h3>
                <div className="text-xs font-bold text-slate-500 mt-0.5">{founder.role}</div>
              </div>

              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                {founder.bio}
              </p>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 font-heading">
                <span>QShala Co-Founder</span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: founder.color }}></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Crew Section (6 Compact Sleek Cards with Light Pastel Tints & Soft Shadows) */}
      <div className="space-y-6">
        <div className="text-xs font-black text-slate-400 uppercase tracking-widest font-heading">
          Core Crew &amp; Department Leads
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CREW.map((member) => (
            <div 
              key={member.id}
              className="p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between"
              style={{ backgroundColor: member.bg }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span 
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase text-white font-heading"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.tag}
                  </span>
                  <QTMascot variant={member.variant} size="sm" />
                </div>

                <div>
                  <h4 className="text-lg font-black text-slate-900 font-heading leading-tight">{member.name}</h4>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">{member.role}</div>
                </div>

                <p className="text-slate-600 text-xs font-medium leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-900/5 flex items-center justify-between text-[11px] font-bold text-slate-400 font-heading">
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
