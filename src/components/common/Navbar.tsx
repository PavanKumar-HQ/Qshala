'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, GraduationCap, Building2, BookOpen, Users, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-8 md:py-4 transition-all">
      <div className="max-w-7xl mx-auto bg-white/95 rounded-full px-6 py-2.5 flex items-center justify-between shadow-md border-2 border-black">
        
        {/* Official QShala SVG Logo Asset */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-36 h-10 flex items-center">
            <Image
              src="/assets/logos/QShala Logo 1.svg"
              alt="QShala Logo"
              width={140}
              height={40}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 font-black text-slate-900 text-sm font-causten-black">
          <Link href="/" className="hover:text-[#30B2E7] transition-colors">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#30B2E7] transition-colors">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesHovered(true)}
            onMouseLeave={() => setServicesHovered(false)}
          >
            <Link
              href="/services"
              className="flex items-center gap-1 hover:text-[#30B2E7] transition-colors py-2"
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesHovered ? 'rotate-180 text-[#30B2E7]' : ''}`} />
            </Link>

            <AnimatePresence>
              {servicesHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white rounded-3xl p-4 shadow-2xl border-2 border-black grid gap-2"
                >
                  <Link
                    href="/schools"
                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-[#30B2E7]/15 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#30B2E7] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 text-sm">For Schools</div>
                      <div className="text-xs text-slate-600 font-semibold font-causten-body">K-12 curiosity curriculum</div>
                    </div>
                  </Link>

                  <Link
                    href="/companies"
                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-[#FDB913]/15 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FDB913] text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 text-sm">For Corporates</div>
                      <div className="text-xs text-slate-600 font-semibold font-causten-body">Trivia offsites & engagement</div>
                    </div>
                  </Link>

                  <Link
                    href="/colleges"
                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-[#75B543]/15 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#75B543] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 text-sm">For Colleges</div>
                      <div className="text-xs text-slate-600 font-semibold font-causten-body">Campus leagues & fests</div>
                    </div>
                  </Link>

                  <Link
                    href="/communities"
                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-purple-100 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-extrabold text-slate-900 text-sm">Communities</div>
                      <div className="text-xs text-slate-600 font-semibold font-causten-body">Pub quizzes & family fun</div>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/learn" className="hover:text-[#30B2E7] transition-colors">
            Kids Corner & Learn
          </Link>

          <Link href="/case-studies" className="hover:text-[#30B2E7] transition-colors">
            Case Studies
          </Link>

          <Link href="/shop" className="hover:text-[#30B2E7] transition-colors flex items-center gap-1">
            <ShoppingBag className="w-4 h-4 text-[#FDB913]" /> Shop
          </Link>

          <Link href="/blog" className="hover:text-[#30B2E7] transition-colors">
            Blog
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/book-a-quiz"
            className="px-6 py-2.5 rounded-full bg-[#FDB913] hover:bg-amber-400 text-black font-black text-sm border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all font-causten-black"
          >
            Book a Quiz
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-full bg-slate-100 text-black focus:outline-none border-2 border-black"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-3 max-w-7xl mx-auto bg-white rounded-3xl p-6 shadow-2xl border-2 border-black overflow-hidden"
          >
            <div className="flex flex-col gap-4 font-black text-slate-900 font-causten-black">
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/schools" onClick={() => setIsOpen(false)}>QShala for Schools</Link>
              <Link href="/companies" onClick={() => setIsOpen(false)}>QShala for Corporates</Link>
              <Link href="/learn" onClick={() => setIsOpen(false)}>Kids Corner & Learn</Link>
              <Link href="/case-studies" onClick={() => setIsOpen(false)}>Case Studies</Link>
              <Link href="/shop" onClick={() => setIsOpen(false)}>Store</Link>
              <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              
              <Link
                href="/book-a-quiz"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center py-3 rounded-2xl bg-[#FDB913] text-black font-black border-2 border-black shadow-md"
              >
                Book a Quiz
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
