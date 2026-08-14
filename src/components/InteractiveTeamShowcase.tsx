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

const FOUNDERS: TeamMember[] = [
  {
    id: "sachin",
    name: "Sachin Ravi",
    role: "Co-Founder & Chief Storyteller",
    category: "Leadership",
    bio: "Replacing rote learning with socratic wonder.",
    image: "https://ui-avatars.com/api/?name=Sachin+Ravi&background=FDB913&color=fff&size=200",
    variant: "sherlock",
    color: "#FDB913",
    bg: "#FFFDF5",
    tag: "Co-Founder"
  },
  {
    id: "raghavan",
    name: "Raghav Chakravarthy",
    role: "Co-Founder & Chief Executive",
    category: "Leadership",
    bio: "Building India's largest curiosity ecosystem.",
    image: "https://ui-avatars.com/api/?name=Raghavan+A&background=30B2E7&color=fff&size=200",
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
    role: "Head of Curriculum",
    category: "Curriculum",
    bio: "Designing socratic questioning frameworks.",
    image: "https://ui-avatars.com/api/?name=Preeti+K&background=75B543&color=fff&size=200",
    variant: "reading",
    color: "#75B543",
    bg: "#EDF7E5",
    tag: "Curriculum"
  },
  {
    id: "rohan",
    name: "Rohan M.",
    role: "Chief Quizmaster",
    category: "Content",
    bio: "Hosting live trivia tournaments.",
    image: "https://ui-avatars.com/api/?name=Rohan+M&background=9333EA&color=fff&size=200",
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
    bio: "Empowering 250+ principal partners.",
    image: "https://ui-avatars.com/api/?name=Divya+S&background=EC4899&color=fff&size=200",
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
    bio: "Architecting interactive daily quiz engines.",
    image: "https://ui-avatars.com/api/?name=Karthik+R&background=30B2E7&color=fff&size=200",
    variant: "professional",
    color: "#30B2E7",
    bg: "#E8F6FD",
    tag: "Technology"
  },
  {
    id: "ananya",
    name: "Ananya M.",
    role: "Senior Instructional Designer",
    category: "Design",
    bio: "Bringing QT mascot to life.",
    image: "https://ui-avatars.com/api/?name=Ananya+M&background=FDB913&color=fff&size=200",
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
    bio: "Designing high-octane team offsites.",
    image: "https://ui-avatars.com/api/?name=Vikram+P&background=75B543&color=fff&size=200",
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
              className="p-6 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-3 group cursor-pointer flex flex-col"
            >
              <div className="flex items-center justify-end">
                <div className="group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                  <QTMascot variant={founder.variant} size="md" />
                </div>
              </div>

              <div className="flex flex-col items-center justify-center py-2">
                <img src={founder.image} alt={founder.name} className="w-32 h-32 rounded-full object-cover shadow-md mb-2 border-4 border-white" />
                <h4 className="text-2xl font-black text-slate-900 font-heading group-hover:text-[#30B2E7] transition-colors text-center">{founder.name}</h4>
                <div className="text-xs font-bold text-slate-500 mt-1 font-heading text-center">{founder.role}</div>
              </div>

              <p className="text-slate-700 text-sm font-medium leading-relaxed text-center flex-grow">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Crew Section */}
      <div className="space-y-6 w-full">
        <div className="pb-2 border-b border-slate-200">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Quriosity Catalysts
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {CREW.map((member) => (
            <div 
              key={member.id}
              className="p-5 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-2 flex flex-col justify-between group cursor-pointer"
              style={{ backgroundColor: member.bg }}
            >
              <div className="space-y-2 flex-grow flex flex-col">
                <div className="flex items-center justify-end">
                  <div className="group-hover:scale-115 group-hover:-rotate-6 transition-transform duration-300">
                    <QTMascot variant={member.variant} size="sm" />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center pt-1 pb-1 flex-grow">
                  <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover shadow-sm mb-2 border-2 border-white" />
                  <h4 className="text-xl font-black text-slate-900 font-heading leading-tight group-hover:text-[#30B2E7] transition-colors text-center">{member.name}</h4>
                  <div className="text-xs font-bold text-slate-600 mt-1 font-heading text-center">{member.role}</div>
                </div>

                <p className="text-slate-700 text-xs font-medium leading-relaxed text-center">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

