import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/sanity.client";
import { BookOpen, ArrowRight, User, Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Curiosity Magazine & Blog | QShala",
  description: "Read articles on pedagogy, parenting, critical thinking, corporate curiosity habits, and quiz master secrets."
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFF]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-[#30B2E7]/15 text-[#1C8CBF] font-black text-xs uppercase tracking-wider">
              📰 QShala Magazine
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mt-3">
              Stories & Insights on <br />
              <span className="text-[#30B2E7]">Active Learning.</span>
            </h1>
            <p className="text-slate-600 text-lg mt-4">
              Explore deep dives from our founders, educators, and content strategists.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="glass-panel rounded-3xl p-8 border border-slate-200 shadow-playful hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3.5 py-1 rounded-full bg-sky-100 text-[#30B2E7] font-black text-xs">{post.category}</span>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-black text-slate-900 mb-3 leading-snug hover:text-[#30B2E7] transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#FDB913] text-slate-900 font-extrabold text-xs flex items-center justify-center">
                      {post.author.avatar}
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-slate-900">{post.author.name}</div>
                      <div className="text-slate-400">{post.publishedAt}</div>
                    </div>
                  </div>

                  <span className="text-xs font-extrabold text-[#30B2E7] flex items-center gap-1 hover:underline cursor-pointer">
                    Read Story <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
