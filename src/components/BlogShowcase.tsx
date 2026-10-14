import React from 'react';
import { Camera } from 'lucide-react';

export interface BlogPost {
  slug: string;
  title: string;
  category: 'Blog' | 'Events';
  readTime: string;
  summary: string;
  image: string;
  date: string;
  photoCount?: number;
}

const ALL_BLOG_POSTS: BlogPost[] = [
  {
    slug: "bangalore-inter-school-quriosity-cup-2026",
    title: "Bangalore Inter-School Quriosity Cup 2026",
    category: "Events",
    readTime: "Photo Gallery",
    date: "July 2026",
    summary: "Over 1,200 student quizzers representing 64 schools competed across 4 adrenaline-pumping buzzer rounds at St. John's Auditorium.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    photoCount: 10
  },
  {
    slug: "why-rote-learning-kills-quriosity",
    title: "Why Rote Learning Kills Quriosity (And How to Fix It)",
    category: "Blog",
    readTime: "5 min read",
    date: "Aug 1, 2026",
    summary: "Standard GK worksheets ask children to memorize facts without asking why. We explore socratic dialogue methods that unlock original thinking.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "curious-dinner-table",
    title: "How to Build a 'Curious Dinner Table' for Your Kids",
    category: "Blog",
    readTime: "4 min read",
    date: "July 28, 2026",
    summary: "Three simple question prompts and game mechanics that swap dinner screen time for active discussion, deep wonder, and family bonding.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "national-corporate-trivia-summit",
    title: "National Corporate Trivia League Finals",
    category: "Events",
    readTime: "Photo Gallery",
    date: "June 2026",
    summary: "48 corporate teams from Flipkart, Google, Wipro, TCS, and Amazon competed in high-octane live buzzer trivia at JW Marriott, Bengaluru.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    photoCount: 10
  },
  {
    slug: "gamification-modern-corporate-learning",
    title: "Gamification: The Secret Weapon of Modern Corporate L&D",
    category: "Blog",
    readTime: "6 min read",
    date: "July 15, 2026",
    summary: "How leading companies and startups use live interactive buzzers and case-study trivia tournaments to boost cross-team connection and engagement.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "socratic-mindset-future-ready-kids",
    title: "How Socratic Questioning Builds Future-Ready Mindsets in Children",
    category: "Blog",
    readTime: "5 min read",
    date: "Aug 5, 2026",
    summary: "In an era of instant answers, the skill of the 21st century is framing the right question. Learn how socratic loops build resilient problem solvers.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "ai-and-quriosity-asking-right-questions",
    title: "AI & Quriosity: Teaching Children How to Ask the Right Questions",
    category: "Blog",
    readTime: "6 min read",
    date: "Aug 10, 2026",
    summary: "Large Language Models give immediate answers. Here is why prompt drafting and critical inquiry are the most important literacy skills for young minds.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "daily-news-quizzing-critical-thinking",
    title: "The Power of Daily News Quizzing for School Students",
    category: "Blog",
    readTime: "4 min read",
    date: "July 10, 2026",
    summary: "How reading current events through interactive quiz questions turns passive headlines into active global awareness and civic reasoning.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop"
  }
];

export default function BlogShowcase() {
  return (
    <div className="w-full">
      {/* Unified Blog Grid (Strictly labeled Blog and Events) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {ALL_BLOG_POSTS.map((post) => {
          const isEvent = post.category === 'Events';

          return (
            <article 
              key={post.slug}
              className="rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {post.image && (
                <a href={`/blog/${post.slug}`} className="block h-48 w-full overflow-hidden shrink-0 bg-slate-100 relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                  {post.photoCount && (
                    <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-xs text-white text-[11px] font-black uppercase font-heading flex items-center gap-1.5 shadow-sm">
                      <Camera className="w-3.5 h-3.5 text-[#FDB913]" />
                      <span>{post.photoCount} Photos</span>
                    </span>
                  )}
                </a>
              )}
              
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-5">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-black uppercase font-heading">
                    {/* Strictly two labels: Blog or Events */}
                    <span 
                      className={`px-3 py-1 rounded-full text-[11px] font-black tracking-wider ${
                        isEvent 
                          ? 'bg-[#FDB913]/25 text-amber-900 border border-amber-300/60' 
                          : 'bg-[#30B2E7]/15 text-[#30B2E7] border border-sky-200/60'
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-slate-500 text-[11px] font-bold">{post.readTime}</span>
                  </div>

                  <a href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-black font-heading group-hover:text-[#30B2E7] transition-colors leading-snug text-slate-900 line-clamp-2">
                      {post.title}
                    </h2>
                  </a>

                  <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                {/* Read Button */}
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
          );
        })}
      </div>
    </div>
  );
}
