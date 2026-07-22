import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import QTMascot from "@/components/mascot/QTMascot";
import Link from "next/link";
import { GraduationCap, Building2, School, Users, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export const metadata = {
  title: "Offerings & Services | QShala",
  description: "Explore QShala's curiosity services for Schools, Colleges, Corporates, Communities, and Custom Quiz Events."
};

const detailedServices = [
  { name: "Current Affairs & Storytelling", category: "Schools", desc: "Weekly engaging narratives turning world events into fascinating lessons.", variant: "reading" as const },
  { name: "Critical Thinking & Logic", category: "Schools", desc: "Socratic questioning modules and brain teasers for middle & high school.", variant: "sherlock" as const },
  { name: "Financial Literacy for Kids", category: "Schools", desc: "Fun budgeting games and money mindset workshops.", variant: "holding_money" as const },
  { name: "Public Speaking & Confidence", category: "Schools", desc: "Empowering young speakers through live stage quizzes.", variant: "quizzing" as const },
  { name: "Teacher Workshops", category: "Schools", desc: "Equipping educators with curiosity-based teaching toolkits.", variant: "professional" as const },
  { name: "Corporate Offsites & Trivia", category: "Companies", desc: "High-octane live quizzes driving cross-team camaraderie.", variant: "trophy" as const },
  { name: "College Campus Fests", category: "Colleges", desc: "Competitive trivia leagues and industry case simulations.", variant: "jumping" as const },
  { name: "Pub Quizzes & Neighborhood Fun", category: "Communities", desc: "Family-friendly weekend trivia pop-ups.", variant: "happy" as const },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF5]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-[#30B2E7] text-white font-black text-xs uppercase tracking-wider border border-black font-causten-black">
              Comprehensive Programs
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mt-3 font-causten-black">
              Curiosity Services Built for Impact.
            </h1>
            <p className="text-slate-700 text-lg mt-4 font-causten-body font-semibold">
              From classroom weekly clubs to mega corporate offsites and wedding pub quizzes, we design experiences that turn passive audiences into passionate participants.
            </p>
          </div>

          {/* Specific Quiz & Workshop Formats with QT Mascot SVG Assets */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center font-causten-black">Program Formats & Experiences</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {detailedServices.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#FFFDF5] border-2 border-black hover:bg-white transition-colors flex flex-col justify-between group shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-[#30B2E7] text-white font-black text-[10px] uppercase border border-black">{item.category}</span>
                      <QTMascot variant={item.variant} size="sm" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-1 font-causten-black">{item.name}</h3>
                    <p className="text-slate-700 text-xs leading-relaxed font-causten-body font-semibold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
