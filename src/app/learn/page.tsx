import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import QTMascot from "@/components/mascot/QTMascot";
import Link from "next/link";
import { FEATURED_QUIZZES } from "@/lib/sanity.client";
import InteractiveQuizCard from "@/components/home/InteractiveQuizCard";
import { Sparkles, BookOpen, Download, Gamepad2, Compass } from "lucide-react";

export const metadata = {
  title: "Kids Corner & Learn | QShala",
  description: "Explore free daily quizzes, QShots, learning paths, downloadables, and quiz master guides for young curious minds."
};

export default function LearnPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFF]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-[#75B543]/20 text-[#75B543] font-black text-xs uppercase tracking-wider">
              🎮 Free Curiosity Playground
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mt-3">
              Kids Corner & <span className="text-[#75B543]">Learning Hub.</span>
            </h1>
            <p className="text-slate-600 text-lg mt-4">
              Explore bite-sized trivia, downloadable curiosity sheets, and brain benders curated by QShala Quiz Masters.
            </p>
          </div>

          {/* Daily Quiz Deck */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-slate-900 flex items-center gap-2">
                <Gamepad2 className="w-7 h-7 text-[#FDB913]" /> Featured Daily Quizzes
              </h2>
              <span className="text-xs font-bold text-slate-400">Updated Daily by QT</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FEATURED_QUIZZES.map((quiz) => (
                <InteractiveQuizCard key={quiz.id} quiz={quiz} />
              ))}
            </div>
          </div>

          {/* Learning Paths & Downloadables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel rounded-3xl p-8 border-2 border-emerald-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#75B543] text-white flex items-center justify-center font-bold text-xl mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Curiosity Learning Paths</h3>
              <p className="text-slate-600 text-sm mb-6">Structured 4-week thematic journeys covering Space Explorers, Money Basics, and Animal Superpowers.</p>
              <button className="px-6 py-3 rounded-full bg-[#75B543] text-white font-extrabold text-xs hover:bg-emerald-600 transition-colors">
                Start Learning Path →
              </button>
            </div>

            <div className="glass-panel rounded-3xl p-8 border-2 border-sky-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#30B2E7] text-white flex items-center justify-center font-bold text-xl mb-4">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Free Printable Worksheets</h3>
              <p className="text-slate-600 text-sm mb-6">Weekend family riddle sheets, crossword puzzles, and curiosity journaling templates.</p>
              <button className="px-6 py-3 rounded-full bg-[#30B2E7] text-white font-extrabold text-xs hover:bg-[#1C8CBF] transition-colors">
                Download PDF Pack →
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
