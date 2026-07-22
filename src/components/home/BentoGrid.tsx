'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, School, Users, ArrowUpRight } from 'lucide-react';

export default function BentoGrid() {
  const cards = [
    {
      type: 'schools',
      title: 'QShala for Schools',
      subtitle: 'K-12 Educational Institutions',
      desc: 'Replace passive memorization with active weekly curiosity clubs, current affairs storytelling, teacher empowerment workshops, and inter-school competitions.',
      pills: ['Weekly Curiosity Clubs', 'Financial Literacy', 'Design Thinking'],
      badge: '250+ Schools Active Across India',
      cta: 'Explore School Programs',
      href: '/schools',
      icon: GraduationCap,
      bg: 'bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      iconBg: 'bg-[#30B2E7] text-white',
      span: 'md:col-span-2'
    },
    {
      type: 'companies',
      title: 'QShala for Corporates',
      subtitle: 'Corporate L&D & HR',
      desc: 'High-octane team bonding, trivia nights, leadership offsites, and brand knowledge gamification.',
      cta: 'Corporate Offsites',
      href: '/companies',
      icon: Building2,
      bg: 'bg-[#FDB913] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      iconBg: 'bg-black text-[#FDB913]',
      span: ''
    },
    {
      type: 'colleges',
      title: 'QShala for Colleges',
      subtitle: 'Higher Education & Fests',
      desc: 'Campus fest quiz championships, employability challenges, and real-world case study simulations.',
      cta: 'Host Campus Fest',
      href: '/colleges',
      icon: School,
      bg: 'bg-[#75B543] text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      iconBg: 'bg-black text-[#75B543]',
      span: ''
    },
    {
      type: 'communities',
      title: 'QShala Communities & Pub Quizzes',
      subtitle: 'Neighborhoods & Families',
      desc: 'Bringing parents, kids, and friends together with weekend family game nights, pub quizzes, wedding trivia, and apartment complex leagues.',
      badge: 'Screen-free weekend fun',
      cta: 'Explore Community Events',
      href: '/communities',
      icon: Users,
      bg: 'bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      iconBg: 'bg-purple-600 text-white',
      span: 'md:col-span-2'
    }
  ];

  return (
    <section className="py-20 relative">
      
      {/* Curved organic Wave Divider Top */}
      <div className="w-full overflow-hidden leading-none mb-12">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-[#FFFDF5] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="px-4 py-1.5 rounded-full bg-[#30B2E7] text-white font-black text-xs uppercase tracking-wider border border-black">
            Curiosity Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mt-3 font-causten-black">
            Designed for Every Stage of Curiosity.
          </h2>
          <p className="text-slate-700 text-lg mt-3 font-causten-body font-semibold">
            Whether you are a school principal, HR director, campus fest head, or parent, QShala delivers active learning.
          </p>
        </motion.div>

        {/* Pattern B: Staggered Entrance Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={card.type}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6, rotate: idx % 2 === 0 ? 1 : -1 }}
                className={`${card.span} ${card.bg} rounded-3xl p-8 transition-all flex flex-col justify-between group`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-6 shadow-md border border-black`}>
                    <IconComp className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider opacity-80">{card.subtitle}</span>
                  <h3 className="text-3xl font-black mt-1 mb-3 font-causten-black">{card.title}</h3>
                  <p className="text-sm font-semibold opacity-90 leading-relaxed max-w-xl font-causten-body">
                    {card.desc}
                  </p>

                  {card.pills && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {card.pills.map((pill, pIdx) => (
                        <span key={pIdx} className="px-3 py-1 bg-slate-100 text-black font-bold text-xs rounded-full border border-black">
                          {pill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-black/20 flex items-center justify-between">
                  {card.badge ? <span className="text-xs font-black">{card.badge}</span> : <span />}
                  <Link href={card.href} className="px-5 py-2.5 rounded-full bg-black text-white font-black text-sm flex items-center gap-1 hover:bg-slate-800 transition-colors border border-white">
                    {card.cta} <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
