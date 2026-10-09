import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, BookOpen } from 'lucide-react';

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  image: string;
  date: string;
  isEventReport?: boolean;
}

export interface EventReportItem {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
  coverImage: string;
  gallery: { url: string; caption: string }[];
}

const ARTICLES: BlogPost[] = [
  {
    slug: "why-rote-learning-kills-quriosity",
    title: "Why Rote Learning Kills Quriosity (And How to Fix It)",
    category: "Pedagogy",
    readTime: "5 min read",
    date: "Aug 1, 2026",
    summary: "Standard GK worksheets ask children to memorize facts without asking why. We explore socratic dialogue methods that unlock original thinking and question-framing.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "curious-dinner-table",
    title: "How to Build a 'Curious Dinner Table' for Your Kids",
    category: "Parenting",
    readTime: "4 min read",
    date: "July 28, 2026",
    summary: "Three simple question prompts and game mechanics that swap dinner screen time for active discussion, deep wonder, and family bonding.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "gamification-modern-corporate-learning",
    title: "Gamification: The Secret Weapon of Modern Corporate L&D",
    category: "Workplace Culture",
    readTime: "6 min read",
    date: "July 15, 2026",
    summary: "How leading companies and startups use live interactive buzzers and case-study trivia tournaments to boost cross-team connection and engagement.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "socratic-mindset-future-ready-kids",
    title: "How Socratic Questioning Builds Future-Ready Mindsets in Children",
    category: "Cognitive Growth",
    readTime: "5 min read",
    date: "Aug 5, 2026",
    summary: "In an era of instant answers, the skill of the 21st century is framing the right question. Learn how socratic loops build resilient problem solvers.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "ai-and-quriosity-asking-right-questions",
    title: "AI & Quriosity: Teaching Children How to Ask the Right Questions",
    category: "AI & Tech",
    readTime: "6 min read",
    date: "Aug 10, 2026",
    summary: "Large Language Models give immediate answers. Here is why prompt drafting and critical inquiry are the most important literacy skills for young minds.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "daily-news-quizzing-critical-thinking",
    title: "The Power of Daily News Quizzing for School Students",
    category: "Current Affairs",
    readTime: "4 min read",
    date: "July 10, 2026",
    summary: "How reading current events through interactive quiz questions turns passive headlines into active global awareness and civic reasoning.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop"
  }
];

