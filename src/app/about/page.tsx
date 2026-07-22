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
    <div className="min-h-screen flex flex-col bg-[#FFFDF5]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-[#FDB913] text-black font-black text-xs uppercase tracking-wider border border-black font-causten-black">
              Our Story & Philosophy
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mt-4 font-causten-black">
              We Believe <span className="text-[#30B2E7]">Curiosity</span> is the Greatest Superpower.
            </h1>
            <p className="text-slate-700 text-xl font-semibold mt-6 leading-relaxed font-causten-body">
              In a world obsessed with standard answers and test marks, QShala was born with one simple goal: <span className="text-[#75B543] font-black">&ldquo;Growth through Curiosity.&rdquo;</span>
            </p>
          </div>

          {/* QT Mascot Highlight with Official 'QT curious' SVG Asset */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="px-3.5 py-1.5 rounded-full bg-[#30B2E7] text-white font-black text-xs uppercase border border-black font-causten-black">
                Meet QT The Curious Cat
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 mb-4 font-causten-black">
                The Heartbeat of QShala.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed mb-4 font-causten-body font-medium">
                QT isn&apos;t just a mascot—QT represents every child and adult who refuses to stop asking &ldquo;Why?&rdquo;. Inspired by the letter &apos;Q&apos;, QT rolls, explores, and guides learners through mind-bending trivia, science puzzles, and real-life stories.
              </p>
              <div className="flex flex-col gap-2 text-sm font-black text-slate-800 font-causten-black">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#75B543]" /> 100% Non-corporate & Playful</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#30B2E7]" /> Loved by 400,000+ Kids across India</div>
              </div>
            </div>

            <div className="flex justify-center">
              <QTMascot variant="curious" size="xl" badgeText="Curiosity Champion!" />
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 rounded-2xl bg-[#30B2E7] text-white flex items-center justify-center font-bold text-xl mb-4 border border-black">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2 font-causten-black">Our Mission</h3>
              <p className="text-slate-700 text-sm leading-relaxed font-causten-body font-semibold">
                To replace rote learning with lifelong curiosity, fostering critical thinkers, confident speakers, and empathetic problem solvers.
              </p>
            </div>

            <div className="bg-[#FDB913] rounded-3xl p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-xl mb-4 border border-white">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2 font-causten-black">Our Culture</h3>
              <p className="text-slate-900 text-sm leading-relaxed font-causten-body font-semibold">
                Friendly, playful, energetic, and optimistic. We treat every question as a gateway to discovery.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-12 h-12 rounded-2xl bg-[#75B543] text-white flex items-center justify-center font-bold text-xl mb-4 border border-black">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2 font-causten-black">Our Reach</h3>
              <p className="text-slate-700 text-sm leading-relaxed font-causten-body font-semibold">
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
