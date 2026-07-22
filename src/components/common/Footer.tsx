'use client';

import React from 'react';
import Link from 'next/link';
import QTMascot from '../mascot/QTMascot';
import { Mail, Phone, MapPin, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white rounded-t-[3rem] pt-20 pb-12 overflow-hidden mt-20 border-t-4 border-[#FDB913]">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Banner with Joy of Quest Yellow */}
        <div className="bg-[#FDB913] rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden border-2 border-slate-900">
          <div className="max-w-xl text-center md:text-left mb-6 md:mb-0">
            <span className="inline-block px-4 py-1.5 bg-slate-900 text-white rounded-full text-xs font-black uppercase tracking-wider mb-3">
              Joy of Quest
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Ready to replace rote learning with curiosity?
            </h2>
            <p className="text-slate-900 font-bold text-base mt-2">
              Book an interactive quiz session or workshop for your school, office, or community!
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <QTMascot variant="floating" size="lg" badgeText="Ask QT Anything!" />
            <Link
              href="/book-a-quiz"
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-full shadow-lg hover:scale-105 transition-all text-lg flex items-center gap-2 border-2 border-white"
            >
              Book a Quiz Experience <ArrowUpRight className="w-5 h-5 text-[#FDB913]" />
            </Link>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <QTMascot size="sm" badgeText="" />
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tight text-white font-mono">
                  QSHALA<span className="text-[#FDB913]">®</span>
                </span>
                <span className="text-[9px] font-extrabold text-[#30B2E7] tracking-wider uppercase">
                  Questions • Quriosity • Quests
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              QShala is India&apos;s curiosity learning platform that encourages creativity, curiosity, and compassion for school-going children, parents, and corporate teams.
            </p>
            <div className="flex items-center gap-4 text-slate-400 text-sm pt-2">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#30B2E7]" /> Bengaluru, India</span>
              <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-[#75B543]" /> +91 98765 43210</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#30B2E7]"></span> Offerings
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li><Link href="/schools" className="hover:text-[#30B2E7] transition-colors">For Schools & K-12</Link></li>
              <li><Link href="/companies" className="hover:text-[#FDB913] transition-colors">For Corporate Teams</Link></li>
              <li><Link href="/colleges" className="hover:text-[#75B543] transition-colors">For Colleges & Fests</Link></li>
              <li><Link href="/communities" className="hover:text-purple-400 transition-colors">Neighborhood Quizzes</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Custom Experiences</Link></li>
            </ul>
          </div>

          {/* Learn & Explore */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FDB913]"></span> Discover
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li><Link href="/learn" className="hover:text-[#FDB913] transition-colors">Kids Corner</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Free Downloadables</Link></li>
              <li><Link href="/case-studies" className="hover:text-[#30B2E7] transition-colors">Impact & Case Studies</Link></li>
              <li><Link href="/shop" className="hover:text-[#FDB913] transition-colors">Curiosity Store</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Magazine & Articles</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#75B543]"></span> Company
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">About Our Mission</Link></li>
              <li><Link href="/team" className="hover:text-[#30B2E7] transition-colors">Meet the Team</Link></li>
              <li><Link href="/careers" className="hover:text-[#75B543] transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-[#FDB913] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-4">
          <p>© {new Date().getFullYear()} QShala (Curiosita Educational Services). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for curious minds across the globe.
          </p>
        </div>

      </div>
    </footer>
  );
}
