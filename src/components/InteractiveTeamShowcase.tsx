import React from 'react';
import QTMascot from './QTMascot';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string;
  bio: string;
  image: string;
  variant: 'sherlock' | 'quizzing' | 'reading' | 'idea' | 'curious' | 'professional' | 'holding_money' | 'trophy';
  color: string;
  bg: string;
  tag: string;
}

const CREW: TeamMember[] = [
  {
    id: "ananya",
    name: "Ananya M.",
    role: "Senior Instructional Designer",
    category: "Design",
    bio: "Crafting storyboards, visual discovery prompts, and bringing the QT mascot to life.",
    image: "https://ui-avatars.com/api/?name=Ananya+M&background=FDB913&color=fff&size=300",
    variant: "holding_money",
    color: "#FDB913",
    bg: "#FFF8E1",
    tag: "Design"
  },
  {
    id: "divya",
    name: "Divya S.",
    role: "Lead, School Partnerships",
    category: "Partnerships",
    bio: "Guiding principals and academic coordinators to integrate weekly Quriosity Clubs.",
    image: "https://ui-avatars.com/api/?name=Divya+S&background=EC4899&color=fff&size=300",
    variant: "curious",
    color: "#EC4899",
    bg: "#FCE7F3",
    tag: "Partnerships"
  },
  {
    id: "karthik",
    name: "Karthik R.",
    role: "Head of Gamified Tech",
    category: "Technology",
    bio: "Architecting interactive daily quiz engines, digital buzzers, and real-time leaderboards.",
    image: "https://ui-avatars.com/api/?name=Karthik+R&background=30B2E7&color=fff&size=300",
    variant: "professional",
    color: "#30B2E7",
    bg: "#E8F6FD",
    tag: "Technology"
  },
  {
    id: "preeti",
    name: "Preeti K.",
    role: "Head of Curriculum",
    category: "Curriculum",
    bio: "Designing inquiry frameworks and socratic questioning modules for 250+ partner schools.",
    image: "https://ui-avatars.com/api/?name=Preeti+K&background=75B543&color=fff&size=300",
    variant: "reading",
    color: "#75B543",
    bg: "#EDF7E5",
    tag: "Curriculum"
  },
  {
    id: "raghav",
    name: "Raghav Chakravarthy",
    role: "Co-Founder & Chief Quizmaster",
    category: "Leadership",
    bio: "National quizmaster, TEDx speaker, and education innovator transforming learning into an active discovery adventure.",
    image: "/assets/team/raghav-chakravarthy.jpg",
    variant: "sherlock",
    color: "#30B2E7",
    bg: "#E8F6FD",
    tag: "Co-Founder"
  },
  {
    id: "rohan",
    name: "Rohan M.",
    role: "Chief Quizmaster",
    category: "Content",
    bio: "Hosting high-stakes live quiz championships and inter-school tournaments across India.",
    image: "https://ui-avatars.com/api/?name=Rohan+M&background=9333EA&color=fff&size=300",
    variant: "idea",
    color: "#9333EA",
    bg: "#F3E8FF",
    tag: "Content"
  },
  {
    id: "sachin",
    name: "Sachin Ravi",
    role: "Co-Founder & Chief Quizmaster",
    category: "Leadership",
    bio: "National-level quizmaster and TEDx speaker on a mission to replace rote memorization with curiosity and wonder.",
    image: "/assets/team/sachin-ravi.jpg",
    variant: "quizzing",
    color: "#FDB913",
    bg: "#FFF8E1",
    tag: "Co-Founder"
  },
  {
    id: "vikram",
    name: "Vikram P.",
    role: "Corporate Engagement Lead",
    category: "Corporate",
    bio: "Designing high-octane team trivia nights and culture offsites for corporate partners.",
    image: "https://ui-avatars.com/api/?name=Vikram+P&background=75B543&color=fff&size=300",
    variant: "trophy",
    color: "#75B543",
    bg: "#EDF7E5",
    tag: "Corporate"
  }
];

export default function InteractiveTeamShowcase() {
  const sortedCrew = [...CREW].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="space-y-8 sm:space-y-10 w-full">

      {/* Main Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#75B543] text-white font-black text-xs uppercase tracking-wider font-heading shadow-sm">
          Meet Our Team
        </span>
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight">
          The Curiosity Crew.
        </h2>
        <p className="text-slate-600 font-semibold text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          The educators, quizmasters, researchers &amp; experience designers making curiosity an active sport every single day.
        </p>
      </div>

      {/* 3-Column Spacious Team Cards in Alphabetical Order */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {sortedCrew.map((member) => (
          <div 
            key={member.id}
            className="p-6 rounded-3xl shadow-xs hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group border border-slate-200/80 bg-white"
            style={{ backgroundColor: member.bg }}
          >
            <div className="space-y-4 flex-grow flex flex-col">
              <div className="flex items-center justify-between">
                <span 
                  className="px-3 py-1 rounded-full text-[11px] font-black uppercase text-white font-heading shadow-xs"
                  style={{ backgroundColor: member.color }}
                >
                  {member.tag}
                </span>
                <div className="group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                  <QTMascot variant={member.variant} size="sm" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center pt-2 pb-1">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full object-cover shadow-sm mb-3 border-2 border-white" 
                  loading="lazy"
                />
                <h3 className="text-xl font-black text-slate-900 font-heading leading-tight group-hover:text-[#30B2E7] transition-colors text-center">
                  {member.name}
                </h3>
                <div className="text-xs font-bold text-slate-600 mt-1 font-heading text-center">
                  {member.role}
                </div>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed text-center pt-2 border-t border-slate-900/10">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
