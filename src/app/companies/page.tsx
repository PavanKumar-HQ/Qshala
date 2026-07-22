import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import QTMascot from "@/components/mascot/QTMascot";
import Link from "next/link";
import { Building2, Users, Trophy, Sparkles, ArrowRight, Zap } from "lucide-react";

export const metadata = {
  title: "QShala for Corporates | High-Energy Team Trivia & Offsites",
  description: "Boost employee engagement, cross-team camaraderie, and townhall excitement with customized corporate trivia nights and offsites."
};

export default function CompaniesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFF]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Hero */}
          <div className="glass-panel-yellow rounded-3xl p-8 md:p-14 border border-amber-300 shadow-playful flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="px-4 py-1.5 rounded-full bg-[#FDB913] text-slate-900 font-black text-xs uppercase tracking-wider">
                HR & L&D Leaders
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mt-3">
                Unforgettable <span className="text-[#FDB913]">Corporate Trivia</span> & Offsite Experiences.
              </h1>
              <p className="text-slate-700 text-lg mt-4 leading-relaxed">
                Replace boring PowerPoint slides with thrilling, customized team trivia leagues, Friday desk pop-ups, and annual company championships.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book-a-quiz" className="px-7 py-3.5 rounded-full bg-[#FDB913] text-slate-900 font-extrabold shadow-lg hover:bg-amber-400 transition-all flex items-center gap-2">
                  <Zap className="w-4 h-4 text-slate-900" /> Plan Corporate Trivia Night
                </Link>
              </div>
            </div>

            <QTMascot size="xl" badgeText="Workplace Fun!" />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel rounded-3xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xl mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Annual Championship</h3>
              <p className="text-slate-600 text-sm">Multi-round internal trivia league for remote, hybrid, and on-site corporate teams.</p>
            </div>

            <div className="glass-panel rounded-3xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#30B2E7] flex items-center justify-center font-bold text-xl mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Townhall Icebreakers</h3>
              <p className="text-slate-600 text-sm">15-minute high-octane live quiz openers for company all-hands meetings.</p>
            </div>

            <div className="glass-panel rounded-3xl p-6 border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#75B543] flex items-center justify-center font-bold text-xl mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">Custom Brand Trivia</h3>
              <p className="text-slate-600 text-sm">Gamifying company history, product specs, and culture values in a fun format.</p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
