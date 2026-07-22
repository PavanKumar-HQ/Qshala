import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import QTMascot from "@/components/mascot/QTMascot";
import Link from "next/link";
import { Sparkles, Heart, Target, Award, Rocket, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | QShala - India's Curiosity Company",
  description: "Learn about QShala's mission to replace rote learning with curiosity across schools, corporates, and communities."
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFF]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-[#FDB913]/20 text-amber-800 font-black text-xs uppercase tracking-wider">
              Our Story & Philosophy
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mt-4">
              We Believe <span className="text-[#30B2E7]">Curiosity</span> is the Greatest Superpower.
            </h1>
            <p className="text-slate-600 text-xl font-medium mt-6 leading-relaxed">
              In a world obsessed with standard answers and test marks, QShala was born with one simple goal: <span className="text-[#75B543] font-bold">&ldquo;Growth through Curiosity.&rdquo;</span>
            </p>
          </div>

          {/* QT Mascot Highlight */}
          <div className="glass-panel rounded-3xl p-8 md:p-12 border-2 border-sky-100 shadow-playful grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="px-3.5 py-1.5 rounded-full bg-[#30B2E7] text-white font-extrabold text-xs uppercase">
                Meet QT The Curious Cat
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-4">
                The Heartbeat of QShala.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                QT isn&apos;t just a mascot—QT represents every child and adult who refuses to stop asking &ldquo;Why?&rdquo;. With twitching ears and endless wonder, QT guides learners through mind-bending trivia, science puzzles, and real-life stories.
              </p>
              <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-[#75B543]" /> 100% Non-corporate & Playful
                <CheckCircle2 className="w-5 h-5 text-[#30B2E7]" /> Loved by 400,000+ Kids
              </div>
            </div>

            <div className="flex justify-center">
              <QTMascot size="xl" badgeText="Curiosity Champion!" />
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#30B2E7] text-white flex items-center justify-center font-bold text-xl mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To replace rote learning with lifelong curiosity, fostering critical thinkers, confident speakers, and empathetic problem solvers.
              </p>
            </div>

            <div className="glass-panel-yellow rounded-3xl p-8 border border-amber-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#FDB913] text-slate-900 flex items-center justify-center font-bold text-xl mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Our Culture</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Friendly, playful, energetic, and optimistic. We treat every question as a gateway to discovery.
              </p>
            </div>

            <div className="glass-panel rounded-3xl p-8 border border-emerald-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#75B543] text-white flex items-center justify-center font-bold text-xl mb-4">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Our Reach</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Over 10 years, 3,600+ quizzes, 250+ schools, and 150+ corporate offsites across India and abroad.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