const EVENT_REPORTS: EventReportItem[] = [
  {
    id: "bangalore-inter-school-quriosity-cup-2026",
    title: "Bangalore Inter-School Quriosity Cup 2026",
    location: "St. John's Auditorium, Koramangala, Bangalore",
    date: "July 2026",
    description: "Over 1,200 enthusiastic student quizzers representing 64 schools competed across 4 adrenaline-pumping buzzer rounds.",
    coverImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    gallery: [
      { url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop", caption: "Packed auditorium cheering as the finalists took the stage" },
      { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop", caption: "Team DPS East conferring during the socratic science round" },
      { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop", caption: "Quizmaster Sachin Ravi breaking down a trick history question" },
      { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop", caption: "Audience questions and parent spot trivia giveaways" },
      { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop", caption: "Trophy ceremony celebrating the 2026 championship winners" },
      { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop", caption: "Hands shooting up across the middle-school tier" },
      { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop", caption: "Scoreboard update before the high-stakes final buzzer round" },
      { url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop", caption: "Students celebrating with QT mascot stickers and certificates" },
      { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop", caption: "Principals and coordinators gathering for the closing keynote" },
      { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop", caption: "Group photo with 64 participating school teams" }
    ]
  },
  {
    id: "national-corporate-trivia-summit",
    title: "National Corporate Trivia League Finals",
    location: "JW Marriott, Bengaluru",
    date: "June 2026",
    description: "48 corporate teams from Flipkart, Google, Wipro, TCS, and Amazon competed in high-octane live buzzer trivia.",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    gallery: [
      { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop", caption: "Engineering and HR teams collaborating on rapid-fire business trivia" },
      { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop", caption: "Cross-functional laughter during the brand lore audio round" },
      { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop", caption: "Digital buzzers and live interactive leaderboard display" },
      { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop", caption: "Awards presented for best team chemistry and top trivia master" },
      { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop", caption: "Networking dinner and post-event discussions" },
      { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop", caption: "Team high-fives as the winning answer was locked in" },
      { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop", caption: "Sachin Ravi facilitating the rapid-fire championship clash" },
      { url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop", caption: "Audience participation round with over 300 spectators" },
      { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop", caption: "Celebrating corporate learning and psychological safety" },
      { url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop", caption: "All finalists gathering for the commemorative group snapshot" }
    ]
  }
];

export default function BlogShowcase() {
  const [activeTab, setActiveTab] = useState<'articles' | 'events'>('articles');
  
  // Lightbox State
  const [activeGallery, setActiveGallery] = useState<{ photos: { url: string; caption: string }[]; title: string } | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const openLightbox = (report: EventReportItem, startIdx: number = 0) => {
    setActiveGallery({ photos: report.gallery, title: report.title });
    setLightboxIndex(startIdx);
  };

  const closeLightbox = () => {
    setActiveGallery(null);
  };

  const nextPhoto = () => {
    if (!activeGallery) return;
    setLightboxIndex((prev) => (prev + 1) % activeGallery.photos.length);
  };

  const prevPhoto = () => {
    if (!activeGallery) return;
    setLightboxIndex((prev) => (prev - 1 + activeGallery.photos.length) % activeGallery.photos.length);
  };

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    if (!activeGallery) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGallery]);

  return (
    <div className="space-y-10 w-full">
      
      {/* Category Tabs: Articles vs Event Reports */}
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setActiveTab('articles')}
          className={`px-6 py-3 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider font-heading transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'articles'
              ? 'bg-[#30B2E7] text-white shadow-sm -translate-y-0.5'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Articles (SEO &amp; Insights)</span>
        </button>

        <button
          onClick={() => setActiveTab('events')}
          className={`px-6 py-3 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider font-heading transition-all cursor-pointer flex items-center gap-2 ${
            activeTab === 'events'
              ? 'bg-[#FDB913] text-slate-950 shadow-sm -translate-y-0.5'
              : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80'
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          <span>Event Reports &amp; Coverage</span>
        </button>
      </div>

      {/* ARTICLES TAB */}
      {activeTab === 'articles' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {ARTICLES.map((post) => (
            <article 
              key={post.slug}
              className="rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {post.image && (
                <a href={`/blog/${post.slug}`} className="block h-48 w-full overflow-hidden shrink-0 bg-slate-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                </a>
              )}
              
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-5">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-black uppercase text-slate-500 font-heading">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <a href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-black font-heading group-hover:text-[#30B2E7] transition-colors leading-snug text-slate-900 line-clamp-2">
                      {post.title}
                    </h3>
                  </a>

                  <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                {/* Shrunk to just "Read" as requested */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold">{post.date}</span>
                  <a
                    href={`/blog/${post.slug}`}
                    className="px-5 py-2 rounded-full bg-[#FDB913] hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider font-heading shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all inline-flex items-center gap-1.5"
                  >
                    <span>Read</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* EVENT REPORTS TAB WITH LIGHTBOX GALLERY */}
      {activeTab === 'events' && (
        <div className="space-y-12 w-full">
          {EVENT_REPORTS.map((report) => (
            <div 
              key={report.id}
              className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-sm space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full bg-[#FDB913] text-slate-950 text-xs font-black uppercase font-heading shadow-sm">
                    {report.date} • {report.location}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading pt-2">
                    {report.title}
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base font-semibold max-w-3xl leading-relaxed">
                    {report.description}
                  </p>
                </div>

                <button
                  onClick={() => openLightbox(report, 0)}
                  className="px-6 py-3 rounded-full bg-[#30B2E7] hover:bg-sky-500 text-white font-black text-xs uppercase tracking-wider font-heading shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all self-start md:self-center shrink-0 cursor-pointer flex items-center gap-2"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>View All {report.gallery.length} Photos</span>
                </button>
              </div>

              {/* Photo Preview Strip (5 thumbnail previews) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-2">
                {report.gallery.slice(0, 5).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => openLightbox(report, idx)}
                    className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 group cursor-pointer border border-slate-100 shadow-sm"
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-black font-heading uppercase tracking-wider bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm transition-opacity">
                        Enlarge
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between text-white max-w-6xl mx-auto w-full pt-2">
              <div className="space-y-0.5">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-heading">Event Gallery</span>
                <h3 className="text-lg sm:text-xl font-black font-heading truncate max-w-xl">{activeGallery.title}</h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Active Image View with Nav Arrows */}
            <div className="relative flex items-center justify-center flex-grow max-h-[75vh] my-4">
              <button
                onClick={prevPhoto}
                className="absolute left-2 sm:left-6 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all z-10 cursor-pointer"
                title="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="max-h-full max-w-4xl flex flex-col items-center"
              >
                <img
                  src={activeGallery.photos[lightboxIndex].url}
                  alt={activeGallery.photos[lightboxIndex].caption}
                  className="max-h-[65vh] w-auto object-contain rounded-2xl shadow-2xl"
                />
                <p className="text-slate-300 text-xs sm:text-sm font-medium mt-3 text-center px-4 max-w-2xl">
                  {activeGallery.photos[lightboxIndex].caption}
                </p>
              </motion.div>

              <button
                onClick={nextPhoto}
                className="absolute right-2 sm:right-6 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all z-10 cursor-pointer"
                title="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Thumbnail Strip */}
            <div className="max-w-4xl mx-auto w-full flex items-center justify-center gap-2 overflow-x-auto py-2">
              <span className="text-xs font-black text-slate-400 font-heading mr-3">
                {lightboxIndex + 1} / {activeGallery.photos.length}
              </span>
              {activeGallery.photos.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`w-12 h-12 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    lightboxIndex === idx ? 'border-[#30B2E7] scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={p.url} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
