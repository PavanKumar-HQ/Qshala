import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import QTMascot from "@/components/mascot/QTMascot";
import Link from "next/link";
import { Sparkles, Heart, Smile } from "lucide-react";

export const metadata = {
  title: "Meet the Team | QShala",
  description: "Meet the founders, educators, quiz masters, and QT the curious cat who make QShala special."
};

const TEAM_MEMBERS = [
  { name: "Raghavan A.", role: "Co-Founder & Chief Curious Officer", bio: "10+ years designing curiosity experiences and quizzing for 400,000+ kids.", color: "border-sky-300 bg-sky-50/50" },
  { name: "Sachin Ravi", role: "Co-Founder & Master Storyteller", bio: "Passionate about turning complex global affairs into engaging stories for young minds.", color: "border-amber-300 bg-amber-50/50" },
  { name: "Priya Sundaram", role: "Head of Content & Pedagogy", bio: "Curates 365 daily questions that challenge children to ask 'Why?'.", color: "border-emerald-300 bg-emerald-50/50" },
  { name: "QT The Cat", role: "Chief Mascot & Curiosity Captain", bio: "Always curious, loves fish snacks, and hides surprise question marks across the website!", color: "border-purple-300 bg-purple-50/50" },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFF]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-[#30B2E7]/15 text-[#1C8CBF] font-black text-xs uppercase tracking-wider">
              👥 The Minds Behind QShala
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mt-3">
              Meet the <span className="text-[#30B2E7]">Curiosity Crew.</span>
            </h1>
            <p className="text-slate-600 text-lg mt-4">
              We are a team of quiz masters, educators, writers, and designers united by a love for wonder.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className={`glass-panel rounded-3xl p-6 border-2 ${member.color} shadow-playful hover:-translate-y-2 transition-all flex flex-col justify-between text-center group`}>
                <div>
                  <div className="w-24 h-24 rounded-full bg-white shadow-md mx-auto mb-4 flex items-center justify-center font-black text-2xl text-[#30B2E7] group-hover:scale-110 transition-transform">
                    {member.name === "QT The Cat" ? <QTMascot size="sm" badgeText="" /> : member.name.split(' ').map(n=>n[0]).join('')}
                  </div>

                  <h2 className="text-xl font-black text-slate-900 mb-1">{member.name}</h2>
                  <div className="text-xs font-bold text-[#30B2E7] uppercase mb-3">{member.role}</div>
                  <p className="text-slate-600 text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
