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
    <div className="space-y-16 w-full">

      {/* Main Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#75B543] text-white font-black text-xs uppercase tracking-wider font-heading">
          Meet Our Team
        </span>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight font-heading leading-tight">
          The Curiosity Crew.
        </h2>
        <p className="text-slate-700 font-semibold text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          The storytellers, educators, quizmasters &amp; designers bringing curiosity to life every single day.
        </p>
      </div>

      {/* Founders Section */}
      <div className="space-y-6 w-full">
        <div className="pb-2 border-b border-slate-200">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Founding Leadership
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {FOUNDERS.map((founder) => (
            <div 
              key={founder.id}
              className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-5 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span 
                  className="px-3.5 py-1 rounded-full text-xs font-black uppercase text-white font-heading shadow-sm"
                  style={{ backgroundColor: founder.color }}
                >
                  {founder.tag}
                </span>
                <div className="group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                  <QTMascot variant={founder.variant} size="md" />
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-black text-slate-900 font-heading group-hover:text-[#30B2E7] transition-colors">{founder.name}</h4>
                <div className="text-xs font-bold text-slate-500 mt-0.5 font-heading">{founder.role}</div>
              </div>

              <p className="text-slate-700 text-sm font-medium leading-relaxed">
                {founder.bio}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 font-heading">
                <span>QShala Co-Founder</span>
                <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: founder.color }}></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Crew Section (No Boxes, Clean Borderless Pastel Cards) */}
      <div className="space-y-6 w-full">
        <div className="pb-2 border-b border-slate-200">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Core Crew &amp; Department Leads
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {CREW.map((member) => (
            <div 
              key={member.id}
              className="p-7 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between group cursor-pointer"
              style={{ backgroundColor: member.bg }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span 
                    className="px-3 py-1 rounded-full text-[10px] font-black uppercase text-white font-heading shadow-sm"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.tag}
                  </span>
                  <div className="group-hover:scale-115 group-hover:-rotate-6 transition-transform duration-300">
                    <QTMascot variant={member.variant} size="sm" />
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-black text-slate-900 font-heading leading-tight group-hover:text-[#30B2E7] transition-colors">{member.name}</h4>
                  <div className="text-xs font-bold text-slate-600 mt-0.5 font-heading">{member.role}</div>
                </div>

                <p className="text-slate-700 text-xs font-medium leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-900/5 flex items-center justify-between text-[11px] font-bold text-slate-500 font-heading">
                <span>QShala Team</span>
                <span className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: member.color }}></span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
