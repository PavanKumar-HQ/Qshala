import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import QTMascot from "@/components/mascot/QTMascot";
import Link from "next/link";
import { GraduationCap, Award, BookOpen, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export const metadata = {
  title: "QShala for Schools | K-12 Curiosity Curriculum & Quizzes",
  description: "Transform school general knowledge into active, high-energy curiosity clubs, current affairs storytelling, and inter-school competitions."
};

export default function SchoolsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF5]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Hero with Mikado School Typography */}
          <div className="glass-panel rounded-3xl p-8 md:p-14 border-2 border-black shadow-playful flex flex-col md:flex-row items-center justify-between gap-8 bg-white">
            <div className="max-w-2xl">
              <span className="px-4 py-1.5 rounded-full bg-[#30B2E7] text-white font-black text-xs uppercase tracking-wider border border-black font-mikado">
                🎓 Primary Font for Schools: Mikado
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mt-3 font-mikado leading-tight">
                Transform GK into the <span className="text-[#30B2E7]">Best Hour of the Week.</span>
              </h1>
              <p className="text-slate-700 text-lg mt-4 leading-relaxed font-causten-body font-semibold">
                QShala partners with progressive K-12 schools to run weekly curiosity clubs, financial literacy tracks, and national quiz championships that ignite critical thinking.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-a-quiz" className="px-7 py-3.5 rounded-full bg-[#30B2E7] text-white font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] border-2 border-black hover:bg-[#1C8CBF] transition-all flex items-center gap-2 font-mikado text-base">
                  <Sparkles className="w-5 h-5 text-[#FDB913]" /> Request School Demo
                </Link>
              </div>
            </div>

            <QTMascot size="xl" badgeText="School Champion!" />
          </div>

          {/* Core Modules */}
          <div>
            <h2 className="text-3xl font-black text-slate-900 text-center mb-10 font-mikado">Flagship School Modules</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel rounded-3xl p-6 border-2 border-black shadow-playful bg-white">
                <div className="w-12 h-12 rounded-2xl bg-[#30B2E7] text-white flex items-center justify-center font-bold text-xl mb-4 border border-black">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 font-mikado">Curiosity Club (Weekly)</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-causten-body">
                  Structured weekly sessions covering current affairs, space, history, ethics, and logic with interactive visual slides.
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-6 border-2 border-black shadow-playful bg-white">
                <div className="w-12 h-12 rounded-2xl bg-[#FDB913] text-black flex items-center justify-center font-bold text-xl mb-4 border border-black">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 font-mikado">Inter-School Quiz League</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-causten-body">
                  Annual high-energy live stage quiz fest where students represent their school against top institutions.
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-6 border-2 border-black shadow-playful bg-white">
                <div className="w-12 h-12 rounded-2xl bg-[#75B543] text-white flex items-center justify-center font-bold text-xl mb-4 border border-black">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 font-mikado">Teacher Empowerment</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-causten-body">
                  Interactive workshops teaching educators how to weave curiosity-based questions into daily curriculum.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
