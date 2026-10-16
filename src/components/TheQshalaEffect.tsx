import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryPhoto {
  id: string;
  title: string;
  tag: string;
  category: 'School' | 'Corporate' | 'College';
  tagColor: string;
  image: string;
  aspect: string;
}

const CATEGORIES = ['All Moments', 'Schools', 'Corporate', 'Colleges'] as const;

const AUDIENCE_PHOTOS: GalleryPhoto[] = [
  {
    id: 'school-1',
    title: 'Auditorium buzzing with young quizzers jumping to answer',
    tag: 'Schools',
    category: 'School',
    tagColor: '#75B543',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'corporate-1',
    title: 'Cross-functional teams cheering during Friday live buzzer round',
    tag: 'Corporate',
    category: 'Corporate',
    tagColor: '#FDB913',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1 row-span-1'
  },
  {
    id: 'college-1',
    title: 'Campus festival championship with 1,000+ collegiate delegates',
    tag: 'Colleges',
    category: 'College',
    tagColor: '#30B2E7',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1 row-span-1'
  },
  {
    id: 'school-2',
    title: 'Curious hands raised in a Socratic storytelling classroom circle',
    tag: 'Schools',
    category: 'School',
    tagColor: '#75B543',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1 row-span-1'
  },
  {
    id: 'corporate-2',
    title: 'Leadership offsite trivia championship in full swing',
    tag: 'Corporate',
    category: 'Corporate',
    tagColor: '#FDB913',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1 row-span-1'
  }
];

export default function TheQshalaEffect() {
  const [selectedTag, setSelectedTag] = useState<string>('All Moments');

  const filteredPhotos = selectedTag === 'All Moments'
    ? AUDIENCE_PHOTOS
    : AUDIENCE_PHOTOS.filter((p) => p.tag === selectedTag);

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#30B2E7] text-white font-black text-xs uppercase tracking-wider font-heading shadow-sm">
            Live Moments
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading">
            The QShala Effect.
          </h2>
          <p className="text-slate-600 font-semibold text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Moments of electric energy, high-fives, and unbridled curiosity captured across schools, colleges, and corporate stages across India.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto scrollbar-none pb-2 px-1">
          {CATEGORIES.map((cat) => {
            const isActive = selectedTag === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedTag(cat)}
                className={`px-4 py-1.5 rounded-full font-black text-xs font-heading transition-all whitespace-nowrap cursor-pointer min-h-[36px] ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dynamic Curated Photo Gallery - Just Label Bubbles (No Titles) */}
        {selectedTag === 'All Moments' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          
          {/* Main Large Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-sm group min-h-[380px] md:min-h-[440px] flex flex-col justify-end"
          >
            <img
              src={AUDIENCE_PHOTOS[0].image}
              alt={AUDIENCE_PHOTOS[0].tag}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="relative z-10 p-6 md:p-8">
              <span 
                className="inline-block px-4 py-1.5 rounded-full text-white text-xs sm:text-sm font-black uppercase font-heading shadow-md"
                style={{ backgroundColor: AUDIENCE_PHOTOS[0].tagColor }}
              >
                {AUDIENCE_PHOTOS[0].tag}
              </span>
            </div>
          </motion.div>

          {/* Right Column Stack (2 cards) */}
          <div className="flex flex-col gap-6">
            {AUDIENCE_PHOTOS.slice(1, 3).map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * (idx + 1) }}
                className="relative rounded-3xl overflow-hidden shadow-sm group min-h-[200px] flex flex-col justify-end flex-1"
              >
                <img
                  src={photo.image}
                  alt={photo.tag}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="relative z-10 p-5">
                  <span 
                    className="inline-block px-3.5 py-1 rounded-full text-white text-xs font-black uppercase font-heading shadow-md"
                    style={{ backgroundColor: photo.tagColor }}
                  >
                    {photo.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row (2 Equal Width Cards) */}
          {AUDIENCE_PHOTOS.slice(3, 5).map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * (idx + 3) }}
              className={`relative rounded-3xl overflow-hidden shadow-sm group min-h-[220px] flex flex-col justify-end ${idx === 0 ? 'md:col-span-1' : 'md:col-span-2'}`}
            >
              <img
                src={photo.image}
                alt={photo.tag}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="relative z-10 p-5 md:p-6">
                <span 
                  className="inline-block px-3.5 py-1 rounded-full text-white text-xs font-black uppercase font-heading shadow-md"
                  style={{ backgroundColor: photo.tagColor }}
                >
                  {photo.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="relative rounded-3xl overflow-hidden shadow-sm group min-h-[260px] sm:min-h-[300px] flex flex-col justify-end"
            >
              <img
                src={photo.image}
                alt={photo.tag}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="relative z-10 p-5 md:p-6">
                <span 
                  className="inline-block px-3.5 py-1 rounded-full text-white text-xs font-black uppercase font-heading shadow-md"
                  style={{ backgroundColor: photo.tagColor }}
                >
                  {photo.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      </div>
    </section>
  );
}
