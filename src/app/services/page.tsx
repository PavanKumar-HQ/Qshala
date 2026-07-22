import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/sanity.client";
import { GraduationCap, Building2, School, Users, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export const metadata = {
  title: "Offerings & Services | QShala",
  description: "Explore QShala's curiosity services for Schools, Colleges, Corporates, Communities, and Custom Quiz Events."
};

const detailedServices = [
  { name: "Current Affairs & Storytelling", category: "Schools", desc: "Weekly engaging narratives turning world events into fascinating lessons." },
  { name: "Critical Thinking & Logic", category: "Schools", desc: "Socratic questioning modules and brain teasers for middle & high school." },
  { name: "Financial Literacy for Kids", category: "Schools", desc: "Fun budgeting games and money mindset workshops." },
  { name: "Public Speaking & Confidence", category: "Schools", desc: "Empowering young speakers through live stage quizzes." },
  { name: "Teacher Workshops", category: "Schools", desc: "Equipping educators with curiosity-based teaching toolkits." },
  { name: "Corporate Offsites & Trivia", category: "Companies", desc: "High-octane live quizzes driving cross-team camaraderie." },
  { name: "College Campus Fests", category: "Colleges", desc: "Competitive trivia leagues and industry case simulations." },
  { name: "Pub Quizzes & Neighborhood Fun", category: "Communities", desc: "Family-friendly weekend trivia pop-ups." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFF]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-[#30B2E7]/15 text-[#1C8CBF] font-black text-xs uppercase tracking-wider">
              Comprehensive Programs
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mt-3">
              Curiosity Services Built for Impact.
            </h1>
            <p className="text-slate-600 text-lg mt-4">
              From classroom weekly clubs to mega corporate offsites and wedding pub quizzes, we design experiences that turn passive audiences into passionate participants.
            </p>
          </div>

          {/* Main Target Audience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className="glass-panel rounded-3xl p-8 border-2 border-sky-100 shadow-playful hover:shadow-2xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                      {service.targetAudience}
                    </span>
                  </div>

                  <h2 className="text-3xl font-black text-slate-900 mb-2">{service.title}</h2>
                  <p className="text-slate-500 font-medium text-sm mb-4">{service.subtitle}</p>
                  <p className="text-slate-600 text-base leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-extrabold uppercase text-slate-400">Key Benefits:</div>
                    {service.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#75B543]" /> {b}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link href={`/${service.slug}`} className="px-6 py-3 rounded-full bg-[#30B2E7] text-white font-extrabold text-sm flex items-center gap-1 hover:bg-[#1C8CBF] transition-colors shadow">
                    Explore Dedicated Page <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/book-a-quiz" className="text-sm font-extrabold text-[#FDB913] hover:underline">
                    Book Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Service Modules Grid */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Specific Quiz & Workshop Formats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {detailedServices.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#30B2E7] transition-colors">
                  <span className="px-2.5 py-1 rounded-full bg-sky-100 text-[#30B2E7] font-black text-[10px] uppercase">{item.category}</span>
                  <h3 className="text-lg font-black text-slate-900 mt-2 mb-1">{item.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
