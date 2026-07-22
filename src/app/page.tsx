import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
import BentoGrid from "@/components/home/BentoGrid";
import StatsCounter from "@/components/home/StatsCounter";
import ScrollProgressBar from "@/components/common/ScrollProgressBar";
import CursorFollower from "@/components/common/CursorFollower";
import Link from "next/link";
import { CASE_STUDIES_DATA, PRODUCTS_DATA } from "@/lib/sanity.client";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF5]">
      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Interactive Cursor Follower */}
      <CursorFollower />

      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Parallax & Word Reveal */}
        <HeroSection />

        {/* Bento Grid Audiences with Staggered Scroll */}
        <BentoGrid />

        {/* Stats Counter with Live Count-Up */}
        <StatsCounter />

        {/* Case Studies Section */}
        <section className="py-20 bg-white border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="px-4 py-1.5 rounded-full bg-[#75B543] text-white font-black text-xs uppercase tracking-wider border border-black">
                  Real Impact
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-3 font-causten-black">
                  Apple-Style Storytelling Case Studies.
                </h2>
              </div>
              <Link href="/case-studies" className="mt-4 md:mt-0 text-sm font-black text-[#30B2E7] hover:underline flex items-center gap-1 font-causten-black">
                View All Case Studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CASE_STUDIES_DATA.map((cs) => (
                <div key={cs.id} className="bg-[#FFFDF5] rounded-3xl p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                  <span className="px-3 py-1 rounded-full bg-slate-900 text-white font-black text-xs">{cs.clientType} • {cs.clientName}</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-4 mb-3 leading-snug font-causten-black">{cs.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 font-causten-body font-semibold">{cs.summary}</p>
                  
                  <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-[#30B2E7]/15 border border-black mb-6">
                    {cs.impactMetrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl font-black text-[#30B2E7] font-causten-black">{m.value}</div>
                        <div className="text-[10px] font-black uppercase text-slate-700">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-[#FDB913] pl-4 text-xs italic text-slate-800 font-semibold py-1">
                    &ldquo;{cs.quote.text}&rdquo;
                    <footer className="text-slate-600 font-black not-italic mt-1">— {cs.quote.author}, {cs.quote.role}</footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Store Products */}
        <section className="py-20 bg-[#FFFDF5]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="px-4 py-1.5 rounded-full bg-[#FDB913] text-black font-black text-xs uppercase tracking-wider border border-black">
                QShala Curiosity Store
              </span>
              <h2 className="text-4xl font-black text-slate-900 mt-3 font-causten-black">Interactive Games, Books & Kits</h2>
              <p className="text-slate-700 text-base mt-2 font-causten-body font-semibold">Bring curiosity home with our handcrafted learning products.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS_DATA.map((product) => (
                <div key={product.id} className="bg-white rounded-3xl p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all flex flex-col justify-between group">
                  <div>
                    <div className={`h-40 rounded-2xl ${product.imageColor} flex items-center justify-center text-white font-black text-xl p-4 shadow-inner mb-4 relative`}>
                      {product.isPopular && (
                        <span className="absolute top-2 right-2 px-2.5 py-1 bg-black text-white font-black text-[10px] rounded-full border border-white">BESTSELLER</span>
                      )}
                      <span className="font-causten-black">{product.title.split(' ')[0]}</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#30B2E7]">{product.category}</span>
                    <h3 className="text-lg font-black text-slate-900 mt-1 line-clamp-1 font-causten-black">{product.title}</h3>
                    <p className="text-slate-600 text-xs mt-1 line-clamp-2 font-causten-body font-medium">{product.description}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-black/20 flex items-center justify-between">
                    <span className="text-lg font-black text-slate-900 font-causten-black">{product.price}</span>
                    <Link href="/shop" className="px-4 py-2 rounded-full bg-[#30B2E7] text-white font-black text-xs border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#1C8CBF] transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
