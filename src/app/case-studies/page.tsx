import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { CASE_STUDIES_DATA } from "@/lib/sanity.client";
import { ArrowUpRight, CheckCircle2, Trophy } from "lucide-react";

export const metadata = {
  title: "Case Studies | QShala Impact",
  description: "Read Apple-style storytelling case studies of how QShala transformed learning in schools, corporate teams, and institutions."
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFF]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-[#30B2E7]/15 text-[#1C8CBF] font-black text-xs uppercase tracking-wider">
              Apple-Style Storytelling
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mt-3">
              Curiosity in Action: <br />
              <span className="text-[#30B2E7]">Proven Outcomes.</span>
            </h1>
            <p className="text-slate-600 text-lg mt-4">
              Detailed breakdown of how our curiosity methodologies create measurable gains in engagement, retention, and confidence.
            </p>
          </div>

          {/* List of Case Studies */}
          <div className="space-y-12">
            {CASE_STUDIES_DATA.map((cs) => (
              <div key={cs.id} className="glass-panel rounded-3xl p-8 md:p-12 border-2 border-sky-100 shadow-playful grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3.5 py-1 bg-slate-900 text-white font-extrabold text-xs rounded-full">{cs.clientType}</span>
                    <span className="text-slate-500 font-bold text-sm">{cs.clientName}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">{cs.title}</h2>
                  <p className="text-slate-600 text-base leading-relaxed">{cs.summary}</p>
                  
                  <blockquote className="border-l-4 border-[#FDB913] pl-4 italic text-slate-700 font-medium py-2">
                    &ldquo;{cs.quote.text}&rdquo;
                    <footer className="text-xs text-slate-500 font-bold not-italic mt-1">— {cs.quote.author}, {cs.quote.role}</footer>
                  </blockquote>
                </div>

                <div className="bg-gradient-to-br from-sky-50 to-blue-100/70 p-6 rounded-2xl border border-sky-200 space-y-4">
                  <h3 className="text-xs font-black uppercase text-[#1C8CBF] tracking-wider">Key Metrics Achieved</h3>
                  <div className="space-y-3">
                    {cs.impactMetrics.map((m, idx) => (
                      <div key={idx} className="flex items-center justify-between border-b border-sky-200/60 pb-2">
                        <span className="text-xs font-bold text-slate-600">{m.label}</span>
                        <span className="text-2xl font-black text-[#30B2E7]">{m.value}</span>
                      </div>
                    ))}
                  </div>
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
